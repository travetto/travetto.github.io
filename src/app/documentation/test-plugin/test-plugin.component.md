Test-Plugin
===

The [`plugin`](https://marketplace.visualstudio.com/items?itemName=arcsine.travetto-test-plugin) directly integrates with the test module to provide real-time feedback on unit tests within `vscode`.  This is the preferred method of execution during development.

<img src="/assets/landing/testing.png">

Tests will run on initial load of any file in the `test/*` directory that contains a `@Test` decorator.  Additionally, you can debug any test on demand by running `command-shift-t` on OSX or `ctrl-shift-t` on win/linux. 