
import { CliComponent } from './gen/cli/cli.component';
import { GeneratorAppComponent } from './gen/generator-app/generator-app.component';
import { BaseComponent } from './gen/base/base.component';
import { ConfigComponent } from './gen/config/config.component';
import { DiComponent } from './gen/di/di.component';
import { SchemaComponent } from './gen/schema/schema.component';
import { ModelComponent } from './gen/model/model.component';
import { RestComponent } from './gen/rest/rest.component';
import { CoreComponent } from './core/core.component';
import { TestComponent } from './gen/test/test.component';
import { UtilsComponent } from './utils/utils.component';
import { AssetComponent } from './gen/asset/asset.component';
import { AuthComponent } from './gen/auth/auth.component';
import { EmailComponent } from './gen/email/email.component';

export const PAGES = [
  { path: 'cli', title: 'CLI Support', component: CliComponent, subs: [

] },
  { path: 'generator-app', title: 'App Generator', component: GeneratorAppComponent, subs: [

] },
  { path: 'base', title: 'Base', component: BaseComponent, subs: [

] },
  { path: 'config', title: 'Config ', component: ConfigComponent, subs: [

] },
  { path: 'di', title: 'Dependency Injection  ', component: DiComponent, subs: [

] },
  { path: 'schema', title: 'Schema', component: SchemaComponent, subs: [

] },
  { path: 'model', title: 'Model', component: ModelComponent, subs: [
  { path: 'model-elasticsearch', title: 'Elasticsearch' },
  { path: 'model-mongo', title: 'Mongo' }
] },
  { path: 'rest', title: 'Rest', component: RestComponent, subs: [
  { path: 'swagger', title: 'Swagger' },
  { path: 'rest-express', title: 'Express' },
  { path: 'rest-koa', title: 'Koa' },
  { path: 'rest-fastify', title: 'Fastify' },
  { path: 'rest-aws-lambda', title: 'Aws-Lambda' }
] },
  { path: 'core', title: 'System Components', component: CoreComponent, subs: [
  { path: 'compiler', title: 'Compiler' },
  { path: 'context', title: 'Context' },
  { path: 'registry', title: 'Registry' }
] },
  { path: 'test', title: 'Test', component: TestComponent, subs: [
  { path: 'test-plugin', title: 'Test Plugin' }
] },
  { path: 'utils', title: 'App Utilities', component: UtilsComponent, subs: [
  { path: 'log', title: 'Log' },
  { path: 'cache', title: 'Cache' },
  { path: 'exec', title: 'Exec' },
  { path: 'schedule', title: 'Schedule ' },
  { path: 'net', title: 'Net' }
] },
  { path: 'asset', title: 'Asset', component: AssetComponent, subs: [
  { path: 'asset-mongo', title: 'Mongo' },
  { path: 'asset-s3', title: 'S3' },
  { path: 'asset-rest', title: 'Rest' }
] },
  { path: 'auth', title: 'Auth', component: AuthComponent, subs: [
  { path: 'auth-model', title: 'Model' },
  { path: 'auth-rest', title: 'Rest' },
  { path: 'auth-passport', title: 'Passport' }
] },
  { path: 'email', title: 'Email', component: EmailComponent, subs: [
  { path: 'email-template', title: 'Template' }
] }
];
