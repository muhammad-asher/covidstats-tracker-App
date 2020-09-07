import React from "react";
import "./Table.css";

function Table({ countries }) {
	return (
		<div className="table">
			{countries.map(({ country, cases }) => (
				<tr>
					<td>{country}</td>
					<td>
						<strong className="str">{cases}</strong>
					</td>
				</tr>
			))}
		</div>
	);
}

export default Table;
