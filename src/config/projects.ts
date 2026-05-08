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
    techStack: ['Django 5', 'React 18', 'Tailwind CSS', 'MySQL'],
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
  },
  {
    id: 5,
    title: 'Express MySQL MVC',
    description: 'Backend project implementing MVC architecture with Express.js and MySQL database.',
    fullDescription: 'A structured backend application built with Express.js following the Model-View-Controller (MVC) architectural pattern. Integrates with MySQL for data persistence and provides a clean separation of concerns for scalable application development.',
    techStack: ['Node.js', 'Express.js', 'MySQL', 'MVC Architecture'],
    features: [
      'MVC architectural pattern',
      'MySQL database integration',
      'RESTful API endpoints',
      'Modular code structure',
      'Database connection pooling'
    ],
    startDate: 'November 2023',
    endDate: 'December 2023',
    githubUrl: 'https://github.com/phanphoun/express-mysql-mvc',
    gradient: 'from-cyan-500 to-blue-700',
    image: '/images/express.png',
    imageAlt: 'Express MySQL MVC architecture'
  },
  {
    id: 6,
    title: 'OOP TypeScript',
    description: 'Object-Oriented Programming examples and patterns implemented in TypeScript.',
    fullDescription: 'A comprehensive collection of Object-Oriented Programming concepts and design patterns implemented in TypeScript. Demonstrates practical applications of classes, inheritance, polymorphism, encapsulation, and common design patterns to write clean, maintainable code.',
    techStack: ['TypeScript', 'OOP Patterns', 'Design Patterns'],
    features: [
      'Class inheritance and polymorphism',
      'Design pattern implementations',
      'Encapsulation and abstraction',
      'Type-safe OOP practices',
      'Real-world use case examples'
    ],
    startDate: 'September 2023',
    endDate: 'October 2023',
    githubUrl: 'https://github.com/phanphoun/oop-typescript',
    gradient: 'from-pink-500 to-rose-700',
    image: '/images/oop typescript.png',
    imageAlt: 'OOP TypeScript examples'
  },
  {
    id: 7,
    title: 'REST API',
    description: 'RESTful API implementation with best practices and standard HTTP methods.',
    fullDescription: 'A well-structured REST API implementation following industry best practices. Includes proper HTTP methods usage, status codes, error handling, request validation, and authentication. Designed to be consumed by frontend applications or mobile apps.',
    techStack: ['Node.js', 'Express.js', 'REST Architecture', 'JSON'],
    features: [
      'RESTful endpoints design',
      'HTTP methods (GET, POST, PUT, DELETE)',
      'Proper status codes',
      'Request validation',
      'Error handling middleware',
      'API documentation'
    ],
    startDate: 'August 2023',
    endDate: 'September 2023',
    githubUrl: 'https://github.com/phanphoun/REST-API',
    gradient: 'from-teal-500 to-cyan-700',
    image: '/images/rest api.png',
    imageAlt: 'REST API architecture'
  },
  {
    id: 8,
    title: 'Express Auth',
    description: 'Authentication system with Express.js featuring JWT tokens and secure password handling.',
    fullDescription: 'A complete authentication solution built with Express.js. Implements user registration, login, password hashing with bcrypt, JWT token generation and validation, refresh tokens, and protected routes. Follows security best practices for user authentication.',
    techStack: ['Node.js', 'Express.js', 'JWT', 'bcrypt', 'Security'],
    features: [
      'User registration and login',
      'JWT access and refresh tokens',
      'Secure password hashing with bcrypt',
      'Protected route middleware',
      'Token validation',
      'Session management'
    ],
    startDate: 'July 2023',
    endDate: 'August 2023',
    githubUrl: 'https://github.com/phanphoun/express-auth',
    gradient: 'from-amber-500 to-orange-700',
    image: '/images/express auth.png',
    imageAlt: 'Express authentication system'
  },
  {
    id: 9,
    title: 'Khmer Dev Platform',
    description: 'Development platform supporting Khmer developers with resources and community features.',
    fullDescription: 'A platform designed to support and empower Khmer developers in their learning journey. Provides educational resources, coding challenges, community forums, and tools to help developers improve their skills and connect with other developers in the Khmer tech community.',
    techStack: ['Web Technologies', 'Community Platform'],
    features: [
      'Educational resources',
      'Coding challenges',
      'Community forums',
      'Developer profiles',
      'Learning paths',
      'Khmer language support'
    ],
    startDate: 'June 2024',
    endDate: 'July 2024',
    githubUrl: 'https://github.com/phanphoun/khmer-dev-platform',
    gradient: 'from-yellow-500 to-amber-700',
    image: '/images/khmer dev.png',
    imageAlt: 'Khmer developer platform'
  }
]
