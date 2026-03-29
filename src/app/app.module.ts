import { BrowserModule } from "@angular/platform-browser";
import { NgModule, APP_INITIALIZER } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeModule } from "./components/home/home.module";
import { GeneralModule } from "./components/general/general.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AnimateOnScrollModule } from "ng2-animate-on-scroll";
import { environment } from "../environments/environment";
import { NgxGoogleAnalyticsModule } from "ngx-google-analytics";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import {
  TranslateLoader,
  TranslateModule,
} from "@ngx-translate/core";
import { LanguageService } from "./services/language/language.service";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

export function appLanguageInitializer(lang: LanguageService) {
  return () => lang.initLanguage();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,

    HomeModule,
    GeneralModule,
    AnimateOnScrollModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxGoogleAnalyticsModule.forRoot(environment.trackAnalyticID),
    TranslateModule.forRoot({
      defaultLanguage: "en",
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appLanguageInitializer,
      deps: [LanguageService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
