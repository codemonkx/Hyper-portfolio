import { useState, useRef } from 'react'
import Waybar from './components/Waybar'
import Terminal from './components/Terminal'
import WindowManager from './components/WindowManager'
import './App.css'

function App() {
  const [activeWorkspace, setActiveWorkspace] = useState(1)
  const [showTerminal, setShowTerminal] = useState(true)
  const terminalFullscreenRef = useRef(false)

  const handleWaybarToggle = () => {
    if (terminalFullscreenRef.current) {
      terminalFullscreenRef.current = false
      setShowTerminal(false)
      setTimeout(() => {
        setShowTerminal(true)
        terminalFullscreenRef.current = true
      }, 50)
    } else {
      setShowTerminal(!showTerminal)
    }
  }

  return (
    <div className="hyprland-container">
      <Waybar 
        activeWorkspace={activeWorkspace} 
        setActiveWorkspace={setActiveWorkspace}
        showTerminal={showTerminal}
        setShowTerminal={setShowTerminal}
        onToggleTerminal={handleWaybarToggle}
      />
      <WindowManager 
        activeWorkspace={activeWorkspace} 
        showTerminal={showTerminal}
        onTerminalClose={() => setShowTerminal(false)}
        terminalFullscreenRef={terminalFullscreenRef}
      />
    </div>
  )
}

export default App
