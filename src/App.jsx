import "./App.css";
import CalendarBarDashboard from "./components/Calender";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <CalendarBarDashboard />
      </Provider>
    </>
  );
}

export default App;
