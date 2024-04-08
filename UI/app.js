
// // Fetch current weather data from a weather API
// fetch('https://api.openweathermap.org/data/2.5/weather?q=Kigali&appid=4b613fd6b968d965d62a999989648da9')
//   .then(response => response.json())
//   .then(data => {
//     const currentWeatherDetails = document.getElementById('current-weather-details');
//     currentWeatherDetails.innerHTML = `
//       <p>Temperature: ${data.main.temp}°C</p>
//       <p>Humidity: ${data.main.humidity}%</p>
//       <p>Wind Speed: ${data.wind.speed} m/s</p>
//       <p>Wind Direction: ${data.wind.deg}°</p>
//       <p>Precipitation: ${data.weather[0].description}</p>
//       <p>Atmospheric Pressure: ${data.main.pressure} hPa</p>
//     `;
//   })
//   .catch(error => console.error('Error fetching current weather:', error));

//   // Fetch short-term forecast data from a weather API
// fetch('https://api.openweathermap.org/data/2.5/forecast?q=Kigali&appid=4b613fd6b968d965d62a999989648da9')
// .then(response => response.json())
// .then(data => {
//   const shortTermForecast = document.getElementById('short-term-forecast');
//   // Extract and display forecast data
// })
// .catch(error => console.error('Error fetching short-term forecast:', error));

// // Similarly, fetch and display long-term forecast data


// // Fetch weather alert data from a weather API
// fetch('https://api.openweathermap.org/data/2.5/alerts?q=Kigali&appid=4b613fd6b968d965d62a999989648da9')
//   .then(response => response.json())
//   .then(data => {
//     const alertDetails = document.getElementById('alert-details');
//     // Display weather alert details
//   })
//   .catch(error => console.error('Error fetching weather alerts:', error));

//   // Initialize the map using Leaflet.js
//    const latitude = 40.7128;
// const longitude = -74.0060;
// const map = L.map('map').setView([latitude, longitude], 12);
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// // Fetch and display radar data or satellite imagery
// fetch('https://api.met.no/weatherapi/radar/2.0/station/136/latest/composite.png', {
//   method: 'GET',
//   mode: 'no-cors'
// })
//   .then(response => {
//     if (response.ok) {
//       return response.blob();
//     }
//     throw new Error(`HTTP error! status: ${response.status}`);
//   })
//   .then(data => {
//     const radarImage = document.getElementById('radar-image');
//     radarImage.src = URL.createObjectURL(data);
//   })
//   .catch(error => console.error('Error fetching radar image:', error));

//   document.getElementById('historical-weather-form');
//   document.getElementById("historical-weather-form").addEventListener('submit', function(event) {
//   event.preventDefault();
//   const startDate = document.getElementById('start-date').value;
//   const endDate = document.getElementById('end-date').value;
//   const lat = 40.7128;
//   const lon = -74.0060;

//   // Make a request to the API endpoint
//   const url = `https://history.openweathermap.org/data/2.5/history/city?lat=${lat}&lon=${lon}&type=hour&start=${startDate}&end=${endDate}&appid=YOUR_API_KEY`;

//   fetch(url, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Display historical weather data
//   })
//   .catch(error => {
//     console.error('Error fetching historical weather data:', error);
//   });
// });

// // Get the form and the details div elements
// const weather = document.getElementById('historical-weather-form');
// const details = document.getElementById('historical-weather-details');

// // Add a submit event listener to the form
// weather.addEventListener('submit', (event) => {
//   // Prevent the default form submission behavior
//   event.preventDefault();

//   // Get the start and end date values from the form
//   const startDate = document.getElementById('start-date').value;
//   const endDate = document.getElementById('end-date').value;

//   // Make a request to the API endpoint
//   // (Replace the URL below with your own API endpoint)
//   const url = `https://history.openweathermap.org/data/2.5/history/city?lat={lat}&lon={lon}&type=hour&start={start}&end={end}&appid={API key}`;
//   const response = fetch(url, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer 4b613fd6b968d965d62a999989648da9'
//     }
//   });

//   // Handle the API response
//   response.then((response) => {
//     if (response.ok) {
//       // If the response is successful, parse the JSON data and update the details div
//       response.json().then((data) => {
//         const html = `<h2>Weather Data for ${startDate} to ${endDate}</h2>
//                      <p>${data.summary}</p>
//                      <table>
//                        <thead>
//                          <tr>
//                            <th>Date</th>
//                            <th>Temperature</th>
//                            <th>Conditions</th>
//                            <th>Wind</th>
//                            <th>Humidity</th>
//                            <th>Precipitation</th>
//                          </tr>
//                        </thead>
//                        <tbody>
//                          ${data.data.map((day) => {
//                            return `<tr>
//                                      <td>${day.date}</td>
//                                      <td>${day.temperature}°F</td>
//                                      <td>${day.conditions}</td>
//                                      <td>${day.wind} mph</td>
//                                      <td>${day.humidity}%</td>
//                                      <td>${day.precipitation ?? '0%'}</td>
//                                    </tr>`;
//                          }).join('')}
//                        </tbody>
//                      </table>`;
//         details.innerHTML = html;
//       });
//     } else {
//       // If the response is not successful, display an error message
//       details.innerHTML = '<p>An error occurred. Please check the start and end dates and try again.</p>';
//     }
//   });
// });

// Fetch current weather data from a weather API
fetch('https://api.openweathermap.org/data/2.5/weather?q=Kigali&appid=4b613fd6b968d965d62a999989648da9')
  .then(response => response.json())
  .then(data => {
    const currentWeatherDetails = document.getElementById('current-weather-details');
    currentWeatherDetails.innerHTML = `
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
      <p>Wind Direction: ${data.wind.deg}°</p>
      <p>Precipitation: ${data.weather[0].description}</p>
      <p>Atmospheric Pressure: ${data.main.pressure} hPa</p>
    `;
  })
  .catch(error => console.error('Error fetching current weather:', error));

// Fetch short-term forecast data from a weather API
fetch('https://api.openweathermap.org/data/2.5/forecast?q=Kigali&appid=4b613fd6b968d965d62a999989648da9')
  .then(response => response.json())
  .then(data => {
    const shortTermForecast = document.getElementById('short-term-forecast');
    // Extract and display forecast data
  })
  .catch(error => console.error('Error fetching short-term forecast:', error));

// Fetch weather alert data from a weather API
fetch('https://api.openweathermap.org/data/2.5/alerts?q=Kigali&appid=4b613fd6b968d965d62a999989648da9')
  .then(response => response.json())
  .then(data => {
    const alertDetails = document.getElementById('alert-details');
    // Display weather alert details
  })
  .catch(error => console.error('Error fetching weather alerts:', error));

// Initialize the map using Leaflet.js
const latitude = 40.7128;
const longitude = -74.0060;
const map = L.map('map').setView([latitude, longitude], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Fetch and display radar data or satellite imagery
fetch('https://api.met.no/weatherapi/radar/2.0/station/136/latest/composite.png', {
  method: 'GET',
  mode: 'no-cors'
})
  .then(response => {
    if (response.ok) {
      return response.blob();
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  })
  .then(data => {
    const radarImage = document.getElementById('radar-image');
    radarImage.src = URL.createObjectURL(data);
  })
  .catch(error => console.error('Error fetching radar image:', error));

// Add event listener to historical weather form
document.getElementById("historical-weather-form").addEventListener('submit', function(event) {
  event.preventDefault();
  const startDate = document.getElementById('start-date').value;
  const endDate = document.getElementById('end-date').value;
  const lat = 40.7128;
  const lon = -74.0060;

  // Make a request to the API endpoint
  const url = `https://history.openweathermap.org/data/2.5/history/city?lat=${lat}&lon=${lon}&type=hour&start=${startDate}&end=${endDate}&appid=4b613fd6b968d965d62a999989648da9`;

  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Display historical weather data
    const html = `<h2>Weather Data for ${startDate} to ${endDate}</h2>
                 <table>
                   <thead>
                     <tr>
                       <th>Date</th>
                       <th>Temperature</th>
                       <th>Conditions</th>
                       <th>Wind</th>
                       <th>Humidity</th>
                       <th>Precipitation</th>
                     </tr>
                   </thead>
                   <tbody>
                     ${data.map((day) => {
                       return `<tr>
                                 <td>${day.dt_txt}</td>
                                 <td>${day.main.temp}°F</td>
                                 <td>${day.weather[0].description}</td>
                                 <td>${day.wind.speed} mph</td>
                                 <td>${day.main.humidity}%</td>
                                 <td>${day.rain ? day.rain['3h'] : '0%'}</td>
                               </tr>`;
                     }).join('')}
                   </tbody>
                 </table>`;
    details.innerHTML = html;
  })
  .catch(error => {
    console.error('Error fetching historical weather data:', error);
    details.innerHTML = '<p>An error occurred. Please check the start and end dates and try again.</p>';
  });
});
