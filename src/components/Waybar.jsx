import { useState, useEffect } from 'react'
import './Waybar.css'

function Waybar({ activeWorkspace, setActiveWorkspace, showTerminal, setShowTerminal, onToggleTerminal }) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const workspaces = [
    { id: 1, name: 'home', icon: '~' },
    { id: 2, name: 'projects', icon: '' },
    { id: 3, name: 'skills', icon: '' },
    { id: 4, name: 'contact', icon: '' },
  ]

  return (
    <div className="waybar">
      <div className="waybar-left">

        <a 
          href="https://www.linkedin.com/in/nithin-devigner/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="waybar-module social-link linkedin"
        >
          <img src="/linkedin-logo.svg" alt="LinkedIn" className="social-icon" />
        </a>
        <a 
          href="https://github.com/codemonkx" 
          target="_blank" 
          rel="noopener noreferrer"
          className="waybar-module social-link github"
        >
          <img src="/github-logo.svg" alt="GitHub" className="social-icon" />
        </a>

        <a 
          href="mailto:nithinx002@gmail.com" 
          className="waybar-module social-link gmail"
        >
          <img src="/gmail-logo.svg" alt="Gmail" className="social-icon" />
        </a>

      </div>
      
      <div className="waybar-center">
        <div className="waybar-name">Nithin Portfolio</div>
      </div>
      
      <div className="waybar-right">
        <button 
          className="waybar-module console"
          onClick={onToggleTerminal}
          title={showTerminal ? "Hide Terminal" : "Show Terminal"}
        >
          <img src="/terminal-icon.svg" alt="Terminal" className="social-icon" />
        </button>
        <div className="waybar-module battery">
          <span className="icon">🔋</span>
          <span>100%</span>
        </div>
        <div className="waybar-module volume">
          <span className="icon">🔊</span>
          <span>50%</span>
        </div>
        <div className="waybar-module weather-time">
          <span className="icon">📍</span>
          <span>Bangalore</span>
          <span className="time-separator">•</span>
          <span>{time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>
    </div>
  )
}

export default Waybar
