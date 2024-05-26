import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('https://api.example.com/data');
				setData(response.data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []); // Empty dependency array ensures useEffect runs only once

	return (
		<div>
			<h2>Data from API</h2>
			<ul>
				{data.map((item) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</div>
	);
};

export default MyComponent;
