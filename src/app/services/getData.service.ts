import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {
  Aggiornamento,
  AnagraficaVacciniSummary,
  Platea,
  SomministrazioniVacciniLatest,
  SomministrazioniVacciniSummary,
  VacciniSummaryLatest
} from "../interfaces/interfaces";


export interface DataJson {
  data: [];
  schema: {}
}
@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  PLATEA = 'https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/platea.json';
  ANAGRAFICA_VACCINI_SUMMARY = 'https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/anagrafica-vaccini-summary-latest.json';
  ULTIMO_AGGIORNAMENTO = 'https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/last-update-dataset.json';
  SOMMINISTRAZIONI_VACCINI_LATEST = 'https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/somministrazioni-vaccini-latest.json';
  SOMMINISTRAZIONI_VACCINI_SUMMARY_LATEST = 'https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/somministrazioni-vaccini-summary-latest.json';
  VACCINI_SUMMARY_LATEST = 'https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/vaccini-summary-latest.json';

  constructor(private http: HttpClient) { }

  getPlatea(): Observable<Platea[]> {
    return this.http.get<DataJson>(this.PLATEA).pipe(
      map(dataJson => dataJson.data)
    );
  }

  getAnagrafica(): Observable<AnagraficaVacciniSummary[]> {
    return this.http.get<DataJson>(this.ANAGRAFICA_VACCINI_SUMMARY).pipe(
      map(dataJson => dataJson.data)
    );
  }

  getUltimoAggiornamento(): Observable<Aggiornamento> {
    return this.http.get<Aggiornamento>(this.ULTIMO_AGGIORNAMENTO);
  }

  getSomministrazioniVacciniLatest(): Observable<SomministrazioniVacciniLatest[]> {
    return this.http.get<DataJson>(this.SOMMINISTRAZIONI_VACCINI_LATEST).pipe(
      map(dataJson => dataJson.data)
    );
  }

  getSomministrazioniVacciniSummary(): Observable<SomministrazioniVacciniSummary[]> {
    return this.http.get<DataJson>(this.SOMMINISTRAZIONI_VACCINI_SUMMARY_LATEST).pipe(
      map(dataJson => dataJson.data)
    );
  }

  getVacciniSummary(): Observable<VacciniSummaryLatest[]> {
    return this.http.get<DataJson>(this.VACCINI_SUMMARY_LATEST).pipe(
      map(dataJson => dataJson.data)
    );
  }



}
