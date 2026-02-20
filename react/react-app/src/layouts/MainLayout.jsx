import React, { use, useContext } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeContext } from "../contexts/ThemeContext";

export default function MainLayout() {
  const { theme } = useContext(ThemeContext);
  const color = theme === "dark" ? "bg-dark text-light" : "bg-light text-dark";
  return (
    <>
      <Navbar />
      <main className={color}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
