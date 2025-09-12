import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // default to dark

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      // default to dark if nothing is stored
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  };
  return (
    <button
      onClick={toggleTheme}
      className="fixed max-sm:hidden top-5 right-5
    z-50 p-2 rounded-full transition-colors duration-300 focus:outline-hidden"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
