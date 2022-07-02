const API_END_POINT =
	"https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev";

export const request = async (url, option = { method: "GET" }) => {
	try {
		const fullUrl = `${API_END_POINT}${url}`;
		const res = await fetch(fullUrl, option);
		if (res.ok) {
			const json = await res.json();
			return json;
		}
		throw new Error("API 통신 실패");
	} catch (e) {
		alert(e.message);
	}
};
