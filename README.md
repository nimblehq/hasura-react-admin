[![Netlify Status](https://api.netlify.com/api/v1/badges/b254f7b3-31ba-4fcf-a21c-e23051858e48/deploy-status)](https://app.netlify.com/sites/hasura-react-admin/deploys)

# Hasura React-Admin Test App

This project was bootstrapped with [Nimble React template](https://github.com/nimblehq/react-templates). It aims to provide a POC candidate in assessing solutions for a TypeScript admin toolkit that we can reuse at Nimble.

## Available Scripts

In the project directory, you can run:

`npm start`: Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm test`: Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run test:coverage`: Both Unit Tests (Jest) and UI Tests (cypress) generate test coverage analytics. The below command runs all tests and merges both coverage files into a single report.

> Use the `.nyc_output/out.json` artefact in your CI/CD pipeline to reuse the code coverage data.

`npm run build`: Builds the app for production to the `build` folder. It correctly bundles React in production mode and
optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`npm run eject`: If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This
command will remove the single build dependency from your project. Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them.
All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them.

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

`npm run lint`: Run ESLint in the project.

`npm run lint:fix`: Fix auto-correctable ESLint errors in the project.

`npm run stylelint`: Run Stylelint in the project.

`npm run stylelint:fix`: Fix auto-correctable Stylelint errors in the project.

`npm run codebase:lint`: Run ESLint and Stylelint together in the project.

`npm run codebase:fix`: Fix auto-correctable ESLint and Stylelint errors together in the project.

`npm run cypress:run`: Runs Cypress tests to completion. By default, cypress run will run all tests headlessly in the Electron browser. [Check options](https://docs.cypress.io/guides/guides/command-line#cypress-run)

`npm run cypress:open`: Opens the Cypress Test Runner. [Check options](https://docs.cypress.io/guides/guides/command-line#cypress-open)

## Localization

This project uses the [react-i18next](https://react.i18next.com/) package to handle the project locales.

To add a new language

- Add the new language bigram to the `supportedLanguages` array in `src/i18n.ts` — use this array to list all available languages in a 'change language' component
- Add the new translation file in `public/locales/{lang_bigram}/translation.json`

To change the default fallback language

- Either edit the value of the environment variable `REACT_APP_DEFAULT_LANGUAGE` (cf. the `env.example` file)
- Either directly edit the const `DEFAULT_FALLBACK_LANGUAGE` in `src/i18n.ts`

## Deployment

### GitHub Actions for Netlify

Any push under `main` or `master` triggers a release in production.
Any push under another branch triggers a preview deployment.
Once a preview is deployed, the Preview URL is displayed in the Pull Request thread.
