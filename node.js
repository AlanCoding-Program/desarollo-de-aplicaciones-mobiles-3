const URLAPI = `https://api.openweathermap.org/data/2.5/weather?lat=-35.169285&lon=-58.223986&appid=3a9c44a13938773532b8685fc6116ede`
const obtenerData = async () => {
  try {
      const response = await fetch(URLAPI)
      const datafinal = await response.json()
      renderData(datafinal)
   } catch (error) {
      console.log(error)
   }
}

obtenerData()

function renderData(apiResponse){
    console.log(apiResponse)
     const dataInsert = document.createElement("section")
        dataInsert.innerHTML = `<article>
           <h2 class="humedad">Humedad: ${apiResponse.main.humidity}%</h2>
        </article>`
        dataInsert.classList.add("padre")
        document.body.append(dataInsert)
    }; 
