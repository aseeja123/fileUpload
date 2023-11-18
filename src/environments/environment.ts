// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import {getAnalytics} from 'firebase/analytics'

export const environment = {

  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCdALDzIYRJfXBBOZkTLE_-R8vFeeaFIx0",
    authDomain: "farmart-e9bdd.firebaseapp.com",
    projectId: "farmart-e9bdd",
    storageBucket: "farmart-e9bdd.appspot.com",
    messagingSenderId: "5779471918",
    appId: "1:5779471918:web:ff2c86b6037a440b4869bf",
    measurementId: "G-6GVRR7G343"
    
  },
};
const app = initializeApp(environment.firebaseConfig)
const analytics = getAnalytics(app)

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
