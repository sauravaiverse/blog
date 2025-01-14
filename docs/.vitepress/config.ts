import { defineConfig } from 'vitepress'

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'AI Knowledge Hub',
  description: 'Comprehensive guide to Agentic AI and Generative AI technologies',
  base: '/blog/', // Base URL must end with trailing slash
  ignoreDeadLinks: true,
  lastUpdated: false,
  appearance: true,
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', rel: 'stylesheet' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0' }],
    ['meta', { name: 'description', content: 'Comprehensive guide to Agentic AI and Generative AI technologies' }],
    ['meta', { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#ffffff' }],
    ['meta', { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#1a1a1a' }]
  ],

  cleanUrls: true,
  
  themeConfig: {
    logo: '/logo.png',
  
    locales: {
      root: { label: 'English' },
      zh: { label: '简体中文' },
      es: { label: 'Español' }
    },
  
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        miniSearch: {
          searchOptions: {
            fuzzy: 0.2,
            prefix: true
          }
        }
      }
    },
    
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Interactive Learning',
        items: [
          { text: 'Overview', link: '/interactive-learning/' },
          { text: 'AI Playground', link: '/interactive-learning/playground' },
          { text: 'Benchmarks', link: '/interactive-learning/benchmarks' },
          { text: 'Community Projects', link: '/interactive-learning/projects' }
        ]
      },
      {
        text: 'Agentic AI',
        items: [
          { text: 'Overview', link: '/agentic-ai/' },
          { text: 'PhiData', link: '/agentic-ai/phidata/' },
          { text: 'CrewAI', link: '/agentic-ai/crewai/' },
          { text: 'AutoGen', link: '/agentic-ai/autogen/' }
        ]
      },
      {
        text: 'Generative AI',
        items: [
          { text: 'Overview', link: '/generative-ai/' },
          { text: 'Large Language Models', link: '/generative-ai/llms/' },
          { text: 'Image Generation', link: '/generative-ai/image-generation/' },
          { text: 'Audio Generation', link: '/generative-ai/audio-generation/' }
        ]
      },
      {
        text: 'LLM',
        items: [
          { text: 'Overview', link: '/llm/' },
          { text: 'LLM Leaderboards', link: '/llm/leaderboards/' },
          { text: 'Getting Started', link: '/llm/00_getting_started_generative_ai/' },
          { text: 'GenAI Foundations', link: '/llm/02_genai_foundations/' }
        ]
      }
    ],

    sidebar: {
      '/interactive-learning/': [
        {
          text: 'Interactive Learning',
          items: [
            { text: 'Overview', link: '/interactive-learning/' },
            { text: 'AI Playground', link: '/interactive-learning/playground' },
            { text: 'Benchmarks', link: '/interactive-learning/benchmarks' },
            { text: 'Community Projects', link: '/interactive-learning/projects' }
          ]
        }
      ],
      '/agentic-ai/': [
        {
          text: 'Agentic AI',
          items: [
            { text: 'Introduction', link: '/agentic-ai/' },
            {
              text: 'PhiData',
              collapsed: true,
              items: [
                { text: 'Getting Started', link: '/agentic-ai/phidata/getting-started' },
                { text: 'Core Concepts', link: '/agentic-ai/phidata/core-concepts' },
                { text: 'Examples', link: '/agentic-ai/phidata/examples' }
              ]
            },
            {
              text: 'CrewAI',
              collapsed: true,
              items: [
                { text: 'Getting Started', link: '/agentic-ai/crewai/getting-started' },
                { text: 'Core Concepts', link: '/agentic-ai/crewai/core-concepts' },
                { text: 'Examples', link: '/agentic-ai/crewai/examples' }
              ]
            },
            {
              text: 'AutoGen',
              collapsed: true,
              items: [
                { text: 'Getting Started', link: '/agentic-ai/autogen/getting-started' },
                { text: 'Core Concepts', link: '/agentic-ai/autogen/core-concepts' },
                { text: 'Examples', link: '/agentic-ai/autogen/examples' }
              ]
            }
          ]
        }
      ],
      '/generative-ai/': [
        {
          text: 'Generative AI',
          items: [
            { text: 'Introduction', link: '/generative-ai/' },
            {
              text: 'Large Language Models',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/generative-ai/llms/' },
                { text: 'GPT Models', link: '/generative-ai/llms/gpt' },
                { text: 'Open Source Models', link: '/generative-ai/llms/open-source' }
              ]
            },
            {
              text: 'Image Generation',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/generative-ai/image-generation/' },
                { text: 'Stable Diffusion', link: '/generative-ai/image-generation/stable-diffusion' },
                { text: 'DALL-E', link: '/generative-ai/image-generation/dall-e' }
              ]
            },
            {
              text: 'Audio Generation',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/generative-ai/audio-generation/' },
                { text: 'Text to Speech', link: '/generative-ai/audio-generation/text-to-speech' },
                { text: 'Music Generation', link: '/generative-ai/audio-generation/music-generation' }
              ]
            }
          ]
        }
      ],
      '/llm/': [
        {
          text: 'LLM',
          items: [
            { text: 'Overview', link: '/llm/' },
            { text: 'LLM Leaderboards', link: '/llm/leaderboards/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sauravaiverse/blog' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present AI Knowledge Hub',
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    docFooter: {
      prev: 'Previous Page',
      next: 'Next Page'
    },

    returnToTopLabel: 'Return to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Theme',
    
    nprogress: true,

    carbonAds: {
      code: 'your-carbon-code',
      placement: 'your-carbon-placement'
    },
    
    editLink: {
      pattern: 'https://github.com/sauravaiverse/blog/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    
    lastUpdated: { format: 'short' }
  }
})
