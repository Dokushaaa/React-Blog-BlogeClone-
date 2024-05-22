import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { StoreProvider } from "./store/StoreContext";
import PageNotFound from "./components/partials/PageNotFound";
import Home from "./components/pages/developer/ui/home/Home";
import Single from "./components/pages/developer/ui/single/Single";
import DashboardHome from "./components/pages/developer/dashboard/database_management/DashboardHome";
import ProtectedRoute from "./components/pages/developer/access/ProtectedRoute";
import Login from "./components/pages/developer/access/Login";
import UsersHome from "./components/pages/developer/dashboard/database_management/Users/UsersHome";
import CreatePassword from "./components/pages/developer/access/CreatePassword";
import ForgotPassword from "./components/pages/developer/access/ForgotPassword";
import PostHome from "./components/pages/developer/dashboard/database_management/Post/PostHome";

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
							{/* if url is undef */}
							<Route
								path='/post'
								element={<PostHome />}
							/>
							<Route
								path='/users'
								element={<UsersHome />}
							/>
							{/* route to create password */}
							<Route
								path='/create-password'
								element={<CreatePassword />}
							/>
							{/* route to reset password */}
							<Route
								path='/Forgot-password'
								element={<ForgotPassword />}
							/>
							<Route
								path='/login'
								element={<Login />}
							/>
							<Route
								path='/login'
								element={<Login />}
							/>
							{/* secured path to db management */}
							<Route
								path='/dashboard'
								element={
									// <ProtectedRoute>
									<DashboardHome />
									// </ProtectedRoute>
								}
							/>
						</Routes>
					</Router>
				</StoreProvider>
			</QueryClientProvider>
		</>
	);
}

export default App;
