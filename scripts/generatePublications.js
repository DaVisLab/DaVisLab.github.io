

function generatePublications(){

    d3.csv("content/papers.csv").then(function(publs){

        var content = d3.select("#paper-content")
                        .selectAll("#paper")
                        .data(publs)
                        .enter()
                        .append("div")
                        .attr("class" , "relative rounded-sm border border-gray-200 bg-white shadow-lg mb-4")
                        .attr("id", "#paper-content")

        content.append("div")
            .attr("class", "text-right p-2")
            .append("span")
            .attr("class", "text-xs text-gray-500 tracking-widest uppercase mr-10")
            .html(d => d.Type)

        content.append("div")
               .attr("class", "flex items-center relative")
               .append("div")
               .attr("class", "border-t border-gray-200 z-20 w-full")

        var textblock = content.append("div")
                               .attr("class", "px-2 pb-4")

        textblock.append("p")
                 .attr("class", "text-gray-900 font-medium italic text-sm ml-20")
                 .attr("style", "margin-top:1.2em")
                 .html(d => d.Title)
                 

        textblock.append("p")
                 .attr("class", "text-gray-900 italic text-sm ml-20")
                 .html(d => d.Authors)

        textblock.append("p")
                 .attr("class", "text-gray-900 italic text-sm ml-20 w-3/5")
                 .html(d => "<font color=#d97706>"+d.Venue+"</font> "+d.Year)

        var iconblock = content.append("div")         
                               .attr("class", "px-2 pb-4 ml-20")

        iconblock.append("a")
            .attr("href", d => d.Doi)
            .attr("class", "text-base no-underline mr-1")
            .attr("style", d => {
                if(d.Doi == "") return "pointer-events:none; opacity:0.1"
                else "pointer-events:auto; opacity:1"
            })
            .html("doi")
            
        iconblock.append("span")
                 .attr("class", "text-base")
                 .html("&#183;") 
                 
        iconblock.append("a")
            .attr("href", d => d.Pdf)
            .attr("class", "text-base no-underline mr-1")
            .attr("style", d => {
                if(d.Pdf == "") return "pointer-events:none; opacity:0.1"
                else "pointer-events:auto; opacity:1"
            })
            .append("img")
            .attr("src", "https://img.icons8.com/ios/50/000000/pdf--v1.png")
            .attr("class", "w-6 pb-2 tracking-widest inline")
        iconblock.append("span")
                .attr("class", "text-base")
                .html("&#183;")  

        iconblock.append("a")
            .attr("href", d => d.Website)
            .attr("class", "text-base no-underline mr-1")
            .attr("style", d => {
                if(d.Website == "") return "pointer-events:none; opacity:0.1"
                else "pointer-events:auto; opacity:1"
            })
            .append("img")
            .attr("src", "img/web.svg")
            .attr("class", "w-6 pb-2 tracking-widest inline")
        iconblock.append("span")
                .attr("class", "text-base")
                .html("&#183;")  

        iconblock.append("a")
            .attr("href", d => d.Github)
            .attr("class", "text-base no-underline mr-1")
            .attr("style", d => {
                if(d.Github == "") return "pointer-events:none; opacity:0.1"
                else "pointer-events:auto; opacity:1"
            })
            .append("img")
            .attr("src", "img/github.svg")
            .attr("class", "w-6 pb-3 tracking-widest inline")

            
        iconblock.append("span")
                .attr("class", "text-base")
                .html("&#183;") 

        iconblock.append("a")
            .attr("href", d => d.Github)
            .attr("class", "text-base no-underline mr-1")
            .attr("style", d => {
                if(d.Github == "") return "pointer-events:none; opacity:0.1"
                else "pointer-events:auto; opacity:1"
            })
            .append("img")
            .attr("src", "https://img.icons8.com/ios-glyphs/64/000000/presentation.png")
            .attr("class", "w-6 pb-3 mr-6 tracking-widest inline")

        content.append("img")
               .attr("src", d => d.Image)
               .attr("class", "absolute bottom-0 right-0 m-4 z-30 absolute grayscale hover:grayscale-0")
               .style("width", d => d.Width+"%")
    })

}


{/* <div class="relative rounded-sm border border-gray-200 bg-white shadow-lg mb-4">
    <div class="text-right p-2">
    <span class="text-xs text-gray-500 tracking-widest uppercase mr-10">[PAPER TYPE]</span>  
    </div>

    <div class="flex items-center relative">
        <div class="border-t border-gray-200 z-20 w-full"></div>
    </div>
    
    <div class="px-2 pb-4">                    
        <p class="text-gray-600 text-base italic ml-20 mt-10">
            [AUTHORS]
        </p>
        <p class="text-gray-900 text-xl ml-20">
            [TITLE]
        </p>
        <p class="text-gray-900 text-sm ml-20 w-3/5">
            [VENUE]
        </p>
    </div>

    <div class="px-2 pb-4 ml-20">
    <a href="..." class="text-2xl no-underline mr-1 ">doi</a><span class="text-3xl">&#183;</span>
    <a href="..."><img src="https://img.icons8.com/ios/50/000000/pdf--v1.png" class="w-6 pb-2 tracking-widest inline"></a><span class="text-3xl">&#183;</span>
    <a href="..."><img src="img/web.svg" class="w-6 pb-3 tracking-widest inline "alt=""></a><span class="text-3xl">&#183;</span>
    <a href="..."><img src="img/github.svg" class="w-6 pb-2 tracking-widest inline "alt=""></a><span class="text-3xl">&#183;</span>
    <a href="..."><img src="https://img.icons8.com/ios-glyphs/64/000000/presentation.png" class="w-6 pb-3 mr-6 tracking-widest inline "alt=""></a>
    </div>

    <img src="[IMAGE]" class="w-1/4 absolute bottom-0 right-0 m-4 z-30 absolute grayscale hover:grayscale-0">
</div> */}