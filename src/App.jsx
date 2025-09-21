import { ThemeProvider, CssBaseline, Box, GlobalStyles } from "@mui/material";
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
      <Box sx={{ 
        width: '100vw', 
        maxWidth: '100%', 
        overflowX: 'hidden',
        margin: 0,
        padding: 0
      }}>
        <Navbar />
        <Hero />
        <AboutUs />
        <WhatWeDo />
        <AppreLab />
        <WhyChooseDX />
        <Testimonials />
        <CTA/>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
