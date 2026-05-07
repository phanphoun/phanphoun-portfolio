import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { pageMetadata, siteConfig } from '@/config/site'

export function usePageMeta() {
  const route = useRoute()

  const updatePageMeta = (title: string, description: string, path: string) => {
    // Update document title
    document.title = title

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', description)

    // Update OG tags
    updateOGTag('og:title', title)
    updateOGTag('og:description', description)
    updateOGTag('og:url', siteConfig.url + path)

    // Update Twitter tags
    updateOGTag('twitter:title', title)
    updateOGTag('twitter:description', description)

    // Update canonical
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', siteConfig.url + path)
  }

  const updateOGTag = (property: string, content: string) => {
    let tag = document.querySelector(`meta[property="${property}"]`)
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('property', property)
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', content)
  }

  watch(
    () => route.path,
    (path) => {
      const pathKey = path === '/' ? 'home' : path.slice(1)
      const meta = pageMetadata[pathKey] || pageMetadata.home

      if (meta) {
        updatePageMeta(meta.title, meta.description, path)
      }

      // Scroll to top
      window.scrollTo(0, 0)
    },
    { immediate: true }
  )

  return { updatePageMeta }
}
