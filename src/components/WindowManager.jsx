import Terminal from './Terminal'
import './WindowManager.css'

function WindowManager({ activeWorkspace, showTerminal, onTerminalClose, terminalFullscreenRef }) {
  const renderWorkspace = () => {
    switch (activeWorkspace) {
      case 1:
        return <Terminal workspace="home" onClose={onTerminalClose} fullscreenRef={terminalFullscreenRef} />
      case 2:
        return <Terminal workspace="projects" onClose={onTerminalClose} fullscreenRef={terminalFullscreenRef} />
      case 3:
        return <Terminal workspace="skills" onClose={onTerminalClose} fullscreenRef={terminalFullscreenRef} />
      case 4:
        return <Terminal workspace="contact" onClose={onTerminalClose} fullscreenRef={terminalFullscreenRef} />
      default:
        return <Terminal workspace="home" onClose={onTerminalClose} fullscreenRef={terminalFullscreenRef} />
    }
  }

  return (
    <div className="window-manager">
      <div className="workspace-content">
        {showTerminal && renderWorkspace()}
      </div>
    </div>
  )
}

export default WindowManager
