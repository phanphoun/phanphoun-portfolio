export interface Skill {
  name: string
  bg: string
  border: string
  icon: string
  iconClass?: string
  level: number
}

export const skills: Skill[] = [
  {
    name: 'HTML',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    level: 95
  },
  {
    name: 'CSS',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    level: 90
  },
  {
    name: 'JAVASCRIPT',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/30',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    level: 88
  },
  {
    name: 'REACT JS',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/30',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    level: 85
  },
  {
    name: 'NODE JS',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    level: 82
  },
  {
    name: 'GITHUB',
    bg: 'bg-gray-200/10',
    border: 'border-gray-200/30',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    iconClass: 'invert',
    level: 92
  },
  {
    name: 'TAILWIND CSS',
    bg: 'bg-sky-400/10',
    border: 'border-sky-400/30',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    level: 95
  },
  {
    name: 'MONGO DB',
    bg: 'bg-green-600/10',
    border: 'border-green-600/30',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    level: 78
  },
  {
    name: 'PYTHON',
    bg: 'bg-yellow-300/10',
    border: 'border-yellow-300/30',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    level: 80
  },
  {
    name: 'NEXT JS',
    bg: 'bg-white/10',
    border: 'border-white/30',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    iconClass: 'invert',
    level: 84
  },
  {
    name: 'FIGMA',
    bg: 'bg-pink-400/10',
    border: 'border-pink-400/30',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
    level: 85
  },
  {
    name: 'FLUTTER',
    bg: 'bg-cyan-300/10',
    border: 'border-cyan-300/30',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
    level: 75
  },
]
