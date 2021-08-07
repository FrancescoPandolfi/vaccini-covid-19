import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <div class="title">
        Vaccini Covid-19
      </div>
      <div class="credits">
        Aggiornato il:<br>
        Made with ❤ by Francesco Pandolfi
      </div>
    </header>
  `,
  styles: [`
    header {
      display: flex;
      color: white;
      padding: 20px 30px;
      background-color: #1f1f1f;
    }

    .credits {
      text-align: right;
    }

    .title {
      font-size: 30px;
      margin-right: auto;
    }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
