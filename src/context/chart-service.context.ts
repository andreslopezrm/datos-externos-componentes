import { createContext } from "@lit/context";
import { ChartService } from "../services/chart.service";

export const chartServiceContext = createContext<ChartService>(
	Symbol("chart-service-context"),
);
