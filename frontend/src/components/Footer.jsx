import React from "react";

export function Footer() {
    return (
      <footer className="bg-primary text-white text-center py-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} Reach APAC. All rights reserved.</p>
      </footer>
    );
}