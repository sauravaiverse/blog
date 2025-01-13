# AI Playground

Welcome to the AI Playground! This interactive environment allows you to experiment with various AI models and see results in real-time. Try out different models, adjust parameters, and see how they affect the output.

::: warning Note
The interactive playground requires JavaScript to be enabled in your browser.
:::

## Available Models

### Language Models
- GPT-3.5
- GPT-4
- Claude
- LLaMA

### Image Generation
- DALL-E
- Stable Diffusion
- Midjourney

## Features

### Parameter Tuning
- Temperature
- Top-p
- Max tokens
- Presence penalty
- Frequency penalty

### Real-time Output
- Stream responses
- Token counting
- Cost estimation
- Response timing

### Code Integration
```python
from playground import AIModel

model = AIModel('gpt-4')
response = model.generate('Your prompt here')
print(response)
```

## Getting Started

1. Choose a model from the dropdown
2. Adjust parameters as needed
3. Enter your prompt
4. Click "Generate" to see results

<ClientOnly>
  <div class="playground-container">
    <div class="model-selector">
      <h3>Select Model</h3>
      <select id="model-select">
        <option value="gpt-4">GPT-4</option>
        <option value="gpt-3.5">GPT-3.5</option>
        <option value="claude">Claude</option>
        <option value="llama">LLaMA</option>
      </select>
    </div>

    <div class="parameter-controls">
      <h3>Parameters</h3>
      <div class="slider-control">
        <label>Temperature</label>
        <input type="range" min="0" max="1" step="0.1" value="0.7" />
        <span class="value">0.7</span>
      </div>
      <div class="slider-control">
        <label>Max Tokens</label>
        <input type="range" min="50" max="500" step="50" value="150" />
        <span class="value">150</span>
      </div>
      <div class="slider-control">
        <label>Top P</label>
        <input type="range" min="0" max="1" step="0.1" value="0.9" />
        <span class="value">0.9</span>
      </div>
    </div>

    <div class="code-editor">
      <h3>Prompt</h3>
      <textarea id="prompt-input" placeholder="Enter your prompt here..."></textarea>
      <button id="run-button" class="run-button">Run ▶️</button>
    </div>

    <div class="output-display">
      <h3>Output</h3>
      <div id="response-text"></div>
      <div class="metrics">
        <div class="metric">
          <label>Response Time</label>
          <span id="response-time">0ms</span>
        </div>
        <div class="metric">
          <label>Tokens Used</label>
          <span id="token-count">0</span>
        </div>
        <div class="metric">
          <label>Estimated Cost</label>
          <span id="cost-estimate">$0.00</span>
        </div>
      </div>
    </div>
  </div>
</ClientOnly>

<script setup>
import { onMounted } from 'vue'

const initPlayground = () => {
  const modelSelect = document.getElementById('model-select')
  const promptInput = document.getElementById('prompt-input')
  const runButton = document.getElementById('run-button')
  const responseText = document.getElementById('response-text')
  const responseTime = document.getElementById('response-time')
  const tokenCount = document.getElementById('token-count')
  const costEstimate = document.getElementById('cost-estimate')
  
  if (!runButton || !responseText || !responseTime || !tokenCount || !costEstimate) {
    return
  }
  
  runButton.addEventListener('click', async () => {
    // Demo response
    responseText.textContent = 'This is a demo response. In a real implementation, this would connect to an AI model API.'
    responseTime.textContent = '150ms'
    tokenCount.textContent = '25'
    costEstimate.textContent = '$0.001'
  })
  
  // Update parameter values
  document.querySelectorAll('.slider-control input').forEach(slider => {
    slider.addEventListener('input', (e) => {
      const valueDisplay = e.target.nextElementSibling
      if (valueDisplay) {
        valueDisplay.textContent = e.target.value
      }
    })
  })
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    // Use setTimeout to ensure DOM is fully loaded
    setTimeout(initPlayground, 0)
  }
})
</script>

<style>
.playground-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  margin: 20px 0;
}

.model-selector,
.parameter-controls,
.code-editor,
.output-display {
  background: var(--vp-c-bg);
  padding: 20px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.slider-control {
  margin: 15px 0;
  display: grid;
  grid-template-columns: 1fr 150px 50px;
  gap: 10px;
  align-items: center;
}

.code-editor textarea {
  width: 100%;
  height: 150px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-family: var(--vp-font-family-mono);
  resize: vertical;
}

.run-button {
  margin-top: 10px;
  padding: 8px 16px;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.run-button:hover {
  background: var(--vp-c-brand-dark);
}

#response-text {
  min-height: 100px;
  padding: 10px;
  background: var(--vp-c-bg-soft);
  border-radius: 4px;
  white-space: pre-wrap;
}

.metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--vp-c-divider);
}

.metric {
  text-align: center;
}

@media (min-width: 768px) {
  .playground-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>