export interface SomministrazioniVacciniLatest {
  area: string;
  codice_NUTS1: string;
  codice_NUTS2: string;
  codice_regione_ISTAT: number;
  data_somministrazione: string;
  fascia_anagrafica: string;
  fornitore: string;
  index: number;
  nome_area: string;
  pregressa_infezione: number;
  prima_dose: number;
  seconda_dose: number;
  sesso_femminile: number;
  sesso_maschile: number;
}

export interface SomministrazioniVacciniSummary {
  "index": number;
  "data_somministrazione": string;
  "area": string;
  "totale": number;
  "sesso_maschile": number;
  "sesso_femminile": number;
  "prima_dose": number;
  "seconda_dose": number;
  "pregressa_infezione": number;
  "codice_NUTS1": string;
  "codice_NUTS2": string;
  "codice_regione_ISTAT": number;
  "nome_area": string;
}

export interface VacciniSummaryLatest {
  "index": number;
  "area": string;
  "dosi_somministrate": number;
  "dosi_consegnate": number;
  "percentuale_somministrazione": number;
  "ultimo_aggiornamento": string;
  "codice_NUTS1": string;
  "codice_NUTS2": string;
  "codice_regione_ISTAT": number;
  "nome_area": string;
}

export interface Platea {
  area: string;
  fascia_anagrafica: string;
  index: number;
  nome_area: string;
  totale_popolazione: number;
}

export interface AnagraficaVacciniSummary {
  "index": number;
  "fascia_anagrafica": string;
  "totale": number;
  "sesso_maschile": number;
  "sesso_femminile": number;
  "prima_dose": number;
  "seconda_dose": number;
  "pregressa_infezione": number;
  "ultimo_aggiornamento": string;
}

export interface Aggiornamento {
  ultimo_aggiornamento: string;
}
