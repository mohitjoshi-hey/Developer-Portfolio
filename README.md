# Developer Portfolio

A modern and responsive developer portfolio built with **Next.js 16**, **React**, **TypeScript**, and **Tailwind CSS**. This portfolio showcases my projects, coding profiles, open-source contributions, technical skills, and provides an easy way for recruiters and developers to connect with me.

🌐 **Live Demo:** https://developer-portfolio-jmsi4eee9-mohit-joshis-projects-b6cd9ed2.vercel.app/

---

## ✨ Features

* Built with Next.js App Router
* Dynamic GitHub profile integration
* Live LeetCode statistics
* Live CodeChef statistics
* Open Source Contributions section
* Resume preview & download
* Functional contact form powered by Resend
* Interactive hero section with typing animation
* Deployed on Vercel

---

## 🛠️ Tech Stack

### Frontend

* Next.js 16
* React
* TypeScript
* Tailwind CSS

### UI Libraries

* React Icons
* Lucide React
* Sonner (Toast Notifications)

### APIs

* GitHub REST API
* LeetCode API
* CodeChef API
* Resend Email API

### Deployment

* Vercel

---

## 📂 Sections

* Hero
* Projects
* Developer Dashboard
* Open Source Contributions
* About Me
* Contact
* Resume Preview

---

## 💡 Challenges Faced

During development I encountered several real-world engineering challenges:

### 1. Production API Calls

Initially, internal API requests used:

http://localhost:3000/api/...

This worked locally but failed after deployment because Vercel does not have a local server running at `localhost:3000`.

**Solution**

Implemented a production-aware base URL using environment variables.

---

### 2. Resend Deployment Error

The production build failed because the Resend API key was only available inside `.env.local`.

**Solution**

Configured the required environment variables inside the Vercel Dashboard.

---

### 3. Dynamic Card Heights

Different coding profile cards had inconsistent heights.

**Solution**

Standardized layouts using fixed heights and consistent spacing.

---

### 4. Hero Section Layout Shift

The typing animation caused the profile image to move while text changed.

**Solution**

Reserved layout space for the typing animation to eliminate layout shifts.

---

### 5. Global Background

Originally every section had its own background.

**Solution**

Created a single global animated background shared across the entire website.

---

## 🤖 AI Assistance

This project was built as a personal learning experience with guidance from AI for:

* UI/UX improvements
* Component architecture
* Debugging TypeScript issues
* API integration
* Deployment troubleshooting
* Responsive layout optimization
* Performance improvements
* Resume modal implementation
* GitHub, LeetCode & CodeChef integrations

All features were implemented, customized and integrated into the final project as part of my learning process.

---

## 🚀 Running Locally

```bash
git clone <repository-url>

cd Developer-Portfolio

npm install

npm run dev
```

---

## 🌐 Deployment

Hosted on **Vercel**.

---

## 📬 Contact

**Mohit Joshi**

Computer Science Student • IIIT Una

GitHub: https://github.com/mohitjoshi-hey

Portfolio: https://developer-portfolio-jmsi4eee9-mohit-joshis-projects-b6cd9ed2.vercel.app/

---

## 📜 License

This project is released under the MIT License.
