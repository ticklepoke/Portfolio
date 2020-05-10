export const projects: Project[] = [
  {
    title: 'finance-math',
    details: 'An NPM library for financial calculations.',
    urls: [
      {
        domain: 'NPM',
        url: 'https://npm.im/finance-math'
      },
      {
        domain: 'Github',
        url: 'https://github.com/ticklepoke/finance-math'
      }
    ]
  },
  {
    title: 'ShareX',
    details:
      'An information catalogue for accounting entities to share documents. Built for Accounting Innovation Challenge 2019.',
    urls: [
      {
        domain: 'Github',
        url: 'https://github.com/ticklepoke/Accouting-Hack-2019'
      }
    ]
  },
  {
    title: 'CheckIT',
    details:
      'Android mobile app built with React Native which calls select machine learning API endpoints.',
    urls: [
      {
        domain: 'Github',
        url: 'https://github.com/ticklepoke/checkit'
      }
    ]
  }
]

interface Project {
  title: string
  details: string
  urls: Url[]
}

export interface Url {
  domain: string
  url: string
}
