import { Plus, ChevronRight } from 'lucide-react';

interface LibraryProps {
  setCurrentView: (view: string) => void;
}

export function Library({ setCurrentView }: LibraryProps) {
  return (
    <div className="flex-1 h-full overflow-y-auto bg-background p-10">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <header className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground mb-2">
              Good afternoon, Mohit
            </h1>
            <p className="text-muted-foreground text-lg">
              Continue where you left off.
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-foreground rounded-md hover:bg-secondary/80 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add Book</span>
          </button>
        </header>

        {/* Continue Reading */}
        <section>
          <h2 className="text-lg font-medium text-foreground mb-4">Continue Reading</h2>
          <div 
            onClick={() => setCurrentView('reader')}
            className="group flex bg-card border border-border rounded-xl p-4 gap-6 cursor-pointer hover:border-muted-foreground/50 transition-colors"
          >
            <div className="w-32 h-48 bg-muted rounded-md shrink-0 flex items-center justify-center text-muted-foreground shadow-sm">
              Cover
            </div>
            <div className="flex flex-col justify-between py-2 flex-1">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">Operating System Concepts</h3>
                <p className="text-muted-foreground">Abraham Silberschatz</p>
                <p className="text-sm text-muted-foreground mt-4">Chapter 4 · Threads</p>
              </div>
              
              <div>
                <div className="flex justify-between text-sm text-foreground mb-2">
                  <span>64% complete</span>
                </div>
                <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-accent w-[64%] rounded-full" />
                </div>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-accent">
                  Continue reading <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Your Library */}
        <section>
          <h2 className="text-lg font-medium text-foreground mb-4">Your Library</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { title: 'Operating System Concepts', author: 'Abraham Silberschatz', progress: 64 },
              { title: 'Clean Code', author: 'Robert C. Martin', progress: 32 },
              { title: 'Atomic Habits', author: 'James Clear', progress: 82 },
            ].map((book, i) => (
              <div 
                key={i} 
                className="group cursor-pointer"
                onClick={() => setCurrentView('reader')}
              >
                <div className="w-full aspect-[2/3] bg-card border border-border rounded-md mb-3 flex items-center justify-center text-muted-foreground group-hover:border-muted-foreground/50 transition-colors shadow-sm relative overflow-hidden">
                  <span className="text-sm">Cover</span>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary">
                    <div className="h-full bg-accent" style={{ width: `${book.progress}%` }} />
                  </div>
                </div>
                <h3 className="text-foreground font-medium text-sm truncate">{book.title}</h3>
                <p className="text-muted-foreground text-xs">{book.progress}%</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
