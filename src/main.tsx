import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import Homepage from './pages/home.tsx'; // Import homepage!
import AboutPage from './pages/about.tsx';
import BlogPage from './pages/blog.tsx';
import BlogDetailPage from './pages/blog-detail.tsx';
import NewsEventsPage from './pages/news-events.tsx';
import NewsEventDetailPage from './pages/news-event-detail.tsx';
import StoryPage from './pages/story.tsx';
import ContactPage from './pages/contact.tsx';
import NEFPanelPage from './pages/panel.tsx';
import EthicsAndCodesPage from './pages/ethics.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} /> {/* Homepage at root */}
          <Route path="about" element={<AboutPage />} /> {/* About at /about */}
          <Route path="blog" element={<BlogPage />} />
  <Route path="blog/:id" element={<BlogDetailPage />} />
  <Route path="news" element={<NewsEventsPage />} />
  <Route path="news/:id" element={<NewsEventDetailPage />} />
  <Route path="story" element={<StoryPage />} />
  <Route path="contact" element={<ContactPage />} />
  <Route path="about/panel" element={<NEFPanelPage />} />
  <Route path="about/ethics" element={<EthicsAndCodesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);