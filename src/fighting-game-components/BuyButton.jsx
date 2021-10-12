function BuyButton(props) {
	let border = '';
	if (props.selected) {
		border = '2px solid orange'
	}
	return (
		<div style={{
			border: border
		}}
		onClick={() => props.onClick(props.weapon)} className="BuyButton">
			<img src={props.weapon.img}/>
			<span>{props.weapon.effect}</span>
		</div>
	);
}

export default BuyButton;