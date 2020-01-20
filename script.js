let buttonClick = document.getElementById('btn');
let board = document.getElementById('board');

buttonClick.addEventListener('click', async ()=>{
    fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=be9dd68162624bfba8f4055e7371a9a6')
    .then((response)=>{
       return response.json();
    }).then(json=>{
        console.log(json.articles);
        mostrarNaTela(json.articles);
    })
    //let listaNoticias = (await fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=be9dd68162624bfba8f4055e7371a9a6')).json();
})

let mostrarNaTela = listaNoticias =>{

    listaNoticias.forEach(function(noticia, posicao){
        let card = ` <div id='board'>
<div class="card" style="width: 18rem;">
    <img src='${noticia.urlToImage}' class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${noticia.description}</p>
    </div>
  </div>
</div>`
board.innerHTML += card
    })


}