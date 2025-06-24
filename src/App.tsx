import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout.tsx';
import { ThemeProvider } from './context/theme-provider.tsx';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme='dark'>
        <Layout>Hello</Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App