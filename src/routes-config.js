import About from "./pages/About";
import Index from "./pages/Index";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import RedirectIndex from "./components/RedirectIndex";

export const routes = [
  { path: "/", component: Index, Index: true },
  { path: "/aboutus", component: About },
  { path: "/service", component: Service },
  { path: "/portfolio", component: Portfolio },
  { path: "/contactus", component: Contact },
  { path: "*", component: RedirectIndex },
];
