import React, { useState, useEffect } from "react";
import { MenuItem, FormControl, Select } from "@material-ui/core";

import "./App.css";

function App() {
	const [countries, setcountries] = useState([]);
	const [country, setcountry] = useState("Worldwide");

	useEffect(() => {
		const getcountriesdata = async () => {
			await fetch("https://disease.sh/v3/covid-19/countries")
				.then((response) => response.json())
				.then((data) => {
					const countries = data.map((country) => ({
						name: country.country,
						value: country.countryInfo.iso2,
					}));
					setcountries(countries);
				});
		};
		getcountriesdata();
	}, []);

	const onCountryChange = async (e) => {
		const countrycode = e.target.value;
		setcountry(countrycode);
	};
	return (
		<div className="app">
			<div className="app-header">
				<h1>COVID-19 TRACKER</h1>
				<FormControl className="app-dropdown"></FormControl>
				<Select variant="outlined" onChange={onCountryChange} value={country}>
					<MenuItem variant="outlined" value="Worldwide">
						Worldwide
					</MenuItem>
					{countries.map((country) => (
						<MenuItem value={country.value}>{country.name}</MenuItem>
					))}
				</Select>
			</div>
		</div>
	);
}

export default App;
