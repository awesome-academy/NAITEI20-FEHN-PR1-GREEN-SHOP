import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import LayoutUser from "./Layouts/LayoutUser.jsx";
import Home from "./pages/Home/index.jsx";
import ProductList from "./pages/ProductList/index.jsx";
import Cart from "./pages/Cart/index.jsx";
import ProductDetail from "./pages/ProductDetail/index.jsx";
import News from "./pages/News/index.jsx";
import NewsDetail from "./pages/NewsDetail/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutUser />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/detail" element={<NewsDetail />} />
          <Route path="app" element={<App />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
