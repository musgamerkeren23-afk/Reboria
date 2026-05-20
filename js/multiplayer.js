setInterval(()=>{
supabase.from("players").upsert({
username: localStorage.getItem("username"),
x: player.position.x,
y: player.position.y,
z: player.position.z
});
},200);
