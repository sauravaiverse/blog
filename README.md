# AI Knowledge Hub Documentation

This repository contains the documentation for the AI Knowledge Hub, built with VitePress.

## 🚀 Quick Start

1. **Clone and Install**
```bash
git clone https://github.com/sauravaiverse/blog.git
cd blog
npm install
```

2. **Start Development Server**
```bash
npm run docs:dev
```

3. **Build for Production**
```bash
npm run docs:build
```

## 📝 Managing Documentation

### Directory Structure
```
docs/
├── .vitepress/
│   └── config.ts          # VitePress configuration
├── index.md              # Home page
├── agentic-ai/           # Agentic AI section
│   ├── index.md
│   └── phidata/
│       ├── index.md
│       ├── getting-started.md
│       ├── core-concepts.md
│       └── examples.md
├── generative-ai/        # Generative AI section
└── interactive-learning/ # Interactive Learning section
```

### Creating New Pages

1. **Create a New Section**
```bash
mkdir docs/new-section
touch docs/new-section/index.md
```

2. **Add Basic Content Structure**
```markdown
# Section Title

## Introduction

Your introduction text here.

## Key Features

- Feature 1
- Feature 2
- Feature 3
```

3. **Update Navigation**
Edit `docs/.vitepress/config.ts`:
```ts
nav: [
  // Add to navigation bar
  {
    text: 'New Section',
    link: '/new-section/'
  }
],

sidebar: {
  // Add to sidebar
  '/new-section/': [
    {
      text: 'New Section',
      items: [
        { text: 'Introduction', link: '/new-section/' }
      ]
    }
  ]
}
```

### Updating Existing Pages

1. **Locate the File**
- All content is in the `docs` directory
- Files use `.md` extension
- Follow the directory structure

2. **Edit Content**
- Use standard Markdown syntax
- Support for Vue components in Markdown
- Front matter for page metadata

Example:
```markdown
---
title: Page Title
description: Page description
---

# Main Title

Content goes here
```

3. **Preview Changes**
```bash
npm run docs:dev
```

### Deleting Pages

1. **Remove the File**
```bash
rm docs/section-name/page-name.md
```

2. **Update Navigation**
- Remove references from `config.ts`
- Update any links in other pages

### Best Practices

1. **File Organization**
- Use meaningful directory names
- Keep related content together
- Follow consistent naming

2. **Content Structure**
- Clear headings hierarchy
- Consistent formatting
- Include examples
- Add proper metadata

3. **Navigation**
- Logical grouping
- Clear labels
- Proper linking

4. **Images and Assets**
- Store in `public` directory
- Use relative paths
- Optimize for web

## 🔧 Configuration

### Adding New Sections to Navigation

In `docs/.vitepress/config.ts`:
```ts
nav: [
  {
    text: 'Section Name',
    items: [
      { text: 'Page 1', link: '/section/page1' },
      { text: 'Page 2', link: '/section/page2' }
    ]
  }
]
```

### Configuring Sidebar

```ts
sidebar: {
  '/section-path/': [
    {
      text: 'Section Title',
      items: [
        { text: 'Page Title', link: '/section-path/page' }
      ]
    }
  ]
}
```

## 🚀 Deployment

1. **Build the Documentation**
```bash
npm run docs:build
```

2. **Deploy to GitHub Pages**
- Push changes to main branch
- GitHub Actions will automatically deploy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

Released under the MIT License.