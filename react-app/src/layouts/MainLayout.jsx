import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Chatbot from '../components/common/Chatbot';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen relative bg-[var(--color-background)]">
      <Navbar />
      <main className="flex-grow flex flex-col pt-[72px]">
        {/* Added top padding to prevent content hiding behind fixed modern navbar */}
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default MainLayout;
