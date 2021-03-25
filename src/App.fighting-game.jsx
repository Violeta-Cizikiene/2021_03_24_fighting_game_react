import './App.css';

let enemies = [
    {
        name: "Goblin",
        img: "https://i.imgur.com/yBh7Fn4.png",
        health: 100,
        maxDamage: 12
    },
    {
        name: "Troll",
        img: "https://i.pinimg.com/originals/8d/7f/d8/8d7fd8ae9fcd6060497c628e1c7944b4.jpg",
        health: 120,
        maxDamage: 8
    },
    {
        name: "Witch",
        img: "https://i.pinimg.com/originals/c0/da/c0/c0dac0da46b4c59534cf898b1967d523.png",
        health: 80,
        maxDamage: 15
    }
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
  return (
    <div className="App">

    	<Header/>

    	<div className="content">
    		<SideBar/>
    		<div className="cardContainer">
			    <Card name="Shkacas" image="https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg" alt=""/>
			    <Card name="Micius" image="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg" alt=""/>
			    <Card name="Lushe" image="https://www.msd-animal-health-hub.co.uk/sites/default/files/diabetes-cat-3-min.png" alt=""/>
    		</div>
    	</div>

    	<Footer/>
    </div>
  );
}

export default App;