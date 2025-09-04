# EventMetrics

EventMetrics is a React-based web application that combines **React Big Calendar** with **Bar Charts** to display event data in a visually interactive way.

---

## ✅ Features
- View events in **Month / Week / Day** views.
- Click on a date → Opens a **modal** with a **bar chart**.
- If no data for the selected date → Displays **"No data found"**.
- Blurred background modal for a modern UI.
- State management using **Redux Toolkit**.
- Compatible with **Windows, Mac, and Linux**.

---

## 📂 Project Structure

eventmetrics/
├── src/
│ ├── components/
│ │ ├── Calendar.jsx # Main calendar component
│ │ ├── DataModal.jsx # Modal for bar graph
│ ├── data/
│ │ ├── sample.jsx # Dummy event data
│ ├── redux/
│ │ ├── store.jsx # Redux store setup
│ │ ├── calendarSlice.jsx # Modal & selected event state
│ ├── App.jsx # Root component
│ ├── main.jsx # Vite entry point
├── package.json
├── vite.config.js
└── README.md



---

## 🛠 Tech Stack
- **React** (UI)
- **Redux Toolkit** (State Management)
- **React Big Calendar** (Calendar UI)
- **Chart.js + react-chartjs-2** (Bar Charts)
- **Tailwind CSS** (Styling)
- **Vite** (Build tool)

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

git clone <your-repo-url>
cd eventmetrics

### 2️⃣ Install Dependencies

npm install

### 3️⃣ Run in Development Mode

```bash