import { Navigate, Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Toast from "./components/Toast/Toast";
import useScrollToTop from "./hooks/useScrollToTop";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import TopicPage from "./pages/TopicPage/TopicPage";

const App = () => {
	const { pathname } = useLocation();
	const [searchParams] = useSearchParams();
	const query = searchParams.get("q") || "";

	useScrollToTop([pathname, query]);

	return (
		<>
			<Header />
			<Toast />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/t/:slug" element={<TopicPage />} />
				<Route path="/s/:type" element={<SearchPage />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
