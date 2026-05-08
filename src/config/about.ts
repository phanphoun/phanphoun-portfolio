import { projects } from './projects'

export type PersonalInfoItem = {
  label: string
  value: string
  icon: string
}

export const personalInfo: PersonalInfoItem[] = [
  { label: 'Birthday', value: '25 Jan 2004', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { label: 'Location', value: 'Phnom Penh', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
  { label: 'Status', value: 'Single', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0h' },
  { label: 'Role', value: 'Software Developer', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
]

export const stats = [
  { label: 'Years Experience', value: '2+', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', route: '/experience' },
  { label: 'Projects Completed', value: `${projects.length}+`, icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', route: '/projects' },
  { label: 'Happy Clients', value: '10+', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', route: '/testimonials' },
]

export const interests = [
  { name: 'Programming', icon: '💻' },
  { name: 'UI/UX Design', icon: '🎨' },
  { name: 'Databases', icon: '🗄️' },
  { name: 'DevOps', icon: '🚀' },
  { name: 'AI/ML', icon: '🤖' },
  { name: 'Cloud Computing', icon: '☁️' }
]

export const profileImages = [
  '/images/phounphan.png',
  '/images/sam.jpg',
  '/images/source.jpg',
  '/images/thine.jpg'
]

export const institution = {
  name : 'PN Cambodia',
  degree : 'Bachelor of Science in Computer Science',
  year : '2022 - 2024',
  url : 'https://www.passerellesnumeriques.org/what-we-do/cambodia/'
}

export const value = {
  efficiency: {
    title: 'Efficiency First',
    description: 'I strive to write clean, optimized code that delivers the best performance possible without compromising on readability.'
  },
  userCentric: {
    title: 'User-Centric',
    description: 'Every line of code I write is aimed at creating an intuitive and accessible experience for the end user.'
  },
  continuousLearning: {
    title: 'Continuous Learning',
    description: 'I believe in staying up-to-date with the latest technologies and best practices to deliver the best possible solutions.'
  }
}