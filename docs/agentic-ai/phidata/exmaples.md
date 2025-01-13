# PhiData Examples

## 1. Customer Service Assistant

Create an AI assistant that handles customer inquiries and support tickets.

```python
from phidata.app.ai import Assistant
from phidata.app.ai.llm import OpenAIChat

# Create customer service assistant
customer_service = Assistant(
    name="customer-support",
    llm=OpenAIChat(
        model="gpt-4",
        temperature=0.7
    ),
    instructions="""
    You are a helpful customer service representative.
    Be professional, empathetic, and solution-oriented.
    """
)

# Handle customer inquiries
@customer_service.on_message
async def handle_inquiry(message: str):
    # Process customer message
    response = await customer_service.llm.generate(
        f"Customer inquiry: {message}\n"
        "Provide a helpful response:"
    )
    return response

# Track conversation context
@customer_service.on_conversation_start
async def initialize_context():
    customer_service.context = {
        "previous_interactions": [],
        "resolved_issues": set()
    }
```

## 2. Content Generation Assistant

Build an assistant that helps create various types of content.

```python
from phidata.app.ai import Assistant
from phidata.app.ai.llm import OpenAIChat
from phidata.app.templates import ContentTemplate

# Define content templates
blog_template = ContentTemplate(
    name="blog",
    structure="""
    Title: {title}
    
    Introduction:
    {intro}
    
    Main Points:
    {points}
    
    Conclusion:
    {conclusion}
    """
)

# Create content assistant
content_creator = Assistant(
    name="content-creator",
    llm=OpenAIChat(
        model="gpt-4",
        temperature=0.8
    ),
    templates=[blog_template]
)

# Generate content
@content_creator.on_message
async def generate_content(message: str):
    # Parse content request
    content_type, topic = parse_request(message)
    
    # Generate content using template
    if content_type == "blog":
        content = await content_creator.generate_from_template(
            "blog",
            title=topic,
            intro="Write an engaging introduction",
            points="Generate 3-5 main points",
            conclusion="Summarize key takeaways"
        )
    return content
```

## 3. Research Assistant

Create an AI assistant that helps with research tasks.

```python
from phidata.app.ai import Assistant
from phidata.app.ai.llm import OpenAIChat
from phidata.app.research import ResearchTools

# Initialize research tools
research_tools = ResearchTools(
    search_engine="google",
    citation_manager="zotero",
    data_analyzer="pandas"
)

# Create research assistant
researcher = Assistant(
    name="research-assistant",
    llm=OpenAIChat(
        model="gpt-4",
        temperature=0.3
    ),
    tools=research_tools
)

# Handle research requests
@researcher.on_message
async def conduct_research(query: str):
    # Search for relevant information
    results = await researcher.tools.search(query)
    
    # Analyze and summarize findings
    summary = await researcher.llm.generate(
        f"Research results: {results}\n"
        "Provide a comprehensive summary:"
    )
    
    # Generate citations
    citations = researcher.tools.format_citations(results)
    
    return {
        "summary": summary,
        "citations": citations
    }
```

## 4. Code Assistant

Develop an AI assistant that helps with coding tasks.

```python
from phidata.app.ai import Assistant
from phidata.app.ai.llm import OpenAIChat
from phidata.app.code import CodeAnalyzer

# Initialize code analyzer
code_analyzer = CodeAnalyzer(
    languages=["python", "javascript", "typescript"],
    linters=["pylint", "eslint"],
    formatters=["black", "prettier"]
)

# Create code assistant
code_helper = Assistant(
    name="code-assistant",
    llm=OpenAIChat(
        model="gpt-4",
        temperature=0.2
    ),
    tools=code_analyzer
)

# Handle code-related requests
@code_helper.on_message
async def process_code_request(request: str):
    # Analyze code
    if "analyze" in request:
        code = extract_code(request)
        analysis = await code_helper.tools.analyze(code)
        return analysis
    
    # Generate code
    elif "generate" in request:
        requirements = extract_requirements(request)
        code = await code_helper.llm.generate(
            f"Requirements: {requirements}\n"
            "Generate code that meets these requirements:"
        )
        return code
```

## 5. Data Analysis Assistant

Create an AI assistant for data analysis tasks.

```python
from phidata.app.ai import Assistant
from phidata.app.ai.llm import OpenAIChat
from phidata.app.data import DataAnalyzer
import pandas as pd

# Initialize data analyzer
data_analyzer = DataAnalyzer(
    tools=["pandas", "numpy", "matplotlib"],
    max_memory="4Gi"
)

# Create data analysis assistant
data_assistant = Assistant(
    name="data-analyst",
    llm=OpenAIChat(
        model="gpt-4",
        temperature=0.1
    ),
    tools=data_analyzer
)

# Handle data analysis requests
@data_assistant.on_message
async def analyze_data(request: str):
    # Load and prepare data
    data = await data_assistant.tools.load_data(request)
    df = pd.DataFrame(data)
    
    # Perform analysis
    analysis = await data_assistant.tools.analyze(df)
    
    # Generate insights
    insights = await data_assistant.llm.generate(
        f"Analysis results: {analysis}\n"
        "Provide key insights and recommendations:"
    )
    
    # Create visualizations
    plots = await data_assistant.tools.create_plots(df)
    
    return {
        "analysis": analysis,
        "insights": insights,
        "visualizations": plots
    }
```

## Running the Examples

1. Install required dependencies:
```bash
pip install phidata pandas numpy matplotlib
```

2. Set up environment variables:
```bash
export OPENAI_API_KEY=your_api_key
```

3. Run the examples:
```bash
phi start --example customer-service
phi start --example content-creator
phi start --example researcher
phi start --example code-helper
phi start --example data-analyst
```

## Best Practices

1. Error Handling
```python
@assistant.on_error
async def handle_error(error: Exception):
    logger.error(f"Error occurred: {error}")
    return "I encountered an error. Please try again."
```

2. Logging
```python
import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
```

3. Testing
```python
from unittest import TestCase

class TestAssistant(TestCase):
    def setUp(self):
        self.assistant = create_test_assistant()
    
    async def test_response(self):
        response = await self.assistant.process_message("Hello")
        self.assertIsNotNone(response)
```