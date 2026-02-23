import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HibiscusCard from "./pages/HibiscusCard";
import MiCardPage from "./pages/MiCardPage";
import BusinessLoanPage from "./pages/BusinessLoanPage";
import FisheriesLoanPage from "./pages/FisheriesLoanPage";
import FarmersLoanPage from "./pages/FarmersLoanPage";
import MiCashPage from "./pages/MiCashPage";
import MiLoanPage from "./pages/MiLoanPage";
import MiPikininiPage from "./pages/MiPikininiPage";
import SchoolFeeLoanPage from "./pages/SchoolFeeLoanPage";
import SolaPawaPage from "./pages/SolaPawaPage";
import TermDepositsPage from "./pages/TermDepositsPage";
import VehicleLoanPage from "./pages/VehicleLoanPage";
import NotFound from "./pages/NotFound";
import ConvoCoreChat from "./components/ConvoCoreChat";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ConvoCoreChat />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hibiscus-card" element={<HibiscusCard />} />
          <Route path="/micard" element={<MiCardPage />} />
          <Route path="/business-loan" element={<BusinessLoanPage />} />
          <Route path="/fisheries-loan" element={<FisheriesLoanPage />} />
          <Route path="/farmers-loan" element={<FarmersLoanPage />} />
          <Route path="/micash" element={<MiCashPage />} />
          <Route path="/miloan" element={<MiLoanPage />} />
          <Route path="/mipikinini" element={<MiPikininiPage />} />
          <Route path="/school-fee-loan" element={<SchoolFeeLoanPage />} />
          <Route path="/sola-pawa" element={<SolaPawaPage />} />
          <Route path="/term-deposits" element={<TermDepositsPage />} />
          <Route path="/vehicle-loan" element={<VehicleLoanPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
