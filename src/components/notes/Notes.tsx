import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";

interface Note {
  id: string;
  title: string;
  content: string;
  created_at: string;
}

export function Notes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const fetchedNotes = await invoke<Note[]>("get_notes");
        setNotes(fetchedNotes);
      } catch (e) {
        console.error("Failed to fetch notes:", e);
        setError(String(e));
      }
    }
    fetchNotes();
  }, []);

  return (
    <div className="flex-1 h-full overflow-y-auto bg-background p-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground mb-2">Notes</h1>
          <p className="text-muted-foreground text-lg">Your highlights and thoughts.</p>
        </header>

        {error && <div className="text-destructive bg-destructive/10 p-4 rounded-md">Error connecting to DB: {error}</div>}

        <div className="space-y-4 mt-8">
          {notes.length === 0 && !error && <div className="text-muted-foreground">No notes found. Database might be empty.</div>}
          {notes.map((item) => (
            <div key={item.id} className="bg-card border border-border rounded-xl p-5 hover:border-muted-foreground/30 transition-colors cursor-pointer group">
              <div className="flex justify-between items-start mb-3">
                <div className="text-sm font-medium text-foreground">{item.title}</div>
                <div className="text-xs text-muted-foreground">{new Date(item.created_at).toLocaleDateString()}</div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
