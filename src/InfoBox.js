import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, active, casescol, total, ...props }) {
	return (
		<Card
			onClick={props.onClick}
			className={`infoBox ${active && "infoBox--selected"}`}
		>
			<CardContent>
				<Typography className="infobox-title" color="textSecondary">
					{title}
				</Typography>
				<h2 className={casescol}>{cases}</h2>
				<Typography className="infoBox-total" color="textSecondary">
					{total} Total
				</Typography>
			</CardContent>
		</Card>
	);
}

export default InfoBox;
