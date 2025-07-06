
# 📝 Blogsmith

**A minimalist, dark-themed blog app built with the MERN stack.**
Easily create, read, update, and delete blog posts in a clean, card-based interface.

---

## 🚀 Live Demo

* **Frontend:** [https://blogsmith-frontend.vercel.app](https://blogsmith-frontend.vercel.app)
* **Backend:** [https://blogsmith-backend.onrender.com](https://blogsmith-backend.onrender.com)

---

## 🛠 Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* dotenv

---

## 📦 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/blogsmith.git
cd blogsmith
```

### 2. Backend Setup

```bash
cd backend
npm install
# Update `.env` with your MongoDB URI
npm start
```

🔐 `backend/.env`

```bash
MONGO_URI=<your MongoDB Atlas URI>
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
# Update `.env` with your backend API base URL
npm run dev
```

🌐 `frontend/.env`

```bash
VITE_API_URL=<your Backend API base URL>
```

## 📸 Features

* **Dark theme** with a minimalist design.
* **CRUD operations:** Easily create, read, update, and delete blog posts.
* **Card-based UI:** Clean card layout for blog entries.
* **Responsive design:** Works well on desktop and mobile devices.
