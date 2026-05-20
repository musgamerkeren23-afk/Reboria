async function loadGames(){

let {data} = await supabase.from("games").select("*");

games.innerHTML="";

data.forEach(g=>{
games.innerHTML+=`
<div>
<h3>${g.name}</h3>
<button onclick="play()">Play</button>
</div>`;
});

}

function play(){
window.location.href="game.html";
}

function goPC(){
window.location.href="parent_control.html";
}

window.onload=loadGames;
