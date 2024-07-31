let slideIndex = 0

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  let slides = document.getElementsByClassName("mySlides")
  let dots = document.getElementsByClassName("dot")
  if (n >= slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length-1}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}


function createSlider(){

  d3.csv("content/slider.csv").then(function(sliderImages){

    var slides_cont = d3.select(".slideshow-container")

    slides = slides_cont.selectAll(".mySlides")
                            .data(sliderImages)
                            .enter()
                            .append("div")
                            .attr("class", "mySlides fade")
                            .attr("style", (d,i) => {
                                if(i==0) return "display:block"
                                else return "display:none"
                            })
    slides.append("div")
          .attr("class", "numbertext text-amber-600 absolute right-0")
          .attr("style", "display:none")
          .html(function(d , i){
              return (i+1)+"/"+sliderImages.length})                        

    slides.append("div")
          .attr("class", "text text-amber-600")
          .html(d => d.Description)
     
    slides.append("img")
          .attr("src", (d,i) => "img/banners/pres/Slide"+(i+1)+".png")
          .attr("style", "width:100%")
          .html(d => d.Description)


    var dots = d3.select(".slider-dot")
      .selectAll(".dot")
      .data(sliderImages)
      .enter()
      .append("span")
      .attr("class", (d,i) => {
        if(i==0) return "dot active"
        else return "dot"})
      .attr("onclick", (d,i) => "currentSlide("+i+")")

                            
    })

    slideIndex = 0
}