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

## 📥 How to Clone & Run the Project Locally

Follow the steps below to set up and run **FitPlanHub** on your local machine.

---

1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/FitPlanHub.git
```
Navigate into the project directory:
cd FitPlanHub

2️⃣ Backend Setup
Go to the backend folder:
cd fitplanhub-backend

Install backend dependencies:
npm install

Create a .env file inside the fitplanhub-backend folder and add the following:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Start the backend server:
npm run dev

The backend will run at:
http://localhost:5000

3️⃣ Frontend Setup
Open a new terminal and navigate to the frontend folder:
cd fitplanhub-frontend

Install frontend dependencies:
npm install

Start the frontend server:
npm run dev

The frontend will run at:
http://localhost:5173

4️⃣ Access the Application
-Open your browser and visit:
 http://localhost:5173
-Sign up as a User or Trainer
-Login and explore dashboards

---

