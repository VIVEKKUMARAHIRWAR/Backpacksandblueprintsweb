import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import StudyTours from "./pages/StudyTours";
import HeritageWalks from "./pages/HeritageWalks";
import Documentation from "./pages/Documentation";
import Collaborations from "./pages/Collaborations";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Toaster } from "@/components/ui/sonner";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/study-tours" element={<StudyTours />} />
        <Route path="/heritage-walks" element={<HeritageWalks />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;