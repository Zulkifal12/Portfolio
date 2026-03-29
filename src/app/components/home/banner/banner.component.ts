import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { trigger, animate, transition, stagger, query, style } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('bannerTrigger', [
      transition(':enter', [
        query('*', [
          style({ opacity: 0, transform: 'translateX(-50px)' }),
          stagger(50, [
            animate(
              '250ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'none' })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class BannerComponent implements OnInit, OnDestroy {
  techChips: string[] = [];

  private langChangeSub?: Subscription;

  constructor(
    public analyticsService: AnalyticsService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.loadTechChips();
    this.langChangeSub = this.translate.onLangChange.subscribe(() =>
      this.loadTechChips()
    );
  }

  ngOnDestroy(): void {
    this.langChangeSub?.unsubscribe();
  }

  private loadTechChips(): void {
    this.translate.get('Banner.TechChips').subscribe((v) => {
      this.techChips = Array.isArray(v) ? v : [];
    });
  }
}
