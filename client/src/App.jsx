import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Globe from "./components/Globe";
import AllEvents from "./pages/AllEvents";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          index
          element={
            <>
              <Globe />
              <div className="control-buttons">
                {/* Locations Button */}
                <Link to="events/all">
                  <button className="country-button">All Locations</button>
                </Link>

                <Link to="events/USA">
                  <button className="country-button">United States</button>
                </Link>

                <Link to="events/Germany">
                  <button className="country-button">Germany</button>
                </Link>
              </div>
            </>
          }
        />

        {/* Route for specific country */}
        <Route path="events/:country" element={<AllEvents />} />

        {/* Route for all locations */}
        <Route path="events/all" element={<AllEvents />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
