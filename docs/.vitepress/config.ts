import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'AI Knowledge Hub',
  description: 'Comprehensive guide to Agentic AI and Generative AI technologies',
  base: '/blog/', // Base URL updated for GitHub Pages deployment

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
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
      }
    ],

    sidebar: [
      {
        text: 'Agentic AI',
        collapsed: false,
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
      },
      {
        text: 'Generative AI',
        collapsed: false,
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
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sauravaiverse/blog' }
    ]
  },
});
