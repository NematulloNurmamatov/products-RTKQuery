import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/Store.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import Products from "./pages/Products.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={< Products />} />
            <Route path="/product-details/:id" element={< ProductDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
