var scrollBar = document.querySelector(".scroll-bar")
window.addEventListener("scroll", function (e) {
   var scrolly = scrollY
   var height = document.documentElement.scrollHeight - window.innerHeight
   var heightBar = (scrolly / height) * 100
   scrollBar.style.width = `${heightBar}%`
})




var setting = document.querySelector(".icon-settings")
var slideBar = document.querySelector(".slidebar")
var x = 0
setting.addEventListener("click", function () {
   if (x == 0) {
      slideBar.style.transform = "translateX(100%)"
      setting.style.right = "80%"
      x = 1
   }else if (x == 1) {
      slideBar.style.transform = "translateX(0%)"
      setting.style.right = "100%"
      x = 0
   }
})