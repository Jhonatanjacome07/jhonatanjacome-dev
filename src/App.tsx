import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";

// Pages
import HomePage from "./pages/HomePage";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost";

// Components
import FloatingLanguageToggle from "./components/FloatingLanguageToggle";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  return (
    <>
      {/* Canvas invisible solo para el contexto de useProgress */}
      <Canvas style={{ position: 'fixed', top: 0, left: 0, width: 0, height: 0, pointerEvents: 'none' }}>
        <Preload all />
      </Canvas>

      <LoadingScreen />

      <Router>
        <FloatingLanguageToggle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;


