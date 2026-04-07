import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; 

import ErrorBoundary from "./components/ErrorBoundary";
import Homepage from "./pages/homepage";
import Contact from "./pages/contact";
import ProductCatalog from "./pages/product-catalog";
import ProductDetail from "./pages/product-detail";
import QuoteRequest from "./pages/quote-request";
import AboutCompany from "./pages/about-company";
import NotFound from "./pages/NotFound";


const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-catalog" element={<ProductCatalog />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/quote-request" element={<QuoteRequest />} />
        <Route path="/about-company" element={<AboutCompany />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;