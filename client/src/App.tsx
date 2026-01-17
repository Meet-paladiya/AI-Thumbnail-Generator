import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import LenisScroll, { getLenis } from "./components/LenisScroll";
import Generate from "./pages/Generate";
import YtPreview from "./pages/YtPreview";
import MyGeneration from "./pages/MyGeneration";
import Login from "./components/login"
import { useEffect } from "react";

export default function App() {

    const {pathname} = useLocation()
    useEffect(() => {
        // Use requestAnimationFrame to ensure Lenis is ready
        requestAnimationFrame(() => {
            const lenis = getLenis();
            if (lenis) {
                lenis.scrollTo(0, { immediate: true });
            } else {
                // Fallback to window.scrollTo if Lenis isn't initialized yet
                window.scrollTo(0, 0);
            }
        });
    },[pathname])

    return (
        <>
            <LenisScroll />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/generate" element={<Generate />} />
                <Route path="/generate/:id" element={<Generate />} />
                <Route path="/my-generation" element={<MyGeneration />} />
                <Route path="/preview" element={<YtPreview />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </>
    );
}