// const container = document.querySelector(".container")
const city = document.querySelector(".city-details");
const loader = document.querySelector(".loader-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function getApi() {
  try {
    const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities/" + id;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
        "x-rapidapi-key": "7a735c65b0msh4b4917a539d36dap135f69jsna87e32d3342f",
      },
    });

    const json = await response.json();
    const data = json.data;
    console.log(data.id);
    loader.innerHTML = "";
    city.innerHTML = `
    <div class="city-container">
      <h1>City Name: ${data.city}</h1>
      <h4>Country: ${data.country}</h4>
      <h4>Region: ${data.region}</h4>
      <h4>Elevation Meters: ${data.elevationMeters}</h4>
      <h4>Latitude: ${data.latitude}</h4>
      <h4>Longitude: ${data.longitude}</h4>
    </div>`;
  } catch (err) {
    loader.innerHTML = "";
    city.innerHTML = `<div class="api-error-div"><h2>OH NO! Something went wrong, no flight for you</h2><img src="icon/noun-no-flight-3339085.png" alt=""></img></div>`;
  }
}

getApi();
