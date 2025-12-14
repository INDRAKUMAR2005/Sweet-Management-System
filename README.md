🍬 Sweet Shop Management System

A full-stack Sweet Shop Management System built as part of a Test-Driven Development (TDD) coding kata.
The application allows users to register, log in, browse sweets, purchase items, and (for admin users) manage inventory.

This project demonstrates:

REST API design

Authentication & authorization

Clean architecture and TDD

Frontend–backend integration

Responsible and transparent AI usage

📌 Features Overview
👤 Authentication

User registration and login

JWT-based authentication

Role-based access (USER, ADMIN)

Protected API endpoints

🍭 Sweet Management

Add new sweets (Admin only)

View all available sweets

Search sweets by name, category, or price range

Update sweet details (Admin only)

Delete sweets (Admin only)

📦 Inventory Management

Purchase sweets (quantity decreases)

Purchase disabled when stock is zero

Restock sweets (Admin only)

🧪 Testing & TDD

Unit and controller tests written using JUnit 5 & Mockito

Clear Red → Green → Refactor workflow

Business logic covered with meaningful test cases

🛠 Technology Stack
Backend

Java 17

Spring Boot 3.2

Spring Security

JWT Authentication

MongoDB

JUnit 5, Mockito

Frontend

React 18

Axios

React Hooks

Responsive UI

🚀 Getting Started (Local Setup)
Prerequisites

Java 17+

Maven 3.6+

Node.js 16+

MongoDB (running locally)

Step 1: Start MongoDB
# Windows (usually runs as a service)
mongod

# macOS / Linux
sudo systemctl start mongod
# or
mongod


MongoDB should be available at:

mongodb://localhost:27017

Step 2: Run Backend
cd backend
mvn clean install
mvn spring-boot:run


Backend runs at:

http://localhost:8080

Step 3: Run Frontend
cd frontend
npm install
npm start


Frontend opens at:

http://localhost:3000

Step 4: Default Admin Login

A default admin user is created on first backend startup.

Username: admin
Password: admin123

🔐 API Endpoints Summary
Auth

POST /api/auth/register

POST /api/auth/login

Sweets (Protected)

POST /api/sweets (Admin)

GET /api/sweets

GET /api/sweets/search

PUT /api/sweets/{id} (Admin)

DELETE /api/sweets/{id} (Admin)

Inventory (Protected)

POST /api/sweets/{id}/purchase

POST /api/sweets/{id}/restock (Admin)

🧪 Running Tests
cd backend
mvn test


All tests should pass, validating:

Authentication logic

Authorization rules

Sweet CRUD operations

Inventory updates

🤖 My AI Usage
AI Tools Used

Cursor AI – real-time code suggestions, boilerplate generation, test scaffolding

ChatGPT – architecture discussions, API design, TDD strategy, debugging support

How AI Was Used
Project Setup

Generated initial Spring Boot and React project scaffolding

Assisted with dependency configuration and folder structure

Backend Development

Helped generate controller, service, and security boilerplate

Assisted with JWT authentication and Spring Security configuration

Test-Driven Development

Generated initial test structures

Helped design meaningful test cases

Manual refinement of edge cases and assertions

Frontend Development

Assisted with React component structure and hooks usage

Manual customization of UI logic and API integration

Debugging & Refinement

Troubleshooting JWT, CORS, and security filter issues

Performance and readability improvements

Reflection on AI Impact

What Worked Well

Faster development by reducing boilerplate effort

Improved understanding of Spring Security & JWT

Better test structure and consistency

Challenges

AI suggestions sometimes needed contextual correction

Required careful review to avoid over-generalized solutions

Responsible Usage

All AI-generated code was reviewed and modified

Business logic implemented and verified manually

Full understanding of every component before committing

AI Co-Authorship Transparency

For commits where AI tools were used, co-authors were added as required:

Co-authored-by: Cursor AI 
Co-authored-by: ChatGPT
