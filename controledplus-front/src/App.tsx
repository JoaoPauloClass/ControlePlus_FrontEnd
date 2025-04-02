import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">(
    localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );

  useEffect(() => {
    console.log("Aplicando tema:", theme); // 🔥 Agora mostra o valor atualizado

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen bg-background text-color flex flex-col items-center justify-center">
      <button onClick={toggleTheme} className="px-4 py-2 bg-primary text-white rounded-lg">
        Alternar tema
      </button>
      <p className="text-color mt-4">Ampgnis</p>
    </div>
  );
}

export default App;
