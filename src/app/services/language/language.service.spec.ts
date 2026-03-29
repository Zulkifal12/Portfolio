import { TestBed } from "@angular/core/testing";
import { TranslateModule } from "@ngx-translate/core";
import { HttpClientModule } from "@angular/common/http";

import { LanguageService } from "./language.service";

describe("LanguageService", () => {
  let service: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, TranslateModule.forRoot()],
    });
    service = TestBed.inject(LanguageService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
