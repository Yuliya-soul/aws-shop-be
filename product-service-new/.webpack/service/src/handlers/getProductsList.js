/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/handlers/getProductsList.ts":
/*!*****************************************!*\
  !*** ./src/handlers/getProductsList.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProductsList\": () => (/* binding */ getProductsList)\n/* harmony export */ });\n\r\nconst { Client } = __webpack_require__(/*! pg */ \"pg\");\r\nconst { PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD } = process.env;\r\nconst dbOptions = {\r\n    host: PG_HOST,\r\n    port: PG_PORT,\r\n    database: PG_DATABASE,\r\n    user: PG_USERNAME,\r\n    password: PG_PASSWORD,\r\n    ssl: {\r\n        rejectUnauthorized: false,\r\n    },\r\n    connectionTimeoutMillis: 5000,\r\n};\r\nconst getProductsList = async () => {\r\n    const client = new Client(dbOptions);\r\n    client.connect();\r\n    try {\r\n        const query = ` \nSELECT p.id, p.title, p.description, p.price, s.count\n FROM products p\n LEFT JOIN stocks s\n  ON s.product_id = p.id`;\r\n        const response = await client.query(query);\r\n        console.log('response', response.rows);\r\n        return await {\r\n            statusCode: 200,\r\n            body: JSON.stringify(response.rows),\r\n            headers: {\r\n                \"Access-Control-Allow-Origin\": \"*\",\r\n            },\r\n        };\r\n    }\r\n    catch (error) {\r\n        console.error(\"Error during database request executing:\", error);\r\n    }\r\n    finally {\r\n        client.end();\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFuZGxlcnMvZ2V0UHJvZHVjdHNMaXN0LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZHVjdC1zZXJ2aWNlLW5ldy8uL3NyYy9oYW5kbGVycy9nZXRQcm9kdWN0c0xpc3QudHM/ZDEwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmltcG9ydCB7IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgfSBmcm9tIFwiYXdzLWxhbWJkYVwiO1xuY29uc3QgeyBDbGllbnQgfSA9IHJlcXVpcmUoXCJwZ1wiKTtcblxuY29uc3QgeyBQR19IT1NULCBQR19QT1JULCBQR19EQVRBQkFTRSwgUEdfVVNFUk5BTUUsIFBHX1BBU1NXT1JEIH0gPSBwcm9jZXNzLmVudjtcbmNvbnN0IGRiT3B0aW9ucyA9IHtcbiAgaG9zdDogUEdfSE9TVCxcbiAgcG9ydDogUEdfUE9SVCxcbiAgZGF0YWJhc2U6IFBHX0RBVEFCQVNFLFxuICB1c2VyOiBQR19VU0VSTkFNRSxcbiAgcGFzc3dvcmQ6IFBHX1BBU1NXT1JELFxuICBzc2w6IHtcbiAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlLCAvLyB0byBhdm9pZCB3YXJyaW5nIGluIHRoaXMgZXhhbXBsZVxuICB9LFxuICBjb25uZWN0aW9uVGltZW91dE1pbGxpczogNTAwMCwgLy8gdGltZSBpbiBtaWxsaXNlY29uZCBmb3IgdGVybWluYXRpb24gb2YgdGhlIGRhdGFiYXNlIHF1ZXJ5XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNMaXN0OiBBUElHYXRld2F5UHJveHlIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KGRiT3B0aW9ucyk7XG4gIGNsaWVudC5jb25uZWN0KCk7XG4gIHRyeSB7XG4gICAgY29uc3QgcXVlcnkgPSBgIFxuU0VMRUNUIHAuaWQsIHAudGl0bGUsIHAuZGVzY3JpcHRpb24sIHAucHJpY2UsIHMuY291bnRcbiBGUk9NIHByb2R1Y3RzIHBcbiBMRUZUIEpPSU4gc3RvY2tzIHNcbiAgT04gcy5wcm9kdWN0X2lkID0gcC5pZGBcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjbGllbnQucXVlcnkocXVlcnkpXG4gIGNvbnNvbGUubG9nKCdyZXNwb25zZScscmVzcG9uc2Uucm93cyk7XG4gICAgcmV0dXJuIGF3YWl0IHtcbiAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLnJvd3MpLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZHVyaW5nIGRhdGFiYXNlIHJlcXVlc3QgZXhlY3V0aW5nOlwiLCBlcnJvcik7XG4gIH1cbiAgICBmaW5hbGx5IHtcbiAgICAvLyBpbiBjYXNlIGlmIGVycm9yIHdhcyBvY2N1cnJlZCwgY29ubmVjdGlvbiB3aWxsIG5vdCBjbG9zZSBhdXRvbWF0aWNhbGx5XG4gICAgY2xpZW50LmVuZCgpOyAvLyBtYW51YWwgY2xvc2luZyBvZiBjb25uZWN0aW9uXG4gIH0gIFxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/handlers/getProductsList.ts\n");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/handlers/getProductsList.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;