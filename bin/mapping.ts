export interface Mapping {
  module: string;
  title?: string;
  tag?: string;
  children?: Mapping[];
  component?: string;
  list?: boolean;
}

export const MAPPING: Mapping[] = [
  {
    module: 'overview',
    title: 'Overview',
    component: 'OverviewComponent',
    list: false,
    children: [{
      module: 'module-chart', component: 'ModuleChartComponent', title: ' '
    }]
  },
  { module: 'cli' },
  { module: 'generator-app' },
  { module: 'base' },
  {
    module: 'config',
    children: [{ module: 'yaml', title: 'Simple YAML Parser' }]
  },
  { module: 'di' },
  { module: 'schema' },
  {
    module: 'model',
    children: [
      { module: 'model-elasticsearch' },
      { module: 'model-mongo' }
    ]
  },
  {
    module: 'rest',
    children: [
      { module: 'swagger' },
      { module: 'rest-express' },
      { module: 'rest-koa' },
      { module: 'rest-fastify' },
      { module: 'rest-aws-lambda' },
    ]
  },
  {
    module: 'core',
    title: 'System Components',
    component: 'CoreComponent',
    children: [
      { module: 'compiler' },
      { module: 'context' },
      { module: 'registry' }
    ]
  },
  { module: 'vscode-plugin', title: 'VS Code Plugin' },
  {
    module: 'test',
    children: []
  },
  {
    module: 'utils',
    title: 'App Utilities',
    component: 'UtilsComponent',
    children: [
      { module: 'log' },
      { module: 'cache' },
      { module: 'exec' },
      { module: 'schedule' },
      { module: 'net' },
      { module: 'jwt' }
    ]
  },
  {
    module: 'asset',
    children: [
      { module: 'asset-mongo' },
      { module: 'asset-s3' },
      { module: 'asset-rest' },
    ]
  },
  {
    module: 'auth',
    children: [
      { module: 'auth-model' },
      { module: 'auth-rest' },
      { module: 'auth-passport' },
    ]
  },
  {
    module: 'email',
    children: [
      { module: 'email-template' }
    ]
  }
];
