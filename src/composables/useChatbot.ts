import { ref } from 'vue'
import { projects } from '@/config/projects'
import { skills } from '@/config/skills'
import { education } from '@/config/education'
import { personalInfo, stats, interests } from '@/config/about'
import { testimonials } from '@/config/testimonials'
import { contactInfo, socialLinks } from '@/config/contact'
import { services, featuredProject, currentFocus } from '@/config/home'
import { siteConfig } from '@/config/site'

export interface ChatMessage {
  id: number
  role: 'user' | 'bot'
  text: string
  timestamp: Date
}

const knowledgeBase = {
  name: siteConfig.name,
  title: siteConfig.title,
  description: siteConfig.description,
  email: siteConfig.email,
  location: personalInfo.find(p => p.label === 'Location')?.value || 'Phnom Penh',
  birthday: personalInfo.find(p => p.label === 'Birthday')?.value || '25 Jan 2004',
  role: personalInfo.find(p => p.label === 'Role')?.value || 'Software Developer',
  status: personalInfo.find(p => p.label === 'Status')?.value || 'Single',
  yearsExperience: stats.find(s => s.label === 'Years Experience')?.value || '2+',
  projectsCompleted: stats.find(s => s.label === 'Projects Completed')?.value || '9+',
  happyClients: stats.find(s => s.label === 'Happy Clients')?.value || '10+',
  interests: interests.map(i => i.name),
  skills: skills.map(s => ({ name: s.name, level: s.level })),
  education: education.map(e => ({
    degree: e.degree,
    school: e.school,
    period: e.period,
    gpa: e.gpa,
    description: e.description
  })),
  projects: projects.map(p => ({
    title: p.title,
    description: p.description,
    techStack: p.techStack,
    features: p.features,
    startDate: p.startDate,
    endDate: p.endDate,
    githubUrl: p.githubUrl,
    liveUrl: p.liveUrl
  })),
  testimonials: testimonials.map(t => ({
    name: t.name,
    role: t.role,
    company: t.company,
    content: t.content,
    rating: t.rating
  })),
  contact: {
    email: contactInfo.find(c => c.label === 'Email')?.value || 'phanphoun855@gmail.com',
    phone: contactInfo.find(c => c.label === 'Phone')?.value || '+855713266899',
    location: contactInfo.find(c => c.label === 'Location')?.value || 'Phnom Penh, Cambodia'
  },
  social: socialLinks.map(s => ({ name: s.name, url: s.url })),
  services: services.map(s => ({ title: s.title, description: s.description, points: s.points })),
  featuredProject: {
    title: featuredProject.title,
    description: featuredProject.description,
    tech: featuredProject.tech,
    highlights: featuredProject.highlights,
    githubUrl: featuredProject.githubUrl,
    liveUrl: featuredProject.liveUrl
  },
  currentFocus: currentFocus
}

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim()
}

function containsAny(text: string, keywords: string[]): boolean {
  const normalized = normalize(text)
  return keywords.some(k => normalized.includes(normalize(k)))
}

function generateResponse(query: string): string {
  const q = normalize(query)

  // Greetings
  if (containsAny(query, ['hello', 'hi', 'hey', 'greetings', 'sup', 'yo'])) {
    return `Hello! I'm Phoun's AI assistant. I can tell you all about ${knowledgeBase.name} - his skills, projects, experience, education, and more. What would you like to know?`
  }

  // Who is Phoun / about
  if (containsAny(query, ['who', 'about', 'introduce', 'yourself', 'tell me about', 'who is phoun', 'who are you'])) {
    return `${knowledgeBase.name} is a ${knowledgeBase.role} based in ${knowledgeBase.location}. ${knowledgeBase.description} He has ${knowledgeBase.yearsExperience} years of experience and has completed ${knowledgeBase.projectsCompleted} projects. His interests include ${knowledgeBase.interests.join(', ')}.`
  }

  // Skills
  if (containsAny(query, ['skill', 'tech', 'technology', 'stack', 'programming language', 'framework', 'tool', 'know', 'can you do', 'expertise', 'good at'])) {
    const topSkills = knowledgeBase.skills
      .sort((a, b) => b.level - a.level)
      .slice(0, 5)
      .map(s => `${s.name} (${s.level}%)`)
      .join(', ')
    const allSkills = knowledgeBase.skills.map(s => s.name).join(', ')

    if (containsAny(query, ['top', 'best', 'strongest', 'highest'])) {
      return `Phoun's top skills are: ${topSkills}. He's particularly strong in HTML, CSS, Tailwind CSS, and GitHub with proficiency levels above 90%.`
    }
    if (containsAny(query, ['all', 'list', 'every'])) {
      return `Phoun's skills include: ${allSkills}. He continuously learns new technologies to stay current.`
    }
    // Check for specific skill
    for (const skill of knowledgeBase.skills) {
      if (q.includes(normalize(skill.name))) {
        return `Phoun has ${skill.level}% proficiency in ${skill.name}. He uses it actively in his projects and keeps improving.`
      }
    }
    return `Phoun has a diverse tech stack. His top skills include ${topSkills}. He also works with ${knowledgeBase.skills.slice(5, 10).map(s => s.name).join(', ')} and more. Ask about a specific technology for details!`
  }

  // Projects
  if (containsAny(query, ['project', 'portfolio', 'work', 'app', 'application', 'build', 'created', 'made', 'github'])) {
    // Check for specific project
    for (const project of knowledgeBase.projects) {
      if (q.includes(normalize(project.title))) {
        let response = `**${project.title}**: ${project.description}\n\n**Tech Stack:** ${project.techStack.join(', ')}\n\n**Key Features:**\n`
        project.features.forEach(f => response += `- ${f}\n`)
        if (project.githubUrl) response += `\n[GitHub](${project.githubUrl})`
        if (project.liveUrl) response += ` | [Live Demo](${project.liveUrl})`
        return response
      }
    }

    if (containsAny(query, ['all', 'list', 'every', 'how many'])) {
      const projectList = knowledgeBase.projects.map(p => `- **${p.title}** (${p.techStack.slice(0, 3).join(', ')})`).join('\n')
      return `Phoun has ${knowledgeBase.projects.length} projects:\n\n${projectList}\n\nAsk about any specific project for more details!`
    }

    if (containsAny(query, ['featured', 'best', 'favorite', 'main'])) {
      const fp = knowledgeBase.featuredProject
      return `Phoun's featured project is **${fp.title}**. ${fp.description}\n\nBuilt with: ${fp.tech.join(', ')}\n\nHighlights:\n${fp.highlights.map(h => `- ${h}`).join('\n')}\n\n[GitHub](${fp.githubUrl}) | [Live Demo](${fp.liveUrl})`
    }

    return `Phoun has worked on ${knowledgeBase.projects.length} projects including ${knowledgeBase.projects.slice(0, 3).map(p => p.title).join(', ')}, and more. Ask about a specific project or say "list all projects" to see everything!`
  }

  // Education
  if (containsAny(query, ['education', 'school', 'study', 'degree', 'university', 'college', 'learn', 'gpa', 'academic'])) {
    const edu = knowledgeBase.education
    let response = `Phoun's education background:\n\n`
    edu.forEach(e => {
      response += `**${e.degree}** at ${e.school} (${e.period})\n${e.gpa}\n${e.description}\n\n`
    })
    return response.trim()
  }

  // Experience / Work
  if (containsAny(query, ['experience', 'work', 'job', 'career', 'profession', 'company', 'pn cambodia', 'employ'])) {
    return `Phoun is currently studying and working at **PN Cambodia**. He has ${knowledgeBase.yearsExperience} years of experience as a ${knowledgeBase.role}. His current focus areas are:\n${knowledgeBase.currentFocus.map(f => `- ${f}`).join('\n')}`
  }

  // Contact
  if (containsAny(query, ['contact', 'email', 'phone', 'reach', 'message', 'call', 'hire', 'connect', 'linkedin', 'github', 'social'])) {
    let response = `You can reach Phoun through:\n\n`
    response += `- **Email:** ${knowledgeBase.contact.email}\n`
    response += `- **Phone:** ${knowledgeBase.contact.phone}\n`
    response += `- **Location:** ${knowledgeBase.contact.location}\n\n`
    response += `**Social Links:**\n`
    knowledgeBase.social.forEach(s => {
      response += `- [${s.name}](${s.url})\n`
    })
    return response.trim()
  }

  // Services
  if (containsAny(query, ['service', 'offer', 'provide', 'hire', 'freelance', 'what do you do', 'help with'])) {
    let response = `Phoun offers the following services:\n\n`
    knowledgeBase.services.forEach(s => {
      response += `**${s.title}**\n${s.description}\n${s.points.map(p => `- ${p}`).join('\n')}\n\n`
    })
    return response.trim()
  }

  // Testimonials
  if (containsAny(query, ['testimonial', 'review', 'feedback', 'client', 'colleague', 'recommend', 'people say'])) {
    let response = `Here's what people say about working with Phoun:\n\n`
    knowledgeBase.testimonials.forEach(t => {
      response += `"${t.content}"\n— **${t.name}**, ${t.role} at ${t.company} (${'⭐'.repeat(t.rating)})\n\n`
    })
    return response.trim()
  }

  // Personal info
  if (containsAny(query, ['birthday', 'birth', 'age', 'born', 'old', 'year'])) {
    return `Phoun was born on ${knowledgeBase.birthday}. He is currently ${new Date().getFullYear() - 2004} years old.`
  }

  if (containsAny(query, ['location', 'live', 'city', 'country', 'from', 'address'])) {
    return `Phoun is based in ${knowledgeBase.location}.`
  }

  if (containsAny(query, ['marital', 'married', 'single', 'relationship', 'status'])) {
    return `Phoun is currently ${knowledgeBase.status.toLowerCase()}.`
  }

  // Current focus
  if (containsAny(query, ['focus', 'learning', 'currently', 'now', 'recent', 'goal', 'aim', 'target'])) {
    return `Phoun is currently focused on:\n${knowledgeBase.currentFocus.map(f => `- ${f}`).join('\n')}`
  }

  // Stats
  if (containsAny(query, ['stat', 'number', 'count', 'how many', 'metric', 'achievement'])) {
    return `Here are Phoun's key stats:\n- ${knowledgeBase.yearsExperience} Years of Experience\n- ${knowledgeBase.projectsCompleted} Projects Completed\n- ${knowledgeBase.happyClients} Happy Clients\n- ${knowledgeBase.skills.length} Technologies Mastered`
  }

  // Bye
  if (containsAny(query, ['bye', 'goodbye', 'see you', 'later', 'thanks', 'thank you', 'appreciate'])) {
    return `You're welcome! Feel free to ask anything else about Phoun anytime. Have a great day! 🚀`
  }

  // Default fallback
  return `I can tell you about Phoun's skills, projects, education, work experience, testimonials, contact info, and services. What specifically would you like to know? Try asking:\n- "What are your skills?"\n- "Tell me about your projects"\n- "What is your education?"\n- "How can I contact you?"`
}

export function useChatbot() {
  const messages = ref<ChatMessage[]>([
    {
      id: 0,
      role: 'bot',
      text: `Hi there! 👋 I'm Phoun's AI assistant. Ask me anything about ${knowledgeBase.name} - his skills, projects, experience, or how to get in touch!`,
      timestamp: new Date()
    }
  ])
  const isOpen = ref(false)
  const isTyping = ref(false)
  let nextId = 1

  const sendMessage = async (text: string) => {
    if (!text.trim()) return

    messages.value.push({
      id: nextId++,
      role: 'user',
      text: text.trim(),
      timestamp: new Date()
    })

    isTyping.value = true

    // Simulate typing delay based on response length
    const response = generateResponse(text)
    const delay = Math.min(800 + response.length * 8, 2500)

    await new Promise(resolve => setTimeout(resolve, delay))

    messages.value.push({
      id: nextId++,
      role: 'bot',
      text: response,
      timestamp: new Date()
    })

    isTyping.value = false
  }

  const toggle = () => {
    isOpen.value = !isOpen.value
  }

  const close = () => {
    isOpen.value = false
  }

  const open = () => {
    isOpen.value = true
  }

  return {
    messages,
    isOpen,
    isTyping,
    sendMessage,
    toggle,
    close,
    open
  }
}
