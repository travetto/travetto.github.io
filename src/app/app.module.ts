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
import { DocumentationComponent } from './documentation/documentation.component';
import { TestComponent } from './documentation/test/test.component';
import { AssetComponent } from './documentation/asset/asset.component';
import { AssetExpressComponent } from './documentation/asset-express/asset-express.component';
import { AssetMongoComponent } from './documentation/asset-mongo/asset-mongo.component';
import { AssetS3Component } from './documentation/asset-s3/asset-s3.component';
import { AuthComponent } from './documentation/auth/auth.component';
import { BaseComponent } from './documentation/base/base.component';
import { CacheComponent } from './documentation/cache/cache.component';
import { CompilerComponent } from './documentation/compiler/compiler.component';
import { ConfigComponent } from './documentation/config/config.component';
import { ContextComponent } from './documentation/context/context.component';
import { DiComponent } from './documentation/di/di.component';
import { EmailComponent } from './documentation/email/email.component';
import { ExecComponent } from './documentation/exec/exec.component';
import { ExpressComponent } from './documentation/express/express.component';
import { LogComponent } from './documentation/log/log.component';
import { ModelComponent } from './documentation/model/model.component';
import { ModelElasticsearchComponent } from './documentation/model-elasticsearch/model-elasticsearch.component';
import { ModelMongoComponent } from './documentation/model-mongo/model-mongo.component';
import { PoolComponent } from './documentation/pool/pool.component';
import { RegistryComponent } from './documentation/registry/registry.component';
import { ScheduleComponent } from './documentation/schedule/schedule.component';
import { SchemaComponent } from './documentation/schema/schema.component';
import { StarterComponent } from './documentation/starter/starter.component';
import { UtilComponent } from './documentation/util/util.component';

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
        path: 'docs',
        component: DocumentationComponent
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
    GuideComponent,
    DocumentationComponent,
    TestComponent,
    AssetComponent,
    AssetExpressComponent,
    AssetMongoComponent,
    AssetS3Component,
    AuthComponent,
    BaseComponent,
    CacheComponent,
    CompilerComponent,
    ConfigComponent,
    ContextComponent,
    DiComponent,
    EmailComponent,
    ExecComponent,
    ExpressComponent,
    LogComponent,
    ModelComponent,
    ModelElasticsearchComponent,
    ModelMongoComponent,
    PoolComponent,
    RegistryComponent,
    ScheduleComponent,
    SchemaComponent,
    StarterComponent,
    UtilComponent
  ],
  imports: [
    BrowserModule, MatButtonModule, MatTabsModule,
    MatSidenavModule, MatTooltipModule, MatToolbarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


