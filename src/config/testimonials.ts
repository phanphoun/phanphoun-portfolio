export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  image?: string
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ven Channy',
    role: 'Lead Developer',
    company: 'PN Cambodia',
    content: 'Phoun is an exceptional talent. His ability to grasp complex architectures and implement them with clean, efficient code is truly impressive for someone at his career stage.',
    rating: 5,
    avatar: '/images/channy.jpg'
  },
  {
    id: 2,
    name: 'Moeun Sophy',
    role: 'CEO',
    company: 'PN Cambodia',
    content: 'Phoun has a great attitude and a strong desire to learn. He adapts quickly to new technologies and challenges, making him a valuable addition to any team.',
    rating: 5,
    avatar: '/images/ream.jpg'
  }
]
