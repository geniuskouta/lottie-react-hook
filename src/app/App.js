import React, { useRef, useEffect } from 'react';
import lottie from 'lottie-web';

const styles = {
  container: {
    maxWidth: '320px',
    margin: '0 auto'
  }
}

function App() {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./3046-me-at-office.json')
    })
  }, [])
  
  return (
    <div className="App">
      <div style={styles.container} ref={container}></div>
    </div>
  );
}

export default App;
