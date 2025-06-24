import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout.tsx';
import { ThemeProvider } from './context/theme-provider.tsx';
import WeatherDashboard from './pages/weather-dashboard.tsx';
import CityPage from './pages/city-page.tsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
//test
import { weatherAPI } from './api/weather.ts';

const queryClient = new QueryClient()
const App = () => {
   useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await weatherAPI.getCurrentWeather({ lat: 22.3, lon: 70.8 });
        console.log("🌤️ Current Weather:", data);
      } catch (error) {
        console.error("❌ Error getting weather:", error);
      }
    };

    fetchWeather();
  }, []);
  QueryClientProvider
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider defaultTheme='dark'>
          <Layout>
            <Routes>
              <Route path='/' element={<WeatherDashboard/>}/>
              <Route path='/city/:cityName' element={<CityPage/>}/>
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
      <h1>Check console for weather info</h1>
    </QueryClientProvider>
  )
}

export default App