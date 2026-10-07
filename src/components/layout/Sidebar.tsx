import { useState } from 'react';
import { Home, BookOpen, BrainCircuit, Library, PenTool, Settings, UserCircle } from 'lucide-react';

interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

export function Sidebar({ currentView, setCurrentView }: SidebarProps) {
  const navItems = [
    { id: 'library', label: 'Library', icon: Home },
    { id: 'reader', label: 'Reading', icon: BookOpen },
    { id: 'ai-tutor', label: 'AI Tutor', icon: BrainCircuit },
    { id: 'concepts', label: 'Concepts', icon: Library },
    { id: 'notes', label: 'Notes', icon: PenTool },
  ];

  const bottomItems = [
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'profile', label: 'Profile', icon: UserCircle },
  ];

  return (
    <div className="w-[240px] h-screen border-r border-border bg-[#1f2023] flex flex-col justify-between py-6 px-4 shrink-0 transition-all duration-300">
      <div>
        <div className="flex items-center gap-2 px-2 mb-8 text-foreground font-semibold text-lg tracking-wide">
          <BookOpen className="w-5 h-5 text-accent" />
          <span>Read.io</span>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                currentView === item.id
                  ? 'bg-secondary text-foreground font-medium'
                  : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="space-y-1">
        {bottomItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
              currentView === item.id
                ? 'bg-secondary text-foreground font-medium'
                : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
            }`}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
