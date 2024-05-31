import { National } from "../types/national.types";
import { HttpService } from "./http.service";

export class StatisticsService {
	constructor(private readonly httpService: HttpService) {}

	national() {
		return this.httpService.get<National>(
			`${import.meta.env.VITE_BASE_URL}/statistics/national`,
		);
	}
}
