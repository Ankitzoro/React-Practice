import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Content />
    </ThemeProvider>
  );
}





export default App;