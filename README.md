To run the project you must first build the project, loading dependencies.
To build the project run `yarn run build:prod` to create a production build. Create a development build with `yarn run build:dev`.

To run the project locally use the command `yarn run dev-server`. Webpack is configured to automatically run the code through Babel. This allows JSX and React to be used easily in the project.

Starting the dev-server also sets the code to be run with Babel in `--watch` mode so that any changes to the code are automatically re-compiled and bundled. Any changes in code are reflected in the live site on the dev-server as soon as the file is saved. This causes the site to reload.

Changes in the HTML are not automatically reflected in the live site and do not trigger a reload. Only changes in the JavaScript or CSS.

While the dev-server is running the site is available at http://127.0.0.1:8080/

The 'Jest' test framework is used for testing. The jest.config.json file is specified using a flag with data in the test script command. The test script command is located in package.json. When the test script is run Jest is directed first to load the jest.config.json file. This specifies the raf (Request Animation Frame) polyfill (to polyfill the browser's Request Animation Frame method) . It also specifies the path to the `setupTests.js` file that configures Enzyme.

To run the Jest test suite use the command `yarn run test` or simply `yarn test`

Heroku URL:
https://agile-thicket-91398.herokuapp.com/
