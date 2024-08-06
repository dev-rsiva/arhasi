import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutUs from "../pages/aboutus/index.js";
import OurCustomers from "../pages/ourcustomers/index.js";
import HomePage from "../pages/homepage/index.js";
import ProductsPage from "../pages/Products/index.js";
import AiWithIntegrity from "../pages/AiWithIntegrity/index.js";
import Services from "../pages/Services/index.js";
import ContactUs from "../pages/ContactUs/index.js";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/our-customers", element: <OurCustomers /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/services", element: <Services /> },
      { path: "/ai-with-integrity", element: <AiWithIntegrity /> },
      { path: "/contact-us", element: <ContactUs /> },
    ],
  },
]);
