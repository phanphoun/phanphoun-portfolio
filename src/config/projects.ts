export interface Project {
  id: number
  title: string
  description: string
  fullDescription: string
  techStack: string[]
  features: string[]
  startDate: string
  endDate: string
  githubUrl: string
  liveUrl?: string
  gradient: string
  image?: string
  imageAlt?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Football Field Booking App',
    description: 'Modern Football Field Platform with role-based booking, chat, real-time alerts, and payment integration.',
    fullDescription: 'A comprehensive football field booking platform designed for players, captains, field owners, and administrators. Players can find other teams and request to join, view schedules, and find fields. Captains can approve requests, invite members, create teams, and make bookings. Field owners can list fields, approve bookings, and set pricing per hour. Admins have full access to approve account upgrades and manage users.',
    techStack: ['Node.js', 'Express', 'React', 'Tailwind CSS', 'MySQL'],
    features: [
      'User authentication',
      'Account upgrade (player -> captain -> field owner)',
      'Real-time chat',
      'Real-time alerts',
      'Booking system',
      'Payment integration'
    ],
    startDate: 'January 2024',
    endDate: 'April 2024',
    githubUrl: 'https://github.com/phanphoun/Football-Field-Booking-App',
    liveUrl: 'https://finall-vc1.vercel.app/',
    gradient: 'from-green-500 to-emerald-700',
    image: 'https://www.smarther.co/wp-content/uploads/2025/10/Sports-and-Turf-Booking-App-Development.webp',
    imageAlt: 'Football field booking application'
  },
  {
    id: 2,
    title: 'Student Management System',
    description: 'Full-stack educational management platform with role-based access control and advanced reporting.',
    fullDescription: 'A comprehensive full-stack educational management platform built for institutions to manage students, teachers, courses, enrollments, and grades. Features advanced role-based access control with JWT authentication. Includes full CRUD operations, CSV export capabilities, advanced search and filtering, OpenAPI/Swagger documentation, and a comprehensive test suite.',
    techStack: ['Django 5', 'React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'SQLite/PostgreSQL'],
    features: [
      'JWT Authentication with access & refresh tokens',
      'Role-based access control (Admin, Teacher, Student)',
      'Full CRUD operations',
      'CSV export for students and grades',
      'Advanced search, filtering, and pagination',
      'OpenAPI/Swagger documentation',
      'Comprehensive test suite with pytest',
      'Modern UI with custom CSS animations'
    ],
    startDate: 'October 2024',
    endDate: 'December 2024',
    githubUrl: 'https://github.com/phanphoun/student-management-system',
    gradient: 'from-blue-500 to-indigo-700',
    image: 'https://i.ytimg.com/vi/nOyAeCc0n94/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAf2a_2BcEFsz-51lOdtF5vKHVW8g',
    imageAlt: 'Student management system dashboard'
  },
  {
    id: 3,
    title: 'Dev Review Dashboard',
    description: 'Interactive dashboard for tracking code review findings, vulnerabilities, and improvement recommendations.',
    fullDescription: 'An interactive, searchable dashboard designed for development teams to efficiently track, filter, and manage code review findings. Provides a developer-focused interface for managing vulnerabilities and tracking improvement recommendations across projects.',
    techStack: ['TypeScript', 'Modern UI Framework'],
    features: [
      'Track code review findings',
      'Filter and search capabilities',
      'Manage vulnerabilities',
      'Improvement recommendations',
      'Developer-focused interface'
    ],
    startDate: 'August 2024',
    endDate: 'September 2024',
    githubUrl: 'https://github.com/phanphoun/dev-review-dashboard',
    gradient: 'from-purple-500 to-violet-700',
    image: 'https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fgs4ckco8y7pnb02ed6xw.png',
    imageAlt: 'Code review dashboard interface'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Personal portfolio showcasing projects and skills with modern design and smooth interactions.',
    fullDescription: 'A personal portfolio website built to showcase my projects, skills, and experience. Features a responsive design with a sidebar navigation, smooth transitions, and a modern dark theme aesthetic.',
    techStack: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
    features: [
      'Responsive design',
      'Sidebar navigation',
      'Smooth transitions',
      'Modern dark theme',
      'Project showcase with detail modals'
    ],
    startDate: 'March 2025',
    endDate: 'Present',
    githubUrl: 'https://github.com/phanphoun/portfolio',
    liveUrl: 'https://portfolio-afavapc9o-phanphounpncstudents.vercel.app/',
    gradient: 'from-orange-500 to-red-700',
    image: '/images/portfolio.png',
    imageAlt: 'Portfolio website showcase'
  }
]
