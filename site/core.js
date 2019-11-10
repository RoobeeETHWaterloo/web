import basePath from 'base-path'
import axios from 'axios'


var config = {
	p2pConnectorUrl: "https://cryptobrawl.online",
	skaleNetwork: "https://sip1.skalenodes.com:10051",
	mainNetwork: "mainnet",
	providers: {
		MetaMask: "",
		Torus: process.env.NODE_ENV === 'development' ? basePath('assets/torus.min.js') : '/assets/torus.min.js',
	},
	fightAbi: [
		{
			"constant": false,
			"inputs": [
				{
					"name": "fightID",
					"type": "uint256"
				},
				{
					"name": "stepNum",
					"type": "uint256"
				},
				{
					"name": "player1Action1",
					"type": "uint256"
				},
				{
					"name": "player1Action2",
					"type": "uint256"
				},
				{
					"name": "player2Action1",
					"type": "uint256"
				},
				{
					"name": "player2Action2",
					"type": "uint256"
				},
				{
					"name": "player1Salt",
					"type": "string"
				},
				{
					"name": "player2Salt",
					"type": "string"
				},
				{
					"name": "player1Signature",
					"type": "bytes"
				},
				{
					"name": "player2Signature",
					"type": "bytes"
				}
			],
			"name": "actionSet",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [],
			"name": "cancelSearch",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [],
			"name": "giveUp",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "ERC721",
					"type": "address"
				},
				{
					"name": "tokenID",
					"type": "uint256"
				},
				{
					"name": "tempAddress",
					"type": "address"
				}
			],
			"name": "searchFight",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"name": "player",
					"type": "address"
				},
				{
					"indexed": false,
					"name": "level",
					"type": "uint256"
				}
			],
			"name": "LookingForAFight",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"name": "player1",
					"type": "address"
				},
				{
					"indexed": false,
					"name": "player2",
					"type": "address"
				},
				{
					"indexed": false,
					"name": "fightId",
					"type": "uint256"
				}
			],
			"name": "FightCreated",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"name": "winner",
					"type": "address"
				},
				{
					"indexed": false,
					"name": "fightId",
					"type": "uint256"
				}
			],
			"name": "FightFinished",
			"type": "event"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "_fightsCount",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "playerAction1",
					"type": "uint256"
				},
				{
					"name": "playerAction2",
					"type": "uint256"
				},
				{
					"name": "oponentAction1",
					"type": "uint256"
				},
				{
					"name": "oponentAction2",
					"type": "uint256"
				}
			],
			"name": "calculateDamage",
			"outputs": [
				{
					"name": "",
					"type": "uint8"
				}
			],
			"payable": false,
			"stateMutability": "pure",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "uint8"
				}
			],
			"name": "challengesList",
			"outputs": [
				{
					"name": "",
					"type": "bytes32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "bytes32"
				}
			],
			"name": "chars",
			"outputs": [
				{
					"name": "level",
					"type": "uint8"
				},
				{
					"name": "fightsCount",
					"type": "uint256"
				},
				{
					"name": "winsCount",
					"type": "uint256"
				},
				{
					"name": "fullHp",
					"type": "uint8"
				},
				{
					"name": "damage",
					"type": "uint8"
				},
				{
					"name": "fightId",
					"type": "uint256"
				},
				{
					"name": "currentHP",
					"type": "uint8"
				},
				{
					"name": "lastFihgtBlockNumber",
					"type": "uint256"
				},
				{
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"name": "tokenAddress",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "fightID",
					"type": "uint256"
				},
				{
					"name": "stepNum",
					"type": "uint256"
				},
				{
					"name": "playerAction1",
					"type": "uint256"
				},
				{
					"name": "playerAction2",
					"type": "uint256"
				},
				{
					"name": "playerSalt",
					"type": "string"
				},
				{
					"name": "signature",
					"type": "bytes"
				}
			],
			"name": "checkAction",
			"outputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "pure",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"name": "fights",
			"outputs": [
				{
					"name": "player1CharID",
					"type": "bytes32"
				},
				{
					"name": "player2CharID",
					"type": "bytes32"
				},
				{
					"name": "player1GeneralAddress",
					"type": "address"
				},
				{
					"name": "player2GeneralAddress",
					"type": "address"
				},
				{
					"name": "player1TempAddress",
					"type": "address"
				},
				{
					"name": "player2TempAddress",
					"type": "address"
				},
				{
					"name": "stepNum",
					"type": "uint256"
				},
				{
					"name": "lastStepBlock",
					"type": "uint256"
				},
				{
					"name": "winner",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "ERC721",
					"type": "address"
				},
				{
					"name": "tokenID",
					"type": "uint256"
				}
			],
			"name": "genCharId",
			"outputs": [
				{
					"name": "",
					"type": "bytes32"
				}
			],
			"payable": false,
			"stateMutability": "pure",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"name": "temporaryAddresses",
			"outputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		}
	],
	fightContractAddress: "0x0e4219Ec07C0E2245Dc6b3e48B7eDdD20a216787",
	catContractAddress: "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d"

};


var skaleInstance;
var fightAcc;
var fightContract;
var currentCharId;
var chars;
var myCharState;


const core = {
	provider: (() => {
		let onConnect

		return {
			/**
			 *
			 * @param {string} providerName "MetaMask|Torus"
			 * @param {Function} callback "MetaMask|Torus"
			 */
			load: function (providerName, callback) {

				var onReady = function () {
					fightContract = window.fightContract = new skaleInstance.eth.Contract(config.fightAbi, config.fightContractAddress);

					if (typeof callback === 'function') {
						callback();
					}

					if (typeof onConnect === 'function') {
						onConnect();
					}
				};

				var loadScript = function (src, onLoad) {
					var s = document.createElement('script');
					s.setAttribute('src', src);
					s.onload = function () {
						console.log('provider loaded:', src);
						onLoad();
					};
					document.body.appendChild(s);
				};

				if (providerName === 'MetaMask') {
					ethereum.enable();
					skaleInstance = window.skaleInstance = new Web3(config.skaleNetwork);
					ethereum.autoRefreshOnNetworkChange = true;
					ethereum.send('eth_requestAccounts');
					callback();
				}
				else if (providerName === 'Torus') {
					console.log('initing Torus');
					loadScript(config.providers.Torus, function () {
						var isTorus = sessionStorage.getItem('pageUsingTorus');
						var torus = new Torus();

						torus.init({buildEnv: "testing"})
							.then(function () {
								torus.login()
									.then(function () {
										skaleInstance = window.skaleInstance = new Web3(torus.provider);
										console.log('skaleInstance:', skaleInstance);
										console.warn('using toras:', isTorus);
										sessionStorage.setItem('pageUsingTorus', 1);
										torus.setProvider({host: config.skaleNetwork, networkName: 'skale'}).then(function () {
											onReady();

											//config.p2pConnectorUrl + "/discordSet"
										});

									})
									.catch(function () {
										console.log('already auth');
									});
							})
							.catch(function (err) {
								console.log('init err:', err);
							});
					});
				}
			},

			onConnect: (_onConnect) => {
				onConnect = _onConnect
			},
		}
	})(),


	// Методы игрока
	player: {
		/*
		 * @description Get account name
		 * @return {string}     //Имя аккаунта (одно на всех котов)
		 */
		getName: function () {
			return skaleInstance ? "hello" : null;
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
			else {
				callback(chars);
			}
		},

		/*
		 * @description Select champ and remember it
		 * @params charId
		 */
		select: function (_charId) {
			localStorage.setItem('currentCharId', _charId);
		},

		infoGet: function (charId, callback) {
			core.char.tokenIdGet(charId, function (tokenId) {
				core.char.infoGetByTokenId(tokenId, callback);
			});
		},

		infoGetByTokenId: function (tokenId, callback) {
			fightContract.methods.chars(tokenId)
				.call()
				.then(function (info) {
					var charId = info.tokenId;
					axios.get(`https://api.cryptokitties.co/kitties/${charId}`)
						.then(function (response) {
							callback({
								tokenId: tokenId,
								name:       response.data.name,
								imageUrl:   response.data.image_url,
								currentHP:  +info.currentHP,
								damage:     +info.damage,
								fightId:    +info.fightId,
								fightsCount: +info.fightsCount,
								fullHp:     +info.fullHp,
								lastFihgtBlockNumber: +info.lastFihgtBlockNumber,
								level:      +info.level,
								winsCount:  +info.winsCount
							});
						});
				});
		},

		myInfoGet: function (callback) {
			var myId = core.char.currentIdGet();
			core.char.infoGet(myId, function(info) {
				callback(info);
			});
		},

		/*
		 * @description Get current champ
		 */
		currentIdGet: function () {
			return localStorage.getItem('currentCharId');
		},

		tokenIdGet: function (id, callback) {
			fightContract.methods.genCharId(config.catContractAddress, id)
				.call()
				.then(function (response) {
					callback(response);
				});
		},

		/*
		 * @description Get current player state (1 - not in fight, 2 - waiting fight, 3 - fighting process)
		*/
		stateGet: function (callback) {
			core.char.myInfoGet(function(charInfo) {
				callback({
					info: charInfo,
					isFight: !!charInfo.fightId
				});
			})
		}
	},

	challengeRequest: (function () {
		var onStart;
		//var challengeInstance = new Web3(web3.currentProvider);

		return {
			/*
			 * @description Создать заявку на бой
			 * @return
			 */
			create: function (callback) {
				var findFight;
				fightAcc = skaleInstance.eth.accounts.create();
				// console.log('fightAcc:', fightAcc);

				fightContract.methods.searchFight(config.catContractAddress, +core.char.currentIdGet(), fightAcc.address).send({from: skaleInstance.eth.accounts.currentProvider.selectedAddress}).then(console.log);

				findFight = function () {
					core.char.myInfoGet(function (info) {
						var fightId = +info.fightId;
						if (fightId) {
							// alert(info.fightId);

              if (typeof callback === 'function') {
                callback();
              }

							if (typeof onStart === 'function') {
                onStart();
              }
						} else {
							setTimeout(findFight, 3000);
						}
					});
				};

				findFight();
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

			infoGet: function (fightId, callback) {
				console.log('fightId:', fightId);
				fightContract.methods.fights(fightId)
					.call()
					.then(function (response) {
						callback(response);
					});
			},

			enemyCharInfoGet: function (callback) {
				var playerNum, enemyNum;
				var myInfo;
				var infoGet = function (fightId) {
					//console.log('fightId=', fightId);
					core.challenge.infoGet(fightId, function (fightInfo) {
						//console.log('fightInfo:', fightInfo);
						if (myInfo.tokenId === fightInfo.player1CharID) {
							playerNum = "player1";
							enemyNum = "player2";
						} else {
							playerNum = "player2";
							enemyNum = "player1";
						}
						var enemyCharUid = fightInfo[enemyNum + "CharID"];
						core.char.infoGetByTokenId(enemyCharUid, callback);
					});
				};

				core.char.myInfoGet(function (_myInfo) {
					//console.log('myInfo:', _myInfo);
					myInfo = _myInfo;
					infoGet(myInfo.fightId);
				});

			},

			/*
			 * @description Возвращает состояние боя
			 * return enum
			 *            1 - нужно сделать ход
			 *            2 - ожидаем хода соперника
			 *            3 - нужно отправить шифр
			 *            4 - ожидаем шифр соперника
			 */
			stateGet: function (callback) {
				var charMy, charEnemy, fightState;
				var onReady = function() {
					callback({
						fightState: fightState,
						charMy: charMy,
						charEnemy: charEnemy
					});
				};
				core.char.myInfoGet(function(_charMy) {
					charMy = _charMy;
					if (_charMy.fightId) {
						fightState = localStorage.getItem('fightState') || 1;
					}
					core.challenge.enemyCharInfoGet(function(_charEnemy) {
						charEnemy = _charEnemy;
						onReady();
					});
				});
			},


			onStageChange: function () {

			}
		};
		return challenge;
	})()
};

window.core = core;
export default core
