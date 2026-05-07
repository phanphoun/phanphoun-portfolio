export interface Education {
  degree: string
  school: string
  period: string
  gpa: string
  description: string
  details: string[]
  icon: string
  image: string
  color: string
}

export const education: Education[] = [
  {
    degree: 'Software Engineering Associate Degree',
    school: 'PN Cambodia',
    period: '2025 - Present',
    gpa: 'GPA: 3.8/4.0',
    description: 'Intensive program focused on practical software development, algorithm design, and modern web architectures.',
    details: [
      'Specialization in Full Stack Development',
      'Hands-on experience with Agile methodologies',
      'Advanced coursework in Data Structures & Algorithms'
    ],
    icon: '🎓',
    image: 'https://media.licdn.com/dms/image/v2/D5622AQHXv00_EDKOYQ/feedshare-shrink_800/B56Z076hIAG8Ac-/0/1774826689638?e=2147483647&v=beta&t=Nmzbk1i0-77wNH2Vu2ASWrQxzvmcVMTfs1e2OJgBfS4',
    color: 'lime'
  },
  {
    degree: 'General Education',
    school: 'Chea Sim Tbeng Meanchey High School',
    period: '2018 - 2024',
    gpa: 'Grade A',
    description: 'Comprehensive high school curriculum with a strong focus on STEM subjects and technical foundation.',
    details: [
      'Graduated with honors (Grade A)',
      'Leadership role in various school clubs',
      'Solid foundation in Advanced Mathematics'
    ],
    icon: '🏫',
    image: 'https://scontent.fpnh19-1.fna.fbcdn.net/v/t39.30808-6/495024230_1279753910824836_3271634597455411682_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHXxeXQJEp1C-bYR4Za6cgq4NBaqJQi3tXg0FqolCLe1djG0x-o4dOu5owEwAuIufUqSgSOV9-lGMLiezO9_UOE&_nc_ohc=mtckDMDb6YkQ7kNvwH_2epM&_nc_oc=Adq6IDSolOHPEWq6L_oHdf_P4yAq-Kx2o74uj7odADDPj3PGcWqKzm1xV-9uI1bffDs&_nc_zt=23&_nc_ht=scontent.fpnh19-1.fna&_nc_gid=nlyeF8XCoakq0GjQLO_FUQ&_nc_ss=7b2a8&oh=00_Af4j2mOAja2JvO3JShLyFHg0rej_Xx0HS8JbDvgmuymwKA&oe=6A021F6E',
    color: 'blue'
  }
]
