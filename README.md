# CrewAI Installation Guide

This guide will help you install CrewAI on both macOS and Windows systems.

## Prerequisites

- openai/anthropic api key

## macOS Installation

### 1. Check Python Version

First, verify your Python version:

```bash
python3 --version
```

If you don't have Python 3.10-3.12 installed, you can install it using Homebrew:

```bash
brew install python@3.12
```

### 2. Set Up Virtual Environment (Recommended)

```bash
# Create a new directory for your project
mkdir my_crewai_project
cd my_crewai_project

# Create a virtual environment
python3 -m venv venv

# Activate the virtual environment
source venv/bin/activate
```

### 3. Install CrewAI

```bash
pip install 'crewai[tools]'
```


## Windows Installation

### 1. Check Python Version

Open Command Prompt and run:

```bash
python --version
```

If Python is not installed or version is between 3.10 and 3.12:
1. Download Python 3.12 from [python.org](https://www.python.org/downloads/)
2. During installation, make sure to check "Add Python to PATH"

### 2. Set Up Virtual Environment (Recommended)

```bash
# Create a new directory for your project
mkdir my_crewai_project
cd my_crewai_project

# Create a virtual environment
python -m venv venv

# Activate the virtual environment
venv\Scripts\activate
```

### 3. Install CrewAI

```bash
pip install 'crewai[tools]'
```


