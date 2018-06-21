import { BrowserModule } from '@angular/platform-browser';
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
    GuideComponent
  ],
  imports: [
    BrowserModule, MatButtonModule, MatTabsModule,
    MatSidenavModule, MatTooltipModule, MatToolbarModule,
    DocumentationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


