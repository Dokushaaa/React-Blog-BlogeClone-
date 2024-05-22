import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { StoreProvider } from "./store/StoreContext";
import PageNotFound from "./components/partials/PageNotFound";
import Home from "./components/pages/developer/ui/home/Home";
import Single from "./components/pages/developer/ui/single/Single";

function App() {
	const queryClient = new QueryClient();
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<StoreProvider>
					<Router>
						<Routes>
							{/* main website requires no link or blank url*/}
							<Route
								path=''
								element={<Home />}
							/>
							<Route
								path='/home'
								element={<Home />}
							/>
							<Route
								path='/single'
								element={<Single />}
							/>
							{/* if url is undef */}
							<Route
								path='/*'
								element={<PageNotFound />}
							/>
						</Routes>
					</Router>
				</StoreProvider>
			</QueryClientProvider>
		</>
	);
}

export default App;
