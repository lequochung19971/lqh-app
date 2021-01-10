import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationLanguages } from './core/enums/translation-languages.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lqh-web-app';

  constructor(protected translateService: TranslateService) {
    translateService.addLangs([TranslationLanguages.english, TranslationLanguages.vietnamese]);
    translateService.setDefaultLang(TranslationLanguages.english);
    // const browserLang = translateService.getBrowserLang();
    translateService.use(TranslationLanguages.english);
  }
}
