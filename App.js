// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import MyLearning from './pages/MyLearning';
import Courses from './pages/Courses';
import Assignments from './pages/Assignments';
import Rightsidebar from './components/Rightsidebar';
import './App.css';

function Layout() {
  const location = useLocation();
  const isDashboard = location.pathname === '/';

  return (
    <div className="main-layout">
      <Sidebar />
      <div
        className={`Dash ${isDashboard ? 'with-rightbar dashboard-padding' : 'no-rightbar other-pages-padding'}`}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/learning" element={<MyLearning />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/assignments" element={<Assignments />} />
        </Routes>
      </div>
      {isDashboard && (
        <div className="right-sidebar">
          <Rightsidebar />
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
