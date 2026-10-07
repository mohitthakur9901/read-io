interface SettingsProps {
  setCurrentView: (view: string) => void;
}

export function Settings({ setCurrentView }: SettingsProps) {
  return (
    <div className="flex-1 h-full overflow-y-auto bg-background p-10">
      <div className="max-w-2xl mx-auto space-y-10">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground text-lg">Manage your reading experience and AI preferences.</p>
        </header>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-lg font-medium text-foreground border-b border-border pb-2">Appearance</h2>
            
            <div className="flex justify-between items-center py-2">
              <span className="text-foreground">Theme</span>
              <select className="bg-secondary border border-border text-foreground text-sm rounded-md px-3 py-1.5 focus:outline-none">
                <option>Dark</option>
                <option>Light</option>
                <option>System</option>
              </select>
            </div>
            
            <div className="flex justify-between items-center py-2">
              <span className="text-foreground">Font Size</span>
              <input type="range" className="accent-accent" />
            </div>
            
            <div className="flex justify-between items-center py-2">
              <span className="text-foreground">Reading Width</span>
              <input type="range" className="accent-accent" />
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-medium text-foreground border-b border-border pb-2">AI Settings</h2>
            
            <div className="flex justify-between items-center py-2">
              <span className="text-foreground">Provider</span>
              <select className="bg-secondary border border-border text-foreground text-sm rounded-md px-3 py-1.5 focus:outline-none">
                <option>Local (Ollama)</option>
                <option>Cloud (OpenAI)</option>
                <option>Cloud (Anthropic)</option>
              </select>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
