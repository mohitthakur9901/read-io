import { Sparkles, X, ChevronRight, BookmarkPlus, HelpCircle } from "lucide-react";

interface AITutorPanelProps {
  onClose: () => void;
}

export function AITutorPanel({ onClose }: AITutorPanelProps) {
  return (
    <div className="w-[400px] h-full bg-card border-l border-border flex flex-col shadow-lg shrink-0 overflow-hidden animate-in slide-in-from-right duration-200">
      <div className="px-5 py-4 border-b border-border flex justify-between items-center bg-card z-10">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="font-semibold text-foreground">AI Tutor</span>
        </div>
        <button 
          onClick={onClose}
          className="p-1 hover:bg-secondary rounded-md text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-5 space-y-6">
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Understanding</div>
          <h2 className="text-2xl font-semibold text-foreground">Virtual Memory</h2>
          <div className="text-sm text-muted-foreground mt-1">Based on: Chapter 4 · Memory Management</div>
        </div>

        <div className="space-y-4">
          <p className="text-foreground leading-relaxed text-sm">
            Virtual memory is a memory management technique that provides an "idealized abstraction of the storage resources that are actually available on a given machine" which "creates the illusion to users of a very large (main) memory."
          </p>
          
          <div className="bg-secondary/50 p-4 rounded-lg border border-border">
            <h3 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
              <span className="text-accent">💡</span> Analogy
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Think of physical RAM as the space on your physical office desk, and virtual memory as the massive filing cabinet in the corner. You can only work on the documents currently on your desk (RAM), but the OS smoothly swaps folders between the desk and the cabinet (disk) so seamlessly that it feels like you have a desk the size of the room.
            </p>
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Explore Further</h3>
          {[
            "Explain technically",
            "Why does this matter?",
            "Show prerequisites",
            "Connect to another concept",
            "Quiz me"
          ].map((action, i) => (
            <button key={i} className="w-full text-left px-3 py-2 rounded-md bg-secondary text-sm text-foreground hover:bg-secondary/80 transition-colors flex justify-between items-center group">
              {action}
              <ChevronRight className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </div>
      
      <div className="p-4 border-t border-border bg-card">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Ask anything..." 
            className="w-full bg-secondary border border-border rounded-lg pl-3 pr-10 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-accent text-foreground"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-accent rounded-md">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
