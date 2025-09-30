# Mist Fabric – A basic e-commerce clothing store

🔗 **Live Website:** [MistFabric](https://mist-fabric.vercel.app/)

Mist Fabric is my first **Next.js** project, created purely for **learning purposes**.  
I built it to explore Next.js from scratch, understand its features, and gain hands-on experience.  
Through this project, I learned how to structure a Next.js app, handle dynamic data, and build a responsive, interactive user interface.

<img src="https://i.ibb.co.com/hxwfQYZ3/Screenshot-112.png" alt="Homepage Screenshot" className="w-full bg-no-repeat" />

---

## Features

- ✅ Dynamic Product Listing
- ✅ Category & Subcategory Filtering
- ✅ Product Detail Modal
- ✅ Cart System (with `localStorage`)
- ✅ Search Functionality
- ✅ Interactive Toast Notifications
- ✅ Responsive Layout for Desktop & Mobile

---

## Technologies Used

- **Next.js** – React framework with SSR/SSG
- **React** – Component-based UI development
- **Tailwind CSS** – Utility-first CSS framework
- **React Hook Form** – Easy form handling and validation
- **React Toastify** – Notifications for user interactions
- **Swiper** – Modern carousel/slider component
- **MongoDB** – Database for storing product and category data
- **localStorage** – Persisting cart and wishlist data

---

## Project Structure

```bash
mist-fabric/
│
├─ public/                   # Static assets like images, fonts, etc.
├─ src/
│  ├─ app/                   # Next.js app folder
│  │   ├─ pages/             # Page components
│  │   ├─ api/               # API routes
│  │   ├─ loading/           # Loading components
│  │   └─ not-found/         # 404 / Not Found page
│  │
│  ├─ assets/                # Images, icons, and other assets
│  ├─ components/            # Reusable UI components
│  │   ├─ Navbar.jsx
│  │   ├─ Footer.jsx
│  │   ├─ ProductCard.jsx
│  │   └─ Modal.jsx
│  │
│  ├─ context/               # React Context API for global state
│  │   └─ AppContext.jsx
│  │
│  ├─ lib/                   # Utility libraries and helper functions
│  │
│  ├─ style/                 # Tailwind/Global CSS
│  │   └─ index.css
│  │
│  └─ utils/                 # Utility functions
│
├─ package.json
└─ README.md

































## 📖 Project Description

PLAYGRID is a **digital game store platform** inspired by Epic Games Store. It allows users to **explore games, purchase them securely, manage their personal game library, and add favourites/wishlist** for a personalized experience.

### 🔧 Why These Technologies

- **React (with Vite):** For fast development, component reusability, and a modern SPA experience.
- **Tailwind CSS + prebuiltUi:** To build a fully responsive and attractive UI quickly.
- **React Router:** For smooth client-side navigation.
- **Stripe Integration:** To handle secure and real-world payment flows.
- **React Context API & Hooks:** For state management and clean, scalable architecture.
- **Firebase Authentication:** To enable secure and easy user sign-up, login, and identity management.

### 📦 NPM Packages Used

- `react-router-dom` → Client-side routing
- `@stripe/react-stripe-js` & `@stripe/stripe-js` → Payment gateway integration
- `axios` → Handling API requests
- `react-hot-toast` → Notifications & alerts

### ⚡ Challenges Faced

- Integrating the **Stripe payment gateway** smoothly in a React application.
- Managing **state across multiple components** like Library, Cart, and Wishlist.
- Implementing **complex server-side filtering** to ensure efficient data handling and performance.

## ✅ Current Features

- Browse and explore a wide range of games
- Purchase games securely with **Stripe integration**
- Manage owned games in a personal **Game Library**
- Add/remove games from **Favourites** and **Wishlist**
- Interactive **toast notifications** and **modals**
- Fully **responsive design** for mobile, tablet, and desktop
- Clean and scalable **component-based architecture**
- Dashboard to view and manage user activities
- **Game Reviews & Ratings** from users

## 🚀 Future Features

- **Multiplayer Community Features** (friends, chat, achievements)
- **Dark Mode** toggle for accessibility
- **Admin Panel** for game management and analytics

<!-- ## 🚀 Features

- ✅ **Authentication & User Management** – Secure login/logout flow
- ✅ **Game Library** – Browse, search, and filter games dynamically
- ✅ **Favourites & Wishlist** – Add/remove games to personalize experience
- ✅ **Purchase Flow** – Integrated **Stripe payment gateway**
- ✅ **Responsive Design** – Works across mobile, tablet, and desktop
- ✅ **Dashboard** – Manage purchases, favourites, and library
- ✅ **Reusable Components** – Built with React functional components & hooks
- ✅ **Toast Notifications & Modals** – For interactive feedback
- ✅ **Clean Code** – Organized file structure for scalability -->

<!-- ---

## 🛠️ Tech Stack

- **Frontend:** React (Vite), React Router, Context API
- **Styling:** Tailwind CSS, DaisyUI, Custom CSS
- **Payment:** Stripe Integration
- **State Management:** React Hooks & Context
- **Deployment:** Vercel / Surge / GitHub Pages
- **Utilities:** Axios, React Toastify, Recharts

--- -->

## 📂 Project Structure

```

PLAYGRID/
│── public/ # Static assets (images, icons, etc.)
│── src/
│ ├── components/ # Reusable components (cards, modals, buttons)
│ ├── pages/ # Page components (Home, Dashboard, Library, etc.)
│ ├── hooks/ # Custom React hooks
│ ├── context/ # Context API setup for global state
│ ├── utils/ # Helper functions
│ ├── App.jsx # Main application entry
│ └── main.jsx # Vite entry file
│
│── package.json # Project dependencies
│── tailwind.config.js # TailwindCSS configuration
│── README.md # Project documentation

```

```
