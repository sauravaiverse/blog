# Getting Started with PhiData

## Introduction

PhiData is a powerful framework for building AI-powered applications and autonomous agents. This guide will help you get started with PhiData and understand its core features.

## Prerequisites

- Python 3.7+
- pip (Python package installer)
- Basic understanding of Python programming
- Familiarity with AI concepts

## Installation

```bash
pip install phidata
```

## Quick Start

### 1. Create a New Project

```bash
phi create my-ai-app
cd my-ai-app
```

### 2. Project Structure

```
my-ai-app/
├── workspace/
│   ├── __init__.py
│   ├── settings.py
│   └── ai/
│       ├── __init__.py
│       └── assistant.py
├── requirements.txt
└── README.md
```

### 3. Basic Configuration

```python
# workspace/settings.py
from phidata import settings

workspace_settings = settings.WorkspaceSettings(
    ws_name="my-ai-app",
    ws_type="python",
)
```

### 4. Create Your First AI Assistant

```python
# workspace/ai/assistant.py
from phidata.app.ai import Assistant
from phidata.app.ai.llm import OpenAIChat

assistant = Assistant(
    name="my-assistant",
    llm=OpenAIChat(
        model="gpt-3.5-turbo",
        temperature=0.7
    )
)

# Define assistant behavior
@assistant.on_message
async def handle_message(message: str):
    response = await assistant.llm.generate(message)
    return response
```

## Basic Concepts

### Workspace
- Central organization unit
- Contains configuration and resources
- Manages application lifecycle

### Assistants
- AI agents with specific capabilities
- Can process messages and perform tasks
- Customizable behavior

### LLM Integration
- Supports multiple LLM providers
- Configurable parameters
- Easy to switch between models

## Running Your Application

```bash
phi start
```

## Configuration Options

### Environment Variables
```bash
# .env
OPENAI_API_KEY=your_api_key
```

### Assistant Settings
```python
assistant = Assistant(
    name="my-assistant",
    description="A helpful AI assistant",
    instructions="Be concise and clear in responses",
    llm=OpenAIChat(
        model="gpt-3.5-turbo",
        temperature=0.7,
        max_tokens=150
    )
)
```

## Next Steps

1. Explore the [Core Concepts](/agentic-ai/phidata/core-concepts) guide
2. Check out practical [Examples](/agentic-ai/phidata/examples)
3. Join the PhiData community
4. Build your first production application

## Troubleshooting

### Common Issues

1. Installation Problems
```bash
# Upgrade pip
pip install --upgrade pip

# Install in virtual environment
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
```

2. API Key Issues
```python
# Verify API key is set
import os
assert os.getenv("OPENAI_API_KEY") is not None
```

### Getting Help

- Check the documentation
- Join Discord community
- GitHub issues
- Stack Overflow tags