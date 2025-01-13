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
  - - script
    - type: application/ld+json
      content: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "AI Knowledge Hub",
        "description": "Comprehensive guide to Agentic AI and Generative AI technologies",
        "url": "https://sauravaiverse.github.io/blog/"
      }

hero:
  name: "AI Knowledge Hub"
  text: "Master the Future of AI Technology"
  tagline: Comprehensive guides on Agentic & Generative AI - from foundational concepts to advanced implementations.
  image:
    src: /hero-image.png
    alt: AI Knowledge Hub illustration
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
  - icon: 🎨
    title: Generative AI
    details: Master Large Language Models, Image Generation, and Audio Synthesis. Create cutting-edge AI applications with practical examples.
    link: /generative-ai/
  - icon: 📚
    title: Comprehensive Guides
    details: Step-by-step tutorials, best practices, and real-world examples to help you implement AI solutions effectively.
    link: /agentic-ai/phidata/getting-started

aside: true
outline: deep

main:
  - title: Latest Articles
    items:
      - title: "Getting Started with PhiData"
        description: "Learn how to build your first autonomous AI agent with PhiData"
        link: /agentic-ai/phidata/getting-started
        date: "2024-01-20"
      - title: "Understanding GPT Models"
        description: "Deep dive into the architecture and capabilities of GPT models"
        link: /generative-ai/llms/gpt
        date: "2024-01-18"
      - title: "CrewAI Tutorial"
        description: "Build collaborative AI systems with CrewAI framework"
        link: /agentic-ai/crewai/getting-started
        date: "2024-01-15"

  - title: Newsletter
    type: subscribe
    description: Stay updated with the latest in AI technology
    form:
      placeholder: Enter your email
      button: Subscribe

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
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
