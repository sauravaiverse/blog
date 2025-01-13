---
layout: home

head:
  - - meta
    - name: description
      content: Discover comprehensive guides on Agentic AI and Generative AI technologies. Learn about PhiData, CrewAI, AutoGen, LLMs, and more.
  - - meta
    - name: keywords
      content: AI, Artificial Intelligence, Agentic AI, Generative AI, PhiData, CrewAI, AutoGen, LLMs, Machine Learning
  - - meta
    - name: author
      content: AI Knowledge Hub

hero:
  name: "AI Knowledge Hub"
  text: "Master the Future of AI Technology"
  tagline: Comprehensive guides on Agentic & Generative AI - from foundational concepts to advanced implementations.
  actions:
    - theme: brand
      text: Get Started
      link: /agentic-ai/
    - theme: alt
      text: View on GitHub
      link: https://github.com/sauravaiverse/blog

features:
  - icon: 🤖
    title: Agentic AI
    details: Explore autonomous AI agents with PhiData, CrewAI, and AutoGen. Learn to build intelligent systems that can reason and act independently.
    link: /agentic-ai/
    linkText: Learn More →
  - icon: 🎨
    title: Generative AI
    details: Master Large Language Models, Image Generation, and Audio Synthesis. Create cutting-edge AI applications with practical examples.
    link: /generative-ai/
    linkText: Explore →
  - icon: 📚
    title: Comprehensive Guides
    details: Step-by-step tutorials, best practices, and real-world examples to help you implement AI solutions effectively.
    link: /agentic-ai/phidata/getting-started
    linkText: Get Started →

  - icon: 🎯
    title: AI Playground
    details: Try out AI models and experiment with different parameters in our interactive playground.
    link: /interactive-learning/playground
    linkText: Try Now →
  - icon: 📊
    title: Performance Benchmarks
    details: Compare different AI models and frameworks with our comprehensive benchmarks.
    link: /interactive-learning/benchmarks
    linkText: View Benchmarks →
  - icon: 🤝
    title: Community Projects
    details: Explore and contribute to community-driven AI projects and implementations.
    link: /interactive-learning/projects
    linkText: Join Projects →

main:
  - title: Latest Articles
    items:
      - title: "Getting Started with PhiData"
        description: "Learn how to build your first autonomous AI agent with PhiData"
        link: /agentic-ai/phidata/getting-started
      - title: "Understanding GPT Models"
        description: "Deep dive into the architecture and capabilities of GPT models"
        link: /generative-ai/llms/gpt
      - title: "CrewAI Tutorial"
        description: "Build collaborative AI systems with CrewAI framework"
        link: /agentic-ai/crewai/getting-started

  - title: Why Choose Our Guide
    type: grid
    items:
      - icon: ⚡️
        title: Up-to-date Content
        details: Regular updates with the latest AI developments and best practices
      - icon: 🎯
        title: Practical Focus
        details: Real-world examples and implementations you can use immediately
      - icon: 🛠️
        title: Hands-on Tutorials
        details: Step-by-step guides with code examples and explanations
      - icon: 🤝
        title: Community Driven
        details: Join our growing community of AI enthusiasts and practitioners

footer:
  - title: Resources
    items:
      - text: Documentation
        link: /agentic-ai/
      - text: Examples
        link: /agentic-ai/phidata/examples
      - text: GitHub
        link: https://github.com/sauravaiverse/blog
  - title: Community
    items:
      - text: Discord
        link: #
      - text: Twitter
        link: #
      - text: GitHub Discussions
        link: https://github.com/sauravaiverse/blog/discussions
---

<style>
/* Enhanced color variables */
:root {
  /* Primary colors */
  --vp-c-brand: #3eaf7c;
  --vp-c-brand-light: #4abf8a;
  --vp-c-brand-lighter: #5ccf9a;
  --vp-c-brand-dark: #369f6b;
  --vp-c-brand-darker: #2e8f5f;

  /* Custom gradients */
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(120deg, var(--vp-c-brand) 30%, #41d1ff);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, var(--vp-c-brand) 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(40px);

  /* Typography */
  --vp-font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  --vp-font-family-mono: 'Fira Code', Menlo, Monaco, Consolas, 'Courier New', monospace;

  /* Custom properties */
  --content-width: 900px;
  --sidebar-width: 272px;
}

/* Dark mode customization */
.dark {
  --vp-c-bg: #1a1a1a;
  --vp-c-bg-soft: #242424;
  --vp-c-bg-mute: #2f2f2f;
}

/* Responsive design */
@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(50px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(60px);
  }
}

/* Enhanced typography */
.vp-doc h1 {
  font-size: 2.6rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.vp-doc h2 {
  font-size: 1.8rem;
  line-height: 1.4;
  margin: 48px 0 16px;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 24px;
}

/* Enhanced link styles */
.vp-doc a {
  text-decoration: none;
  transition: color 0.2s ease;
}

.vp-doc a:hover {
  color: var(--vp-c-brand);
}

/* Enhanced code blocks */
.vp-doc pre {
  border-radius: 8px;
  margin: 16px 0;
}

/* Enhanced button styles */
.vp-button {
  transition: all 0.2s ease;
  border-radius: 8px;
}

.vp-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>