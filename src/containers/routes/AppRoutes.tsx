import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../../pages/panel/home"));
const Products = lazy(() => import("../../pages/panel/products"));
const AboutUs = lazy(() => import("../../pages/panel/about-us"));
const Originality = lazy(() => import("../../pages/panel/originality"));
const Collections = lazy(() => import("../../pages/panel/collections"));
const WhereToBuy = lazy(() => import("../../pages/panel/where-to-buy"));
const OurWorks = lazy(() => import("../../pages/panel/our-works"));
const ContactUs = lazy(() => import("../../pages/panel/contact-us"));
const PanelContainer = lazy(() => import("../../containers/panel"));

const isLogin = true;

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<PanelContainer />}>
          <Route path="/home" element={isLogin && <Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/originality" element={<Originality />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/where-to-buy" element={<WhereToBuy />} />
          <Route path="/our-works" element={<OurWorks />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
