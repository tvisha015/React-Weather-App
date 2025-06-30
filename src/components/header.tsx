import { useTheme } from '@/context/theme-provider'
import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom'
import {CitySearch} from './city-search';

const Header = () => {
    const {theme, setTheme} = useTheme();
    const isDark = theme === "dark";
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
        <div className="container mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 h-auto sm:h-16 px-4">
            
            {/* Logo */}
            <div className="flex justify-between items-center w-full sm:w-auto">
            <Link to={"/"}>
                <img src={isDark ? "/logo.png" : "/logo2.png"} alt="Klimate logo" className="w-14" />
            </Link>

            {/* Theme toggle (mobile) */}
            <div onClick={() => setTheme(isDark ? "light" : "dark")} className="sm:hidden flex items-center cursor-pointer">
                {isDark ? (
                <Sun className="h-6 w-6 text-yellow-300" />
                ) : (
                <Moon className="h-6 w-6 text-green-700" />
                )}
            </div>
            </div>

            {/* Search & Theme (desktop) */}
            <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
            <CitySearch />

            {/* Theme toggle (desktop) */}
            <div onClick={() => setTheme(isDark ? "light" : "dark")} className="hidden sm:flex items-center cursor-pointer">
                {isDark ? (
                <Sun className="h-6 w-6 text-yellow-300" />
                ) : (
                <Moon className="h-6 w-6 text-green-700" />
                )}
            </div>
            </div>

        </div>
    </header>

  )
}   

export default Header