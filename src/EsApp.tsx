import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Es from "./pages/Es";
import Projects from "./pages/Projects";

const queryClient = new QueryClient();

const EsApp = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Es />
    </TooltipProvider>
  </QueryClientProvider>
);

export default EsApp;
