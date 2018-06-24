Getting Started
====

The following tutorial wil walk you through setting up a `travetto` application from scratch.  We'll be building a simple todo application.

## Steps

0. [Prerequisites](#prerequisites)
1. [Project initialization](#project-initialization)
2. [Establishing the model](#establishing-the-model)
3. [Configuring the data source](#configuring-the-data-source)
4. [Building the service layer](#building-the-service-layer)
5. [Writing unit tests](#writing-unit-tests)
6. [Creating the express routes](#creating-the-express-routes)
7. [Test the final product](#test-the-final-product)

## Prerequisites

Install
* [`Node`](https://nodejs.org/en/download/current/) v10.x + (required)
* [`Mongodb`](https://docs.mongodb.com/manual/administration/install-community/) 3.6+ (required)
* [`vscode`](https://code.visualstudio.com/download) (recommended)
* [`Travetto Test Plugin`](https://marketplace.visualstudio.com/items?itemName=arcsine.travetto-test-plugin) (recommended)

## Project initialization

```bash
$ mkdir todo-project
$ cd todo-project

$ git init .

$ npm init -f 
$ npm i @travetto/{test,express,model-mongo}
```

Modify `package.json` to include the following script configuration:
```json
 ...
 "scripts": {
    "test": "./node_modules/.bin/travetto-test",
    "start": "./node_modules/.bin/travetto",
  },
  ...
```

Set `tsconfig.json` to the following:
```json
{
    "extends": "./node_modules/@travetto/base/tsconfig.json"
}
```

And set `tslint.json` to the following:
```json
{
  "extends": "@travetto/base/tslint.json"
}
```

## Establishing the model
Let's create the model for the todo application.  The fields we will need should be:
* `id` as a unique identifier
* `text` as the actual todo information
* `created` the date the todo was created
* `completed` whether or not the todo was completed

```src/model.ts```
```typescript
import { Model, ModelCore } from '@travetto/model';

@Model()
export class Todo implements ModelCore {
  id?: string;
  text: string;
  created?: Date;
  completed?: boolean;
}
```
as you can see, the model structure is simple.  Everything that uses the `Model` services needs to implement `ModelCore`.

## Configuring the data source
Next we need to prepare the `MongoModelSource` to be used at runtime.

```src/config.ts```
```typescript
import { InjectableFactory } from '@travetto/di';
import { ModelMongoSource, ModelMongoConfig } from '@travetto/model-mongo';
import { ModelSource } from '@travetto/model';

export class AppConfig {
  @InjectableFactory()
  static getDataSource(config: ModelMongoConfig): ModelSource {
    return new ModelMongoSource(config);
  }
}
```
The `@InjectableFactory` allows you to create injection candidates.  Note that the `ModelMongoSource` has the return type 
specified as `ModelSource`.

## Building the service layer
Next we establish the functionality for the service layer. The operations we need are:
* Create a new todo
* Complete a todo
* Remove a todo
* Get all todos

```src/service.ts```
```typescript
import { ModelService } from '@travetto/model';
import { Injectable } from '@travetto/di';
import { Todo } from './model';

@Injectable()
export class TodoService {
  private modelService: ModelService;

  async add(todo: Todo) {
    todo.created = new Date();
    const saved = await this.modelService.save(Todo, todo);
    return saved;
  }

  async getAll() {
    return this.modelService.getAllByQuery(Todo, {});
  }

  async complete(id: string, completed = true) {
    return this.modelService.updatePartialByQuery(Todo,
      { where: { id } },
      { completed }
    );
  }

  async remove(id: string) {
    return this.modelService.deleteById(Todo, id);
  }
}
```

## Writing unit tests
After we have established our service layer, we will now construct
some simple tests to verify the service layer is running correctly.

First we need to initialize the testing configuration as the config in the `src/` folder is not automatically scanned.

```test/config.ts```
```typescript
import { InjectableFactory } from '@travetto/di';
import { ModelSource, ModelService } from '@travetto/model';
import { ModelMongoSource, ModelMongoConfig } from '@travetto/model-mongo';
import { QueryVerifierService } from '@travetto/model/src/service/query';

export class TestConfig {
  @InjectableFactory()
  static testSource(): ModelSource {
    return new ModelMongoSource(ModelMongoConfig.from({
      namespace: `test-${Math.trunc(Math.random() * 10000)}`
    }));
  }

  @InjectableFactory()
  static modelService(src: ModelSource): ModelService {
    return new ModelService(src, new QueryVerifierService());
  }
}
```

```test/service.ts```
```typescript
import * as assert from 'assert';

import { Suite, Test, BeforeAll } from '@travetto/test';
import { DependencyRegistry } from '@travetto/di';
import { TodoService } from '../src/service';
import { ModelRegistry } from '@travetto/model';
import { SchemaRegistry } from '@travetto/schema';

import { Todo } from '../src/model';

@Suite()
export class TodoTest {

  @BeforeAll()
  async init() {
    await import('./config');

    await DependencyRegistry.init();
    await ModelRegistry.init();
    await SchemaRegistry.init();
  }

  @Test('Create todo')
  async create() {
    const svc = await DependencyRegistry.getInstance(TodoService);

    const test = Todo.from({
      text: 'Sample Task'
    });

    const saved = await svc.add(test);

    assert.ok(saved.id);
  }

  @Test('Complete todo')
  async complete() {
    const svc = await DependencyRegistry.getInstance(TodoService);

    const test = Todo.from({
      text: 'Sample Task'
    });

    const saved = await svc.add(test);
    assert.ok(saved.id);

    let updated = await svc.complete(saved.id!);
    assert(updated.completed === true);

    updated = await svc.complete(saved.id!, false);
    assert(updated.completed === false);
  }

  @Test('Delete todo')
  async remove() {
    const svc = await DependencyRegistry.getInstance(TodoService);

    const test = Todo.from({
      text: 'Sample Task'
    });

    const saved = await svc.add(test);
    assert.ok(saved.id);

    await svc.remove(saved.id!);

    try {
      await svc.get(saved.id!);
    } catch (e) {
      assert(e.message);
    }
  }
}
```

## Creating the express routes
Now we establish the routes, providing an interface to the service layer.

```src/controller.ts```
```typescript
import { Request } from 'express';

import { Controller, Get, TypedBody, Post, Put, Delete } from '@travetto/express';
import { SchemaBody } from '@travetto/express/support/extension.schema';

import { TodoService } from './service';
import { Todo } from './model';

@Controller('/todo')
export class TodoController {
  constructor(private svc: TodoService) { }

  @Get('/')
  async getAll() {
    return this.svc.getAll();
  }

  @Get('/:id')
  async getById(req: Request) {
    return this.svc.get(req.params.id);
  }

  @Post('/')
  @SchemaBody(Todo)
  async create(req: TypedBody<Todo>) {
    await this.svc.add(req.body);
  }

  @Put('/:id/complete')
  async complete(req: Request) {
    await this.svc.complete(req.params.id, req.query.completed);
  }

  @Delete('/:id')
  async remove(req: Request) {
    await this.svc.remove(req.params.id);
  }
}
```

## Test the final product
First we must start the application

```bash
$ npm start

> todo-app@1.0.0 start /home/tim/Code/todo-app
> travetto

INFO Initializing: application,dev
Found configurations for []
INFO Configured {
  "registry": {
    "injectable": {
      "@travetto/config": "Config",
      "@travetto/express": [
        "Controller",
        "ModelController"
      ]
    },
    "schema": {
      "@travetto/model": "Model"
    }
  }
}
Watching files 145
Initialized 0.068
2018-06-24T05:01:00 debug [@trv.rg.src.srv.registry: 42] Initialized @travetto.model:src.service.registry#$ModelRegistry
2018-06-24T05:01:00 debug [@trv.rg.src.srv.registry: 42] Initialized @travetto.express:src.service.registry#$ControllerRegistry
2018-06-24T05:01:00 debug [@trv.rg.src.srv.registry: 42] Initialized @travetto.schema:src.service.registry#$SchemaRegistry
2018-06-24T05:01:00 debug [@trv.rg.src.srv.registry: 42] Initialized @travetto.di:src.service.registry#$DependencyRegistry
2018-06-24T05:01:00 debug [@trv.rg.src.srv.registry: 42] Initialized @travetto.registry:src.service.root#$RootRegistry
2018-06-24T05:01:00 debug [@trv.d.src.srv.registry:113] Auto-creating [ 'ExpressApp', [length]: 1 ]
body-parser deprecated undefined extended: provide extended option node_modules/@travetto/base/src/phase.js:20:21
express-session deprecated undefined resave option; provide resave option node_modules/@travetto/di/src/service/registry.js:164:24
2018-06-24T05:01:00 debug [@trv.xpr.src.srv.app: 92] Registering Controller Instance @app:src.express#TodoController /todo 5
2018-06-24T05:01:00 info  [@trv.xpr.src.srv.app: 79] Listening on 3000
```

next, let's execute `curl` requests to interact with the new api

```bash
# Let's create a new todo
$ curl -XPOST localhost:3000/todo -H 'Content-Type: application/json' -d '{ "text": "New Todo" }' 

## returned data
{
  "text": "New Todo",
  "created": "2018-06-24T05:03:16.438Z",
  "id": "5b2f2614020fd21df02cd216"
}

# Now let's list all todos currently saved
$ curl -XGET localhost:3000/todo -H 'Content-Type: application/json' 

## returns
[
  {
    "id": "5b2f2614020fd21df02cd216",
    "text": "New Todo",
    "created": "2018-06-24T05:03:16.438Z"
  }
]

```