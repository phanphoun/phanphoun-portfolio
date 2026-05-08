import { ref } from 'vue'
import { GoogleGenerativeAI } from '@google/generative-ai'
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

// ============================================
// KNOWLEDGE BASE (for rule-based fallback)
// ============================================
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
  projectsCompleted: stats.find(s => s.label === 'Projects Completed')?.value || `${projects.length}+`,
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

// ============================================
// SYSTEM PROMPT FOR GEMINI AI
// ============================================
function buildSystemPrompt(): string {
  const skillList = knowledgeBase.skills.map(s => `${s.name}: ${s.level}%`).join('\n')
  const projectList = knowledgeBase.projects.map(p =>
    `- ${p.title}\n  Description: ${p.description}\n  Tech: ${p.techStack.join(', ')}\n  Period: ${p.startDate} - ${p.endDate}\n  Features: ${p.features.join(', ')}`
  ).join('\n\n')
  const eduList = knowledgeBase.education.map(e =>
    `- ${e.degree} at ${e.school}\n  Period: ${e.period}\n  ${e.gpa}\n  ${e.description}`
  ).join('\n\n')
  const testimonialList = knowledgeBase.testimonials.map(t =>
    `- ${t.name} (${t.role} at ${t.company}, ${'⭐'.repeat(t.rating)}): "${t.content}"`
  ).join('\n')
  const socialList = knowledgeBase.social.map(s => `- ${s.name}: ${s.url}`).join('\n')
  const serviceList = knowledgeBase.services.map(s =>
    `- ${s.title}: ${s.description}\n  Includes: ${s.points.join(', ')}`
  ).join('\n\n')

  return `You are an AI assistant for ${knowledgeBase.name}'s personal portfolio website. You know EVERYTHING about him and answer visitor questions in a friendly, professional tone.

## ABOUT PHOUN
- Name: ${knowledgeBase.name}
- Role: ${knowledgeBase.role}
- Location: ${knowledgeBase.location}
- Birthday: ${knowledgeBase.birthday}
- Status: ${knowledgeBase.status}
- Bio: ${knowledgeBase.description}

## STATS
- Years of Experience: ${knowledgeBase.yearsExperience}
- Projects Completed: ${knowledgeBase.projectsCompleted}
- Happy Clients: ${knowledgeBase.happyClients}

## SKILLS (with proficiency)
${skillList}

## PROJECTS
${projectList}

## EDUCATION
${eduList}

## SERVICES OFFERED
${serviceList}

## TESTIMONIALS
${testimonialList}

## CONTACT
- Email: ${knowledgeBase.contact.email}
- Phone: ${knowledgeBase.contact.phone}
- Location: ${knowledgeBase.contact.location}

## SOCIAL LINKS
${socialList}

## CURRENT FOCUS
${knowledgeBase.currentFocus.map(f => `- ${f}`).join('\n')}

## INTERESTS
${knowledgeBase.interests.join(', ')}

## INSTRUCTIONS
- Use Phoun's portfolio data as your PRIMARY knowledge. When asked about him, ALWAYS answer from this data.
- For general knowledge questions (coding help, tech explanations, how-to guides, etc.), you may use your own knowledge freely.
- If someone asks about Phoun and the answer isn't in this data, say you don't have that specific information and suggest contacting Phoun directly at ${knowledgeBase.contact.email}.
- Keep responses concise but informative (2-4 sentences for simple questions).
- Use markdown formatting for lists and emphasis.
- Be warm and professional.
- If asked about a specific skill, mention the proficiency level.
- If asked about a specific project, include its tech stack and key features.
- Always end with an offer to help with something else.`
}

// ============================================
// RULE-BASED FALLBACK (used when no API key)
// ============================================
function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim()
}

function words(text: string): string[] {
  return normalize(text).split(/\s+/).filter(w => w.length > 0)
}

function containsWord(text: string, keyword: string): boolean {
  return words(text).includes(normalize(keyword))
}

function containsAnyWord(text: string, keywords: string[]): boolean {
  const ws = words(text)
  const nt = normalize(text)
  return keywords.some(k => {
    const nk = normalize(k)
    // Single word: exact word match (prevents "his" matching "hi")
    if (!nk.includes(' ')) {
      return ws.includes(nk)
    }
    // Multi-word phrase: substring match
    return nt.includes(nk)
  })
}

function containsPhrase(text: string, phrase: string): boolean {
  return normalize(text).includes(normalize(phrase))
}

// Detects if query is asking about Phoun specifically
function isAboutPhoun(text: string): boolean {
  const phounKeywords = ['phoun', 'phan', 'you', 'your', 'him', 'his', 'portfolio', 'developer', 'engineer']
  return phounKeywords.some(k => words(text).includes(k) || normalize(text).includes(k))
}

function generateRuleBasedResponse(query: string): string {
  const q = normalize(query)
  const ws = words(query)

  // Greetings - require exact word match
  if (containsAnyWord(query, ['hello', 'hey', 'greetings', 'sup', 'yo'])) {
    return `Hello! 👋 I'm Phoun's AI assistant. I know everything about him — his skills, projects, education, experience, and more. What would you like to know?`
  }
  if (ws.length === 1 && containsWord(query, 'hi')) {
    return `Hi there! 👋 I'm Phoun's AI assistant. Ask me anything about him — skills, projects, education, or how to get in touch!`
  }

  // Who is Phoun / about
  const hasAboutKeyword = containsAnyWord(query, ['who', 'introduce', 'yourself']) ||
                          containsPhrase(query, 'tell me about') ||
                          (containsWord(query, 'about') && isAboutPhoun(query))
  if (hasAboutKeyword) {
    return `${knowledgeBase.name} is a ${knowledgeBase.role} based in ${knowledgeBase.location}. ${knowledgeBase.description} He has ${knowledgeBase.yearsExperience} years of experience and has completed ${knowledgeBase.projectsCompleted} projects. His interests include ${knowledgeBase.interests.join(', ')}.`
  }

  // Skills
  if (containsAnyWord(query, ['skill', 'tech', 'technology', 'stack', 'framework', 'tool', 'know', 'expertise', 'good at', 'proficient'])) {
    const topSkills = knowledgeBase.skills
      .sort((a, b) => b.level - a.level)
      .slice(0, 5)
      .map(s => `${s.name} (${s.level}%)`)
      .join(', ')
    const allSkills = knowledgeBase.skills.map(s => s.name).join(', ')

    if (containsAnyWord(query, ['top', 'best', 'strongest', 'highest'])) {
      return `Phoun's top skills are: ${topSkills}. He's particularly strong in HTML, CSS, Tailwind CSS, and GitHub with proficiency levels above 90%.`
    }
    if (containsAnyWord(query, ['all', 'list', 'every'])) {
      return `Phoun's skills include: ${allSkills}. He continuously learns new technologies to stay current.`
    }
    // Check for specific skill
    for (const skill of knowledgeBase.skills) {
      if (ws.includes(normalize(skill.name))) {
        return `Phoun has ${skill.level}% proficiency in ${skill.name}. He uses it actively in his projects and keeps improving.`
      }
    }
    return `Phoun has a diverse tech stack. His top skills include ${topSkills}. He also works with ${knowledgeBase.skills.slice(5, 10).map(s => s.name).join(', ')} and more. Ask about a specific technology for details!`
  }

  // Projects
  if (containsAnyWord(query, ['project', 'portfolio', 'work', 'app', 'application', 'build', 'created', 'made', 'github'])) {
    // Check for specific project
    for (const project of knowledgeBase.projects) {
      if (ws.some(w => normalize(project.title).includes(w) && w.length > 2)) {
        let response = `**${project.title}**: ${project.description}\n\n**Tech Stack:** ${project.techStack.join(', ')}\n\n**Key Features:**\n`
        project.features.forEach(f => response += `- ${f}\n`)
        if (project.githubUrl) response += `\n[GitHub](${project.githubUrl})`
        if (project.liveUrl) response += ` | [Live Demo](${project.liveUrl})`
        return response
      }
    }

    if (containsAnyWord(query, ['all', 'list', 'every', 'how many', 'each', 'detail', 'describe', 'explain', 'show me'])) {
      const projectDetails = knowledgeBase.projects.map((p, i) =>
        `**${i + 1}. ${p.title}**\n` +
        `   ${p.description}\n` +
        `   Tech: ${p.techStack.join(', ')}\n` +
        `   Period: ${p.startDate} - ${p.endDate}` +
        (p.githubUrl ? ` | [GitHub](${p.githubUrl})` : '') +
        (p.liveUrl ? ` | [Live](${p.liveUrl})` : '')
      ).join('\n\n')
      return `Phoun has ${knowledgeBase.projects.length} projects:\n\n${projectDetails}\n\nWant to know more about any specific project? Just ask!`
    }

    if (containsAnyWord(query, ['featured', 'best', 'favorite', 'main'])) {
      const fp = knowledgeBase.featuredProject
      return `Phoun's featured project is **${fp.title}**. ${fp.description}\n\nBuilt with: ${fp.tech.join(', ')}\n\nHighlights:\n${fp.highlights.map(h => `- ${h}`).join('\n')}\n\n[GitHub](${fp.githubUrl}) | [Live Demo](${fp.liveUrl})`
    }

    return `Phoun has worked on ${knowledgeBase.projects.length} projects including ${knowledgeBase.projects.slice(0, 3).map(p => p.title).join(', ')}, and more. Ask about a specific project or say "list all projects" to see everything!`
  }

  // Education
  if (containsAnyWord(query, ['education', 'school', 'study', 'degree', 'university', 'college', 'learn', 'gpa', 'academic'])) {
    const edu = knowledgeBase.education
    let response = `Phoun's education background:\n\n`
    edu.forEach(e => {
      response += `**${e.degree}** at ${e.school} (${e.period})\n${e.gpa}\n${e.description}\n\n`
    })
    return response.trim()
  }

  // Experience / Work
  if (containsAnyWord(query, ['experience', 'work', 'job', 'career', 'profession', 'company', 'employ'])) {
    return `Phoun is currently studying and working at **PN Cambodia**. He has ${knowledgeBase.yearsExperience} years of experience as a ${knowledgeBase.role}. His current focus areas are:\n${knowledgeBase.currentFocus.map(f => `- ${f}`).join('\n')}`
  }

  // Contact
  if (containsAnyWord(query, ['contact', 'email', 'phone', 'reach', 'message', 'call', 'hire', 'connect', 'linkedin', 'github', 'social'])) {
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
  if (containsAnyWord(query, ['service', 'offer', 'provide', 'freelance', 'what do you do', 'help with'])) {
    let response = `Phoun offers the following services:\n\n`
    knowledgeBase.services.forEach(s => {
      response += `**${s.title}**\n${s.description}\n${s.points.map(p => `- ${p}`).join('\n')}\n\n`
    })
    return response.trim()
  }

  // Testimonials
  if (containsAnyWord(query, ['testimonial', 'review', 'feedback', 'client', 'colleague', 'recommend', 'people say'])) {
    let response = `Here's what people say about working with Phoun:\n\n`
    knowledgeBase.testimonials.forEach(t => {
      response += `"${t.content}"\n— **${t.name}**, ${t.role} at ${t.company} (${'⭐'.repeat(t.rating)})\n\n`
    })
    return response.trim()
  }

  // Personal info
  if (containsAnyWord(query, ['birthday', 'birth', 'age', 'born', 'old', 'year'])) {
    return `Phoun was born on ${knowledgeBase.birthday}. He is currently ${new Date().getFullYear() - 2004} years old.`
  }

  if (containsAnyWord(query, ['location', 'live', 'city', 'country', 'from', 'address'])) {
    return `Phoun is based in ${knowledgeBase.location}.`
  }

  if (containsAnyWord(query, ['marital', 'married', 'single', 'relationship', 'status'])) {
    return `Phoun is currently ${knowledgeBase.status.toLowerCase()}.`
  }

  // Current focus
  if (containsAnyWord(query, ['focus', 'learning', 'currently', 'now', 'recent', 'goal', 'aim', 'target'])) {
    return `Phoun is currently focused on:\n${knowledgeBase.currentFocus.map(f => `- ${f}`).join('\n')}`
  }

  // Stats
  if (containsAnyWord(query, ['stat', 'number', 'count', 'how many', 'metric', 'achievement'])) {
    return `Here are Phoun's key stats:\n- ${knowledgeBase.yearsExperience} Years of Experience\n- ${knowledgeBase.projectsCompleted} Projects Completed\n- ${knowledgeBase.happyClients} Happy Clients\n- ${knowledgeBase.skills.length} Technologies Mastered`
  }

  // Bye
  if (containsAnyWord(query, ['bye', 'goodbye', 'see you', 'later', 'thanks', 'thank you', 'appreciate'])) {
    return `You're welcome! Feel free to ask anything else about Phoun anytime. Have a great day! 🚀`
  }

  // Default fallback
  return `I can tell you about Phoun's skills, projects, education, work experience, testimonials, contact info, and services. What specifically would you like to know? Try asking:\n- "What are your skills?"\n- "Tell me about your projects"\n- "What is your education?"\n- "How can I contact you?"`
}

// ============================================
// GEMINI AI INTEGRATION
// ============================================
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || ''
let genAI: GoogleGenerativeAI | null = null
let model: any = null

if (API_KEY) {
  try {
    genAI = new GoogleGenerativeAI(API_KEY)
    model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash',
      systemInstruction: buildSystemPrompt()
    })
  } catch (e) {
    console.error('Failed to initialize Gemini:', e)
  }
}

export function useChatbot() {
  const messages = ref<ChatMessage[]>([
    {
      id: 0,
      role: 'bot',
      text: model
        ? `Hi there! 👋 I'm Phoun's AI assistant powered by Google Gemini. Ask me absolutely anything about him — his skills, projects, education, experience, or how to get in touch!`
        : `Hi there! 👋 I'm Phoun's AI assistant. Ask me anything about him — his skills, projects, education, experience, or how to get in touch!`,

      timestamp: new Date()
    }
  ])
  const isOpen = ref(false)
  const isTyping = ref(false)
  const isAiMode = ref(!!model)
  let nextId = 1

  const sendMessage = async (text: string) => {
    if (!text.trim() || isTyping.value) return

    messages.value.push({
      id: nextId++,
      role: 'user',
      text: text.trim(),
      timestamp: new Date()
    })

    isTyping.value = true

    let response: string

    if (model && isAiMode.value) {
      // Use Gemini AI
      try {
        const chat = model.startChat({
          history: messages.value
            .filter(m => m.role !== 'bot' || m.id !== 0)
            .map(m => ({
              role: m.role === 'user' ? 'user' : 'model',
              parts: [{ text: m.text }]
            }))
        })
        const result = await chat.sendMessage(text.trim())
        response = result.response.text()
      } catch (e: any) {
        console.error('Gemini error:', e)
        if (e.message?.includes('API key')) {
          response = `⚠️ Invalid or missing Gemini API key. Please check your API key and try again. Falling back to rule-based responses.`
          isAiMode.value = false
        } else {
          response = generateRuleBasedResponse(text)
        }
      }
    } else {
      // Use rule-based fallback
      response = generateRuleBasedResponse(text)
      const delay = Math.min(600 + response.length * 6, 2000)
      await new Promise(resolve => setTimeout(resolve, delay))
    }

    messages.value.push({
      id: nextId++,
      role: 'bot',
      text: response,
      timestamp: new Date()
    })

    isTyping.value = false
  }

  const toggle = () => { isOpen.value = !isOpen.value }
  const close = () => { isOpen.value = false }
  const open = () => { isOpen.value = true }

  return {
    messages,
    isOpen,
    isTyping,
    isAiMode,
    sendMessage,
    toggle,
    close,
    open
  }
}
