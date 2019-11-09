import basePath from 'base-path'
import axios from 'axios'


var config = {
	skaleNetwork: "https://sip1.skalenodes.com:10051",
	providers: {
		MetaMask: "",
		Torus: process.env.NODE_ENV === 'development' ? basePath('assets/torus.min.js') : '/assets/torus.min.js',
	},
	fightAbi: [{
		constant: !0,
		inputs: [{name: "", type: "uint8"}],
		name: "challengesList",
		outputs: [{name: "", type: "bytes32"}],
		payable: !1,
		stateMutability: "view",
		type: "function"
	}, {
		constant: !0,
		inputs: [{name: "", type: "uint256"}],
		name: "fights",
		outputs: [{name: "player1CharID", type: "bytes32"}, {
			name: "player2CharID",
			type: "bytes32"
		}, {name: "player1GeneralAddress", type: "address"}, {
			name: "player2GeneralAddress",
			type: "address"
		}, {name: "player1TempAddress", type: "address"}, {
			name: "player2TempAddress",
			type: "address"
		}, {name: "stepNum", type: "uint256"}, {name: "lastStepBlock", type: "uint256"}, {
			name: "winner",
			type: "address"
		}],
		payable: !1,
		stateMutability: "view",
		type: "function"
	}, {
		constant: !1,
		inputs: [{name: "ERC721", type: "address"}, {name: "tokenID", type: "uint256"}, {
			name: "tempAddress",
			type: "address"
		}],
		name: "searchFight",
		outputs: [],
		payable: !1,
		stateMutability: "nonpayable",
		type: "function"
	}, {
		constant: !0,
		inputs: [{name: "playerAction1", type: "uint256"}, {
			name: "playerAction2",
			type: "uint256"
		}, {name: "oponentAction1", type: "uint256"}, {name: "oponentAction2", type: "uint256"}],
		name: "calculateDamage",
		outputs: [{name: "", type: "uint8"}],
		payable: !1,
		stateMutability: "pure",
		type: "function"
	}, {
		constant: !1,
		inputs: [{name: "fightID", type: "uint256"}, {name: "stepNum", type: "uint256"}, {
			name: "player1Action1",
			type: "uint256"
		}, {name: "player1Action2", type: "uint256"}, {
			name: "player2Action1",
			type: "uint256"
		}, {name: "player2Action2", type: "uint256"}, {name: "player1Salt", type: "string"}, {
			name: "player2Salt",
			type: "string"
		}, {name: "player1Signature", type: "bytes"}, {name: "player2Signature", type: "bytes"}],
		name: "actionSet",
		outputs: [],
		payable: !1,
		stateMutability: "nonpayable",
		type: "function"
	}, {
		constant: !0,
		inputs: [{name: "", type: "bytes32"}],
		name: "chars",
		outputs: [{name: "level", type: "uint8"}, {name: "fightsCount", type: "uint256"}, {
			name: "winsCount",
			type: "uint256"
		}, {name: "fullHp", type: "uint8"}, {name: "damage", type: "uint8"}, {
			name: "fightId",
			type: "uint256"
		}, {name: "currentHP", type: "uint8"}, {name: "lastFihgtBlockNumber", type: "uint256"}],
		payable: !1,
		stateMutability: "view",
		type: "function"
	}, {
		constant: !0,
		inputs: [{name: "", type: "bytes32"}],
		name: "charsTopPlayer",
		outputs: [{name: "", type: "address"}],
		payable: !1,
		stateMutability: "view",
		type: "function"
	}, {
		constant: !0,
		inputs: [{name: "fightID", type: "uint256"}, {name: "stepNum", type: "uint256"}, {
			name: "playerAction1",
			type: "uint256"
		}, {name: "playerAction2", type: "uint256"}, {name: "playerSalt", type: "string"}, {
			name: "signature",
			type: "bytes"
		}],
		name: "checkAction",
		outputs: [{name: "", type: "address"}],
		payable: !1,
		stateMutability: "pure",
		type: "function"
	}, {
		anonymous: !1,
		inputs: [{indexed: !1, name: "player", type: "address"}, {indexed: !1, name: "level", type: "uint256"}],
		name: "LookingForAFight",
		type: "event"
	}, {
		anonymous: !1,
		inputs: [{indexed: !1, name: "player1", type: "address"}, {
			indexed: !1,
			name: "player2",
			type: "address"
		}, {indexed: !1, name: "fightId", type: "uint256"}],
		name: "FightCreated",
		type: "event"
	}, {
		anonymous: !1,
		inputs: [{indexed: !1, name: "winner", type: "address"}, {indexed: !1, name: "fightId", type: "uint256"}],
		name: "FightFinished",
		type: "event"
	}],
	fightContractAddress: "0x1DCBD0ac51da7D49aBE13d29F3F363f65cE96e3b",
	catContractAddress: "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d"

};


var skaleInstance;
var fightAcc;
var currentChar;
var chars;


const core = {
	provider: {
		/**
		 *
		 * @param {string} providerName "MetaMask|Torus"
		 * @param {Function} callback "MetaMask|Torus"
		 */
		load: function (providerName, callback) {
			var loadScript = function (src, onLoad) {
				var s = document.createElement('script');
				s.setAttribute('src', src);
				s.onload = function () {
					console.log('provider loaded:', src);
					onLoad()
				};
				document.body.appendChild(s);
			};

			if (providerName === 'MetaMask') {
				// await torus.ethereum.enable()
			} else if (providerName === 'Torus') {
				console.log('initing Torus');
				loadScript(config.providers.Torus, function () {

					//var isTorus = sessionStorage.getItem('pageUsingTorus');
					//if (isTorus) {
					//    web3Obj.initialize().then(function() {
					//        this.setStateInfo()
					//    });
					//} else {
					var torus = new Torus();
					torus.init().then(function () {
						torus.login().then(function () {
							skaleInstance = window.skaleInstance = new Web3(torus.provider);
							console.log('skaleInstance:', skaleInstance);
							//torus.setProvider({host: config.skaleNetwork}).then(function () {
							callback();
							//});
							//torus.ethereum.enable();
						});
					});
					//}
				});

			}
		}
	},


	// Методы игрока
	player: {
		/*
		 * @description Get account name
		 * @return {string}     //Имя аккаунта (одно на всех котов)
		 */
		nameGet: function () {
			var name = "Vasya Pupkin";
			return name;
		},
		ownerAddressGet: function () {
			return skaleInstance.eth.accounts.currentProvider.selectedAddress;
		}
	},

	//Персонажи
	char: {
		/*
		 * @description Get list of all champions
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
		getList: function (callback) {
			if (!chars) {
				var ownerAddress = core.player.ownerAddressGet();
				console.log('ownerAddress:', ownerAddress);
				axios.get(`https://api.cryptokitties.co/v2/kitties?offset=0&limit=12&owner_wallet_address=${ownerAddress}&parents=false&authenticated=false&include=sale,sire,other&orderBy=id&orderDirection=desc`)
					.then(function (response) {
						var chars = [];
						response.data.kitties.forEach(function (val) {
							chars.push({
								id: val.id,
								name: val.name,
								image: val.image_url
							});
						});
						callback(chars);
					})
					.catch(function (error) {
						// handle error
						console.log(error);
					})
			}
		},

		/*
		 * @description Select champ and remember it
		 * @params charId
		 */
		select: function (charId) {
			currentChar = charId;
		},

		/*
		 * @description Get currnt champ
		 */
		currentGet: function () {
			return chars[currentChar];
		},

		/*
		 * @description Get current player state (1 - not in fight, 2 - waiting fight, 3 - fighting process)
		*/
		stateGet: function () {

		}
	},

	challengeRequest: (function () {
		var onStart;
		//var challengeInstance = new Web3(web3.currentProvider);
		var acc;

		return {
			/*
			 * @description Создать заявку на бой
			 * @return
			 */
			create: function () {
				fightAcc = skaleInstance.eth.accounts.create();

				var contract = new skaleInstance.eth.Contract(config.fightAbi, config.fightContractAddress);
				contract.methods.searchFight(address721, tokenID1, tempaddress1);
				console.log('contract:', contract);


				console.log('skaleInstance:', skaleInstance);
				console.log(fightAcc);
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

	challenge: (function () {
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
			},

			onStageChange: function () {

			}
		};
		return challenge;
	})()
};

window.core = core;
export default core
