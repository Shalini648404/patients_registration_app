# 🏥 Patient Registration App

A frontend-only patient registration app built using **React** and **PGlite** (IndexedDB-backed). This app allows users to:

- Register new patients
- Run custom SQL queries on patient records
- Persist data across page refreshes
- Use the app in multiple browser tabs simultaneously
- Enjoy a responsive UI with dark mode and animated transitions

---

## 🚀 Tech Stack

- **React** (with PWA template)
- **PGlite** for browser-side SQL storage (IndexedDB backend)
- **Framer Motion** for animations
- **CSS** (custom + media queries)

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Shalini648404/patients_registration_app.git
cd patients_registration_app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server
```bash
npm start
```
Visit the app at http://localhost:3000

## 📦 Dependencies

| Package            | Purpose                          |
|--------------------|----------------------------------|
| `react`            | UI framework                     |
| `@electric-sql/pglite` | SQL over IndexedDB in browser   |
| `framer-motion`    | UI animations                    |
| `react-icons`      | Icons (moon/sun toggle)          |

## 🧪 Usage Guide
➕ Register Patient
- Fill in Name, Age, Gender, and Contact.

- Click Register to store the data in the local database.

🔍 Run SQL Queries
- Use the SQL editor panel to run custom SQL queries (e.g., SELECT * FROM patients;).

- Results are shown in a responsive, scrollable table.

🌙 Dark Mode
- Use the toggle in the header to switch between light and dark modes.

## 💾 Data Persistence & Multi-Tab Support
- Data is stored in the browser using IndexedDB via PGlite.

- It remains intact across browser refreshes and is available in multiple open tabs simultaneously.

## 📁 Folder Structure
```
src/
├── components/
│   ├── PatientForm.js
│   ├── SqlQuery.js
│   ├── PatientForm.css
│   └── SqlQuery.css
├── db.js
├── App.js
├── App.css
└── index.js
```
## ⚠️ Challenges Faced
- Handling SQL syntax errors: Since users can input any SQL, input needed validation and error feedback.

- IndexedDB quirks: PGlite abstracts a lot, but debugging persisted storage across tabs required attention.

- Responsive design: Creating a good UX for both form and SQL outputs on mobile took extra CSS tuning.

## 👩‍💻 Author
Shalini
- Github - Shalini648404

## License

This project is licensed under the **MIT License** – feel free to use, modify, and share.
