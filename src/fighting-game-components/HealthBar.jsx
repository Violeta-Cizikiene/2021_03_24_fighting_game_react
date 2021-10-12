function HealthBar({health}) {

	return (
		<div className="HealthBarContainer">
			<span>HEALTH BAR</span>
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