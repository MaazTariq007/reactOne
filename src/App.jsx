import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import Meals from "./components/Meals";
import Hotels from "./components/Hotels";
import HotelDetails from "./components/HotelDetails";
import EditHotelPage from "./components/EditHotelPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hotels />} />
        <Route path="/create" element={<Create />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/details/:id" element={<HotelDetails />} />
        <Route path="/editPage/:data" element={<EditHotelPage />} />
      </Routes>
    </>
  );
}

export default App;
