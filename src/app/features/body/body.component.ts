import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Platea, SomministrazioniVacciniLatest} from "../../interfaces/interfaces";
import {GetDataService} from "../../services/getData.service";
import {tap} from "rxjs/operators";


@Component({
  selector: 'app-body',
  template: `
    <p>
      body works!
    </p>
  `,
  styles: [
  ]
})
export class BodyComponent implements OnInit {

  somministrazioneVaccini: SomministrazioniVacciniLatest[] = [];
  platea: Platea[] = [];

  constructor(private getDataService: GetDataService) { }

  ngOnInit(): void {
    this.getDataService.getPlatea().pipe(
      tap(res => this.platea = res)
    ).subscribe(() => {
      console.log(this.platea)
      let totPlatea = 0;
      this.platea.forEach(v => {
        totPlatea += v.totale_popolazione
      });
      console.log(totPlatea);

    })




    let tot = 0;
    this.somministrazioneVaccini.forEach(v => {
      tot += v.sesso_maschile
      tot += v.sesso_femminile
    })



  }

}
