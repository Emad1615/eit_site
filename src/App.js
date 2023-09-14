import { Route, Routes } from "react-router-dom";
import { routes } from "./routes-config";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <main>
        <Navbar />
        <div>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
                index={route.Index}
              />
            ))}
          </Routes>
        </div>
        <Footer />
      </main>
    </>
  );
}
