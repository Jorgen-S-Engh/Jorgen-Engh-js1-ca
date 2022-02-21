const container = document.querySelector(".container")


async function getApi(){
  const response = await fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/cities", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
      "x-rapidapi-key": "7a735c65b0msh4b4917a539d36dap135f69jsna87e32d3342f"
    }
  })
  const json = await response.json();
  const data = json.data;

  for (let i = 0; i < data.length; i++){
    console.log(data[i].city)
    console.log(data[i].country)
    console.log(data[i].region)

    container.innerHTML += `<a href="details.html?id=${data[i].id}">${data[i].city}</a>`
    

  }

  console.log(data);



  

}

getApi();