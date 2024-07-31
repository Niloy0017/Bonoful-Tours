import React, { lazy, Suspense } from "react";
import Register from "./pages/Registered.jsx";
import Login from "./pages/Login.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import { Authroute } from "./privateroutes/Authroute.jsx";
import { Unauthroute } from "./privateroutes/Unauthroute.jsx";
import { Tours } from "./pages/Tours.jsx";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TourDetail } from "./pages/TourDetail.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { Booking } from "./pages/Booking.jsx";
import Order from "./pages/Order.jsx";


function App() {
  const Cart = lazy(() => import("./pages/Cart.jsx"));

  return (
    <div className="app-top">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Unauthroute><Register /></Unauthroute>} />
            <Route path="/login" element={<Unauthroute><Login /></Unauthroute>} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Authroute><Dashboard /></Authroute>} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tourdetails/:id" element={<TourDetail />} />
            <Route path="/cart" element={<Authroute><Cart /></Authroute>} />
            <Route path="/booking" element={<Authroute><Booking /></Authroute>} />
            <Route path="/order" element={<Authroute><Order /></Authroute>} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </div>
  )
}

export default App;




