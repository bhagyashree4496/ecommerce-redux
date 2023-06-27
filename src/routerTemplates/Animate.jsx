import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
export default function Animate() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <div key={location.pathname} location={location}>
        <Outlet></Outlet>
      </div>
    </AnimatePresence>
  );
}
