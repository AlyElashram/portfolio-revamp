import { useMode } from '../context/ModeContext'

function Footer() {
  const { isGeekMode } = useMode()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          {isGeekMode ? (
            <>
              <span className="comment">// Built with React</span>
              <span className="comment">// Designed for compiler enthusiasts</span>
            </>
          ) : (
            <>
              <span className="footer-text">Built with React</span>
              <span className="footer-text">© 2024 Aly ElAshram</span>
            </>
          )}
        </div>
        <div className="footer-right">
          {isGeekMode && (
            <><span className="keyword">return</span> <span className="number">0</span><span className="punct">;</span></>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer

