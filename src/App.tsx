import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

const App = () => (
	<>
		<Header />
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
		<Footer />
	</>
);

export default App;
