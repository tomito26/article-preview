let shareIcon = document.querySelector(".fas");
let mediaShareIcon = document.querySelector(".share");
let socialMedia = document.querySelector(".social-media");
let profileInfo = document.querySelector(".profile");
// console.log(1)
shareIcon.addEventListener("click",()=>{
    socialMedia.style.display = "block";
    profileInfo.style.display = "none";
  
})
mediaShareIcon.addEventListener("click",()=>{
    profileInfo.style.display = "block";
    socialMedia.style.display = "none"
})

