import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-natvar',
  templateUrl: './natvar.component.html',
  styleUrls: ['./natvar.component.scss']
})
export class NatvarComponent implements OnInit {
  public activeLang = 'es';

  constructor(
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit() {
  }

  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }
}
