// const container = document.querySelector(".container")

const queryString = document.location.search;
const params = new URLSearchParams(queryString)

const id = params.get("city")
console.log(params)
console.log(id)


async function getApi(){

  

  const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities/123214" 

  const response = await fetch(url, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
      "x-rapidapi-key": "7a735c65b0msh4b4917a539d36dap135f69jsna87e32d3342f"
    }
  })


  const json = await response.json();
  const data = json.data;
  console.log(data.id)

  for (let i = 0; i < data.length; i++){



  }

  console.log(data);



  

}

getApi();