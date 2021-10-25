function HealthBar({health}) { //per propsus ateina

	return (
		<div className="HealthBarContainer">
			<span>{`HEALTH BAR ${Math.round(health)}/100`}</span>
			<div className="HealthBar">
				<div style={{
					/*atvaizduos skaiciai su procento zenklu*/
					width: `${health}%`
				}}></div>			
			</div>
		</div>
	);
}

export default HealthBar;