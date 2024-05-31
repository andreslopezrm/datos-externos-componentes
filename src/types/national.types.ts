export interface National {
	avance: Avance;
	votos: Voto[];
}

export interface Avance {
	capturadas: Capturadas;
	participacionCiudadana: ParticipacionCiudadana;
	contabilizadas: Contabilizadas;
	ultimoCorte: UltimoCorte;
	urlBaseDatos: string;
}

export interface Capturadas {
	total: string;
	porcentaje: string;
	esperadas: string;
}

export interface Contabilizadas {
	total: string;
	porcentaje: string;
}

export interface ParticipacionCiudadana {
	porcentaje: string;
}

export interface UltimoCorte {
	fecha: string;
	hora: string;
}

export interface Voto {
	partido: string;
	votos: string;
	orden: number;
	partidos: string[];
	votosExtranjero: number;
	votosEntidad: string;
	porcentaje: string;
	ganador: boolean;
	candidatoPropietario: string;
	urlImagen: string;
	candidatoSuplente: string;
	porcentajeProporcional: string;
}
