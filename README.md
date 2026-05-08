# Phoun Phan - Portfolio 🚀

A premium, high-end personal portfolio website built with **Vue 3**, **TypeScript**, and **Tailwind CSS**. Designed with modern glassmorphism aesthetics, smooth entrance animations, an AI-powered chatbot, and a developer-first dashboard layout.

![Portfolio Preview](/images/phounphan.png)

## ✨ Key Features

-   **Dashboard-Style Navigation**: Sleek sidebar-first navigation pattern with mobile-responsive drawer.
-   **Glassmorphism UI**: High-end translucent containers, rotating orbit rings, and color-specific glows.
-   **Dynamic Image Sliders**: Interactive hero sliders and about-page galleries with automatic 5s transitions.
-   **Advanced Project Showcase**: Fuzzy search functionality with detailed modals and achievement tracking.
-   **Roadmap Education**: A vertical timeline journey tracing academic milestones.
-   **Skill Visualization**: Proficiency-based skill categories with animated progress bars.
-   **Premium Animations**: Staggered entrance animations using `v-reveal` directives.
-   **SEO Optimized**: Full metadata implementation, structured data, and performance optimizations.
-   **Testimonials Page**: Standalone page with client reviews and star ratings.
-   **Clickable Stats**: About page stats link directly to their respective sections.
-   **AI Chatbot**: Integrated chatbot powered by Google Gemini AI with portfolio knowledge base.

## 🤖 AI Chatbot

An intelligent chatbot built into the portfolio that can answer questions about Phoun's:
-   Skills & tech stack (with proficiency levels)
-   Projects (with tech stacks, features, and links)
-   Education background
-   Work experience and current focus
-   Contact information and social links
-   Testimonials from clients/colleagues
-   General knowledge questions (coding help, tech explanations, etc.)

### Setup Gemini API (Optional but Recommended)

For smarter, general-knowledge responses, add a free Google Gemini API key:

1.   Get your free API key at **[Google AI Studio](https://aistudio.google.com/app/apikey)**
2.   Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
3.   Edit `.env` and add your key:
     ```bash
     VITE_GEMINI_API_KEY=your_api_key_here
     ```
4.   Restart the dev server

Without a key, the chatbot uses a rule-based system that answers questions strictly from portfolio data.

## 🛠️ Technology Stack

-   **Frontend**: Vue 3 (Composition API) + Vue Router
-   **Styling**: Tailwind CSS (Glassmorphism & Utilities)
-   **Language**: TypeScript
-   **Build Tool**: Vite
-   **Animation**: Custom Vue transition-groups and intersection observers
-   **Icons**: Heroicons & Custom SVG implementations
-   **AI**: Google Gemini 2.0 Flash (optional, free tier)

## 🚀 Getting Started

### Prerequisites

-   Node.js (v18.0 or higher)
-   npm or yarn

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/phanphoun/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **(Optional) Set up Gemini AI**:
    ```bash
    cp .env.example .env
    # Edit .env and add your VITE_GEMINI_API_KEY
    ```

4.  **Run development server**:
    ```bash
    npm run dev
    ```

5.  **Build for production**:
    ```bash
    npm run build
    ```

## 📁 Project Structure

```text
src/
├── components/     # Reusable UI components (Sidebar, ChatBot, ImageWithFallback, etc.)
├── composables/    # Vue composables (useChatbot, usePageMeta, useLoadingState, etc.)
├── config/         # Centralized configuration (Projects, Skills, Home, About, etc.)
├── views/          # Page components (Home, About, Projects, Skills, Education, Testimonials, Contact)
├── assets/         # Static assets and global styles
├── router/         # Vue Router configuration
└── App.vue         # Main application entry
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by [Phoun Phan](https://github.com/phanphoun)
