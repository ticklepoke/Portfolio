export const experiences: Experience[] = [
  {
    title: 'Resync Technologies',
    date: 'Summer 2020',
    description:
      'SG Innovate Summation Apprentice. Fullstack work on Angular and NodeJS.'
  },
  {
    title: 'Ziliqa Developer Bootcamp',
    date: 'Spring 2020',
    description:
      'Awarded Blockchain developer scholarship by Tribe Accelerator. Learnt about developing smart contracts on Ziliqa protocol.'
  },
  {
    title: 'DBS Bank',
    date: 'Summer 2019',
    description:
      'UNI.CORN+ Tech Internship. Web development work with ReactJS, NodeJS, Docker for banking customers.'
  },
  {
    title: 'Lumin(ai)re',
    date: 'Spring 2019',
    description: 'Database work with MySQL to capture image metadata.'
  },
  {
    title: 'Jones Lang Lasalle Property Consultants',
    date: 'Summer 2018',
    description: 'Interned with Engineering Operations Solutions.'
  },
  {
    title: 'Singapore Armed Forces',
    date: '2016 - 2017',
    description:
      'Commissioned as an infantry Lieutenant and trained as a reconnaissance scout.'
  }
]

interface Experience {
  title: string
  date: string
  description: string
}
