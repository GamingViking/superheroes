'use client'

import React, { useEffect, useState } from 'react';

// Define an interface for the type of data you expect (adjust fields accordingly)
interface ApiResponse {
  id: number;
  name: string;
  // Add other fields as per your API response
}

const MyComponent: React.FC = () => {
  // State to store the API data
  const [data, setData] = useState<ApiResponse | null>(null);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.superheroapi.com/api.php/a34d3ae98eaa808e2d1975f5382ed007/search/batman');
        const jsonData: ApiResponse = await response.json();
        setData(jsonData); // Store the data in state
        console.log("jsonData:", jsonData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  // Render
  return (
    <div>
        <text>Hello, you</text>
      {data ? (
        <ul>
          <li key={data.id}>{data.id}</li>
          <li>{data.name}</li>
          {/* Render other properties as needed */}
        </ul>
      ) : (
        <p>Loading or no data!</p>
      )}
    </div>
  );
};

export default MyComponent;
