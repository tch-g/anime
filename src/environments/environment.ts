// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  animeApiBase: "http://www.omdbapi.com/?apikey=540d1872",
  firebase: {
    apiKey: "AIzaSyDp6OV3a0lqfFzlTNp7kKgiXqmPcIAemgY",
    authDomain: "anime-catalogue-8150a.firebaseapp.com",
    projectId: "anime-catalogue-8150a",
    storageBucket: "anime-catalogue-8150a.appspot.com",
    messagingSenderId: "733411827232",
    appId: "1:733411827232:web:bb869f3f170cb46d542645"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
