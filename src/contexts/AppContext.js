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
      postings: [],
      singlePosting: {},
      categories: [],
      comments: [],
      // activeTab: this.props.children[0].props.label,
    }

    const jwtPayload = TokenService.parseAuthToken()

    if (jwtPayload)
      state.user = {
        userId: jwtPayload.userId,
        email: jwtPayload.email,
        user_name: jwtPayload.sub,
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

  handleGetThreads = () => {
    CategoryService.getCategories()
    .then(categories => {
      this.setState({
        categories
      })

      ThreadsApiService.getThreads()
      .then(threads => {
          this.setThreads(threads);
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
    this.setState({ postings })
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
      setPostings: this.setPostings
    }
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
