import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Sidebar from "./Shared/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route index element={<Dashboard />} />
            <Route path="messages" element={<></>} />
            <Route path="calendar" element={<></>}/>
            <Route path="*" element={<></>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
