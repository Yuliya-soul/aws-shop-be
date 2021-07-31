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

/***/ "./src/handlers/getProductsById.ts":
/*!*****************************************!*\
  !*** ./src/handlers/getProductsById.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProductsById\": () => (/* binding */ getProductsById)\n/* harmony export */ });\n/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../options */ \"./src/options.ts\");\n\r\nconst { Client } = __webpack_require__(/*! pg */ \"pg\");\r\n\r\nconst getProductsById = async (event) => {\r\n    const client = new Client(_options__WEBPACK_IMPORTED_MODULE_0__.dbOptions);\r\n    client.connect();\r\n    try {\r\n        const { id } = event.pathParameters;\r\n        const query = ` \n\t\tSELECT p.id, p.title, p.description, p.price, s.count         \n\t\t  FROM products p                                 \n\t\t  LEFT JOIN stocks s                                  \n\t\t  ON s.product_id = p.id                              \n\t\t WHERE p.id = '${id}'  `;\r\n        const response = await client.query(query);\r\n        console.log(\"response\", response);\r\n        const BookFound = response.rows[0];\r\n        console.log(\"book\", BookFound);\r\n        return await {\r\n            statusCode: 200,\r\n            body: JSON.stringify(BookFound),\r\n            headers: {\r\n                \"Access-Control-Allow-Origin\": \"*\",\r\n            },\r\n        };\r\n    }\r\n    catch (error) {\r\n        return await {\r\n            statusCode: 404,\r\n            body: JSON.stringify({\r\n                message: `Book not found`,\r\n            }),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\",\r\n                \"Access-Control-Allow-Origin\": \"*\",\r\n            },\r\n        };\r\n    }\r\n    finally {\r\n        client.end();\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFuZGxlcnMvZ2V0UHJvZHVjdHNCeUlkLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZHVjdC1zZXJ2aWNlLW5ldy8uL3NyYy9oYW5kbGVycy9nZXRQcm9kdWN0c0J5SWQudHM/MWMyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmltcG9ydCB7IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgfSBmcm9tIFwiYXdzLWxhbWJkYVwiO1xuY29uc3QgeyBDbGllbnQgfSA9IHJlcXVpcmUoXCJwZ1wiKTtcbmltcG9ydCB7IGRiT3B0aW9ucyB9IGZyb20gXCIuLi9vcHRpb25zXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0c0J5SWQ6IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgY29uc3QgY2xpZW50ID0gbmV3IENsaWVudChkYk9wdGlvbnMpO1xuICBjbGllbnQuY29ubmVjdCgpO1xuICB0cnkge1xuICAgIGNvbnN0IHsgaWQgfSA9IGV2ZW50LnBhdGhQYXJhbWV0ZXJzO1xuICAgIGNvbnN0IHF1ZXJ5ID0gYCBcblx0XHRTRUxFQ1QgcC5pZCwgcC50aXRsZSwgcC5kZXNjcmlwdGlvbiwgcC5wcmljZSwgcy5jb3VudCAgICAgICAgIFxuXHRcdCAgRlJPTSBwcm9kdWN0cyBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cdFx0ICBMRUZUIEpPSU4gc3RvY2tzIHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cdFx0ICBPTiBzLnByb2R1Y3RfaWQgPSBwLmlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cdFx0IFdIRVJFIHAuaWQgPSAnJHtpZH0nICBgO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHF1ZXJ5KTtcbiAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcbiAgICBjb25zdCBCb29rRm91bmQgPSByZXNwb25zZS5yb3dzWzBdO1xuICAgIGNvbnNvbGUubG9nKFwiYm9va1wiLCBCb29rRm91bmQpO1xuXG4gICAgcmV0dXJuIGF3YWl0IHtcbiAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KEJvb2tGb3VuZCksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBhd2FpdCB7XG4gICAgICBzdGF0dXNDb2RlOiA0MDQsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG1lc3NhZ2U6IGBCb29rIG5vdCBmb3VuZGAsXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9IGZpbmFsbHkge1xuICAgIGNsaWVudC5lbmQoKTtcbiAgfVxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/handlers/getProductsById.ts\n");

/***/ }),

/***/ "./src/options.ts":
/*!************************!*\
  !*** ./src/options.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dbOptions\": () => (/* binding */ dbOptions)\n/* harmony export */ });\nconst { PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD } = process.env;\r\nconst dbOptions = {\r\n    host: PG_HOST,\r\n    port: PG_PORT,\r\n    database: PG_DATABASE,\r\n    user: PG_USERNAME,\r\n    password: PG_PASSWORD,\r\n    ssl: {\r\n        rejectUnauthorized: false,\r\n    },\r\n    connectionTimeoutMillis: 5000,\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvb3B0aW9ucy50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2R1Y3Qtc2VydmljZS1uZXcvLi9zcmMvb3B0aW9ucy50cz9jNjgyIl0sInNvdXJjZXNDb250ZW50IjpbIiBjb25zdCB7IFBHX0hPU1QsIFBHX1BPUlQsIFBHX0RBVEFCQVNFLCBQR19VU0VSTkFNRSwgUEdfUEFTU1dPUkQgfSA9IHByb2Nlc3MuZW52O1xyXG5leHBvcnQgY29uc3QgZGJPcHRpb25zID0ge1xyXG4gIGhvc3Q6IFBHX0hPU1QsXHJcbiAgcG9ydDogUEdfUE9SVCxcclxuICBkYXRhYmFzZTogUEdfREFUQUJBU0UsXHJcbiAgdXNlcjogUEdfVVNFUk5BTUUsXHJcbiAgcGFzc3dvcmQ6IFBHX1BBU1NXT1JELFxyXG4gIHNzbDoge1xyXG4gICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSwgXHJcbiAgfSxcclxuICBjb25uZWN0aW9uVGltZW91dE1pbGxpczogNTAwMCwgXHJcbn07Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/options.ts\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/handlers/getProductsById.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;