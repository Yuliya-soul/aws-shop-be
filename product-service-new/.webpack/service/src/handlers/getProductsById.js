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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProductsById\": () => (/* binding */ getProductsById)\n/* harmony export */ });\n/* harmony import */ var _books_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./books.json */ \"./src/handlers/books.json\");\n\r\nconst getProductsById = async (event) => {\r\n    try {\r\n        const { id } = event.pathParameters;\r\n        const BookFound = _books_json__WEBPACK_IMPORTED_MODULE_0__.find(({ id: filmID }) => filmID === id);\r\n        if (!BookFound) {\r\n            return await {\r\n                statusCode: 404,\r\n                body: JSON.stringify({\r\n                    message: `Book not found`,\r\n                }),\r\n                headers: {\r\n                    'Content-Type': 'application/json',\r\n                    'Access-Control-Allow-Origin': '*',\r\n                },\r\n            };\r\n        }\r\n        return await {\r\n            statusCode: 200,\r\n            body: JSON.stringify(BookFound),\r\n            headers: {\r\n                'Access-Control-Allow-Origin': '*',\r\n            },\r\n        };\r\n    }\r\n    catch (error) {\r\n        return error;\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFuZGxlcnMvZ2V0UHJvZHVjdHNCeUlkLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZHVjdC1zZXJ2aWNlLW5ldy8uL3NyYy9oYW5kbGVycy9nZXRQcm9kdWN0c0J5SWQudHM/MWMyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYm9va3MgZnJvbSAnLi9ib29rcy5qc29uJ1xuaW1wb3J0IHsgQVBJR2F0ZXdheVByb3h5SGFuZGxlciB9IGZyb20gJ2F3cy1sYW1iZGEnXG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0c0J5SWQ6IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcblx0dHJ5e1xuXHRcdGNvbnN0IHsgaWQgfSA9IGV2ZW50LnBhdGhQYXJhbWV0ZXJzXG5cdFx0Y29uc3QgQm9va0ZvdW5kID0gYm9va3MuZmluZCgoeyBpZDogZmlsbUlEIH0pID0+IGZpbG1JRCA9PT0gaWQpXG5cdFx0XG5cdFx0aWYoIUJvb2tGb3VuZCkge1xuXHRcdFx0cmV0dXJuIGF3YWl0e1xuXHRcdFx0XHRzdGF0dXNDb2RlOiA0MDQsXG5cdFx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0XHRtZXNzYWdlOiBgQm9vayBub3QgZm91bmRgLFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdFx0J0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcblx0XHRcdFx0fSxcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIGF3YWl0e1xuXHRcdFx0c3RhdHVzQ29kZTogMjAwLFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoQm9va0ZvdW5kKSxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcblx0XHRcdH0sXG5cdFx0fVxuXHR9XG5cdGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiBlcnJvclxuXHQgIH1cblx0fVxuXG5cblxuXG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/handlers/getProductsById.ts\n");

/***/ }),

/***/ "./src/handlers/books.json":
/*!*********************************!*\
  !*** ./src/handlers/books.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":"1db5fb66-e0d9-11eb-ba80-0242ac130004","title":"1984","year":"2015","author":"Джордж Оруэлл","count":13,"description":"Своеобразный антипод второй великой антиутопии XX века О дивный новый мир Олдоса Хаксли. Что, в сущности, страшнее: доведенное до абсурда общество появления или доведенное до абсолюта общество идеи? По Оруэллу, нет и не может быть ничего ужаснее тотальной несвободы...","price":11.73,"picture":"https://s5-goods.ozstatic.by/480/449/348/10/10348449_0_1984_Dzhordzh_Oruell.jpg"},{"id":"1bf69a28-e0da-11eb-ba80-0242ac130004","title":"Ход королевы","year":"2020","author":"Уолтер Тевис","count":3,"description":"Бет Хармон - тихая, угрюмая и на первый взгляд ничем не примечательная восьмилетняя девочка, которую отправляют в приют после гибели матери. Она лишена любви и эмоциональной поддержки. Ее круг общения - еще одна сирота и сторож, он учит Бет играть в шахматы, которые постепенно становятся для нее смыслом жизни. По мере взросления юный гений начинает злоупотреблять транквилизаторами и алкоголем, сбегая тем самым от реальности. Лишь во время игры в шахматы ее мысли проясняются и она может возвращать себе контроль. Уже в шестнадцать лет Бет становится участником Открытого чемпионата США по шахматам. Но параллельно ее стремлению отточить свои навыки на профессиональном уровне, ставки возрастают, ее изоляция обретает пугающий масштаб, а желание сбежать от реальности становится соблазнительнее. И наступает момент, когда ей предстоит сразиться с лучшим игроком мира. Сможет ли она победить или станет жертвой своих пристрастий, как это уже случалось в прошлом?","price":17.65,"picture":"https://s2-goods.ozstatic.by/480/72/970/10/10970072_0_Hod_korolevi_Uolter_Tevis.jpg"},{"id":"85babbbe-e22a-11eb-ba80-0242ac130004","title":"Хочу и буду. Принять себя, полюбить жизнь и стать счастливым","year":"2020","author":"Михаил Лабковский","count":45,"description":"Психолог Михаил Лабковский абсолютно уверен, что человек может и имеет право быть счастливым и делать только то, что он хочет. Его книга о том, как понять себя, обрести гармонию и научиться радоваться жизни. Автор исследует причины, препятствующие психически здоровому образу жизни: откуда в нас осознанные и бессознательные тревоги, страхи, неумение слушать себя и строить отношения с другими людьми? Отличительная черта подхода Лабковского - в конкретике. На любой самый сложный вопрос он всегда дает предельно доходчивый ответ. Его заявления и советы настолько радикальны, что многим приходится сначала испытать удивление, если не шок. В рекомендациях автор не прячется за обтекаемыми формулировками, а четко называет причины проблем. И самое главное, что он знает, как эту проблему решить - без копания в детских психотравмах и пристального анализа вашего прошлого. Если у человека есть знание и желание, то изменить себя и свою жизнь к лучшему вполне реально. Цель любой работы психолога - личное счастье и благополучие его пациента. Цель издания этой книги - личное счастье каждого, кто ее прочитает.","price":19.9,"picture":"https://cv3.litres.ru/pub/c/elektronnaya-kniga/cover_330/25280333-mihail-labkovskiy-hochu-i-budu-prinyat-sebya-polubit-zhizn-i-stat-schastlivym.jpg"},{"id":"85babe34-e22a-11eb-ba80-0242ac130004","title":"Тонкое искусство пофигизма. Парадоксальный способ жить счастливо","year":"2018","author":"Марк Мэнсон","count":5,"description":"Современное общество пропагандирует культ успеха: будь умнее, богаче, продуктивнее - будь лучше всех. Соцсети изобилуют историями на тему, как какой-то малец придумал приложение и заработал кучу денег, статьями в духе \'Тысяча и один способ быть счастливым\', а фото во френдленте создают впечатление, что окружающие живут лучше и интереснее, чем мы. Однако наша зацикленность на позитиве и успехе лишь напоминает о том, чего мы не достигли, о мечтах, которые не сбылись. Как же стать по-настоящему счастливым? Популярный блогер Марк Мэнсон предлагает свой, оригинальный подход к этому вопросу. Его жизненная философия проста - необходимо научиться искусству пофигизма. Определив то, до чего вам действительно есть дело, нужно уметь наплевать на все второстепенное, забить на трудности, послать к черту чужое мнение и быть готовым взглянуть в лицо неудачам и показать им средний палец. В своей остроумной книге, мгновенно ставшей бестселлером, через истории жизненных неурядиц, провалов и лаж (как своих, так и известных людей) автор рассказывает, как овладеть этим тонким искусством пофигизма, зачем нужно быть менее уверенным в себе и что принцип \'Делайте хоть что-нибудь\'- отличная мотивация. Эта книга поможет вам жить легко вопреки всем трудностям, меньше волноваться и получать удовольствие от жизни. ","price":19.09,"picture":"https://cv1.litres.ru/pub/c/elektronnaya-kniga/cover_330/25440816-mark-menson-tonkoe-iskusstvo-pofigizma.jpg"},{"id":"85babf2e-e22a-11eb-ba80-0242ac130004","title":"Гарри Поттер и философский камень","year":"2016","author":"Джоан Роулинг","count":55,"description":"Одиннадцатилетний мальчик-сирота Гарри Поттер живет в семье своей тетки и даже не подозревает, что он - настоящий волшебник. Но однажды прилетает сова с письмом для него, и жизнь Гарри Поттера изменяется навсегда. Он узнает, что зачислен в Школу Чародейства и Волшебства, выясняет правду о загадочной смерти своих родителей, а в результате ему удается раскрыть секрет философского камня.","price":22.9,"picture":"https://s1-goods.ozstatic.by/480/490/102/102490_0_…ri_Potter_i_filosofskiy_kamen_Dzhoan__Rouling.jpg"},{"id":"d2cdfdca-e22b-11eb-ba80-0242ac130004","title":"Мужчины с Марса, женщины с Венеры (м)","year":"2018","author":"Джон Грэй","count":33,"description":"\'Мужчины с Марса, женщины с Венеры\' - один из величайших бестселлеров нашего времени. Это книга, изменившая к лучшему судьбы великого множества людей. Большинство проблем в отношениях мужчины и женщины возникают потому, что мы действительно разные. И не просто разные люди - мы с разных планет. Наш подход к большинству вопросов отличается настолько, что для настоящего взаимопонимания необходим особый общий язык. И эта книга поможет каждому и каждой этот язык найти и освоить. А когда мы его выучим, исчезнет большинство причин быть несчастливыми в любви, в семье, в деловых отношениях. Книга предназначена для всех мужчин и женщин старше 16 лет.","price":14.32,"picture":"https://cv4.litres.ru/pub/c/elektronnaya-kniga/cover_330/39961349-dzhon-grey-muzhchiny-s-marsa-zhenschiny-s-venery.jpg"},{"id":"60cdf79c-e22c-11eb-ba80-0242ac130004","title":"Гравити Фолз. Дневник 3","year":"2017","author":"Алекс Хирш,","count":21,"description":"Вы держите в руках тот самый \'Дневник 3\', написанный загадочным \'автором\', цветную и иллюстрированную сокровищницу, полную не раскрытых прежде тайн, информации о монстрах и загадок, связанных с событиями в сонном городишке Гравити Фолз. Вам предстоит узнать трагическую историю Форда, и куда девался Блендин, и что такое 52-е измерение, и как приманить клетчатого утконоса. Многие темные силы хотели бы завладеть этой книгой, так что берегитесь тех, кто попытается ее у вас отобрать (особенно если у них глаза светятся желтым!) В общем - приятного чтения!","price":51.94,"picture":"https://s3-goods.ozstatic.by/480/195/550/10/10550195_0_Rraviti_Folz_Dnevnik_3_Aleks_Hirsh.jpg"}]');

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