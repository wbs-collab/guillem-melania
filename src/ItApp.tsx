import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import It from "./pages/It";
import Projects from "./pages/Projects";

const queryClient = new QueryClient();

const ItApp = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <It />
    </TooltipProvider>
  </QueryClientProvider>
);

export default ItApp;
