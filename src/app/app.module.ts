import { APP_INITIALIZER, NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { BreadcrumbService } from './shared/components/breadcrumb/breadcrumb.service';
import { initializeApp } from './app.initializer';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, HttpClientModule, LayoutModule],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
    BreadcrumbService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [BreadcrumbService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
