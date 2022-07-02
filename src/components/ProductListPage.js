import { request } from "../api.js";
import ProductList from "./ProductList.js";

export default function ProducdtListPage({ $target }) {
	const $page = document.createElement("div");
	$page.className = "ProductListPage";
	$page.innerHTML = `<h1>상품목록</h1>`;

	this.render = () => {
		$target.appendChild($page);
	};

	this.setState = (nextState) => {
		this.state = nextState;
	};

	const fetchProducts = async () => {
		const product = await request("/products");
		this.setState(product);
	};

	fetchProducts().then(() => {
		const productList = new ProductList({
			$target: $page,
			initialState: this.state,
		});
	});
}
