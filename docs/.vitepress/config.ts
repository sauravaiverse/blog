// .vitepress/config.ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'AI Knowledge Hub',
  description: 'Comprehensive guide to Agentic AI and Generative AI technologies',
  base: '/blog/',
  lastUpdated: true,
  cleanUrls: true,
  appearance: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', rel: 'stylesheet' }],
    // Add custom styles for better UI
    ['style', {}, `
      :root {
        --vp-c-brand: #3eaf7c;
        --vp-c-brand-light: #4eba8b;
        --vp-c-bg-soft: #f9f9f9;
        --vp-c-bg-soft-dark: #242424;
        --vp-c-text-light-1: #213547;
        --vp-c-text-dark-1: #ffffff;
      }

      .dark {
        --vp-c-bg-soft: #242424;
      }

      .VPNavBarMenuLink {
        padding: 0 12px;
        line-height: 32px;
        font-size: 14px;
        font-weight: 500;
        color: var(--vp-c-text-1);
        transition: color 0.25s;
      }

      .VPNavBarMenuGroup {
        position: relative;
      }

      .VPNavBarMenuGroup .menu {
        position: absolute;
        top: 100%;
        right: 0;
        background-color: var(--vp-c-bg);
        border: 1px solid var(--vp-c-divider);
        border-radius: 8px;
        padding: 12px 0;
        min-width: 200px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      .VPNavBarMenuGroup .menu .group {
        padding: 8px 0;
      }

      .VPNavBarMenuGroup .menu .group + .group {
        border-top: 1px solid var(--vp-c-divider);
      }

      .VPNavBarMenuGroup .menu .item {
        padding: 8px 20px;
        line-height: 1.4;
        color: var(--vp-c-text-1);
        white-space: nowrap;
        transition: background-color 0.25s;
      }

      .VPNavBarMenuGroup .menu .item:hover {
        background-color: var(--vp-c-bg-soft);
        text-decoration: none;
      }

      .VPNavBarMenuGroup .menu .group-title {
        padding: 0 20px 8px;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        color: var(--vp-c-text-2);
      }
    `]
  ],

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'LLM',
        items: [
          {
            // Section 1
            items: [
              { text: 'Overview', link: '/llm/' },
              { text: 'LLM Leaderboards', link: '/llm/leaderboards/' },
              { text: 'GenAI Foundations', link: '/llm/genai-foundations/' },
              { text: 'Neural Network', link: '/llm/genai-foundations/neural-network/' },
              { text: 'Discriminative AI', link: '/llm/genai-foundations/discriminative-ai/' }
            ]
          },
          {
            text: 'Generative AI',
            items: [
              { text: 'Transformers', link: '/llm/genai-foundations/generative-ai/transformers/' },
              { text: 'GANs', link: '/llm/genai-foundations/generative-ai/gans/' },
              { text: 'Diffusers', link: '/llm/genai-foundations/generative-ai/diffusers/' }
            ]
          }
        ]
      },
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
        text: 'Generative AI',
        items: [
          { text: 'Overview', link: '/generative-ai/' },
          { text: 'Image Generation', link: '/generative-ai/image-generation/' },
          { text: 'Audio Generation', link: '/generative-ai/audio-generation/' }
        ]
      }
    ],

    sidebar: {
      '/llm/': [
        {
          text: 'LLM Guide',
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
      ]
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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sauravaiverse/blog' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present AI Knowledge Hub'
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    }
  }
})