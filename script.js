

let poketton =document.querySelector('#pokemonbutton');

poketton.addEventListener('click',getName);


 

async function getName () {
    try {
        let getPokemonStats= await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50")
        .then( res => res.data.results)
        .then(data => {
            data.map (pokeStats => {
                getStats(pokeStats)
            })
            return data
        })
    }
    catch(error) {
        console.error(error)
    }
}

var main= document.querySelector('#maincontainer')

var getStats = async ( charStats) => {
    // console.log( charStats.url)
    try {
        let tid= await axios.get(charStats.url)
           .then(result => result.data)
           .then(data => {
            //    console.log(data.sprites.back_shiny)
           console.log()

            //    <div class="card" style="width: 18rem;">

               let card= document.createElement("div")   
               card.setAttribute("class","card")



               // <img src="..." class="card-img-top" alt="..."> 
            //
            //    var backshiny= data.sprites.back_shiny    

               const image=document.createElement("img")
               
 
              image.src=("https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg")
              image.setAttribute("class",'ima')
              card.append(image)

            // <div class="card-body">
                var  cardbody = document.createElement("div") 
                cardbody.setAttribute("class","carbo")

                // <h5 class="card-title">Card title</h5>

                var h5EL = document.createElement('h')  
                h5EL.setAttribute("class","carbotitle")
                h5EL.textContent= charStats.name
                cardbody.append(h5EL)
                // console.log(charStats.name)

                // pelement

                 let para = document.createElement("p") 
                 para.setAttribute('class',"par")
                //  console.log(data.types) 
                para.textContent= data.types.map(type => {
                     console.log(type.type.name)
                     return type.type.name
                 })
          
                 cardbody.append(para)


                 var weigh = document.createElement('p')  
                 weigh.setAttribute("class","weight")
                //  weigh.innertext= `weight: ${charStats.weight}`
                //  weigh.textContent= charStats.weight
                // console.log(data)
                weigh.textContent= data.types.map(name => {
                     console.log(data.weight)
                     return data.weight
                    // return name.weight
                     
                 })
                 cardbody.append(weigh)


                 var mov = document.createElement('p')  
                 mov.setAttribute("class","move")
                //  weigh.innertext= `weight: ${charStats.weight}`
                //  weigh.textContent= charStats.weight
                // console.log(data)
                mov.textContent= data.types.map(moves => {
                     console.log(data.moves)
                    //  return data.moves
                    
                     
                 })
                 cardbody.append(mov)
                
              


                 card.append(cardbody)  
              main.append(card)
              

  
    
   
   
           }) 
   }catch (error){
        console.error(error)
    }
 }


//  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/crystal/"
//  "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg"