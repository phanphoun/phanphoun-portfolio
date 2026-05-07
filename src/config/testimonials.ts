export interface Testimonial {
  name: string
  role: string
  content: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Ven Channy',
    role: 'Lead Developer, PN Cambodia',
    content: 'Phoun is an exceptional talent. His ability to grasp complex architectures and implement them with clean, efficient code is truly impressive for someone at his career stage.',
    avatar: '/images/channy.jpg'
  },
  {
    name: 'Moeun Sophy',
    role: 'CEO of PN Cambodia',
    content: 'Phoun has a great attitude and a strong desire to learn. He adapts quickly to new technologies and challenges, making him a valuable addition to any team.',
    avatar: '/images/ream.jpg'
  }
]
