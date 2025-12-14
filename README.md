# FitPlanHub 🏋️‍♂️

FitPlanHub is a full-stack fitness plan subscription platform where **trainers create fitness plans** and **users subscribe and follow them**.  
The application demonstrates authentication, role-based access, subscriptions, and a simulated payment flow.

---

## 🚀 Features

### 🔐 Authentication & Authorization
- User and Trainer signup & login
- Password hashing using bcrypt
- JWT-based authentication
- Role-based protected routes

### 🏋️ Trainer Features
- Create, view, and delete fitness plans
- View only their own created plans
- Dedicated trainer dashboard

### 👤 User Features
- View all available fitness plans
- Subscribe to fitness plans (payment simulation)
- View only subscribed plans in dashboard
- Follow trainers (optional extension)

### 💳 Subscription & Payment
- Subscription flow with payment modal
- Simulated payment (no real gateway)
- Access control based on subscription status

### 🎨 UI & UX
- Clean and responsive UI
- Modern card layout for plans
- Toast notifications for actions
- Role-based navigation bar

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- React Router
- Axios
- Context API
- CSS (custom styling)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---
FitPlanHub/
├── fitplanhub-frontend/
│ ├── src/
│ ├── public/
│ └── package.json
│
├── fitplanhub-backend/
│ ├── routes/
│ ├── models/
│ ├── middleware/
│ ├── config/
│ └── server.js
│
└── README.md

--- 

## ⚙️ How to Run the Project Locally



