import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationEnd,
  Router,
  RouterModule,
  UrlSegment,
} from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { BreadcrumbService } from './breadcrumb.service';
import { CommonModule } from '@angular/common';

interface Breadcrumb {
  label: string;
  url: string;
}
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class BreadcrumbComponent implements OnInit {
  public breadcrumbs$!: Observable<Breadcrumb[]>;
  breadcrumbs: Breadcrumb[] | undefined;

  constructor(public breadcrumbService: BreadcrumbService) {
    console.log('BreadcrumbComponent created');
    this.breadcrumbService.bradcrumbs$.subscribe((breadcrumbs) => {
      if (breadcrumbs.length > 0) {
        this.breadcrumbs = breadcrumbs;
        console.log('Breadcrumbs => ', this.breadcrumbs);
      } else {
        console.warn('No breadcrumbs available');
      }
    });
  }

  ngOnInit() {}
}
