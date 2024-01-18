import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { refreshCookie } from '../apis/cookie';

const mock = new MockAdapter(axios);

const mockResponse = {
	data: {
		data: {
			accessToken: 'newTestAccessToken',
			refreshToken: 'newTestRefreshToken',
		},
	},
};

describe('토큰 재발급 테스트', () => {
	afterEach(() => {
		mock.reset();
	});

	test('refreshToken이 재발급되는지 테스트합니다', async () => {
		mock.onPost('/reissue').reply(200, mockResponse);
		const newAccessToken = await refreshCookie();
		expect(mock.history.post.some((req) => req.url === '/reissue')).toBe(true);
		expect(newAccessToken).toBe(mockResponse.data.data.accessToken);
	});

	test('토큰 재발급 실패 시 에러가 발생하는지 테스트합니다', async () => {
		mock.onPost('/reissue').reply(500, { error: 'Internal Server Error' });

		await expect(refreshCookie()).rejects.toThrow('토큰 재발급 실패');
	});
});
