import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

function Content() {
  const { colors } = useTheme();

  return (
    <div style={{
      backgroundColor: colors.background,
      color: colors.text,
      minHeight: '100vh',
      padding: '20px'
    }}>
      <h1>Theme Context Demo</h1>
      <p>This content changes based on the selected theme!</p>
    </div>
  );
}

export default Content;