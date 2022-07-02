Coffee Cat API <br/>
프로그래머스 프론트엔드 과제 Coffee Cat을 해보았다. <br/>
서버를 직접 구축해서 로컬에서 돌리고 싶어서 만들게되었다.

## 상품 목록 조회<br/>

**GET** <br/>
_/products_ <br/>
상품 목록 조회

```javascript
{
	id; // 상품 아이디
	name; // 상품 이름
	imageUrl; // 상품 사진 url
	price; // 상품 가격
}
```

_/products/{productId}_ <br/>
productId에 해당하는 상품을 조회

```javascript
{
	id // 상품 아이디
	name // 상품 이름
	imageUrl // 상품 사진 url
	price // 상품 가격
	productOptions:[  // 상품 옵션
		{
			id // 옵션 아이디
			name // 옵션 이름
			price // 옵션 금액
			stock // 재고
			created_at // 생성날짜
			updated_at // 업데이트 날짜
		}
	]

}
```
