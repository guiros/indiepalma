import logo from './indiepalma-logo.png';
import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

function App() {
  const { width } = useWindowSize();
  const isMobile = width < 1000;

  const styles = {
    app: {
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff7e0',
      padding: '1rem'
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2rem',
      maxWidth: '1200px',
      width: '100%'
    },
    subtitleContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '2rem',
      alignItems: 'flex-start',
      justifyContent: 'center',
      width: '100%'
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '500px',
      maxWidth: '100%'
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#666',
      lineHeight: '1.5',
      margin: 0
    },
    subtitle2: {
      fontSize: '1.2rem',
      color: '#666',
      lineHeight: '1.5',
      margin: 0,
      fontWeight: 600
    },
    separator: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '0.5rem',
      margin: '0.5rem 0',
      color: '#666',
      width: '100%',
      justifyContent: 'center'
    },
    dot: {
      width: '4px',
      height: '4px',
      borderRadius: '50%',
      backgroundColor: '#666'
    },
    logo: {
      height: '50vmin',
      maxHeight: '400px',
      pointerEvents: 'none'
    },
    twitterLink: {
      color: '#1DA1F2',
      textDecoration: 'none',
      fontWeight: 500,
      ':hover': {
        textDecoration: 'underline'
      }
    },
    whatsappButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      backgroundColor: '#25D366',
      color: 'white',
      padding: '0.75rem 1.5rem',
      borderRadius: '50px',
      border: 'none',
      fontSize: '1.1rem',
      fontWeight: 600,
      cursor: 'pointer',
      textDecoration: 'none',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s ease-in-out',
      ':hover': {
        transform: 'scale(1.05)'
      }
    },
    whatsappIcon: {
      width: '24px',
      height: '24px'
    }
  };

  return (
    <div style={styles.app}>
      <div style={styles.content}>
        <img src={logo} style={styles.logo} alt="IndiePalma Logo" />
        <a 
          href="https://chat.whatsapp.com/KqSeV0kAXZsCuQp4HbFoP5" 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.whatsappButton}
        >
          <svg 
            style={styles.whatsappIcon}
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Join our WhatsApp group
        </a>
        <a
          href="https://lu.ma/user/usr-AqgOiMhUcMRuNvc"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...styles.whatsappButton,
            backgroundColor: '#ffb347', // orange accent
            color: '#222',
            boxShadow: '0 2px 4px rgba(255,179,71,0.15)',
          }}
        >
         📅  Upcoming Events
        </a>
        <div style={styles.subtitleContainer}>
          <div style={styles.column}>
            <p style={styles.subtitle}>
              Una comunidad de fundadores, indie hackers, desarrolladores y diseñadores en Palma de Mallorca.
            </p>
          </div>
          {isMobile && (
            <div style={styles.separator}>
              <div style={styles.dot}></div>
              <div style={styles.dot}></div>
              <div style={styles.dot}></div>
            </div>
          )}
          <div style={styles.column}>
            <p style={styles.subtitle}>
              A community of founders, indie hackers, developers, designers in Palma de Mallorca.
            </p>
          </div>
          <p style={styles.subtitle}>
             Created by{' '}
              <a 
                href="https://twitter.com/theguiros" 
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.twitterLink}
              >
                @theguiros
              </a>
            </p>
        </div>
      </div>
    </div>
  );
}

export default App;
