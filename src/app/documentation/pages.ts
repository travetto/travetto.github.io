import { Type } from '@angular/core';
import { AssetExpressComponent } from './asset-express/asset-express.component';
import { AssetMongoComponent } from './asset-mongo/asset-mongo.component';
import { AssetComponent } from './asset/asset.component';
import { AssetS3Component } from './asset-s3/asset-s3.component';
import { AuthExpressComponent } from './auth-express/auth-express.component';
import { AuthModelComponent } from './auth-model/auth-model.component';
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
import { ModelElasticsearchComponent } from './model-elasticsearch/model-elasticsearch.component';
import { ModelMongoComponent } from './model-mongo/model-mongo.component';
import { ModelComponent } from './model/model.component';
import { PoolComponent } from './pool/pool.component';
import { RegistryComponent } from './registry/registry.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SchemaComponent } from './schema/schema.component';
import { TestComponent } from './test/test.component';
import { UtilComponent } from './util/util.component';

export const PAGES = [
  { path: 'asset-express', title: 'Asset-Express', component: AssetExpressComponent },
  { path: 'asset-mongo', title: 'Asset-Mongo', component: AssetMongoComponent },
  { path: 'asset', title: 'Asset', component: AssetComponent },
  { path: 'asset-s3', title: 'Asset-S3', component: AssetS3Component },
  { path: 'auth', title: 'Auth', component: AuthComponent },
  { path: 'auth-express', title: 'Auth-Express', component: AuthExpressComponent },
  { path: 'auth-model', title: 'Auth-Model', component: AuthModelComponent },
  { path: 'base', title: 'Base', component: BaseComponent },
  { path: 'cache', title: 'Cache', component: CacheComponent },
  { path: 'compiler', title: 'Compiler', component: CompilerComponent },
  { path: 'config', title: 'Config ', component: ConfigComponent },
  { path: 'context', title: 'Context', component: ContextComponent },
  { path: 'di', title: 'Dependency Injection  ', component: DiComponent },
  { path: 'email', title: 'Email', component: EmailComponent },
  { path: 'exec', title: 'Exec', component: ExecComponent },
  { path: 'express', title: 'Express', component: ExpressComponent },
  { path: 'log', title: 'Log', component: LogComponent },
  { path: 'model-elasticsearch', title: 'Model-Elasticsearch', component: ModelElasticsearchComponent },
  { path: 'model-mongo', title: 'Model-Mongo', component: ModelMongoComponent },
  { path: 'model', title: 'Model', component: ModelComponent },
  { path: 'pool', title: 'Pool', component: PoolComponent },
  { path: 'registry', title: 'Registry', component: RegistryComponent },
  { path: 'schedule', title: 'Schedule ', component: ScheduleComponent },
  { path: 'schema', title: 'Schema', component: SchemaComponent },
  { path: 'test', title: 'Test', component: TestComponent },
  { path: 'util', title: 'Util', component: UtilComponent },
];
