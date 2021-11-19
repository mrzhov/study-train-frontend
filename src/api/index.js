import { axios } from './axios';

export * from './auth';

export async function apiRequest(_config) {
	let cbResponse;
	const config = {
		headers: { 'Content-type': 'application/json' },
		..._config,
	};
	try {
		cbResponse = await axios.request(config);
	} catch (err) {
		if (!err.response) alert('Ошибка соединения с сервером, ответ не получен');
		else alert(err.response.data.message);
	}
	return cbResponse;
}
