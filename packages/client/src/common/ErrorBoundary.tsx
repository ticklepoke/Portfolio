import React, { Component, ErrorInfo } from 'react'

export class ErrorBoundary extends Component<any, any> {
  constructor (props: any) {
    super(props)
    this.state = {
      error: null
    }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    this.setState({ error })
    console.error(error, errorInfo)
  }

  render () {
    if (this.state.error) {
      return <h1>Something went wrong</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary
