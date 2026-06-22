const Arrow = document.getElementById("Arrow")

window.addEventListener("scroll", function ()
  {
    if (window.scrollY > 300){
      Arrow.style.display = "block"
    } else {
      Arrow.style.display = "none"
    }
  })
  Arrow.addEventListener("click", function () 
  {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  })