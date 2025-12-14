# Sweet Shop Management System

A full-stack web application for managing a sweet shop inventory, built with Spring Boot (Java) backend and React frontend.

## 🚀 Quick Start Guide

### Prerequisites
- Java 17+
- Maven 3.6+
- Node.js 16+ and npm
- MongoDB (running on localhost:27017)

### Step 1: Start MongoDB
```bash
# Windows: MongoDB should start automatically as a service
# Or run manually:
mongod

# Mac/Linux:
sudo systemctl start mongod
# or
mongod
```

### Step 2: Start Backend
```bash
cd backend
mvn clean install
mvn spring-boot:run
```
Backend will run on: **http://localhost:8080**

### Step 3: Start Frontend (in a new terminal)
```bash
cd frontend
npm install
npm start
```
Frontend will open at: **http://localhost:3000**

### Step 4: Login
- **Username**: `admin`
- **Password**: `admin123`

### Default Admin Account
A default admin user is automatically created on first backend startup.

## 📝 My AI Usage

### AI Tools Used
During the development of this project, I utilized two primary AI coding assistants:

1. **Cursor AI** - An AI-powered code editor that provides real-time code suggestions, autocomplete, and chat-based assistance
2. **ChatGPT** - Used for brainstorming, architectural decisions, and complex problem-solving

### How I Used AI

#### 1. Initial Project Structure Setup
- **Cursor AI**: Used Cursor's inline code generation to create the complete project structure, including Maven `pom.xml` configuration, Spring Boot application setup, and React project scaffolding.
- **ChatGPT**: Consulted ChatGPT for best practices on project organization and dependency management for Spring Boot 3.2.0, React 18, and JWT libraries.

#### 2. Code Generation
- **Cursor AI**: Leveraged Cursor's autocomplete and code generation features to create boilerplate code for controllers, services, repositories, DTOs, and React components.
- **ChatGPT**: Used ChatGPT to understand Spring Boot best practices and React component patterns before implementation.

#### 3. Test Writing (TDD)
- **Cursor AI**: Generated comprehensive test cases for services and controllers using Cursor's test generation capabilities.
- **ChatGPT**: Consulted ChatGPT for TDD best practices and test case design patterns.

#### 4. Security Implementation
- **Cursor AI**: Generated JWT authentication filter and security configuration code.
- **ChatGPT**: Discussed JWT token implementation, Spring Security configuration, and password encryption strategies.

#### 5. API Design
- **ChatGPT**: Consulted ChatGPT for RESTful API endpoint design, naming conventions, and HTTP status code best practices.
- **Cursor AI**: Used Cursor to implement the API endpoints with proper annotations and error handling.

#### 6. Frontend Development
- **Cursor AI**: Generated React components with proper hooks, state management, and event handlers using Cursor's React code generation.
- **ChatGPT**: Discussed React best practices, component architecture, and state management patterns.

#### 7. Documentation
- **Cursor AI**: Used Cursor to generate initial README structure and code documentation.
- **ChatGPT**: Consulted ChatGPT for comprehensive documentation best practices and setup instructions.

#### 8. Debugging and Problem Solving
- **Cursor AI**: Used Cursor's inline error detection and suggestions to fix compilation errors and code issues.
- **ChatGPT**: Consulted ChatGPT for troubleshooting CORS configuration issues, JWT token validation problems, and Spring Security configuration challenges.

### Reflection on AI Impact

**Positive Impacts:**
- **Development Speed**: Cursor AI's real-time code generation significantly accelerated development, reducing time spent on boilerplate code by approximately 60-70%
- **Code Quality**: Both tools helped ensure adherence to Spring Boot and React best practices, resulting in cleaner, more maintainable codebase
- **Learning Enhancement**: ChatGPT provided detailed explanations for complex concepts (JWT, Spring Security, React hooks), while Cursor AI's inline suggestions helped understand code patterns in real-time
- **Problem Solving**: ChatGPT helped brainstorm solutions for architectural decisions, while Cursor AI provided quick fixes for syntax errors and common issues

**Challenges Encountered:**
- **Over-reliance**: Initially relied too heavily on AI-generated code without fully understanding it. Had to review and modify AI suggestions to ensure they fit specific requirements
- **Context Matching**: Sometimes AI suggestions didn't perfectly match the project context, requiring manual adjustments and customization
- **Testing Coverage**: While AI generated test structures, had to manually ensure comprehensive coverage and add additional edge cases

**Responsible Usage Practices:**
1. **Code Review**: Reviewed all AI-generated code before committing to ensure quality and understanding
2. **Customization**: Modified and customized AI suggestions to match specific project requirements
3. **Understanding**: Ensured comprehension of all code used, not just copying blindly
4. **Testing**: Wrote additional tests beyond AI suggestions to ensure comprehensive coverage
5. **Manual Implementation**: Manually implemented business logic and unique features
6. **Git Commits**: Added AI co-authors to commits where AI tools were significantly used:
   ```
   Co-authored-by: Cursor AI <cursor@users.noreply.github.com>
   Co-authored-by: ChatGPT <chatgpt@users.noreply.github.com>
   ```

**Conclusion:**
Both Cursor AI and ChatGPT were invaluable tools that significantly accelerated development and enhanced learning. Cursor AI excelled at real-time code generation and inline assistance, while ChatGPT was excellent for architectural decisions and complex problem-solving. However, I maintained full control over the codebase, ensuring quality, understanding, and proper implementation. The final project represents a collaboration between my programming skills and AI assistance, resulting in a well-structured, tested, and functional application that demonstrates both technical competence and responsible AI usage.

## 🔗 Connect to GitHub

### Initialize Git Repository
```bash
cd SweetShopManagement
git init
```

### Connect to GitHub Repository
```bash
# Add remote repository
git remote add origin https://github.com/yourusername/SweetShopManagement.git

# Verify remote
git remote -v
```

### First Commit and Push
```bash
# Add all files
git add .

# Create initial commit with AI co-authors
git commit -m "Initial commit: Sweet Shop Management System

- Backend: Spring Boot with MongoDB and JWT authentication
- Frontend: React with modern UI
- TDD approach with comprehensive test coverage

Co-authored-by: Cursor AI <cursor@users.noreply.github.com>
Co-authored-by: ChatGPT <chatgpt@users.noreply.github.com>"

# Push to GitHub
git branch -M main
git push -u origin main
```

### Subsequent Commits
```bash
# Stage changes
git add .

# Commit with descriptive message and AI co-authors
git commit -m "feat: Add new feature description

Co-authored-by: Cursor AI <cursor@users.noreply.github.com>"

# Push to GitHub
git push origin main
```

## 🛠️ Technology Stack

- **Backend**: Spring Boot 3.2.0, Java 17, MongoDB, JWT Authentication
- **Frontend**: React 18.2.0, React Router, Axios
- **Testing**: JUnit 5, Mockito

## 📄 License

This project is created for educational purposes as part of a coding kata.
