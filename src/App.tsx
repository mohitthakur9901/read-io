import { useState, useEffect } from "react";
import { Sidebar } from "./components/layout/Sidebar";
import { Library } from "./components/library/Library";
import { Reader } from "./components/reader/Reader";
import { Notes } from "./components/notes/Notes";
import { Settings } from "./components/settings/Settings";

function App() {
  const [currentView, setCurrentView] = useState("library");

  useEffect(() => {
    // Force dark mode on the document body for this app
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-background text-foreground font-sans">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      
      <main className="flex-1 h-full overflow-hidden flex flex-col relative">
        {currentView === "library" && <Library setCurrentView={setCurrentView} />}
        {currentView === "reader" && <Reader setCurrentView={setCurrentView} />}
        {currentView === "notes" && <Notes />}
        {currentView === "settings" && <Settings />}
        
        {/* Placeholders for MVP missing screens */}
        {currentView === "ai-tutor" && <div className="p-10 flex-1 flex items-center justify-center text-muted-foreground">AI Tutor Page</div>}
        {currentView === "concepts" && <div className="p-10 flex-1 flex items-center justify-center text-muted-foreground">Concepts Page</div>}
        {currentView === "profile" && <div className="p-10 flex-1 flex items-center justify-center text-muted-foreground">Profile Page</div>}
      </main>
    </div>
  );
}

export default App;
