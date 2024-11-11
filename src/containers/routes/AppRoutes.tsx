import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../../components/protected-route";

const Home = lazy(() => import("../../pages/panel/home"));
const Products = lazy(() => import("../../pages/panel/products"));
const AboutUs = lazy(() => import("../../pages/panel/about-us"));
const Originality = lazy(() => import("../../pages/panel/originality"));
const Collections = lazy(() => import("../../pages/panel/collections"));
const WhereToBuy = lazy(() => import("../../pages/panel/where-to-buy"));
const OurWorks = lazy(() => import("../../pages/panel/our-works"));
const ContactUs = lazy(() => import("../../pages/panel/contact-us"));
const PanelContainer = lazy(() => import("../../containers/panel"));
const LoginPage = lazy(() => import("../../pages/login"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<PanelContainer />}>
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/originality" element={<Originality />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/where-to-buy" element={<WhereToBuy />} />
            <Route path="/our-works" element={<OurWorks />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
