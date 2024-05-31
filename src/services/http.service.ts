export class HttpService {
	async get<T>(url: string, init?: RequestInit) {
		const response = await fetch(url, init);
		const data: T = await response.json();
		return data;
	}
}
