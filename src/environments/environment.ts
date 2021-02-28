// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  nameWeb: 'plazafrontend.io',
  urlWeb: "http://localhost:4200",
  APIurl: "http://localhost:1337",
  APIurlDevImages: "http://localhost:1337",
  endPointAllCategorys: 'http://localhost:1337/categories',
  endPointSingleCategory: 'http://localhost:1337/categories?name_category=deploy',
  GA: 'G-F1LL8546EJ'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
