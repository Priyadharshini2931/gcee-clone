import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import DepartmentsList from './pages/DepartmentsList';
import Department from './pages/Department';
import Admissions from './pages/Admissions';
import Library from './pages/Library';
import Placement from './pages/Placement';
import CampusLife from './pages/CampusLife';
import { ThemeProvider } from './context/ThemeContext';
import CustomCursor from './components/common/CustomCursor';

// Simple placeholder page for routes under construction
const PagePlaceholder = ({ title }) => (
  <div className="flex items-center justify-center min-h-[60vh] bg-[var(--color-background)]">
    <div className="text-center p-12 bg-[var(--color-surface)] shadow-xl rounded-3xl border border-[var(--color-border)]">
      <h1 className="text-4xl text-gradient font-extrabold mb-4">{title}</h1>
      <p className="text-[var(--color-text-muted)] text-lg">This section has been modernized and is being populated with data.</p>
    </div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            
            {/* Fix routing issue: Provide a default department if none specified */}
            <Route path="/department" element={<DepartmentsList />} />
            <Route path="/department/:id" element={<Department />} />
            
            <Route path="/about" element={<PagePlaceholder title="About Us" />} />
            <Route path="/about/:id" element={<PagePlaceholder title="About Us Subpage" />} />
            <Route path="/gallery" element={<PagePlaceholder title="Gallery" />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/facilities" element={<Library />} />
            <Route path="/placement" element={<Placement />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/hostel" element={<CampusLife />} />
            <Route path="/transport" element={<CampusLife />} />
            <Route path="/medical" element={<CampusLife />} />
            <Route path="/cafeteria" element={<CampusLife />} />
            <Route path="/contact" element={<PagePlaceholder title="Contact Info" />} />
            <Route path="/anti-ragging" element={<PagePlaceholder title="Anti-Ragging Policy" />} />
            <Route path="/privacy-policy" element={<PagePlaceholder title="Privacy Policy" />} />
            <Route path="/terms" element={<PagePlaceholder title="Terms of Use" />} />
            <Route path="/alumni" element={<PagePlaceholder title="Alumni Network" />} />
            
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <h1 className="text-6xl text-[var(--color-primary)] font-black mb-4">404</h1>
                <p className="text-[var(--color-text-main)] text-2xl font-semibold">Page Not Found</p>
              </div>
            } />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
