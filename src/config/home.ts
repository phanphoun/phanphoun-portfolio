export interface Stat {
  label: string
  value: string
}

export interface FloatingIcon {
  name: string
  src: string
  class: string
}

export interface Service {
  title: string
  description: string
  points: string[]
}

export interface FeaturedProject {
  title: string
  description: string
  tech: string[]
  highlights: string[]
  githubUrl: string
  liveUrl?: string
}

export const stats: Stat[] = [
  { value: '1+', label: 'Years Of Experience' },
  { value: '8+', label: 'Projects Complete' },
  { value: '99%', label: 'Client Satisfaction' },
]

export const floatingIcons: FloatingIcon[] = [
  {
    name: 'Vue',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
    class: 'icon-pos-1',
  },
  {
    name: 'TypeScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    class: 'icon-pos-2',
  },
  {
    name: 'Tailwind',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    class: 'icon-pos-3',
  },
  {
    name: 'Node',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    class: 'icon-pos-4',
  },
  {
    name: 'Python',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    class: 'icon-pos-5',
  },
]

export const credibilityBadges = [
  'Role-Based Access',
  'JWT Auth',
  'Real-time Chat/Alerts',
  'REST APIs',
  'MySQL / PostgreSQL',
]

export const services: Service[] = [
  {
    title: 'Frontend Development',
    description: 'Modern, responsive interfaces with clean components and smooth interactions.',
    points: ['Vue / React UI', 'Tailwind styling', 'Animations & UX polish'],
  },
  {
    title: 'Backend & APIs',
    description: 'Secure APIs and business logic designed for real products and real users.',
    points: ['Node/Express, Django', 'JWT auth flows', 'CRUD + pagination + filters'],
  },
  {
    title: 'Full-stack Delivery',
    description: 'From idea to deployment: I ship complete features with maintainable code.',
    points: ['Database design', 'Integrations', 'Testing & documentation'],
  },
]

export const featuredProject: FeaturedProject = {
  title: 'Football Field Booking App',
  description:
    'Modern football field platform with role-based booking, chat, real-time alerts, and payment integration.',
  tech: ['Node.js', 'Express', 'React', 'Tailwind CSS', 'MySQL'],
  highlights: [
    'Role-based accounts (Player, Captain, Field Owner, Admin)',
    'Real-time chat and alerts for bookings and team updates',
    'Booking system with pricing and payment integration',
  ],
  githubUrl: 'https://github.com/phanphoun/Football-Field-Booking-App',
  liveUrl: 'https://finall-vc1.vercel.app/',
}

export const currentFocus = [
  'Clean Architecture & maintainable code',
  'API Security (JWT, validation, permissions)',
  'UI/UX polish with micro-interactions',
]
