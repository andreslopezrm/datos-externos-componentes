import { createContext } from "@lit/context";
import { StatisticsService } from "../services/statistics.service";

export const statisticsServiceContext = createContext<StatisticsService>(
	Symbol("statistics-service-context"),
);
