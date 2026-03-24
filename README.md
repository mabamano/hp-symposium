# 🏰 BIZNOVEXA: Where Innovation Meets Magic

**BIZNOVEXA** is a premium, Harry Potter-themed symposium website designed to provide a magical experience for participants. This platform handles event registrations, displays a real-time house leaderboard, and showcases the mystical challenges awaiting the wizarding world of innovation.

---

## ✨ Features

- **Magical UI/UX:** Stunning, responsive design with glassmorphism, dynamic animations, and Harry Potter aesthetics.
- **Sorting Ceremony:** Participants are sorted into one of the four legendary houses (Gryffindor, Slytherin, Ravenclaw, or Hufflepuff) upon registration.
- **House Leaderboard:** Real-time tracking of house points via Supabase integration.
- **Wizarding Events:** Categorized challenges from "Code Wizardry" (Technical) to "Spell Casting Arena" (Non-technical).
- **Interactive Experience:** Custom magical cursor, floating particles, and smooth transitions.

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed on your system.

### 2. Installation
Clone the repository and install the dependencies:
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory by copying the example:
```bash
cp .env.example .env
```
Update the `.env` file with your **Supabase** credentials:
- `VITE_SUPABASE_URL`: Your Supabase Project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase Anonymous Key

### 4. Database Initialization
Run the migration file located in `supabase/migrations/` in your Supabase SQL Editor to set up the `houses` and `registrations` tables.

### 5. Running the Application
```bash
npm run dev
```

---

## 🛠️ Built With

- **Framework:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Database:** [Supabase](https://supabase.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 📜 Repository Structure
```
├── src/
│   ├── components/       # UI Components (Hero, Navbar, Events, etc.)
│   ├── lib/              # Supabase client configuration
│   └── App.tsx           # Main application entry
├── supabase/
│   └── migrations/       # Database schema and seed data
└── ...
```

*May your innovations be as legendary as the tales of old!* ⚡
