// .vitepress/config.ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  // Site Settings
  lang: 'en-US',
  title: 'AI Knowledge Hub',
  description: 'Comprehensive guide to Agentic AI and Generative AI technologies',
  base: '/blog/',
  lastUpdated: true,
  cleanUrls: true,

  // Basic Theme Settings
  appearance: true,
  
  // Head Tags
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', rel: 'stylesheet' }],
  ],

  themeConfig: {
    // Logo & Navigation
    logo: '/logo.png',
    
    // Main Navigation
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'LLM',
        items: [
          { text: 'Overview', link: '/llm/' },
          { text: 'LLM Leaderboards', link: '/llm/leaderboards/' },
          { 
            text: 'GenAI Foundations',
            items: [
              { text: 'Neural Network', link: '/llm/genai-foundations/neural-network/' },
              { text: 'Discriminative AI', link: '/llm/genai-foundations/discriminative-ai/' },
              { text: 'Generative AI', link: '/llm/genai-foundations/generative-ai/' }
            ]
          }
        ]
      },
      {
        text: 'Interactive Learning',
        items: [
          { text: 'Overview', link: '/interactive-learning/' },
          { text: 'AI Playground', link: '/interactive-learning/playground' },
          { text: 'Benchmarks', link: '/interactive-learning/benchmarks' }
        ]
      },
      {
        text: 'Generative AI',
        items: [
          { text: 'Overview', link: '/generative-ai/' },
          { text: 'Image Generation', link: '/generative-ai/image-generation/' },
          { text: 'Audio Generation', link: '/generative-ai/audio-generation/' }
        ]
      }
    ],

    // Sidebar Navigation
    sidebar: {
      '/llm/': [
        {
          text: 'LLM',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/llm/' },
            { text: 'LLM Leaderboards', link: '/llm/leaderboards/' },
            {
              text: 'GenAI Foundations',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/llm/genai-foundations/' },
                { text: 'Neural Network', link: '/llm/genai-foundations/neural-network/' },
                { text: 'Discriminative AI', link: '/llm/genai-foundations/discriminative-ai/' },
                {
                  text: 'Generative AI',
                  collapsed: true,
                  items: [
                    { text: 'Transformers', link: '/llm/genai-foundations/generative-ai/transformers/' },
                    { text: 'GANs', link: '/llm/genai-foundations/generative-ai/gans/' },
                    { text: 'Diffusers', link: '/llm/genai-foundations/generative-ai/diffusers/' }
                  ]
                }
              ]
            }
          ]
        }
      ],
      '/interactive-learning/': [
        {
          text: 'Interactive Learning',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/interactive-learning/' },
            { text: 'AI Playground', link: '/interactive-learning/playground' },
            { text: 'Benchmarks', link: '/interactive-learning/benchmarks' },
            { text: 'Community Projects', link: '/interactive-learning/projects' }
          ]
        }
      ],
      '/generative-ai/': [
        {
          text: 'Generative AI',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/generative-ai/' },
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
      ]
    },

    // Search Configuration
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

    // Social Links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sauravaiverse/blog' }
    ],

    // Footer Configuration
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present AI Knowledge Hub'
    },

    // Page Outline Configuration
    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    // Dark Mode Labels
    darkModeSwitchLabel: 'Theme',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Return to top',

    // Edit Link
    editLink: {
      pattern: 'https://github.com/sauravaiverse/blog/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    // Last Updated Text
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  }
})