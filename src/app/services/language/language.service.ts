import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  readonly language = "en" as const;

  constructor(public translateService: TranslateService) {}

  /**
   * Lock app to English only (no browser-locale switching).
   * Returns the observable from `use('en')` so APP_INITIALIZER can wait for `en.json`.
   */
  initLanguage(): Observable<unknown> {
    this.translateService.addLangs(["en"]);
    this.translateService.setDefaultLang("en");
    return this.translateService.use("en").pipe(
      tap(() => {
        document.documentElement.lang = "en";
        document.documentElement.setAttribute("translate", "no");
      })
    );
  }
}
