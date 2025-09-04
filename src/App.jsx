import "./App.css";
import CalendarBarDashboard from "./components/Calender";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex justify-center items-start p-10">
        <div
          className="bg-white shadow-lg rounded-lg w-full p-6"
          style={{ width: "80vw" }}
        >
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">
            Event Metrics Dashboard
          </h1>
          <CalendarBarDashboard />
        </div>
      </div>
      
    </>
  );
}

export default App;
