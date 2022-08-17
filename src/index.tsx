import ReactDOM from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import ReactModal from "react-modal";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
);

ReactModal.setAppElement(rootElement);