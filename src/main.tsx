import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App.tsx';
import { CaseStudyPage } from './pages/CaseStudyPage.tsx';
import { PaletteProvider } from './PaletteProvider.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/1/" replace />} />
      <Route
        path="/:paletteId/"
        element={
          <PaletteProvider>
            <App />
          </PaletteProvider>
        }
      />
      <Route
        path="/:paletteId/case-study"
        element={
          <PaletteProvider>
            <CaseStudyPage />
          </PaletteProvider>
        }
      />
    </Routes>
  </BrowserRouter>
);
