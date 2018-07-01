import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DocumentationComponent } from './documentation.component';
import { TestComponent } from './test/test.component';
import { AssetComponent } from './asset/asset.component';
import { AssetExpressComponent } from './asset-express/asset-express.component';
import { AssetMongoComponent } from './asset-mongo/asset-mongo.component';
import { AssetS3Component } from './asset-s3/asset-s3.component';
import { AuthComponent } from './auth/auth.component';
import { BaseComponent } from './base/base.component';
import { CacheComponent } from './cache/cache.component';
import { CompilerComponent } from './compiler/compiler.component';
import { ConfigComponent } from './config/config.component';
import { ContextComponent } from './context/context.component';
import { DiComponent } from './di/di.component';
import { EmailComponent } from './email/email.component';
import { ExecComponent } from './exec/exec.component';
import { ExpressComponent } from './express/express.component';
import { LogComponent } from './log/log.component';
import { ModelComponent } from './model/model.component';
import { ModelElasticsearchComponent } from './model-elasticsearch/model-elasticsearch.component';
import { ModelMongoComponent } from './model-mongo/model-mongo.component';
import { PoolComponent } from './pool/pool.component';
import { RegistryComponent } from './registry/registry.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SchemaComponent } from './schema/schema.component';
import { StarterComponent } from './starter/starter.component';
import { UtilComponent } from './util/util.component';

import { PAGES } from './pages';
import { OverviewComponent } from './overview/overview.component';
import { TestPluginComponent } from './test-plugin/test-plugin.component';
import { AuthExpressComponent } from './auth-express/auth-express.component';
import { AuthModelComponent } from './auth-model/auth-model.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'docs',
        component: DocumentationComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'overview' },
          { path: 'overview', component: OverviewComponent },
          ...PAGES
        ]
      }
    ])
  ],
  declarations: [
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
    UtilComponent,
    OverviewComponent,
    TestPluginComponent,
    AuthExpressComponent,
    AuthModelComponent
  ]
})
export class DocumentationModule { }
