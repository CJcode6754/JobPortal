<p align="center">
  <img src="public/logo.png" width="120" alt="Job Portal Logo">
</p>

<h1 align="center">💼 Job Portal</h1>
<p align="center">A modern, responsive job board application built with React and styled with Tailwind CSS.</p>

---

## 🚀 Features

- 🌈 **Modern UI Design** with beautiful gradients and smooth animations
- 📱 **Responsive Layout** for desktop, tablet, and mobile
- 🔍 **Job Browsing** with expandable job descriptions
- 🛠️ **Job Management** to add, edit, and delete listings
- 🏢 **Company Profiles** for detailed job context
- 🎨 **Interactive Components** with transitions and hover states
- ✅ **Type Safety** with React Hooks and modern JavaScript

---

## 🛠️ Tech Stack

- ⚛️ **React** – Frontend framework with hooks (`useState`, `useEffect`) and react routers (`Links`, `useLoaderData`, `useNavigate`, `useParams`, `Links`, `NavLinks`)
- 💨 **Tailwind CSS** – Utility-first CSS framework
- 🔧 **React Icons** – Icon library for clean and modern UI
- 🧠 **JavaScript (ES6+)** – Modern JS features and syntax

---

## 📋 Prerequisites

Before running the app, ensure you have:

- **Node.js** v14 or higher
- **npm** or **yarn**

---

## 🔧 Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/CJcode6754/JobPortal.git
   cd job-portal

   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install

   ```

3. **Install Required Packages**

   ```bash
   npm install react-icons --save

    npm i -D json-server
   ```

## 🚀 Getting Started

`bash
    npm run dev
    `

## 🎨 Components Overview

    ```bash
    HomePage: Landing page with hero section & job previews

    Navbar: Responsive navigation bar

    Hero: Hero banner with gradient background

    JobListing: Job card with expandable content

    JobListings: Container for multiple jobs

    JobPage: Detailed job view with company info

    AddJob: Form to post new jobs

    NotFoundPage: 404 error fallback
    ```
## 🔄 State & Data Management
    ```bash
    useState for component states

    useEffect for fetching and syncing data

    JSON Server provides RESTful endpoints for:

    GET /jobs

    POST /jobs

    PUT /jobs/:id

    DELETE /jobs/:id
    ```

## 📱 Responsive Design

    ```bash
    Mobile-first strategy

    Breakpoints with Tailwind utilities

    Flexible layouts using Flexbox & Grid

    Touch-friendly UX with large tap targets
    ```

## 🎯 Usage Guide

    ```bash
    For Job Seekers
    Browse jobs on the homepage

    Click "Browse Jobs" to view all listings

    Select "Read More" to see job details

    For Employers
    Click "Add Job" in navbar

    Fill out job details

    Submit to publish
    ```

## 🔮 Future Enhancements
    ```bash
    Backend Integration: Connect to a real API or database
    User Authentication: Login system for employers and job seekers
    Search Functionality: Filter jobs by location, salary, type
    Application System: Allow candidates to apply directly
    Admin Dashboard: Manage jobs and users
    Email Notifications: Automated job alerts
    Job Categories: Organize jobs by industry or skill
    ```
