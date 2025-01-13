# AI Playground

<div class="playground-container">
  <div class="model-selector">
    <h2>Select Model</h2>
    <select id="model-select">
      <option value="gpt-4">GPT-4</option>
      <option value="gpt-3.5">GPT-3.5</option>
      <option value="claude">Claude</option>
      <option value="llama">LLaMA</option>
    </select>
  </div>

  <div class="parameter-controls">
    <h2>Parameters</h2>
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
    <h2>Prompt</h2>
    <textarea id="prompt-input" placeholder="Enter your prompt here..."></textarea>
    <button id="run-button">Run ▶️</button>
  </div>

  <div class="output-display">
    <h2>Output</h2>
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

<style>
.playground-container {
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 20px;
  padding: 20px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.model-selector,
.parameter-controls {
  background: var(--vp-c-bg);
  padding: 20px;
  border-radius: 8px;
}

.slider-control {
  margin: 15px 0;
}

.code-editor textarea {
  width: 100%;
  height: 200px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid var(--vp-c-divider);
}

.output-display {
  background: var(--vp-c-bg);
  padding: 20px;
  border-radius: 8px;
}

.metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--vp-c-divider);
}

.metric {
  text-align: center;
}

#run-button {
  margin-top: 10px;
  padding: 8px 16px;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

#run-button:hover {
  background: var(--vp-c-brand-dark);
}
</style>

<script>
// Playground functionality will be initialized here
document.addEventListener('DOMContentLoaded', () => {
  // Initialize playground controls
  const modelSelect = document.getElementById('model-select');
  const promptInput = document.getElementById('prompt-input');
  const runButton = document.getElementById('run-button');
  
  // Add event listeners
  runButton.addEventListener('click', async () => {
    // Handle generation
    const response = await generateResponse();
    updateOutput(response);
  });
  
  // Update parameter values
  document.querySelectorAll('.slider-control input').forEach(slider => {
    slider.addEventListener('input', (e) => {
      e.target.nextElementSibling.textContent = e.target.value;
    });
  });
});

async function generateResponse() {
  // Implement response generation
}

function updateOutput(response) {
  // Update output display
}
</script>
