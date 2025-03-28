import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Layout from "./common/Layout";
import Home from "./pages/Home/Home";
import React, { Suspense } from "react";
import { Provider } from "react-redux";
import MainLoader from "./components/Loader/MainLoader";
import Cart from "./pages/Cart/Cart";
import Products from "./pages/Products/Products";
import NotFound from "./pages/NotFound/NotFound";
import store from "./utils/redux-toolkit/store";
const Login = React.lazy(() => import("./pages/Login/Login"));

function App() {
	const router = createBrowserRouter([
		{
			element: <Layout />,
			children: [
				{ path: "/", element: <Home /> },
				{
					path: "/login",
					element: (
						<Suspense fallback={<MainLoader />}>
							{" "}
							<Login />{" "}
						</Suspense>
					),
				},
				{
					path: "/products",
					element: (
						<Suspense fallback={<MainLoader />}>
							{" "}
							<Products />{" "}
						</Suspense>
					),
				},
				{
					path: "/cart",
					element: (
						<Suspense fallback={<MainLoader />}>
							{" "}
							<Cart />{" "}
						</Suspense>
					),
				},
				// {path: "/products", element:  <Suspense fallback={<Loader />}> <Products /> </Suspense>, children: [
				//     {path: "new", element: <NewProducts />}
				//   ]
				// },
				{ path: "*", element: <NotFound /> },
			],
		},
	]);
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
}

export default App;
