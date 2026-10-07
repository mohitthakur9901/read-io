interface NotesProps {
  setCurrentView: (view: string) => void;
}

export function Notes({ setCurrentView }: NotesProps) {
  return (
    <div className="flex-1 h-full overflow-y-auto bg-background p-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground mb-2">Notes</h1>
          <p className="text-muted-foreground text-lg">Your highlights and thoughts.</p>
        </header>

        <div className="space-y-4 mt-8">
          {[
            {
              book: 'Operating System Concepts',
              chapter: 'Chapter 4 · Page 123',
              highlight: 'Virtual memory',
              note: 'Important concept for understanding Linux memory management.'
            },
            {
              book: 'Clean Code',
              chapter: 'Chapter 2 · Page 45',
              highlight: 'Functions should do one thing.',
              note: 'Refactor the authentication module to follow this.'
            }
          ].map((item, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-5 hover:border-muted-foreground/30 transition-colors cursor-pointer group">
              <div className="flex justify-between items-start mb-3">
                <div className="text-sm font-medium text-muted-foreground">{item.book}</div>
                <div className="text-xs text-muted-foreground">{item.chapter}</div>
              </div>
              <div className="border-l-2 border-accent pl-4 mb-4">
                <p className="text-foreground font-medium">{item.highlight}</p>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
