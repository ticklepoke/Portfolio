import React from 'react';
import { Link } from 'react-router-dom';
import HelmetWrapper from '../common/HelmetWrapper';
import Toggle, { ToggleThemeProps } from '../components/ToggleTheme';
import * as inlineHomeData from '../_data/InlineHome.json';

import './InlineHome.css';

const EXCLUDED_FILE_TYPE = ['Batchfile'];

interface InlineHomeData {
	titleBar: {
		name: {
			en: string;
			cn: string;
		};
		links: { title: string; body: string; href: string }[];
	};
	about: string[];
	work: {
		company: string;
		title: string;
		period: string;
		description: string;
		technologies: { title: string; icon: string }[];
	}[];
	project: {
		title: string;
		description: string;
		tags: string[];
		languages: { title: string; logo: string }[];
		github: string;
		stars: number;
	}[];
	education: {
		category: string;
		courses: {
			code: string;
			title: string;
		}[];
	}[];
	weekends: string[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { titleBar, about, work, project, education, weekends } = (inlineHomeData as any).default as InlineHomeData;

function InlineHome({ theme, toggleTheme }: ToggleThemeProps) {
	return (
		<>
			<HelmetWrapper
				title="Home | Nigel Lee"
				description="Computer Science student from Singapore, actively looking for software internships. Renaissance Engineering Program Student."
			/>
			<div className="m-3" style={{ minHeight: 'calc(100vh - 70px)', maxWidth: '1920px' }}>
				<div className="d-md-flex d-sm-block justify-content-between">
					<div>
						<h1>
							{titleBar.name.en}
							&nbsp;&nbsp;
							{titleBar.name.cn}
						</h1>
						<h5>
							{titleBar.links.map(({ title, href, body }, idx) => (
								<>
									{title}: <a href={href}>{body}</a>
									{idx !== titleBar.links.length - 1 && '\t|\t'}
								</>
							))}
						</h5>
					</div>
					<Toggle theme={theme} toggleTheme={toggleTheme} />
				</div>
				<hr />
				<div className="my-2">
					{about.map((line) => (
						<p key={line} dangerouslySetInnerHTML={{ __html: line }} />
					))}
				</div>
				<hr />
				<h3>Work Experience</h3>
				<ul>
					{work.map(({ company, title, period, description, technologies }) => (
						<li key={company} className="mt-3 mb-4">
							<h5>
								<b>{company}</b>&nbsp;&nbsp;-&nbsp;&nbsp;{title}
							</h5>
							<h5>{period}</h5>
							<p>{description}</p>
							<span>
								Technologies Used:{' '}
								{technologies.map(({ title, icon }) => (
									<img
										key={title}
										className={'tech-icon mx-1 ' + (theme === 'light' && 'grayscale')}
										src={require('../assets/icons/' + icon)}
										title={title}
										alt={title}
									/>
								))}
							</span>
						</li>
					))}
				</ul>
				<hr />
				<h3>Projects</h3>
				<ul>
					{project.map(({ title, description, tags, languages, github, stars }) => (
						<li key={title} className="mt3 mb-4">
							<h5>
								<b>{title}</b>
							</h5>
							{tags.map((tag) => (
								<span
									className={`badge rounded-pill mx-1 ${
										theme === 'dark' ? 'bg-primary text-dark' : 'bg-dark text-light'
									}`}
									key={tag}>
									{tag}
								</span>
							))}
							<p className="my-2">{description}</p>
							{languages
								.filter((lang) => !EXCLUDED_FILE_TYPE.includes(lang.title))
								.map(({ title, logo }) => (
									<img
										className={`tech-icon mx-1 ${theme === 'light' && 'grayscale'}`}
										src={require('../assets/icons/' + logo)}
										alt={title}
										title={title}
										key={title}
									/>
								))}
							<span>&nbsp;&nbsp;&nbsp;|&nbsp;</span>
							<a href={github} title="Github Repository">
								<img
									className="tech-icon mx-2"
									alt="Github"
									src={
										theme === 'dark'
											? require('../assets/icons/github-white.png')
											: require('../assets/icons/github-black.png')
									}
								/>
							</a>
							<span>&nbsp;|&nbsp;</span>
							<img
								className="star-icon ml-2 mr-1"
								alt="Github Stars"
								src={
									theme === 'dark'
										? require('../assets/icons/star-white.png')
										: require('../assets/icons/star-black.png')
								}
							/>
							<span>
								<b>{stars}</b>
							</span>
						</li>
					))}
				</ul>
				<hr />
				<h3>Education</h3>
				<p className="text-muted">An extensive list of courses I have taken during my university education.</p>
				{education.map(({ category, courses }) => (
					<div key={category}>
						<h6>
							<b>{category}</b>
						</h6>
						<ul>
							{courses.map(({ code, title }) => (
								<li key={code}>
									<span>
										<b>{code}</b>: {title}
									</span>
								</li>
							))}
						</ul>
					</div>
				))}
				<hr />
				<h3>Weekends</h3>
				{weekends.map((w) => (
					<p key={1}>{w}</p>
				))}
			</div>
			<div style={{ minHeight: '70px' }} className="m-3">
				<hr />
				<span className="text-muted">
					The old site has been deprecated. Visit it <Link to="/depr">here.</Link>
				</span>
			</div>
		</>
	);
}

export default InlineHome;
