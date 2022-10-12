// Map Creation
let myMap = L.map("map", {
    center: [20, 0],
    zoom: 2
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

d3.json("/static/data/countries.geojson").then(function(data){
  // console.log(data);

    L.geoJson(data, {
        style: function(feature) {
          return {
            color: "black",
            fillColor: chooseColor2(feature.properties.ADMIN),
            fillOpacity: 0.5,
            weight: 1.5
          };
        },
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h5>" + feature.properties.ADMIN + "</h5>");
        }
    }).addTo(myMap);
});

const url = "/countries"

// Shout out to Dom's help on HW 14 came in handy with making these functions

// Country Data Table
function ShowCountryData(currentCountry) 
{
  // console.log(`Show Country Data: ${currentCountry}`);

  d3.json(url).then(data => {
    data.forEach(item => {
      if (item.country == currentCountry) {
        // console.log(item);
        let countryData = `
        <h4>Country : ${item.country}<h4/>
        <hr>
        <h5>Beer Servings(L) : ${item.info[0].beer_servings}<h5>
        <h5>Wine Servings(L) : ${item.info[0].wine_servings}<h5>
        <h5>Spirit Servings(L) : ${item.info[0].spirit_servings}<h5>
        <h5>Total Average Litres(L) : ${item.info[0].total_litres_of_pure_alcohol}<h5>
        `;
        d3.select('#country-info').html(countryData);
      }
    });
  });
}

// Unemploy Data Visual
function ShowUnemploymentData(currentCountry) 
{
  // console.log(`Show Unemploy Data: ${currentCountry}`);

  d3.json(url).then(data => {
    data.forEach(item => {
      if (item.country == currentCountry) {
        // console.log(item);
        let unemploymentData = `
        <h4>Country : ${item.country}<h4>
        <hr>
        <h5>Unemployment Rate : ${item.info[0].unemployment_rate}%
        `
        d3.select('#unemployment-info').html(unemploymentData);
      }
    });
  });
}

function chooseColor2(country) 
{
  return "red";
}

// Choose Color
// function chooseColor(country) 
// {
//   d3.json(url).then(data => {
//     for (const key in data) {
//       if (Object.hasOwnProperty.call(data, key)) {
//         const element = data[key];
//         if (element.country == country) {
//           let total = element.info[0].total_litres_of_pure_alcohol;
//           if (total == 0) {
//             console.log(`${country} has no drinking`);
//             return "red";
//           }
//           else if (total > 0) {
//             console.log(`${country} has drinking`);
//             return "green";
//           }
//           else {
//             console.log(`${country} has no data`);
//             return "grey";
//           }
//         }
//       }
//     }
//   });
// }

// Option Changer
function optionChanged(currentCountry) 
{
  // console.log(`Option Changed: ${currentCountry}`);
  ShowCountryData(currentCountry);
  ShowUnemploymentData(currentCountry);
}

// Dropdown
function InitDashboard(currentCountry) 
{

  let selector = d3.select("#selDataset");

  d3.json(url).then(function(data) {
    // console.log(data);

    for (let i = 0;i < data.length; i++){
      
      let country = data[i].country;
      // console.log(country);
      selector.append("option").text(country).property("value", country);
    };

    let intialCountry = selector.property("value");
    // console.log(intialCountry);
    ShowCountryData(intialCountry);
    ShowUnemploymentData(intialCountry);
  });
}

InitDashboard()