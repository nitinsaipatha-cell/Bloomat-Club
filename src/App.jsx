import React from 'react';
import './App.css'; 

// Although we replaced index.css, Vite usually imports index.css in main.jsx.
// App.css is often imported here. I should probably clear App.css or just not use it if I put everything in index.css.
// To be safe, I'll rely on the global styles in index.css and not use classes from App.css unless I define them.
// Actually, for simplicity, I'll remove the App.css import or ensure it doesn't conflict. 
// I'll leave it but I won't rely on it. My styles are in index.css which applies globally.
// Better: I will overwrite App.css with empty content later to avoid conflicts.

function App() {
  return (
    <>
      {/* Background Atmosphere */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <main className="container">
        <div className="message-box">
          <a href="/" className="brand-link">
            Bloomat Club
          </a>
          
          <h1>Something went wrong on our end.</h1>
          <p>We’re fixing it now.</p>
        </div>
      </main>
    </>
  );
}

export default App;
