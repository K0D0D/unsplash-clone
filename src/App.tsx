import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import TopicPage from "./pages/TopicPage/TopicPage";

const App = () => (
	<>
		<Header />
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/t/:slug" element={<TopicPage />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
		<Footer />
	</>
);

export default App;
