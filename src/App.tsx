import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route, useParams } from "react-router-dom";
import { LanguageProvider } from "./i18n";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import NotFound from "./pages/NotFound";

const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Research = lazy(() => import("./pages/Research"));
const Technology = lazy(() => import("./pages/Technology"));
const Distributors = lazy(() => import("./pages/Distributors"));

// Remount per product so the selected tab resets when navigating between products.
function ProductRoute() {
  const { slug } = useParams();
  return <ProductDetail key={slug} />;
}

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductRoute />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/research" element={<Research />} />
              <Route path="/distributors" element={<Distributors />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </HashRouter>
    </LanguageProvider>
  );
}
