import { Type } from '@angular/core';
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
import { TestComponent } from './test/test.component';
import { UtilComponent } from './util/util.component';

export const PAGES = [
  { page: 'asset', title: 'Asset', component: AssetComponent },
  { page: 'asset-express', title: 'Asset Express', component: AssetExpressComponent },
  { page: 'asset-mongo', title: 'Asset-Mongo', component: AssetMongoComponent },
  { page: 'asset-s3', title: 'Asset-S3', component: AssetS3Component },
  { page: 'auth', title: 'Auth', component: AuthComponent },
  { page: 'base', title: 'Base', component: BaseComponent },
  { page: 'cache', title: 'Cache', component: CacheComponent },
  { page: 'compiler', title: 'Compiler', component: CompilerComponent },
  { page: 'config', title: 'Config ', component: ConfigComponent },
  { page: 'context', title: 'Context', component: ContextComponent },
  { page: 'di', title: 'DI (Dependency Injection)', component: DiComponent },
  { page: 'email', title: 'Email', component: EmailComponent },
  { page: 'exec', title: 'Exec', component: ExecComponent },
  { page: 'express', title: 'Express', component: ExpressComponent },
  { page: 'log', title: 'Log', component: LogComponent },
  { page: 'model', title: 'Model', component: ModelComponent },
  { page: 'model-elasticsearch', title: 'Elasticsearch', component: ModelElasticsearchComponent },
  { page: 'model-mongo', title: 'Mongo', component: ModelMongoComponent },
  { page: 'pool', title: 'Pool', component: PoolComponent },
  { page: 'registry', title: 'Registry', component: RegistryComponent },
  { page: 'schedule', title: 'Schedule ', component: ScheduleComponent },
  { page: 'schema', title: 'Schema', component: SchemaComponent },
  { page: 'starter', title: 'Starter', component: StarterComponent },
  { page: 'test', title: 'Test', component: TestComponent },
  { page: 'util', title: 'Util', component: UtilComponent },
];
