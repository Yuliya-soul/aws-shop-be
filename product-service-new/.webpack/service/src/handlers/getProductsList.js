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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProductsList\": () => (/* binding */ getProductsList)\n/* harmony export */ });\n/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../options */ \"./src/options.ts\");\n/* harmony import */ var _utils_winstonLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/winstonLogger */ \"./src/utils/winstonLogger.ts\");\n\r\nconst { Client } = __webpack_require__(/*! pg */ \"pg\");\r\n\r\n\r\nconst getProductsList = async (event) => {\r\n    const client = new Client(_options__WEBPACK_IMPORTED_MODULE_0__.dbOptions);\r\n    client.connect();\r\n    try {\r\n        _utils_winstonLogger__WEBPACK_IMPORTED_MODULE_1__.winstonLogger.logRequest(`Incoming event getProductsList lambda: ${JSON.stringify(event)}`);\r\n        const query = ` \n      SELECT p.id, p.title, p.description, p.price,p.years,p.author,p.picture, s.count\n      FROM products p\n      LEFT JOIN stocks s\n      ON s.product_id = p.id`;\r\n        const response = await client.query(query);\r\n        _utils_winstonLogger__WEBPACK_IMPORTED_MODULE_1__.winstonLogger.logRequest(`\"Received products: ${JSON.stringify(response.rows)}`);\r\n        return await {\r\n            statusCode: 200,\r\n            body: JSON.stringify(response.rows),\r\n            headers: {\r\n                \"Access-Control-Allow-Origin\": \"*\",\r\n            },\r\n        };\r\n    }\r\n    catch (error) {\r\n        console.error(\"Error during database request executing:\", error);\r\n    }\r\n    finally {\r\n        client.end();\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFuZGxlcnMvZ2V0UHJvZHVjdHNMaXN0LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZHVjdC1zZXJ2aWNlLW5ldy8uL3NyYy9oYW5kbGVycy9nZXRQcm9kdWN0c0xpc3QudHM/ZDEwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmltcG9ydCB7IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgfSBmcm9tIFwiYXdzLWxhbWJkYVwiO1xuY29uc3QgeyBDbGllbnQgfSA9IHJlcXVpcmUoXCJwZ1wiKTtcbmltcG9ydCB7IGRiT3B0aW9ucyB9IGZyb20gXCIuLi9vcHRpb25zXCI7XG5pbXBvcnQgeyB3aW5zdG9uTG9nZ2VyIH0gZnJvbSBcIi4uL3V0aWxzL3dpbnN0b25Mb2dnZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzTGlzdDogQVBJR2F0ZXdheVByb3h5SGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xuICBjb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KGRiT3B0aW9ucyk7XG4gIGNsaWVudC5jb25uZWN0KCk7XG4gIHRyeSB7XG4gICAgd2luc3RvbkxvZ2dlci5sb2dSZXF1ZXN0KFxuICAgICAgYEluY29taW5nIGV2ZW50IGdldFByb2R1Y3RzTGlzdCBsYW1iZGE6ICR7SlNPTi5zdHJpbmdpZnkoZXZlbnQpfWBcbiAgICApO1xuICAgIGNvbnN0IHF1ZXJ5ID0gYCBcbiAgICAgIFNFTEVDVCBwLmlkLCBwLnRpdGxlLCBwLmRlc2NyaXB0aW9uLCBwLnByaWNlLHAueWVhcnMscC5hdXRob3IscC5waWN0dXJlLCBzLmNvdW50XG4gICAgICBGUk9NIHByb2R1Y3RzIHBcbiAgICAgIExFRlQgSk9JTiBzdG9ja3Mgc1xuICAgICAgT04gcy5wcm9kdWN0X2lkID0gcC5pZGA7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjbGllbnQucXVlcnkocXVlcnkpO1xuXG4gICAgd2luc3RvbkxvZ2dlci5sb2dSZXF1ZXN0KGBcIlJlY2VpdmVkIHByb2R1Y3RzOiAke0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlLnJvd3MpfWApO1xuICAgIHJldHVybiBhd2FpdCB7XG4gICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5yb3dzKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGR1cmluZyBkYXRhYmFzZSByZXF1ZXN0IGV4ZWN1dGluZzpcIiwgZXJyb3IpO1xuICB9IGZpbmFsbHkge1xuICAgIGNsaWVudC5lbmQoKTtcbiAgfVxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7Ozs7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/handlers/getProductsList.ts\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/handlers/getProductsList.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;