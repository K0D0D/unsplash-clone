import { useMemo } from "react";
import { Navigate, Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PhotoModal from "./components/PhotoModal/PhotoModal";
import Toast from "./components/Toast/Toast";
import useScrollToTop from "./hooks/useScrollToTop";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import TopicPage from "./pages/TopicPage/TopicPage";
import UserPage from "./pages/UserPage/UserPage";

const App = () => {
	const { pathname } = useLocation();
	const [searchParams] = useSearchParams();
	const query = searchParams.get("q");
	const scrollDeps = useMemo(() => [pathname, query], [pathname, query]);

	useScrollToTop(scrollDeps);

	return (
		<>
			<Header />
			<Toast />
			<PhotoModal />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/t/:slug" element={<TopicPage />} />
				<Route path="/s/:type" element={<SearchPage />} />
				<Route path="/collections/:id" element={<CollectionPage />} />
				<Route path="/users/:username/:type" element={<UserPage />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
