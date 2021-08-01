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

/***/ "./src/handlers/postProducts.ts":
/*!**************************************!*\
  !*** ./src/handlers/postProducts.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postProducts\": () => (/* binding */ postProducts)\n/* harmony export */ });\n/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../options */ \"./src/options.ts\");\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product */ \"./src/product.ts\");\n/* harmony import */ var _utils_winstonLogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/winstonLogger */ \"./src/utils/winstonLogger.ts\");\n\r\nconst { Client } = __webpack_require__(/*! pg */ \"pg\");\r\n\r\n\r\n\r\nconst postProducts = async (event) => {\r\n    const client = new Client(_options__WEBPACK_IMPORTED_MODULE_0__.dbOptions);\r\n    client.connect();\r\n    try {\r\n        _utils_winstonLogger__WEBPACK_IMPORTED_MODULE_2__.winstonLogger.logRequest(`Incoming event postProducts lambda: ${JSON.stringify(event)}`);\r\n        await client.query(\"BEGIN\");\r\n        if (typeof _product__WEBPACK_IMPORTED_MODULE_1__.product.title != \"string\" ||\r\n            typeof _product__WEBPACK_IMPORTED_MODULE_1__.product.years != \"string\" ||\r\n            typeof _product__WEBPACK_IMPORTED_MODULE_1__.product.description != \"string\" ||\r\n            typeof _product__WEBPACK_IMPORTED_MODULE_1__.product.price != \"number\" ||\r\n            typeof _product__WEBPACK_IMPORTED_MODULE_1__.product.count != \"number\") {\r\n            return await {\r\n                statusCode: 400,\r\n                body: JSON.stringify({\r\n                    message: `Product data is invalid. `,\r\n                }),\r\n                headers: {\r\n                    \"Content-Type\": \"application/json\",\r\n                    \"Access-Control-Allow-Origin\": \"*\",\r\n                },\r\n            };\r\n        }\r\n        const queryInsertProduct = `\r\n        INSERT INTO products(title,description,price,years,author,picture)\r\n          VALUES\r\n          ('${_product__WEBPACK_IMPORTED_MODULE_1__.product.title}','${_product__WEBPACK_IMPORTED_MODULE_1__.product.description}','${_product__WEBPACK_IMPORTED_MODULE_1__.product.price}','${_product__WEBPACK_IMPORTED_MODULE_1__.product.years}','${_product__WEBPACK_IMPORTED_MODULE_1__.product.author}','${_product__WEBPACK_IMPORTED_MODULE_1__.product.picture}')\r\n          RETURNING id`;\r\n        const { rows: [{ id }], } = await client.query(queryInsertProduct);\r\n        const queryInsertCount = `INSERT INTO stocks(product_id, count)\r\n          VALUES\r\n          ('${id}', ${_product__WEBPACK_IMPORTED_MODULE_1__.product.count});`;\r\n        await client.query(queryInsertCount);\r\n        const querySelectProduct = `SELECT p.id, p.title, p.description, p.price, p.years,p.author,p.picture,s.count\r\n        FROM products p\r\n        LEFT JOIN stocks s\r\n        ON s.product_id = p.id\r\n         WHERE p.id = '${id}';\r\n       `;\r\n        const response = await client.query(querySelectProduct);\r\n        await client.query(\"COMMIT\");\r\n        const bookToPut = response.rows[0];\r\n        _utils_winstonLogger__WEBPACK_IMPORTED_MODULE_2__.winstonLogger.logRequest(`Created product: ${JSON.stringify(bookToPut)}`);\r\n        return await {\r\n            statusCode: 200,\r\n            body: JSON.stringify(bookToPut),\r\n            headers: {\r\n                \"Access-Control-Allow-Origin\": \"*\",\r\n            },\r\n        };\r\n    }\r\n    catch (error) {\r\n        await client.query(\"ROLLBACK\");\r\n        return await {\r\n            statusCode: 400,\r\n            body: JSON.stringify({\r\n                message: `Product data is invalid. ${error}`,\r\n            }),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\",\r\n                \"Access-Control-Allow-Origin\": \"*\",\r\n            },\r\n        };\r\n    }\r\n    finally {\r\n        client.end();\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFuZGxlcnMvcG9zdFByb2R1Y3RzLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZHVjdC1zZXJ2aWNlLW5ldy8uL3NyYy9oYW5kbGVycy9wb3N0UHJvZHVjdHMudHM/ZGQxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuaW1wb3J0IHsgQVBJR2F0ZXdheVByb3h5SGFuZGxlciB9IGZyb20gXCJhd3MtbGFtYmRhXCI7XHJcbmNvbnN0IHsgQ2xpZW50IH0gPSByZXF1aXJlKFwicGdcIik7XHJcbmltcG9ydCB7IGRiT3B0aW9ucyB9IGZyb20gXCIuLi9vcHRpb25zXCI7XHJcbmltcG9ydCB7IHByb2R1Y3QgfSBmcm9tIFwiLi4vcHJvZHVjdFwiO1xyXG5pbXBvcnQgeyB3aW5zdG9uTG9nZ2VyIH0gZnJvbSBcIi4uL3V0aWxzL3dpbnN0b25Mb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0UHJvZHVjdHM6IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICBjb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KGRiT3B0aW9ucyk7XHJcbiAgY2xpZW50LmNvbm5lY3QoKTtcclxuICB0cnkge1xyXG4gICAgd2luc3RvbkxvZ2dlci5sb2dSZXF1ZXN0KFxyXG4gICAgICBgSW5jb21pbmcgZXZlbnQgcG9zdFByb2R1Y3RzIGxhbWJkYTogJHtKU09OLnN0cmluZ2lmeShldmVudCl9YFxyXG4gICAgKTtcclxuICAgIGF3YWl0IGNsaWVudC5xdWVyeShcIkJFR0lOXCIpO1xyXG4gICAgaWYgKFxyXG4gICAgICB0eXBlb2YgcHJvZHVjdC50aXRsZSAhPSBcInN0cmluZ1wiIHx8XHJcbiAgICAgIHR5cGVvZiBwcm9kdWN0LnllYXJzICE9IFwic3RyaW5nXCIgfHxcclxuICAgICAgdHlwZW9mIHByb2R1Y3QuZGVzY3JpcHRpb24gIT0gXCJzdHJpbmdcIiB8fFxyXG4gICAgICB0eXBlb2YgcHJvZHVjdC5wcmljZSAhPSBcIm51bWJlclwiIHx8XHJcbiAgICAgIHR5cGVvZiBwcm9kdWN0LmNvdW50ICE9IFwibnVtYmVyXCJcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gYXdhaXQge1xyXG4gICAgICAgIHN0YXR1c0NvZGU6IDQwMCxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBtZXNzYWdlOiBgUHJvZHVjdCBkYXRhIGlzIGludmFsaWQuIGAsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgcXVlcnlJbnNlcnRQcm9kdWN0ID0gYFxyXG4gICAgICAgIElOU0VSVCBJTlRPIHByb2R1Y3RzKHRpdGxlLGRlc2NyaXB0aW9uLHByaWNlLHllYXJzLGF1dGhvcixwaWN0dXJlKVxyXG4gICAgICAgICAgVkFMVUVTXHJcbiAgICAgICAgICAoJyR7cHJvZHVjdC50aXRsZX0nLCcke3Byb2R1Y3QuZGVzY3JpcHRpb259JywnJHtwcm9kdWN0LnByaWNlfScsJyR7cHJvZHVjdC55ZWFyc30nLCcke3Byb2R1Y3QuYXV0aG9yfScsJyR7cHJvZHVjdC5waWN0dXJlfScpXHJcbiAgICAgICAgICBSRVRVUk5JTkcgaWRgO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICByb3dzOiBbeyBpZCB9XSxcclxuICAgIH0gPSBhd2FpdCBjbGllbnQucXVlcnkocXVlcnlJbnNlcnRQcm9kdWN0KTtcclxuXHJcbiAgICBjb25zdCBxdWVyeUluc2VydENvdW50ID0gYElOU0VSVCBJTlRPIHN0b2Nrcyhwcm9kdWN0X2lkLCBjb3VudClcclxuICAgICAgICAgIFZBTFVFU1xyXG4gICAgICAgICAgKCcke2lkfScsICR7cHJvZHVjdC5jb3VudH0pO2A7XHJcbiAgICBhd2FpdCBjbGllbnQucXVlcnkocXVlcnlJbnNlcnRDb3VudCk7XHJcblxyXG4gICAgY29uc3QgcXVlcnlTZWxlY3RQcm9kdWN0ID0gYFNFTEVDVCBwLmlkLCBwLnRpdGxlLCBwLmRlc2NyaXB0aW9uLCBwLnByaWNlLCBwLnllYXJzLHAuYXV0aG9yLHAucGljdHVyZSxzLmNvdW50XHJcbiAgICAgICAgRlJPTSBwcm9kdWN0cyBwXHJcbiAgICAgICAgTEVGVCBKT0lOIHN0b2NrcyBzXHJcbiAgICAgICAgT04gcy5wcm9kdWN0X2lkID0gcC5pZFxyXG4gICAgICAgICBXSEVSRSBwLmlkID0gJyR7aWR9JztcclxuICAgICAgIGA7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNsaWVudC5xdWVyeShxdWVyeVNlbGVjdFByb2R1Y3QpO1xyXG4gICAgYXdhaXQgY2xpZW50LnF1ZXJ5KFwiQ09NTUlUXCIpO1xyXG4gICAgY29uc3QgYm9va1RvUHV0ID0gcmVzcG9uc2Uucm93c1swXTtcclxuICAgIHdpbnN0b25Mb2dnZXIubG9nUmVxdWVzdChgQ3JlYXRlZCBwcm9kdWN0OiAke0pTT04uc3RyaW5naWZ5KGJvb2tUb1B1dCl9YCk7XHJcbiAgICByZXR1cm4gYXdhaXQge1xyXG4gICAgICBzdGF0dXNDb2RlOiAyMDAsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvb2tUb1B1dCksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGF3YWl0IGNsaWVudC5xdWVyeShcIlJPTExCQUNLXCIpO1xyXG4gICAgcmV0dXJuIGF3YWl0IHtcclxuICAgICAgc3RhdHVzQ29kZTogNDAwLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgbWVzc2FnZTogYFByb2R1Y3QgZGF0YSBpcyBpbnZhbGlkLiAke2Vycm9yfWAsXHJcbiAgICAgIH0pLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gZmluYWxseSB7XHJcbiAgICBjbGllbnQuZW5kKCk7XHJcbiAgfVxyXG59O1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBSUE7O0FBRUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/handlers/postProducts.ts\n");

/***/ }),

/***/ "./src/options.ts":
/*!************************!*\
  !*** ./src/options.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dbOptions\": () => (/* binding */ dbOptions)\n/* harmony export */ });\nconst { PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD } = process.env;\r\nconst dbOptions = {\r\n    host: PG_HOST,\r\n    port: PG_PORT,\r\n    database: PG_DATABASE,\r\n    user: PG_USERNAME,\r\n    password: PG_PASSWORD,\r\n    ssl: {\r\n        rejectUnauthorized: false,\r\n    },\r\n    connectionTimeoutMillis: 5000,\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvb3B0aW9ucy50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2R1Y3Qtc2VydmljZS1uZXcvLi9zcmMvb3B0aW9ucy50cz9jNjgyIl0sInNvdXJjZXNDb250ZW50IjpbIiBjb25zdCB7IFBHX0hPU1QsIFBHX1BPUlQsIFBHX0RBVEFCQVNFLCBQR19VU0VSTkFNRSwgUEdfUEFTU1dPUkQgfSA9IHByb2Nlc3MuZW52O1xyXG5leHBvcnQgY29uc3QgZGJPcHRpb25zID0ge1xyXG4gIGhvc3Q6IFBHX0hPU1QsXHJcbiAgcG9ydDogUEdfUE9SVCxcclxuICBkYXRhYmFzZTogUEdfREFUQUJBU0UsXHJcbiAgdXNlcjogUEdfVVNFUk5BTUUsXHJcbiAgcGFzc3dvcmQ6IFBHX1BBU1NXT1JELFxyXG4gIHNzbDoge1xyXG4gICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSwgXHJcbiAgfSxcclxuICBjb25uZWN0aW9uVGltZW91dE1pbGxpczogNTAwMCwgXHJcbn07Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/options.ts\n");

/***/ }),

/***/ "./src/product.ts":
/*!************************!*\
  !*** ./src/product.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"product\": () => (/* binding */ product)\n/* harmony export */ });\nconst product = {\r\n    title: 'Ведьмак. Последнее желание. Меч предназначения',\r\n    years: '2020',\r\n    author: 'Анджей Сапковский',\r\n    description: 'Новеллы о ведьмаке Геральте из Ривии, его друзьях и недругах, о смертельно опасной его \"работе\" по истреблению кровожадной нечисти, о мире, в котором среди обычных людей живут эльфы, гномы, оборотни и драконы, давно стали классикой... Сага Анджея Сапковского занимает одно из первых мест в отечественных и зарубежных списках лучшего фэнтези, а Геральт, культовый персонаж литературы и компьютерных игр, уже во второй раз появляется на телеэкранах. Смотрите экранизацию великолепной саги и сравнивайте приключения любимого героя в кинематографическом и литературном мирах!',\r\n    price: 78,\r\n    picture: 'https://s3-goods.ozstatic.by/480/445/912/10/10912445_0_Vedmak_Poslednee_zhelanie_Mech_prednaznacheniya_Andzhey_Sapkovskiy.jpg',\r\n    count: 458\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvZHVjdC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2R1Y3Qtc2VydmljZS1uZXcvLi9zcmMvcHJvZHVjdC50cz81MzVlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAgY29uc3QgcHJvZHVjdD17XHJcbiAgICB0aXRsZTogJ9CS0LXQtNGM0LzQsNC6LiDQn9C+0YHQu9C10LTQvdC10LUg0LbQtdC70LDQvdC40LUuINCc0LXRhyDQv9GA0LXQtNC90LDQt9C90LDRh9C10L3QuNGPJyxcclxuICAgIHllYXJzOicyMDIwJyxcclxuICAgIGF1dGhvcjon0JDQvdC00LbQtdC5INCh0LDQv9C60L7QstGB0LrQuNC5JyxcclxuICAgIGRlc2NyaXB0aW9uOiAn0J3QvtCy0LXQu9C70Ysg0L4g0LLQtdC00YzQvNCw0LrQtSDQk9C10YDQsNC70YzRgtC1INC40Lcg0KDQuNCy0LjQuCwg0LXQs9C+INC00YDRg9C30YzRj9GFINC4INC90LXQtNGA0YPQs9Cw0YUsINC+INGB0LzQtdGA0YLQtdC70YzQvdC+INC+0L/QsNGB0L3QvtC5INC10LPQviBcItGA0LDQsdC+0YLQtVwiINC/0L4g0LjRgdGC0YDQtdCx0LvQtdC90LjRjiDQutGA0L7QstC+0LbQsNC00L3QvtC5INC90LXRh9C40YHRgtC4LCDQviDQvNC40YDQtSwg0LIg0LrQvtGC0L7RgNC+0Lwg0YHRgNC10LTQuCDQvtCx0YvRh9C90YvRhSDQu9GO0LTQtdC5INC20LjQstGD0YIg0Y3Qu9GM0YTRiywg0LPQvdC+0LzRiywg0L7QsdC+0YDQvtGC0L3QuCDQuCDQtNGA0LDQutC+0L3Riywg0LTQsNCy0L3QviDRgdGC0LDQu9C4INC60LvQsNGB0YHQuNC60L7QuS4uLiDQodCw0LPQsCDQkNC90LTQttC10Y8g0KHQsNC/0LrQvtCy0YHQutC+0LPQviDQt9Cw0L3QuNC80LDQtdGCINC+0LTQvdC+INC40Lcg0L/QtdGA0LLRi9GFINC80LXRgdGCINCyINC+0YLQtdGH0LXRgdGC0LLQtdC90L3Ri9GFINC4INC30LDRgNGD0LHQtdC20L3Ri9GFINGB0L/QuNGB0LrQsNGFINC70YPRh9GI0LXQs9C+INGE0Y3QvdGC0LXQt9C4LCDQsCDQk9C10YDQsNC70YzRgiwg0LrRg9C70YzRgtC+0LLRi9C5INC/0LXRgNGB0L7QvdCw0LYg0LvQuNGC0LXRgNCw0YLRg9GA0Ysg0Lgg0LrQvtC80L/RjNGO0YLQtdGA0L3Ri9GFINC40LPRgCwg0YPQttC1INCy0L4g0LLRgtC+0YDQvtC5INGA0LDQtyDQv9C+0Y/QstC70Y/QtdGC0YHRjyDQvdCwINGC0LXQu9C10Y3QutGA0LDQvdCw0YUuINCh0LzQvtGC0YDQuNGC0LUg0Y3QutGA0LDQvdC40LfQsNGG0LjRjiDQstC10LvQuNC60L7Qu9C10L/QvdC+0Lkg0YHQsNCz0Lgg0Lgg0YHRgNCw0LLQvdC40LLQsNC50YLQtSDQv9GA0LjQutC70Y7Rh9C10L3QuNGPINC70Y7QsdC40LzQvtCz0L4g0LPQtdGA0L7RjyDQsiDQutC40L3QtdC80LDRgtC+0LPRgNCw0YTQuNGH0LXRgdC60L7QvCDQuCDQu9C40YLQtdGA0LDRgtGD0YDQvdC+0Lwg0LzQuNGA0LDRhSEnLFxyXG4gICAgcHJpY2U6IDc4LFxyXG4gICAgcGljdHVyZTogJ2h0dHBzOi8vczMtZ29vZHMub3pzdGF0aWMuYnkvNDgwLzQ0NS85MTIvMTAvMTA5MTI0NDVfMF9WZWRtYWtfUG9zbGVkbmVlX3poZWxhbmllX01lY2hfcHJlZG5hem5hY2hlbml5YV9BbmR6aGV5X1NhcGtvdnNraXkuanBnJyxcclxuICAgIGNvdW50OjQ1OFxyXG59ICAgIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/product.ts\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/handlers/postProducts.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;