import { BrowserModule } from '@angular/platform-browser';
import { JsonpModule, HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  MatButtonModule, MatTabsModule, MatSidenavModule,
  MatTooltipModule, MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { GuideComponent } from './guide/guide.component';
import { DocumentationModule } from './documentation/documentation.module';
import { BlogComponent } from './blog/blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: '/landing', pathMatch: 'full' },
      {
        path: 'landing',
        component: LandingComponent
      },
      {
        path: 'guide',
        component: GuideComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      }
    ]
  }, {
    path: '',
    pathMatch: 'full',
    component: AppComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    GuideComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule, MatButtonModule, MatTabsModule,
    MatSidenavModule, MatTooltipModule, MatToolbarModule,
    HttpModule, JsonpModule,
    DocumentationModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'disabled' }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


