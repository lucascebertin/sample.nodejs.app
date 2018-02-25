# sample.nodejs.app
Startup application for nodejs apps, use it to start to build your applications based on it but feel free to change what you want to.

## Getting started
First, you should be using yarn, if you don't, start installing by
```npm install -g yarn```

Now, run ```yarn``` to restore the dependencies.

If you are the kind of person who like to restart the app on each file save, run ```yarn watch``` and start to code, otherwise ```yarn build```.

## Debugging
For ease debug and inspection, use ```yarn build:dev```, this way, source mapping will be generated inline on your transpiled files.
There is already one `./.vscode/launch.json` configured to use sourceMaps on debug, put some breakpoints on your source files, hit F5 and be happy.

## Testing
Jest is already configured to respect some rules and generate coverage, run ```yarn test```

## Built with
* [VSCode](https://code.visualstudio.com/)
* [Yarn](https://yarnpkg.com/pt-BR/)
* [Babel](https://babeljs.io/)
  * [Exponential operator](https://www.npmjs.com/package/babel-plugin-transform-exponentiation-operator)
  * [Async to bluebird](https://www.npmjs.com/package/babel-plugin-transform-async-to-bluebird)
  * [Object rest spread](https://www.npmjs.com/package/babel-plugin-transform-object-rest-spread)
  * [Import/Export to commonjs](https://www.npmjs.com/package/babel-plugin-transform-es2015-modules-commonjs)
  * [Spread operator](https://www.npmjs.com/package/babel-plugin-transform-es2015-spread)
  * [Destructuring](https://www.npmjs.com/package/babel-plugin-transform-es2015-destructuring)
  * [For-Of](https://www.npmjs.com/package/babel-plugin-transform-es2015-for-of)
  * [Template literals](https://www.npmjs.com/package/babel-plugin-transform-es2015-template-literals)
* [Eslint](https://eslint.org/)
* [Jest](https://facebook.github.io/jest/)
