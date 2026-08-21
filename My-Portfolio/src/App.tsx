import { useRef, useEffect } from 'react';
import Home from './Pages/Home'
import LoginPage from './Components/LoginPage'
import LoadingBar, { type LoadingBarRef } from "react-top-loading-bar";
import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'

function AppRoutes() {

const loadingBarRef = useRef<LoadingBarRef>(null);
  const location = useLocation();

  useEffect(() => {
    loadingBarRef.current?.continuousStart();
    const timer = setTimeout(() => {
      loadingBarRef.current?.complete();
    }, 400);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <LoadingBar color="#ef4444" ref={loadingBarRef} height={3} />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
