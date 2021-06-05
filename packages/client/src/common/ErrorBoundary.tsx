import React, { Component, ErrorInfo } from 'react';

interface ErrorBoundaryState {
	error?: Error;
}

type ErrorBoundaryProps = {
	children?: JSX.Element | JSX.Element[];
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = {
			error: undefined,
		};
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		this.setState({ error });
		console.error(error, errorInfo);
	}

	render() {
		if (this.state.error) {
			return <h1>Something went wrong</h1>;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
