let shareIcon = document.querySelector(".fas");
// console.log(1)
shareIcon.addEventListener("click",()=>{
    let socialMedia = document.querySelector(".social-media");
    let profileInfo = document.querySelector(".profile")
    socialMedia.style.display = "block"
    profileInfo.style.display = "none"
})