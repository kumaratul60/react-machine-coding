import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Cart from "./pages/cart";
import Error from "./components/error";
import Layout from "./Layout";
import ProductListing from "./components/paginationProductListing";
// import ProductListing from "./components/productListing";

const routesArr = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <ProductListing /> },
      { path: "cart", element: <Cart /> },
    ],
    errorElement: <Error />,
  },
];

// const routesArr = createRoutesFromElements(
//   <Route path="/" element={<Layout />}>
//     <Route path="" element={<ProductListing />} />
//     <Route path="cart" element={<Cart />} />
//     <Route path="*" element={<Error />} />
//   </Route>
// );

export const routerAll = createBrowserRouter(routesArr);
