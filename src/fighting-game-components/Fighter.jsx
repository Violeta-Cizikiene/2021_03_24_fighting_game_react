function Fighter({img, className}) {

	return (
		<div className={"Fighter " + className}>
			<img src={img}/>			
		</div>
	);
}

export default Fighter;