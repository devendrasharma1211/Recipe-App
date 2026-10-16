import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./shell.jsx";
import Recipes from "./pages/Recipes.jsx";
import Home from "./pages/Home.jsx";
import "./styles.css";

const RecipeDetail = lazy(() => import("./pages/RecipeDetail.jsx"));
const About = lazy(() => import("./pages/About.jsx"));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense
          fallback={
            <div
              className="flex min-h-[50vh] items-center justify-center gap-3 text-sm text-stone-500"
              role="status"
            >
              <span className="size-2 animate-pulse rounded-full bg-orange-700" />
              Gathering something delicious…
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:slug" element={<RecipeDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
