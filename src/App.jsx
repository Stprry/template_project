import "./App.css";
import { Header } from "./Components/Header";
function App() {
	return (
		<div className="bg-slate-800 h-screen">
			<div className="flex flex-col py-2 w-screen lg:w-4/6 lg:justify-center lg:mx-auto bg-slate-800 lg:border-x-4 lg:border-rose-700 h-screen">
				<Header />
				<div className="h-screen overflow-y-auto">
					<section name="home"></section>
				</div>
			</div>
		</div>
	);
}

export default App;
