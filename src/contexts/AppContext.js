import React, { Component } from 'react'
import AuthApiService from '../Services/auth-api-service'
import TokenService from '../Services/token-service'
import IdleService from '../Services/idle-service'
import CategoryService from '../Services/category-api-service'
import ThreadsApiService from '../Services/threads-api-service'
// import CategoryService from '../Services/category-api-service'

const AppContext = React.createContext({
  user: {},
  error: null,
  searchTerm: '',
  thread: {},
  categories: [],
  threads: [],
  comments: [],
  postings: [],
  singlePosting: {},
  setCategories: () => { },
  setPostings: () => { },
  setThreads: () => { },
  setError: () => { },
  clearError: () => { },
  setUser: () => { },
  processLogin: () => { },
  processLogout: () => { },
})

export default AppContext

export class AppProvider extends Component {
  constructor(props) {
    super(props)
    const state = {
      user: {},
      error: null,
      threads: [],
      fullThreads: [],
      postings: [],
      fullPostings: [],
      singlePosting: {},
      categories: [],
      comments: [],
      applicants: [],
      loading: true,
      showPostOverlay: false,
      // activeTab: this.props.children[0].props.label,
    }

    const jwtPayload = TokenService.parseAuthToken()

    if (jwtPayload)
      state.user = {
        userId: jwtPayload.userId,
        email: jwtPayload.email,
        user_name: jwtPayload.sub,
        intro: jwtPayload.intro,
        profile_pic: jwtPayload.profile_pic,
        endorsements: jwtPayload.endorsements
      }

    this.state = state;
    IdleService.setIdleCallback(this.logoutBecauseIdle)
  }

  componentDidMount() {
    CategoryService.getCategories()
      .then(categories => {
        this.setState({
          categories
        })
      })
  }

  componentWillUnmount() {
    IdleService.unRegisterIdleResets()
    TokenService.clearCallbackBeforeExpiry()
  }

  setUserInfo = (user) => {
    this.setState({
      user
    })
  }

  modifyUserIntro = (bool) => {
    let newUser = {
      ...this.state.user,
      intro: bool,
    }
    this.setState({
      user: newUser
    })
  }

  toggleOverlay = () => {
    this.setState({
      showPostOverlay: !this.state.showPostOverlay
    })
  }

  setLoading = (loading) => {
    this.setState({
      loading
    })
  }

  setComments = (comments) => {
    this.setState({
      comments
    })
  }

  deleteComment = (id) => {
    let newComments = this.state.comments.filter(comment => comment.id !== id);

    this.setState({
      comments: newComments
    })
  }

  addComment = (comment) => {
    let newComments = [...this.state.comments, comment];
    this.setState({
      comments: newComments
    })
  }

  addApplicant = (applicant) => {
    let newApplicants = [...this.state.applicants, applicant]
    this.setState({
      applicants: newApplicants
    })
  }

  setApplicants = (applicants) => {
    this.setState({
      applicants
    })
  }

  setSinglePosting = (item) => {
    this.setState({
      singlePosting: item
    })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setUser = user => {
    this.setState({ user })
  }

  setCategories = categories => {
    this.setState({ categories })
  }

  setThreads = threads => {
    let newThreads = threads.map(thread => {
      let threadCategory = this.state.categories.find(item => item.id === thread.category)

      const newThread = {
        ...thread,
        category: threadCategory.name
      }

      return newThread
    })
    this.setState({ threads: newThreads })
  }

  setSearchThreads = threads => {
    this.setState({
      threads
    })
  }

  handleGetThreads = () => {
    CategoryService.getCategories()
      .then(categories => {
        this.setState({
          categories
        })

        ThreadsApiService.getThreads()
          .then(threads => {
            let newThreads = threads.map(thread => {
              let threadCategory = this.state.categories.find(item => item.id === thread.category)

              const newThread = {
                ...thread,
                category: threadCategory.name
              }

              return newThread
            })
            this.setThreads(threads);
            this.setState({
              fullThreads: newThreads
            })
          })
      })
  }

  addThread = (thread) => {
    const newThreads = [...this.state.threads, thread];

    this.setState({
      threads: newThreads
    })
  }

  setPostings = postings => {
    this.setState({ 
      postings,
      fullPostings: postings 
    })
  }

  setSearchPostings = postings => {
    this.setState({
      postings
    })
  }

  addPosting = posting => {
    const newPostings = [...this.state.postings, posting]
    this.setState({ postings: newPostings })
  }

  processLogin = authToken => {
    TokenService.saveAuthToken(authToken)
    const jwtPayload = TokenService.parseAuthToken()
    this.setUser({
      userId: jwtPayload.userId,
      email: jwtPayload.email,
      user_name: jwtPayload.sub,
    })
    IdleService.regiserIdleTimerResets()
    TokenService.queueCallbackBeforeExpiry(() => {
      this.fetchRefreshToken()
    })
  }

  processLogout = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    this.setUser({})
  }

  logoutBecauseIdle = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
    this.setUser({ idle: true })
  }

  fetchRefreshToken = () => {
    AuthApiService.refreshToken()
      .then(res => {
        TokenService.saveAuthToken(res.authToken)
        TokenService.queueCallbackBeforeExpiry(() => {
          this.fetchRefreshToken()
        })
      })
      .catch(err => {
        this.setError(err)
      })
  }

  render() {
    const value = {
      ...this.state,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      processLogin: this.processLogin,
      processLogout: this.processLogout,
      setCategories: this.setCategories,
      setSinglePosting: this.setSinglePosting,
      setThreads: this.setThreads,
      addThread: this.addThread,
      handleGetThreads: this.handleGetThreads,
      setComments: this.setComments,
      addComment: this.addComment,
      deleteComment: this.deleteComment,
      addPosting: this.addPosting,
      setPostings: this.setPostings,
      setLoading: this.setLoading,
      setSearchThreads: this.setSearchThreads,
      setSearchPostings: this.setSearchPostings,
      addApplicant: this.addApplicant,
      setApplicants: this.setApplicants,
      toggleOverlay: this.toggleOverlay,
      modifyUserIntro: this.modifyUserIntro,
      setUserInfo: this.setUserInfo,
    }
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
