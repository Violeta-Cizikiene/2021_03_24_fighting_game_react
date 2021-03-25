
function Card({name, image}) {
	
  return (
    <div className="card">
	    <img id="cat" src={image} alt=""/>
	    <h1>{name}</h1>
	   	<p>Cute animal</p>
    </div>
  );
}

export default Card;