let searchInput = document.getElementById('searchInput');
// let alertError = document.getElementById('alertError');
let btnInput = document.getElementById('btnInput');
let math = new Date
let Data;

btnInput.addEventListener("click" , function(){
  search(searchInput.value);
  
});
searchInput.addEventListener("input" , function(){
  search(searchInput.value);
  
});

search("Cairo");
async function search(input) {
  try {
    let responses = await (await fetch (`https://api.weatherapi.com/v1/forecast.json?key=58eb1103618f45eaa48232457240612&q=${input}&days=3&aqi=no&alerts=no`)).json();
    console.log(responses.location.localtime );
    Data = responses
      displayData()
      // alertError.classList.add("d-none");
  } catch (error) {
    let hamada =`
    <div class="col-md-4 px-0 ">
              <div class="myCard ">
                <div class="heedar d-flex justify-content-between align-content-center ">
                  <span></span>
                  <span><span>5</span>December </span>
                </div>
                <div class="card-body colorp" >
                  <span id="city" class="pb-4 d-block"></span>
                  <h2 class="text-white fw-bold">°C</h2>
                  <div>
                    <img src="": alt="night">
                  </div>
                  <p class="text-primary"></p>
  
  
                  <div class="cardFooter">
                    <span class="">
                      <img src="imges/icon-umberella@2x.png"  alt="" />
                      <span >20%</span>
                    </span>
                    <span>
                      <img src="imges/icon-wind@2x.png" alt="" />
                      <span>18 km/h</span>
                    </span>
                    <span>
                      <img src="imges/icon-compass@2x.png" alt="" />
                      <span>East</span>
                    </span>
                  </div>
                </div>
                
              </div>
            </div>
            <div class="col-md-4 px-0">
              <div class="Cairo my-dark ">
                <div class="myDark colorp Saturday text-center ">
                  <span>Thursday</span>
                </div>
                <div class="cardBody text-center card-body ">
                  <img src="" alt="" />
                  <h2 class="mt-4 fs-4 text-white">
                    °C
                  </h2>
                  <span class="celsiusDegree colorp"
                    >°C</span
                  >
                  <p class="text-primary p-4"></p>
                </div>
              </div>
            </div>
            <div class="col-md-4 px-0 bbbg">
              <div class="Cairo my-dark  ">
                <div class="bbg colorp Saturday text-center ">
                  <span>Sunday</span>
                </div>
                <div class="cardBody text-center card-body bbbg ">
                  <img src="" alt="" />
                  <h2 class="mt-4 fs-4 text-white">
                    °C
                  </h2>
                  <span class="celsiusDegree colorp"
                    >°C</span
                  >
                  <p class="text-primary p-4"></p>
                </div>
              </div>
            </div>
    `
    document.getElementById('rowData').innerHTML=hamada
    // alertError.classList.remove("d-none");
    
  }
  
}



function displayData(){
  
  let cartona =  
  
  `

      
           <div class="col-md-4 px-0 ">
              <div class="myCard ">
                <div class="heedar d-flex justify-content-between align-content-center ">
                  <span>${daynow(0)}</span>
                  <span>${math.getDate()} December </span>
                </div>
                <div class="card-body colorp" >
                  <span id="city" class="pb-4 d-block">${Data.location.name}</span>
                  <h2 class="text-white fw-bold display-6">${Data.current.temp_c}°C</h2>
                  <div>
                    <img src="${Data.current.condition.icon}": alt="night">
                  </div>
                  <p class="text-primary">${Data.current.condition.text}</p>
  
  
                  <div class="cardFooter">
                    <span class="">
                      <img src="imges/icon-umberella@2x.png"  alt="" />
                      <span >20%</span>
                    </span>
                    <span>
                      <img src="imges/icon-wind@2x.png" alt="" />
                      <span>18 km/h</span>
                    </span>
                    <span>
                      <img src="imges/icon-compass@2x.png" alt="" />
                      <span>East</span>
                    </span>
                  </div>
                </div>
                
              </div>
            </div>
            <div class="col-md-4 px-0">
              <div class="Cairo my-dark ">
                <div class="myDark colorp Saturday text-center ">
                  <span>${daynow(1)}</span>
                </div>
                <div class="cardBody text-center card-body ">
                  <img src="${Data.forecast.forecastday[1].day.condition.icon}" alt="" />
                  <h2 class="mt-4 fs-4 text-white">
                    ${Data.forecast.forecastday[1].day.maxtemp_c}°C
                  </h2>
                  <span class="celsiusDegree colorp"
                    >${Data.forecast.forecastday[1].day.mintemp_c}°C</span
                  >
                  <p class="text-primary p-4">${Data.forecast.forecastday[1].day.condition.text}</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 px-0 bbbg">
              <div class="Cairo my-dark  ">
                <div class="bbg colorp Saturday text-center ">
                  <span>${daynow(2)}</span>
                </div>
                <div class="cardBody text-center card-body bbbg ">
                  <img src="${Data.forecast.forecastday[2].day.condition.icon}" alt="" />
                  <h2 class="mt-4 fs-4 text-white">
                    ${Data.forecast.forecastday[2].day.maxtemp_c}°C
                  </h2>
                  <span class="celsiusDegree colorp"
                    >${Data.forecast.forecastday[2].day.mintemp_c}°C</span
                  >
                  <p class="text-primary p-4">${Data.forecast.forecastday[2].day.condition.text}</p>
                </div>
              </div>
            </div>
  `
  

document.getElementById('rowData').innerHTML=cartona
}


function daynow(i){
  let date = new Date()
  date.setDate(date.getDate() + i)
  let options = { weekday: 'long' }
  let dayName = date.toLocaleDateString('en-US', options)
  return dayName
}
console.log(daynow(1));
































// let emailInput = document.getElementById('search');
// let buttonInput = document.getElementById('buttonInput');




// // buttonInput.addEventListener('click', function() {
// //     let product = {
// //         email : emailInput.value
// //     }
// // })

// async function search(input){
//     let responses = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=58eb1103618f45eaa48232457240612&q=${input}`);
//     // let products = await responses.json();
//     // allRecipes = products;
//     // console.log(products);
//     if (responses.ok && 400 != responses.status){
//       let allRecipes = await responses.json();
//       displayData(allRecipes.location, allRecipes.current),
//         displayAnotherData(allRecipes.forecast.forecastday)
//     }
    
//     // displayData();
// }













// // getRecipes();
// // emailInput.addEventListener("keyup", input => {
// //   search(input.target.value)
// // });

// // var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// // const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


// // function displayData(search, input) {
// //   if (null != input) {
// //     var dataOfDate = new Date(input.last_updated.replace(" ", "T"));
// //     let cartona =`
// //      <div class="col-md-4 px-0 ">
// //               <div class="myCard ">
// //                 <div class="heedar d-flex justify-content-between align-content-center ">
// //                   <span>${days[dataOfDate.getDay()]}</span>
// //                   <span><span>5</span>December ${dataOfDate.getDate() + monthNames[dataOfDate.getMonth()]}</span>
// //                 </div>
// //                 <div class="card-body colorp" >
// //                   <span id="city" class="pb-4 d-block">${search.name}</span>
// //                   <h2 class="text-white fw-bold">${input.temp_c}</h2>
// //                   <div>
// //                     <img src=https:${input.condition.icon} alt="night">
// //                   </div>
// //                   <p class="text-primary">${input.condition.text}</p>
  
  
// //                   <div class="cardFooter">
// //                     <span class="">
// //                       <img src="imges/icon-umberella@2x.png"  alt="" />
// //                       <span>20%</span>
// //                     </span>
// //                     <span>
// //                       <img src="imges/icon-wind@2x.png" alt="" />
// //                       <span>18 km/h</span>
// //                     </span>
// //                     <span>
// //                       <img src="imges/icon-compass@2x.png" alt="" />
// //                       <span>East</span>
// //                     </span>
// //                   </div>
// //                 </div>
                
// //               </div>
// //             </div>
// //             <div class="col-md-4 px-0">
// //               <div class="Cairo my-dark ">
// //                 <div class="myDark colorp Saturday text-center ">
// //                   <span>Thursday</span>
// //                 </div>
// //                 <div class="cardBody text-center card-body ">
// //                   <img src="imges/116.png" alt="" />
// //                   <h2 class="mt-4 fs-4 text-white">
// //                     22.6°C
// //                   </h2>
// //                   <span class="celsiusDegree colorp"
// //                     >16.1°C</span
// //                   >
// //                   <p class="text-primary p-4">Partly Cloudy</p>
// //                 </div>
// //               </div>
// //             </div>
// //             <div class="col-md-4 px-0 bbbg">
// //               <div class="Cairo my-dark  ">
// //                 <div class="bbg colorp Saturday text-center ">
// //                   <span>Sunday</span>
// //                 </div>
// //                 <div class="cardBody text-center card-body bbbg ">
// //                   <img src="imges/img/113.png" alt="" />
// //                   <h2 class="mt-4 fs-4 text-white">
// //                     22.6°C
// //                   </h2>
// //                   <span class="celsiusDegree colorp"
// //                     >16.1°C</span
// //                   >
// //                   <p class="text-primary p-4">Sunny</p>
// //                 </div>
// //               </div>
// //             </div>`
// //   }


  
    

// //     document.getElementById('rowData').innerHTML = cartona
// // }





// // function displayAnotherData(search) {
// //   let cartona = "";
// //   for (let i = 1; i < search.length; i++){
      
// //       if(i===1){
// //         cartona =`
// //         <div class="col-md-4 px-0 ">
// //                  <div class="myCard ">
// //                    <div class="heedar d-flex justify-content-between align-content-center ">
// //                      <span>${days[dataOfDate.getDay()]}</span>
// //                      <span><span>5</span>December ${dataOfDate.getDate() + monthNames[dataOfDate.getMonth()]}</span>
// //                    </div>
// //                    <div class="card-body colorp" >
// //                      <span id="city" class="pb-4 d-block">${search.name}</span>
// //                      <h2 class="text-white fw-bold">${input.temp_c}</h2>
// //                      <div>
// //                        <img src=https:${input.condition.icon} alt="night">
// //                      </div>
// //                      <p class="text-primary">${input.condition.text}</p>
     
     
// //                      <div class="cardFooter">
// //                        <span class="">
// //                          <img src="imges/icon-umberella@2x.png"  alt="" />
// //                          <span>20%</span>
// //                        </span>
// //                        <span>
// //                          <img src="imges/icon-wind@2x.png" alt="" />
// //                          <span>18 km/h</span>
// //                        </span>
// //                        <span>
// //                          <img src="imges/icon-compass@2x.png" alt="" />
// //                          <span>East</span>
// //                        </span>
// //                      </div>
// //                    </div>
                   
// //                  </div>
// //                </div>
// //                <div class="col-md-4 px-0">
// //                  <div class="Cairo my-dark ">
// //                    <div class="myDark colorp Saturday text-center ">
// //                      <span>Thursday</span>
// //                    </div>
// //                    <div class="cardBody text-center card-body ">
// //                      <img src="imges/116.png" alt="" />
// //                      <h2 class="mt-4 fs-4 text-white">
// //                        22.6°C
// //                      </h2>
// //                      <span class="celsiusDegree colorp"
// //                        >16.1°C</span
// //                      >
// //                      <p class="text-primary p-4">Partly Cloudy</p>
// //                    </div>
// //                  </div>
// //                </div>
// //                <div class="col-md-4 px-0 bbbg">
// //                  <div class="Cairo my-dark  ">
// //                    <div class="bbg colorp Saturday text-center ">
// //                      <span>Sunday</span>
// //                    </div>
// //                    <div class="cardBody text-center card-body bbbg ">
// //                      <img src="imges/img/113.png" alt="" />
// //                      <h2 class="mt-4 fs-4 text-white">
// //                        22.6°C
// //                      </h2>
// //                      <span class="celsiusDegree colorp"
// //                        >16.1°C</span
// //                      >
// //                      <p class="text-primary p-4">Sunny</p>
// //                    </div>
// //                  </div>
// //                </div>`;
// //       }
// //       else{
// //         cartona =`
// //         <div class="col-md-4 px-0 ">
// //                  <div class="myCard ">
// //                    <div class="heedar d-flex justify-content-between align-content-center ">
// //                      <span>${days[dataOfDate.getDay()]}</span>
// //                      <span><span>5</span>December ${dataOfDate.getDate() + monthNames[dataOfDate.getMonth()]}</span>
// //                    </div>
// //                    <div class="card-body colorp" >
// //                      <span id="city" class="pb-4 d-block">${search.name}</span>
// //                      <h2 class="text-white fw-bold">${input.temp_c}</h2>
// //                      <div>
// //                        <img src=https:${input.condition.icon} alt="night">
// //                      </div>
// //                      <p class="text-primary">${input.condition.text}</p>
     
     
// //                      <div class="cardFooter">
// //                        <span class="">
// //                          <img src="imges/icon-umberella@2x.png"  alt="" />
// //                          <span>20%</span>
// //                        </span>
// //                        <span>
// //                          <img src="imges/icon-wind@2x.png" alt="" />
// //                          <span>18 km/h</span>
// //                        </span>
// //                        <span>
// //                          <img src="imges/icon-compass@2x.png" alt="" />
// //                          <span>East</span>
// //                        </span>
// //                      </div>
// //                    </div>
                   
// //                  </div>
// //                </div>
// //                <div class="col-md-4 px-0">
// //                  <div class="Cairo my-dark ">
// //                    <div class="myDark colorp Saturday text-center ">
// //                      <span>Thursday</span>
// //                    </div>
// //                    <div class="cardBody text-center card-body ">
// //                      <img src="imges/116.png" alt="" />
// //                      <h2 class="mt-4 fs-4 text-white">
// //                        22.6°C
// //                      </h2>
// //                      <span class="celsiusDegree colorp"
// //                        >16.1°C</span
// //                      >
// //                      <p class="text-primary p-4">Partly Cloudy</p>
// //                    </div>
// //                  </div>
// //                </div>
// //                <div class="col-md-4 px-0 bbbg">
// //                  <div class="Cairo my-dark  ">
// //                    <div class="bbg colorp Saturday text-center ">
// //                      <span>Sunday</span>
// //                    </div>
// //                    <div class="cardBody text-center card-body bbbg ">
// //                      <img src="imges/img/113.png" alt="" />
// //                      <h2 class="mt-4 fs-4 text-white">
// //                        22.6°C
// //                      </h2>
// //                      <span class="celsiusDegree colorp"
// //                        >16.1°C</span
// //                      >
// //                      <p class="text-primary p-4">Sunny</p>
// //                    </div>
// //                  </div>
// //                </div>`
      
  
// // }
// //   }
// //   document.getElementById("rowData").innerHTML += cartona
// // }
// // search("cairo");