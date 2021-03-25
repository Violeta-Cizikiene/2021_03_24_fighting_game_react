import Card from './components/Card';
import './App.css';
import Header from './components/Header'
import SideBar from './components/SideBar'
import Footer from './components/Footer'

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
