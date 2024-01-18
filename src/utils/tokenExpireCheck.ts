export const isTokenExpired = (token: string) => {
	if (!token) {
		return true;
	}
	try {
		const payload = JSON.parse(atob(token.split('.')[1]));
		const expirationTime = payload.exp * 1000;
		const currentTime = new Date().getTime();
		console.log(expirationTime);

		return currentTime > expirationTime;
	} catch (err) {
		console.error('토큰 파싱 오류', err);
		return true;
	}
};
