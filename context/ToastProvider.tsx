import { Toaster } from "react-hot-toast";

function ToasterProvider() {
	return (
		<Toaster
			toastOptions={{
				className: "",
				duration: 5000,
				style: {
					background: "#363636",
					color: "#fff",
				},
			}}
		/>
	);
}

export default ToasterProvider;
