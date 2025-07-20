import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Existing Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";

// New Pages for Meals
import Breakfast from "./pages/Breakfast";
import Lunch from "./pages/Lunch";
import Dinner from "./pages/Dinner";

const queryClient = new QueryClient();

const App = () => {
  const [userData, setUserData] = useState<{ username: string; familySize: string } | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* 🔐 Login Route */}
            <Route
              path="/login"
              element={
                <Login
                  onLogin={(data: { username: string; familySize: string }) => setUserData(data)}
                />
              }
            />

            {/* 🎉 Welcome Route */}
            <Route
              path="/welcome"
              element={
                userData ? (
                  <Welcome user={userData.username} onStart={() => {}} />
                ) : (
                  <Login onLogin={(data) => setUserData(data)} />
                )
              }
            />

            {/* 🍽️ New Meal Routes */}
            <Route path="/breakfast" element={<Breakfast />} />
            <Route path="/lunch" element={<Lunch />} />
            <Route path="/dinner" element={<Dinner />} />

            {/* 🏠 Home and fallback */}
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
