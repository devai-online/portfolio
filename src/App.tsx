import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@/components/Layout";
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Leadership from "@/components/sections/Leadership";
import Accreditation from "@/components/sections/Accreditation";
import Education from "@/components/sections/Education";
import Research from "@/components/sections/Research";
import Teaching from "@/components/sections/Teaching";
import Ieee from "@/components/sections/Ieee";
import Talks from "@/components/sections/Talks";
import Industry from "@/components/sections/Industry";
import Honours from "@/components/sections/Honours";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/accreditation" element={<Accreditation />} />
            <Route path="/education" element={<Education />} />
            <Route path="/research" element={<Research />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/ieee" element={<Ieee />} />
            <Route path="/talks" element={<Talks />} />
            <Route path="/industry" element={<Industry />} />
            <Route path="/honours" element={<Honours />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
