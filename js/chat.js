function initChat(){

let username = localStorage.getItem("username");

chatInput.addEventListener("keydown", e=>{
if(e.key==="Enter"){

supabase.from("chat").insert({
user:username,
text:chatInput.value
});

chatInput.value="";
}
});

supabase.channel("chat")
.on("postgres_changes",{
event:"INSERT",
schema:"public",
table:"chat"
},p=>{

chatBox.innerHTML += `<p><b>${p.new.user}:</b> ${p.new.text}</p>`;
chatBox.scrollTop = chatBox.scrollHeight;

}).subscribe();

}
