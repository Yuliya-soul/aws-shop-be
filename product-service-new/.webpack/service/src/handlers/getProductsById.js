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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProductsById\": () => (/* binding */ getProductsById)\n/* harmony export */ });\n/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../options */ \"./src/options.ts\");\n/* harmony import */ var _utils_winstonLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/winstonLogger */ \"./src/utils/winstonLogger.ts\");\n\r\nconst { Client } = __webpack_require__(/*! pg */ \"pg\");\r\n\r\n\r\nconst getProductsById = async (event) => {\r\n    const client = new Client(_options__WEBPACK_IMPORTED_MODULE_0__.dbOptions);\r\n    client.connect();\r\n    try {\r\n        _utils_winstonLogger__WEBPACK_IMPORTED_MODULE_1__.winstonLogger.logRequest(`Incoming event getProductsById lambda: ${JSON.stringify(event)}`);\r\n        const { id } = event.pathParameters;\r\n        const query = ` \n\t\tSELECT p.id, p.title, p.description, p.price, s.count         \n\t\t  FROM products p                                 \n\t\t  LEFT JOIN stocks s                                  \n\t\t  ON s.product_id = p.id                              \n\t\t WHERE p.id = '${id}'  `;\r\n        const response = await client.query(query);\r\n        const BookFound = response.rows[0];\r\n        _utils_winstonLogger__WEBPACK_IMPORTED_MODULE_1__.winstonLogger.logRequest(`\"Received product with id: ${id}: ${JSON.stringify(BookFound)}`);\r\n        return await {\r\n            statusCode: 200,\r\n            body: JSON.stringify(BookFound),\r\n            headers: {\r\n                \"Access-Control-Allow-Origin\": \"*\",\r\n            },\r\n        };\r\n    }\r\n    catch (error) {\r\n        return await {\r\n            statusCode: 404,\r\n            body: JSON.stringify({\r\n                message: `Book not found`,\r\n            }),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\",\r\n                \"Access-Control-Allow-Origin\": \"*\",\r\n            },\r\n        };\r\n    }\r\n    finally {\r\n        client.end();\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFuZGxlcnMvZ2V0UHJvZHVjdHNCeUlkLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZHVjdC1zZXJ2aWNlLW5ldy8uL3NyYy9oYW5kbGVycy9nZXRQcm9kdWN0c0J5SWQudHM/MWMyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmltcG9ydCB7IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgfSBmcm9tIFwiYXdzLWxhbWJkYVwiO1xuY29uc3QgeyBDbGllbnQgfSA9IHJlcXVpcmUoXCJwZ1wiKTtcbmltcG9ydCB7IGRiT3B0aW9ucyB9IGZyb20gXCIuLi9vcHRpb25zXCI7XG5pbXBvcnQgeyB3aW5zdG9uTG9nZ2VyIH0gZnJvbSBcIi4uL3V0aWxzL3dpbnN0b25Mb2dnZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzQnlJZDogQVBJR2F0ZXdheVByb3h5SGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xuICBjb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KGRiT3B0aW9ucyk7XG4gIGNsaWVudC5jb25uZWN0KCk7XG4gIHRyeSB7XG4gICAgd2luc3RvbkxvZ2dlci5sb2dSZXF1ZXN0KFxuICAgICAgYEluY29taW5nIGV2ZW50IGdldFByb2R1Y3RzQnlJZCBsYW1iZGE6ICR7SlNPTi5zdHJpbmdpZnkoZXZlbnQpfWBcbiAgICApO1xuICAgIGNvbnN0IHsgaWQgfSA9IGV2ZW50LnBhdGhQYXJhbWV0ZXJzO1xuICAgIGNvbnN0IHF1ZXJ5ID0gYCBcblx0XHRTRUxFQ1QgcC5pZCwgcC50aXRsZSwgcC5kZXNjcmlwdGlvbiwgcC5wcmljZSwgcy5jb3VudCAgICAgICAgIFxuXHRcdCAgRlJPTSBwcm9kdWN0cyBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cdFx0ICBMRUZUIEpPSU4gc3RvY2tzIHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cdFx0ICBPTiBzLnByb2R1Y3RfaWQgPSBwLmlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cdFx0IFdIRVJFIHAuaWQgPSAnJHtpZH0nICBgO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHF1ZXJ5KTtcbiAgICBjb25zdCBCb29rRm91bmQgPSByZXNwb25zZS5yb3dzWzBdO1xuICAgIHdpbnN0b25Mb2dnZXIubG9nUmVxdWVzdChcbiAgICAgIGBcIlJlY2VpdmVkIHByb2R1Y3Qgd2l0aCBpZDogJHtpZH06ICR7SlNPTi5zdHJpbmdpZnkoQm9va0ZvdW5kKX1gXG4gICAgKTtcblxuICAgIHJldHVybiBhd2FpdCB7XG4gICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShCb29rRm91bmQpLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gYXdhaXQge1xuICAgICAgc3RhdHVzQ29kZTogNDA0LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBtZXNzYWdlOiBgQm9vayBub3QgZm91bmRgLFxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfSBmaW5hbGx5IHtcbiAgICBjbGllbnQuZW5kKCk7XG4gIH1cbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/handlers/getProductsById.ts\n");

/***/ }),

/***/ "./src/options.ts":
/*!************************!*\
  !*** ./src/options.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dbOptions\": () => (/* binding */ dbOptions)\n/* harmony export */ });\nconst { PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD } = process.env;\r\nconst dbOptions = {\r\n    host: PG_HOST,\r\n    port: PG_PORT,\r\n    database: PG_DATABASE,\r\n    user: PG_USERNAME,\r\n    password: PG_PASSWORD,\r\n    ssl: {\r\n        rejectUnauthorized: false,\r\n    },\r\n    connectionTimeoutMillis: 5000,\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvb3B0aW9ucy50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2R1Y3Qtc2VydmljZS1uZXcvLi9zcmMvb3B0aW9ucy50cz9jNjgyIl0sInNvdXJjZXNDb250ZW50IjpbIiBjb25zdCB7IFBHX0hPU1QsIFBHX1BPUlQsIFBHX0RBVEFCQVNFLCBQR19VU0VSTkFNRSwgUEdfUEFTU1dPUkQgfSA9IHByb2Nlc3MuZW52O1xyXG5leHBvcnQgY29uc3QgZGJPcHRpb25zID0ge1xyXG4gIGhvc3Q6IFBHX0hPU1QsXHJcbiAgcG9ydDogUEdfUE9SVCxcclxuICBkYXRhYmFzZTogUEdfREFUQUJBU0UsXHJcbiAgdXNlcjogUEdfVVNFUk5BTUUsXHJcbiAgcGFzc3dvcmQ6IFBHX1BBU1NXT1JELFxyXG4gIHNzbDoge1xyXG4gICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSwgXHJcbiAgfSxcclxuICBjb25uZWN0aW9uVGltZW91dE1pbGxpczogNTAwMCwgXHJcbn07Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/options.ts\n");

/***/ }),

/***/ "./src/utils/winstonLogger.ts":
/*!************************************!*\
  !*** ./src/utils/winstonLogger.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"winstonLogger\": () => (/* binding */ winstonLogger)\n/* harmony export */ });\nconst winston = __webpack_require__(/*! winston */ \"winston\");\r\nclass WinstonLogger {\r\n    constructor() {\r\n        this.format = winston.format.combine(winston.format.colorize(), winston.format.timestamp(), winston.format.align(), winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`));\r\n        this.logger = winston.createLogger({\r\n            level: process.env.ENV_STAGE === 'prod' ? 'error' : 'info',\r\n            transports: [\r\n                new winston.transports.Console({\r\n                    format: this.format\r\n                })\r\n            ]\r\n        });\r\n    }\r\n    logRequest(message) {\r\n        this.logger.info(message);\r\n    }\r\n    logError(message) {\r\n        this.logger.error(message);\r\n    }\r\n}\r\nconst winstonLogger = new WinstonLogger();\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvd2luc3RvbkxvZ2dlci50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2R1Y3Qtc2VydmljZS1uZXcvLi9zcmMvdXRpbHMvd2luc3RvbkxvZ2dlci50cz83N2JkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdpbnN0b24gPSByZXF1aXJlKCd3aW5zdG9uJyk7XHJcblxyXG5pbnRlcmZhY2UgTG9nZ2VySW50ZXJmYWNlIHtcclxuICAgIGxvZ1JlcXVlc3Q6ICggbWVzc2FnZTogc3RyaW5nICkgPT4gdm9pZFxyXG4gICAgbG9nRXJyb3I6ICggbWVzc2FnZTogc3RyaW5nICkgPT4gdm9pZFxyXG59XHJcblxyXG5jbGFzcyBXaW5zdG9uTG9nZ2VyIGltcGxlbWVudHMgTG9nZ2VySW50ZXJmYWNlIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbG9nZ2VyOiBhbnk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZvcm1hdDogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZm9ybWF0ID0gd2luc3Rvbi5mb3JtYXQuY29tYmluZShcclxuICAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQuY29sb3JpemUoKSxcclxuICAgICAgICAgICAgd2luc3Rvbi5mb3JtYXQudGltZXN0YW1wKCksXHJcbiAgICAgICAgICAgIHdpbnN0b24uZm9ybWF0LmFsaWduKCksXHJcbiAgICAgICAgICAgIHdpbnN0b24uZm9ybWF0LnByaW50ZihpbmZvID0+IGAke2luZm8udGltZXN0YW1wfSAke2luZm8ubGV2ZWx9OiAke2luZm8ubWVzc2FnZX1gKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMubG9nZ2VyID0gd2luc3Rvbi5jcmVhdGVMb2dnZXIoe1xyXG4gICAgICAgICAgICBsZXZlbDogcHJvY2Vzcy5lbnYuRU5WX1NUQUdFID09PSAncHJvZCcgPyAnZXJyb3InIDogJ2luZm8nLFxyXG4gICAgICAgICAgICB0cmFuc3BvcnRzOiBbXHJcbiAgICAgICAgICAgICAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkNvbnNvbGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogdGhpcy5mb3JtYXRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxvZ1JlcXVlc3QoIG1lc3NhZ2U6IHN0cmluZyApe1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmluZm8oIG1lc3NhZ2UgKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dFcnJvciggbWVzc2FnZTogc3RyaW5nICl7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoIG1lc3NhZ2UgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgd2luc3RvbkxvZ2dlciA9IG5ldyBXaW5zdG9uTG9nZ2VyKCk7XHJcblxyXG5leHBvcnQgeyB3aW5zdG9uTG9nZ2VyIH07Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFPQTtBQUlBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/winstonLogger.ts\n");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("winston");

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