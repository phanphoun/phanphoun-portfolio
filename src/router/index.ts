import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Skills from '../views/Skills.vue'
import Experience from '../views/Experience.vue'
import Projects from '../views/Projects.vue'
import Education from '../views/Education.vue'
import Contact from '../views/Contact.vue'
import Testimonials from '../views/Testimonials.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/education',
      name: 'education',
      component: Education
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/testimonials',
      name: 'testimonials',
      component: Testimonials
    }
  ]
})

export default router
