// ==========================================
// LAYOUT - MainLayout.jsx
// Layout utama yang membungkus semua halaman
// ==========================================
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import CursorGlow from '../components/CursorGlow';

const MainLayout = ({ children, theme, toggleTheme }) => {
  return (
    <div className="noise-texture">
      {/* Custom Cursor */}
      <CursorGlow />

      {/* Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      {/* Main Content */}
      <main>{children}</main>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
