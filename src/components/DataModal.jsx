import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import { closeModal } from "../redux/calendarSlice";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function DataModal() {
  const dispatch = useDispatch();
  const { selectedEvent, modalOpen } = useSelector((state) => state.calendar);

  if (!modalOpen) return null;

  const getChartData = () => {
    if (!selectedEvent || !selectedEvent.users) return null;

    const labels = selectedEvent.users.map((item) => Object.keys(item)[0]);
    const values = selectedEvent.users.map((item) => Object.values(item)[0]);

    return {
      labels,
      datasets: [
        {
          label: "User Data",
          data: values,
          backgroundColor: "rgba(75,192,192,0.7)",
        },
      ],
    };
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-transparent">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={() => dispatch(closeModal())}
        >
          ✕
        </button>

        {selectedEvent &&
        selectedEvent.users &&
        selectedEvent.users.length > 0 ? (
          <Bar key={selectedEvent.start} data={getChartData()} />
        ) : (
          <div className="text-center text-red-600 font-semibold py-6">
            No data found for the selected date.
          </div>
        )}
      </div>
    </div>
  );
}

export default DataModal;
