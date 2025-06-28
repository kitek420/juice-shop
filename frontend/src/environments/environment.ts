/*
 * Copyright (c) 2014-2025 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hostServer: 'http://localhost:3000'
  nftAddress: '0x41427790c94E7a592B17ad694eD9c06A02bb9C39',
  beeTokenAddress: '0x36435796Ca9be2bf150CE0dECc2D8Fab5C4d6E13',
  beeFaucetAddress: '0x860e3616aD0E0dEDc23352891f3E10C4131EA5BC'
}

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
