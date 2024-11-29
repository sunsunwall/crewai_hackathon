@echo off
echo 🚀 Starting CrewAI Installation Script...

:: Check Python version
python --version > nul 2>&1
if errorlevel 1 (
    echo ❌ Python is not installed! Please install Python 3.10-3.13
    exit /b 1
)

:: Get project name
set /p PROJECT_NAME="Enter project name: "

:: Create project directory if it doesn't exist
if not exist "%PROJECT_NAME%" (
    echo Creating project directory: %PROJECT_NAME%
    mkdir "%PROJECT_NAME%"
)

:: Create and activate virtual environment
echo Creating Python virtual environment...
cd %PROJECT_NAME%
python -m venv .venv

:: Activate virtual environment
echo Activating virtual environment...
call .venv\Scripts\activate.bat

:: Upgrade pip
echo Upgrading pip...
python -m pip install --upgrade pip

@REM :: Set environment variables for PyO3
@REM echo Setting PyO3 environment variables...
@REM set PYO3_PYTHON=%cd%\.venv\Scripts\python.exe
@REM set PYTHON_CONFIGURE_OPTS=--enable-shared

:: Install CrewAI and tools
echo Installing CrewAI and tools...
pip install "crewai[tools]"

:: Create new CrewAI project
echo Creating new CrewAI project...
crewai create crew %PROJECT_NAME%

:: Navigate to project directory
cd %PROJECT_NAME%

:: Fix pyproject.toml issue
echo Fixing pyproject.toml...
powershell -Command "(Get-Content pyproject.toml) -replace 'test = .*', 'test_crew = \"test.main:test\"' | Set-Content pyproject.toml"

echo ✨ Installation complete!
echo.
echo To activate the virtual environment, run:
echo     .venv\Scripts\activate.bat
echo.
echo Next steps:
echo 1. Start developing your crew by editing files in src/%PROJECT_NAME%/
echo 2. Run your crew with: crewai run
echo.

