import { ThemeProvider, CssBaseline, Box, GlobalStyles } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import WhatWeDo from "./components/WhatWeDo";
import AppreLab from "./components/AppreLab";
import WhyChooseDX from "./components/WhyChooseDX";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import CTA from "./components/CTA";

import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import Resources from "./pages/Resources";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Team from "./pages/Team";
import SuccessStories from "./pages/SuccessStories";
import WorkLab from "./pages/WorkLab";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

import ScrollToTop from "./components/ScrollToTop";

// Page Wrapper for transitions
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
  >
    {children}
  </motion.div>
);

const Home = () => (
  <>
    <Hero />
    <AboutUs />
    <WhatWeDo />
    <AppreLab />
    <WhyChooseDX />
    <Testimonials />
    <CTA />
  </>
);

function AppContent() {
  const location = useLocation();
  
  return (
    <Box sx={{ 
      width: '100vw', 
      maxWidth: '100%', 
      overflowX: 'hidden',
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <ScrollToTop />
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/products" element={<PageWrapper><Products /></PageWrapper>} />
            <Route path="/solutions" element={<PageWrapper><Solutions /></PageWrapper>} />
            <Route path="/resources" element={<PageWrapper><Resources /></PageWrapper>} />
            <Route path="/pricing" element={<PageWrapper><Pricing /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
            <Route path="/stories" element={<PageWrapper><SuccessStories /></PageWrapper>} />
            <Route path="/worklab" element={<PageWrapper><WorkLab /></PageWrapper>} />
            <Route path="/privacy" element={<PageWrapper><Privacy /></PageWrapper>} />
            <Route path="/terms" element={<PageWrapper><Terms /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </Box>
      <Footer />
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles 
        styles={{
          'body': {
            margin: 0,
            padding: 0,
            overflowX: 'hidden',
            width: '100vw',
            maxWidth: '100%',
          },
          '#root': {
            width: '100%',
            maxWidth: '100%',
            overflowX: 'hidden',
          }
        }} 
      />
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
