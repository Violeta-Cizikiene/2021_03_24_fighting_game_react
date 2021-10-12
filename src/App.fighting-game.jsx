import './App.fighting-game.css';
import Fighter from './fighting-game-components/Fighter';
import HealthBar from './fighting-game-components/HealthBar';
import BuyButton from './fighting-game-components/BuyButton';
import React, {useState} from 'react';

let enemies = [
	{
		name: "Goblin",
		img: "/img_player/v.png",
		health: 100,
		maxDamage: 12
	},
]

let weapons = {
	sword: {
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjeRzenAFh9nuqc0sexfw63azpjKmulkubHg&usqp=CAU",
		damage: 10,
		effect: 'gives player 25% chance to doge enemy attacks'
	},
	magicWand: {
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYLtdkk7fwbEwdjNpuL0Oo1ka5A7z0PhL34Q&usqp=CAU",
		damage: 12,
		effect: 'heals player on every enemy hit from 0 to 5 hit points'
	},
	bow: {
		img: "https://preview.pixlr.com/images/800wm/100/1/1001468630.jpg",
		damage: 7,
		effect: 'has a 50% chance to hit enemy two times in a row'
	},
	potion: {
		img: "https://preview.pixlr.com/images/450nwm/100/1/1001468594.jpg",
		info: "can be bought from shop for 50 coins, recovers player health when bought",
	}
}

function App() {

	let [weapon, setWeapon] = useState(weapons.sword)
	let [playerHealth, setplayerHealth] = useState(100)	
	let [monster, setmonster] = useState(enemies[0])
	let [monsterHealth, setmonsterHealth] = useState(monster.health)
	let [coins, setCoins] = useState(0)

	function onWeaponClick(weapon) {
		console.log('onWeaponClick', weapon);
		// ginklo reiksmes nustatymas (f-ja)
		setWeapon(weapon)
	}

	return (
		<div className="App">

			<div className="weapons_player_health">

				<div className="weapons">
					<BuyButton selected={weapon == weapons.sword} onClick={onWeaponClick} weapon={weapons.sword}/>
					<BuyButton selected={weapon == weapons.bow} onClick={onWeaponClick} weapon={weapons.bow}/>
					<BuyButton selected={weapon == weapons.magicWand} onClick={onWeaponClick} weapon={weapons.magicWand}/>
				</div>

				<Fighter className="Songoku" img="/img_player/s.png"/>
				<HealthBar health={playerHealth}/>

			</div>

			<div className="coins_potion_hit">
				<div>COINS: {coins}</div>
				<div onClick={() => {
					if (coins >= 50) {
						setCoins(coins - 50)
						setplayerHealth(100)
					}
				}} className="potion"><span>POTION</span></div>
				<button onClick={() => {
					// ginklo zala taskais
					let damage = weapon.damage
					// kiek monster turi gyvybiu po patirtos zalos nuo player ginklo
					let enemyHealth = monsterHealth - damage
					// nustatoma nauja reiksme prieso gyvybems
					setmonsterHealth(enemyHealth)
					console.log(enemyHealth)
					// prieso random damage
					let enemyDamage = Math.random() * monster.maxDamage
					// kiek player turi gyvybiu po patirtos zalos nuo monster ginklo
					let newPlayerHealth = playerHealth - enemyDamage
					// nustatoma nauja reiksme player gyvybems
					setplayerHealth(newPlayerHealth)

					// coins pridejimas player'iui po ginklo atakos
					let newCoins = coins + Math.round(Math.random() * 10)
					setCoins(newCoins)
				}}>HIT</button>
			</div>

			<div className="player_health">
				<Fighter className="Vegeta" img={enemies[0].img}/>
				<HealthBar health={monsterHealth}/>
			</div>

		</div>
	);
}

export default App;