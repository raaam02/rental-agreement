// src/components/Navbar.tsx
import { Link, NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./mode-toggle"

export const Navbar = () => {
  return (
    <header className="border-b sticky top-0 z-50 bg-background">
      <div className="container flex items-center justify-between h-16 sm:px-8 px-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600 hover:text-blue-800">
          RentalAgreement
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 text-base font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                "transition-colors hover:text-foreground/80",
                isActive ? "text-foreground" : "text-foreground/60"
              )
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/create"
            className={({ isActive }) =>
              cn(
                "transition-colors hover:text-foreground/80",
                isActive ? "text-foreground" : "text-foreground/60"
              )
            }
          >
            Create Agreement
          </NavLink>
        </nav>

        {/* Dark Mode Toggle */}
        <ModeToggle />
      </div>
    </header>
  )
}