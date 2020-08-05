import React, { Component } from 'react'

const FeedContext = React.createContext({
    thread: {},
    comments: [],
    error: null,
    setError: () => {},
    clearError: () => {},
})

export default FeedContext

