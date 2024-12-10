#!/bin/bash

# install_crewai.sh

echo "🚀 Starting CrewAI Installation Script..."

# Check if Python 3.11 is installed
if ! command -v python3.11 &> /dev/null; then
    echo "Installing Python 3.11..."
    brew install python@3.11
else
    echo "✅ Python 3.11 already installed"
fi

# Create project directory if it doesn't exist
read -p "Enter project name: " PROJECT_NAME
if [ ! -d "$PROJECT_NAME" ]; then
    echo "Creating project directory: $PROJECT_NAME"
    mkdir -p "$PROJECT_NAME"
fi

cd "$PROJECT_NAME"

# Create and activate virtual environment
echo "Creating Python virtual environment..."
python3.11 -m venv venv

# Activate virtual environment
echo "Activating virtual environment..."
source venv/bin/activate

# Upgrade pip
echo "Upgrading pip..."
pip install --upgrade pip

# Set environment variables for PyO3
echo "Setting PyO3 environment variables..."
export PYO3_PYTHON=$(which python)
export PYTHON_CONFIGURE_OPTS="--enable-shared"

# Check if running on Apple Silicon
if [[ $(uname -m) == 'arm64' ]]; then
    echo "Installing onnxruntime for Apple Silicon..."
    pip install onnxruntime-silicon
else
    echo "Installing onnxruntime for Intel Mac..."
    pip install onnxruntime
fi

# Install CrewAI and tools
echo "Installing CrewAI and tools..."
pip install 'crewai[tools]'

# Create new CrewAI project using CLI
echo "Creating new CrewAI project..."
crewai create crew $PROJECT_NAME

# Fix pyproject.toml issue by removing duplicate entries
echo "Fixing pyproject.toml..."
cd $PROJECT_NAME
sed -i '' 's/test = ".*"/test_crew = "test.main:test"/' pyproject.toml

# Navigate back to root directory
cd ../..

# Navigate back to project directory and activate venv
echo "✨ Installation complete!"
echo
echo "1. To activate the virtual environment, run:"
echo "    source $PROJECT_NAME/venv/bin/activate"
echo
echo "2. Navigate to the project directory:"
echo "    cd $PROJECT_NAME/$PROJECT_NAME"
echo
echo "3. Start developing your crew by editing files in src/$PROJECT_NAME/"
echo
echo "4. Run your crew with:"
echo "    crewai run"