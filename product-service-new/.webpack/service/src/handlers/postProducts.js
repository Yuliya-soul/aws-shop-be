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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postProducts\": () => (/* binding */ postProducts)\n/* harmony export */ });\n/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../options */ \"./src/options.ts\");\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product */ \"./src/product.ts\");\n\r\nconst { Client } = __webpack_require__(/*! pg */ \"pg\");\r\n\r\n\r\nconst postProducts = async () => {\r\n    const client = new Client(_options__WEBPACK_IMPORTED_MODULE_0__.dbOptions);\r\n    client.connect();\r\n    try {\r\n        await client.query(\"BEGIN\");\r\n        if (typeof _product__WEBPACK_IMPORTED_MODULE_1__.product.title != \"string\" ||\r\n            typeof _product__WEBPACK_IMPORTED_MODULE_1__.product.years != \"string\" ||\r\n            typeof _product__WEBPACK_IMPORTED_MODULE_1__.product.description != \"string\" ||\r\n            typeof _product__WEBPACK_IMPORTED_MODULE_1__.product.price != \"number\" ||\r\n            typeof _product__WEBPACK_IMPORTED_MODULE_1__.product.count != \"number\") {\r\n            return await {\r\n                statusCode: 400,\r\n                body: JSON.stringify({\r\n                    message: `Product data is invalid. `,\r\n                }),\r\n                headers: {\r\n                    \"Content-Type\": \"application/json\",\r\n                    \"Access-Control-Allow-Origin\": \"*\",\r\n                },\r\n            };\r\n        }\r\n        const queryInsertProduct = `\r\n        INSERT INTO products(title,description,price,years,author,picture)\r\n          VALUES\r\n          ('${_product__WEBPACK_IMPORTED_MODULE_1__.product.title}','${_product__WEBPACK_IMPORTED_MODULE_1__.product.description}','${_product__WEBPACK_IMPORTED_MODULE_1__.product.price}','${_product__WEBPACK_IMPORTED_MODULE_1__.product.years}','${_product__WEBPACK_IMPORTED_MODULE_1__.product.author}','${_product__WEBPACK_IMPORTED_MODULE_1__.product.picture}')\r\n          RETURNING id`;\r\n        const { rows: [{ id }], } = await client.query(queryInsertProduct);\r\n        const queryInsertCount = `INSERT INTO stocks(product_id, count)\r\n          VALUES\r\n          ('${id}', ${_product__WEBPACK_IMPORTED_MODULE_1__.product.count});`;\r\n        await client.query(queryInsertCount);\r\n        const querySelectProduct = `SELECT p.id, p.title, p.description, p.price, p.years,p.author,p.picture,s.count\r\n        FROM products p\r\n        LEFT JOIN stocks s\r\n        ON s.product_id = p.id\r\n         WHERE p.id = '${id}';\r\n       `;\r\n        const response = await client.query(querySelectProduct);\r\n        await client.query(\"COMMIT\");\r\n        const bookPut = response.rows[0];\r\n        return await {\r\n            statusCode: 200,\r\n            body: JSON.stringify(bookPut),\r\n            headers: {\r\n                \"Access-Control-Allow-Origin\": \"*\",\r\n            },\r\n        };\r\n    }\r\n    catch (error) {\r\n        await client.query(\"ROLLBACK\");\r\n        return await {\r\n            statusCode: 400,\r\n            body: JSON.stringify({\r\n                message: `Product data is invalid. ${error}`,\r\n            }),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\",\r\n                \"Access-Control-Allow-Origin\": \"*\",\r\n            },\r\n        };\r\n    }\r\n    finally {\r\n        client.end();\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFuZGxlcnMvcG9zdFByb2R1Y3RzLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZHVjdC1zZXJ2aWNlLW5ldy8uL3NyYy9oYW5kbGVycy9wb3N0UHJvZHVjdHMudHM/ZGQxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuaW1wb3J0IHsgQVBJR2F0ZXdheVByb3h5SGFuZGxlciB9IGZyb20gXCJhd3MtbGFtYmRhXCI7XHJcbmNvbnN0IHsgQ2xpZW50IH0gPSByZXF1aXJlKFwicGdcIik7XHJcbmltcG9ydCB7IGRiT3B0aW9ucyB9IGZyb20gXCIuLi9vcHRpb25zXCI7XHJcbmltcG9ydCB7IHByb2R1Y3QgfSBmcm9tIFwiLi4vcHJvZHVjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RQcm9kdWN0czogQVBJR2F0ZXdheVByb3h5SGFuZGxlciA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KGRiT3B0aW9ucyk7XHJcbiAgY2xpZW50LmNvbm5lY3QoKTtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgY2xpZW50LnF1ZXJ5KFwiQkVHSU5cIik7XHJcbiAgICBpZiAoXHJcbiAgICAgIHR5cGVvZiBwcm9kdWN0LnRpdGxlICE9IFwic3RyaW5nXCIgfHxcclxuICAgICAgdHlwZW9mIHByb2R1Y3QueWVhcnMgIT0gXCJzdHJpbmdcIiB8fFxyXG4gICAgICB0eXBlb2YgcHJvZHVjdC5kZXNjcmlwdGlvbiAhPSBcInN0cmluZ1wiIHx8XHJcbiAgICAgIHR5cGVvZiBwcm9kdWN0LnByaWNlICE9IFwibnVtYmVyXCIgfHxcclxuICAgICAgdHlwZW9mIHByb2R1Y3QuY291bnQgIT0gXCJudW1iZXJcIlxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCB7XHJcbiAgICAgICAgc3RhdHVzQ29kZTogNDAwLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGBQcm9kdWN0IGRhdGEgaXMgaW52YWxpZC4gYCxcclxuICAgICAgICB9KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCBxdWVyeUluc2VydFByb2R1Y3QgPSBgXHJcbiAgICAgICAgSU5TRVJUIElOVE8gcHJvZHVjdHModGl0bGUsZGVzY3JpcHRpb24scHJpY2UseWVhcnMsYXV0aG9yLHBpY3R1cmUpXHJcbiAgICAgICAgICBWQUxVRVNcclxuICAgICAgICAgICgnJHtwcm9kdWN0LnRpdGxlfScsJyR7cHJvZHVjdC5kZXNjcmlwdGlvbn0nLCcke3Byb2R1Y3QucHJpY2V9JywnJHtwcm9kdWN0LnllYXJzfScsJyR7cHJvZHVjdC5hdXRob3J9JywnJHtwcm9kdWN0LnBpY3R1cmV9JylcclxuICAgICAgICAgIFJFVFVSTklORyBpZGA7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHJvd3M6IFt7IGlkIH1dLFxyXG4gICAgfSA9IGF3YWl0IGNsaWVudC5xdWVyeShxdWVyeUluc2VydFByb2R1Y3QpO1xyXG5cclxuICAgIGNvbnN0IHF1ZXJ5SW5zZXJ0Q291bnQgPSBgSU5TRVJUIElOVE8gc3RvY2tzKHByb2R1Y3RfaWQsIGNvdW50KVxyXG4gICAgICAgICAgVkFMVUVTXHJcbiAgICAgICAgICAoJyR7aWR9JywgJHtwcm9kdWN0LmNvdW50fSk7YDtcclxuICAgIGF3YWl0IGNsaWVudC5xdWVyeShxdWVyeUluc2VydENvdW50KTtcclxuXHJcbiAgICBjb25zdCBxdWVyeVNlbGVjdFByb2R1Y3QgPSBgU0VMRUNUIHAuaWQsIHAudGl0bGUsIHAuZGVzY3JpcHRpb24sIHAucHJpY2UsIHAueWVhcnMscC5hdXRob3IscC5waWN0dXJlLHMuY291bnRcclxuICAgICAgICBGUk9NIHByb2R1Y3RzIHBcclxuICAgICAgICBMRUZUIEpPSU4gc3RvY2tzIHNcclxuICAgICAgICBPTiBzLnByb2R1Y3RfaWQgPSBwLmlkXHJcbiAgICAgICAgIFdIRVJFIHAuaWQgPSAnJHtpZH0nO1xyXG4gICAgICAgYDtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHF1ZXJ5U2VsZWN0UHJvZHVjdCk7XHJcbiAgICBhd2FpdCBjbGllbnQucXVlcnkoXCJDT01NSVRcIik7XHJcbiAgICBjb25zdCBib29rUHV0ID0gcmVzcG9uc2Uucm93c1swXTtcclxuXHJcbiAgICByZXR1cm4gYXdhaXQge1xyXG4gICAgICBzdGF0dXNDb2RlOiAyMDAsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvb2tQdXQpLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhd2FpdCBjbGllbnQucXVlcnkoXCJST0xMQkFDS1wiKTtcclxuICAgIHJldHVybiBhd2FpdCB7XHJcbiAgICAgIHN0YXR1c0NvZGU6IDQwMCxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIG1lc3NhZ2U6IGBQcm9kdWN0IGRhdGEgaXMgaW52YWxpZC4gJHtlcnJvcn1gLFxyXG4gICAgICB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9IGZpbmFsbHkge1xyXG4gICAgY2xpZW50LmVuZCgpO1xyXG4gIH1cclxufTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFJQTs7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/handlers/postProducts.ts\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/handlers/postProducts.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;