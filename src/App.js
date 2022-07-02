import ProductListPage from "./components/ProductListPage.js";
import ProductDetailPage from "./components/ProductDetailPage.js";
import CartPage from "./components/CartPage.js";
import { init } from "./router.js";

export default function App({ $target }) {
	this.route = () => {
		const { pathname } = location;

		$target.innerHTML = "";

		if (pathname === "/") {
			new ProductListPage({ $target }).render();
		} else if (pathname === "/cart") {
			new CartPage({ $target }).render();
		} else if (pathname.includes("/products/")) {
			const [, , , productId] = pathname.split("/");
			new ProductDetailPage({ $target, productId }).render();
		}
	};

	init(this.route);

	this.route();

	window.addEventListener("popstate", this.route);
}
