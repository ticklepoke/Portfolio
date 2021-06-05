import React from 'react';
import { Helmet } from 'react-helmet';

interface _Props {
	title: string;
	description: string;
}

export default function HelmetWrapper(props: _Props) {
	return (
		<Helmet>
			<title>{props.title}</title>
			<meta name="description" content={props.description} />
		</Helmet>
	);
}
