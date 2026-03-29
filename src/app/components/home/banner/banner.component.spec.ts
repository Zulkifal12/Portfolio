import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

import { BannerComponent } from './banner.component';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BannerComponent],
      imports: [HttpClientModule, TranslateModule.forRoot()],
      providers: [
        {
          provide: AnalyticsService,
          useValue: { sendAnalyticEvent: () => {}, sendAnalyticPageView: () => {} },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
