const container = document.querySelector(".container");
const loader = document.querySelector(".loader-container");
const loaderCon = document.querySelector(".loader-container");

async function getApi() {
  try {
    const response = await fetch(
      "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
          "x-rapidapi-key":
            "7a735c65b0msh4b4917a539d36dap135f69jsna87e32d3342f",
        },
      }
    );
    const json = await response.json();
    const data = json.data;

    loader.innerHTML = "";
    loaderCon.style.width = "0px";

    for (let i = 0; i < data.length; i++) {
      console.log(data[i].city);
      console.log(data[i].country);
      console.log(data[i].region);

      container.innerHTML += `
      <a href="details.html?id=${data[i].id}">
        <div class="city-item">
          <h3>${data[i].city}</h3>
        </div>
      </a>`;
    }
  } catch (err) {
    loader.innerHTML = "";
    container.innerHTML = `<div class="api-error-div"><h2>OH NO! Something went wrong, no flight for you</h2><img src="icon/noun-no-flight-3339085.png" alt=""></img></div>`;
  }
}

getApi();
