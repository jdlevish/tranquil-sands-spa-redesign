import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { useEffect } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

const imageMap: Record<string, string> = {
  "/manus-storage/hero_e01c93f8.jpg": "images/01_hero_scalp_ritual.jpg",
  "/manus-storage/arm_treatment_740780ff.jpg": "images/02_scalp_facial_treatment.jpg",
  "/manus-storage/lounge_full_683b3e67.jpg": "images/03_front_lounge_full.jpg",
  "/manus-storage/lounge_sunlight_a496149d.jpg": "images/04_front_lounge_golden_hour.jpg",
  "/manus-storage/desert_landscape_b7dfb3b7.jpg": "images/05_palm_desert_landscape.jpg",
  "/manus-storage/oway_herbs_bowl_76935212.jpg": "images/06_oway_botanical_herbs.jpg",
  "/manus-storage/tranquil_sands_logo_v2_1dc305bb.png": "images/07_tranquil_sands_logo.png",
};

function useStaticImagePaths() {
  useEffect(() => {
    const base = import.meta.env.BASE_URL;

    const rewriteImages = () => {
      document.querySelectorAll<HTMLImageElement>('img[src^="/manus-storage/"]').forEach((img) => {
        const replacement = imageMap[img.getAttribute("src") || ""];
        if (replacement) {
          img.src = `${base}${replacement}`;
        }
      });
    };

    rewriteImages();

    const observer = new MutationObserver(rewriteImages);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);
}

function Router() {
  useStaticImagePaths();

  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/tranquil-sands-spa-redesign/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
