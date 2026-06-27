/* ===========================
   PROPOSAL PAGE
=========================== */

const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");

if(noBtn){

noBtn.addEventListener("mouseenter",()=>{

const x=Math.random()*(window.innerWidth-150);

const y=Math.random()*(window.innerHeight-80);

noBtn.style.left=x+"px";
noBtn.style.top=y+"px";

});

}

if(yesBtn){

yesBtn.addEventListener("click",()=>{

alert("27/06/2026 ❤️🥹");

});

}
// Landing → Proposal

document.getElementById("startBtn").addEventListener("click",()=>{

document.getElementById("landingPage").style.display="none";

document.getElementById("proposalPage").style.display="flex";

});