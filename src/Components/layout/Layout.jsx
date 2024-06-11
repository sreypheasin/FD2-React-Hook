import React from "react";
import { NavbarComponent } from "../navbar/NavbarComponent";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <NavbarComponent />
      </header>
      <main className="max-w-screen-xl mx-auto">
        <Outlet />
      </main>
    </>
  );
}
