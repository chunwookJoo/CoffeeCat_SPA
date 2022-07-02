import SelectedOptions from "./SelectedOptions.js";

export default function ProductDetail({ $target, initialState }) {
	let isInitialized = false;
	const $productDetail = document.createElement("div");
	$productDetail.className = "ProductDetail";

	$target.appendChild($productDetail);

	let selectedOptions = null;

	this.state = initialState;

	this.setState = (nextState) => {
		this.state = nextState;

		this.render();

		if (selectedOptions) {
			selectedOptions.setState({
				...this.state,
				selectedOptions: this.state.selectedOptions,
			});
		}
	};

	this.render = () => {
		const { product } = this.state;

		if (!isInitialized) {
			$productDetail.innerHTML = `
				<img src="${product.imageUrl}">
				<div class="ProductDetail__info">
					<h2>커피잔</h2>
				<div class="ProductDetail__price">${product.price}원 ~</div>
					<select>
					<option>선택하세요.</option>
					${product.productOptions
						.map(
							(item) => `
						<option value="${item.id}" ${item.stock === 0 ? "disabled" : ""}>
							${item.stock === 0 ? "(품절)" : ""}${product.name} ${item.name} ${
								item.price > 0 ? `(+${item.price}원)` : ""
							}
						</option>
					`
						)
						.join("")}
					</select>
				<div class="ProductDetail__selectedOptions"></div>
				</div>
				`;

			selectedOptions = new SelectedOptions({
				$target: $productDetail.querySelector(
					".ProductDetail__selectedOptions"
				),
				initialState: {
					product: this.state.product,
					selectedOptions: this.state.selectedOptions,
				},
			});
			isInitialized = true;
		}
	};

	this.render();

	// 이벤트 바인딩
	// 이벤트 위임 기법을 이용해서 이벤트 자체는 해당 컴포넌트 최상위 div에서 처리
	$productDetail.addEventListener("change", (e) => {
		// 이벤트 발생 주체가 select태그일 경우에만
		if (e.target.tagName === "SELECT") {
			const selectedOptionId = parseInt(e.target.value);
			const { product, selectedOptions } = this.state;

			// 상품의 옵션 데이터에서 현재 선택한 optionId가 존재하는지 찾음
			const option = product.productOptions.find(
				(option) => option.id === selectedOptionId
			);

			// 이미 선택한 상품인지 찾아서 확인
			const selectedOption = selectedOptions.find(
				(selectedOption) => selectedOption.optionId === selectedOptionId
			);

			if (option && !selectedOption) {
				const nextSelectedOptions = [
					...selectedOptions,
					{
						productId: product.id,
						optionId: option.id,
						optionName: option.name,
						optionPrice: option.price,
						quantity: 1,
					},
				];
				this.setState({
					...this.state,
					selectedOptions: nextSelectedOptions,
				});
			}
		}
	});
}
