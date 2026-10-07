import { useState } from "react";
import { ArrowLeft, Type, MoreHorizontal, Sparkles, Scissors, HelpCircle, BookmarkPlus } from "lucide-react";
import { AITutorPanel } from "../ai/AITutorPanel";

interface ReaderProps {
  setCurrentView: (view: string) => void;
}

export function Reader({ setCurrentView }: ReaderProps) {
  const [showTutor, setShowTutor] = useState(false);
  const [showSelectionToolbar, setShowSelectionToolbar] = useState(false);

  const handleSelection = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim().length > 0) {
      setShowSelectionToolbar(true);
    } else {
      setShowSelectionToolbar(false);
    }
  };

  const handleExplain = () => {
    setShowSelectionToolbar(false);
    setShowTutor(true);
  };

  return (
    <div className="flex h-full w-full overflow-hidden bg-background">
      {/* Main Reader Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden transition-all duration-300 relative">
        {/* Header */}
        <header className="h-14 border-b border-border bg-background/80 backdrop-blur-sm flex items-center justify-between px-4 shrink-0 z-10 sticky top-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setCurrentView('library')}
              className="p-1.5 hover:bg-secondary rounded-md text-muted-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="text-sm font-medium text-muted-foreground">Operating System Concepts</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1.5 hover:bg-secondary rounded-md text-muted-foreground transition-colors">
              <Type className="w-4 h-4" />
            </button>
            <button className="p-1.5 hover:bg-secondary rounded-md text-muted-foreground transition-colors">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Reading Content */}
        <div className="flex-1 overflow-y-auto" onMouseUp={handleSelection}>
          <div className="max-w-[700px] mx-auto py-16 px-8 pb-32">
            <div className="mb-12">
              <h4 className="text-accent uppercase tracking-widest text-sm font-semibold mb-3">Chapter 4</h4>
              <h1 className="text-4xl font-bold text-foreground mb-8">Threads</h1>
            </div>

            <div className="reading-font text-[19px] leading-[1.8] text-[#e0dfd9] space-y-6">
              <p>
                A thread is a basic unit of CPU utilization; it comprises a thread ID, a program counter, a register set, and a stack. It shares with other threads belonging to the same process its code section, data section, and other operating-system resources, such as open files and signals.
              </p>
              
              <p>
                A traditional (or heavyweight) process has a single thread of control. If a process has multiple threads of control, it can perform more than one task at a time.
              </p>
              
              <h2 className="text-2xl font-bold font-sans text-foreground mt-12 mb-6">Motivation</h2>
              
              <p>
                Many software packages that run on modern desktop PCs are multithreaded. An application typically is implemented as a separate process with several threads of control.
              </p>
              
              <p>
                Consider a web browser. One thread could be responsible for fetching data or images from the network while another thread displays the text and images.
              </p>

              <p>
                The operating system uses <span className="border-b border-dashed border-accent text-accent cursor-pointer hover:bg-accent/10 transition-colors pb-0.5 relative group">virtual memory<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-card border border-border rounded-lg shadow-xl p-3 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity font-sans text-left">
                  <div className="text-sm font-semibold text-foreground border-b border-border pb-2 mb-2">Virtual Memory</div>
                  <div className="text-xs text-muted-foreground mb-2">Memory abstraction technique</div>
                  <div className="text-xs text-accent flex items-center gap-1 font-medium">Click to understand</div>
                </div></span> to provide processes with an abstraction of memory. In certain situations, a single application may be required to perform several similar tasks. For example, a web server accepts client requests for web pages, images, sound, and so forth. A busy web server may have several (perhaps thousands of) clients concurrently accessing it. If the web server ran as a traditional single-threaded process, it would be able to service only one client at a time, and a client might have to wait a very long time for its request to be serviced.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Selection Toolbar */}
        {showSelectionToolbar && (
          <div className="absolute left-1/2 top-1/4 -translate-x-1/2 bg-card border border-border shadow-xl rounded-lg p-1.5 flex gap-1 animate-in fade-in zoom-in-95 duration-150 z-50">
            <button onClick={handleExplain} className="flex items-center gap-2 px-3 py-1.5 hover:bg-secondary rounded-md text-sm text-foreground transition-colors">
              <Sparkles className="w-3.5 h-3.5 text-accent" /> Explain
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-secondary rounded-md text-sm text-foreground transition-colors">
              <Scissors className="w-3.5 h-3.5" /> Simplify
            </button>
            <div className="w-px bg-border my-1 mx-1"></div>
            <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-secondary rounded-md text-sm text-foreground transition-colors">
              <HelpCircle className="w-3.5 h-3.5" /> Ask
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-secondary rounded-md text-sm text-foreground transition-colors">
              <BookmarkPlus className="w-3.5 h-3.5" /> Save
            </button>
          </div>
        )}
      </div>

      {/* AI Tutor Panel */}
      {showTutor && <AITutorPanel onClose={() => setShowTutor(false)} />}
    </div>
  );
}
