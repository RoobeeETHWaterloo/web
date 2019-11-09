var core = (function() {

	var currentChar;
	var chars;

	core = {
		/*
		 * @description Триггер готовности.
		 * @params onReady {function}   // Колбек, срабатывает когда все проинициализировано
		 */
		onReady: function(onReady) {
			// Авторизация, инициализации
			onReady();
		},

		// Методы игрока
		player: {
			/*
			 * @description Получить имя аккаунта
			 * @return {string}     //Имя аккаунта (одно на всех котов)
			 */
			nameGet: function() {
				var name = "Vasya Pupkin";
				return name;
			}
		},

		//Персонажи
		char: {
			/*
			 * @description Получить список всех персонажей юзера
			 * @params [
			 *      {
			 *          charId: '123456',
			 *          type: 'cryptokitties',
			 *          level:      1,
			 *          hp:         10,
			 *          strength:   5,
			 *          name:   'pussyCat',
			 *          image: string
			 *      }
			 * ]
			 */
			getList: function () {
				if (!chars) {
					chars = {
						"123456": {
							charId: '123456',
							type: 'cryptokitties',
							level:      1,
							hp:         10,
							strength:   5,
							name:   'pussyCat',
							image: 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1256264.svg'
						},
						"456789": {
							charId: '456789',
							type: 'cryptokitties',
							level:      1,
							hp:         10,
							strength:   5,
							name: 'Убийца мышек',
							image: 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1256264.svg'
						}
					};
				}
				return Object.values(chars);
			},

			/*
			 * @description Выбрать персонажа и запомнить его
			 * @params charId
			 */
			select: function (charId) {
				currentChar = charId;
			},

			/*
			 * @description Получить текущего кота
			 */
			currentGet: function () {
				return chars[currentChar];
			}
		},

		challengeRequest: (function() {
			var onStart;
			return {
				/*
				 * @description Создать заявку на бой
				 * @return
				 */
				start: function () {
					if (onStart) {
						onStart();
					} else {
						console.warn('set onFightStart before');
					}
				},

				/*
				 * @description Триггер, срабатывает при начале боя (когда подобран соперник)
				 * @param onStart   function    // Хендлер при начале боя
				 * @return {                    // Возвращаем инфо соперника
				 *      name:   {string},
				 *      level:  {number},
				 *      hp:     {number},
				 *
				 * }
				 */
				onStart: function (_onStart) {
					onStart = _onStart;
				}
			}
		})(),

		challenge: (function() {
			var state = 1;
			var challenge = {
				/*
				 * @description Сделать ход
				 * @params action1 {number}     //1-атака в голову, 2-атака в живот, 3-под хвост
				 * @params action2 {number}     //4-защита головы, 5-защита живота, 6-защита хвоста
				 */
				action: function (action1, action2) {
					var state = core.challenge.stateGet();
					if (state === 1) {
						state = 2;
					} else {
						state = 1;
					}
				},

				/*
				 * @description Возвращает состояние боя
				 * return enum
				 *            1 - нужно сделать ход
				 *            2 - ожидаем хода соперника
				 *            3 - нужно отправить шифр
				 *            4 - ожидаем шифр соперника
				 */
				stateGet: function () {
					return state;
				}
			};
			return challenge;
		})()
	};
	return core;
})();
