async function checkPC(){

let user = localStorage.getItem("username");

let {data} = await supabase
.from("parent_control")
.select("*")
.eq("username", user)
.single();

if(!data || !data.enabled) return;

let now=Date.now();
let start=new Date(data.start_time).getTime();
let limit=data.time_limit*60000;

if(now-start > limit){
window.location.href="blocked.html";
}
}

setInterval(checkPC,5000);

async function unlock(){

let {data} = await supabase
.from("parent_control")
.select("*")
.eq("username", localStorage.getItem("username"))
.single();

if(pinInput.value===data.pin){
panel.style.display="block";
}
}

async function savePC(){

await supabase.from("parent_control").upsert({
username: localStorage.getItem("username"),
enabled: enable.checked,
time_limit: parseInt(limit.value),
start_time: new Date(),
pin: pinSet.value || pinInput.value
});

alert("Saved 🔥");
  }
