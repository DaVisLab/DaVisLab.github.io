

function generatePeople(){

    d3.csv("content/people.csv").then(function(people_data){

        var cont = d3.select("#people-content")

        console.log(cont)
        console.log(people_data)

        var selection = cont.selectAll("#pcard")
                 .data(people_data)
                 .enter()
                 .append("div")
                 .attr("id", "pcard")
                 .attr("class", "relative rounded-sm border border-gray-200 bg-white shadow-lg")
                 
        selection.append("img")
                 .attr("src", d => d.Picture)
                 .attr("class", "w-28 rounded-full absolute top-0 m-4 z-30 absolute grayscale hover:grayscale-0")

        selection.append("div")
                 .attr("class", "text-right p-4")
                 .append("span")
                 .attr("class", "text-xs text-gray-500 tracking-widest uppercase")
                 .html(d => d.Role)  

        selection.append("div")
                 .attr("class", "flex items-center relative")
                 .append("div")
                 .attr("class", "border-t border-gray-200 z-20 w-full")


        var infoblock = selection.append("div")
                                 .attr("class", "px-2 pb-4 pt-14")
                                 
        infoblock.append("p")
                 .attr("class", "text-gray-600 text-xs pl-2 m-3")
                 .append("h2")
          
        infoblock.append("h2")
                 .attr("class", "text-gray-800 text-xl font-bold pt-5 m-3 pl-2")
                 .text(d => d.Name)
    
        infoblock.append("p")

        var resblock = infoblock.append("p")
                 .attr("class", "text-gray-600 text-xs pl-2 m-3")
        
        resblock.append("span")
                 .attr("class", "font-bold")
                 .html("Research Interests - ")

        resblock.append("text")
                .text(d => d.Research)


        var resblock = infoblock.append("p")
                        .attr("class", "text-gray-600 text-xs pl-2 mx-3 mb-10")

        resblock.append("span")
                 .attr("class", "font-bold")
                 .html("Hobbies - ")

        resblock.append("text")
                .text(d => d.Hobbies)


        var mailblock = selection.append("div")
                            .attr("class", "absolute bottom-0 right-0")

        mailblock.append("a")
                 .attr("href", d => d.Website)
                 .attr("style", d => {
                    if(d.Website == "") return "pointer-events:none; opacity:0.1"
                    else "pointer-events:auto; opacity:1"
                })
                 .append("img")
                 .attr("src", "img/web.svg")
                 .attr("class", "w-8 pb-3 tracking-widest inline")


        mailblock.append("a")
        .attr("href", d => d.Github)
        .attr("style", d => {
            if(d.Github == "") return "pointer-events:none; opacity:0.1"
            else "pointer-events:auto; opacity:1"
        })
        .append("img")
        .attr("src", "img/github.svg")
        .attr("class", "w-8 pb-3 tracking-widest inline")


        mailblock.append("a")
        .attr("href", d => "mailto:"+d.Email)
        .append("img")
        .attr("src", "img/email-svgrepo-com.svg")
        .attr("class", "w-8 pb-3 mr-6 tracking-widest inline")
    })


}



function generateAlumni(){

    d3.csv("content/alumni.csv").then(function(alumni_data){

        var cont = d3.select("#alumni-content")

        var mainblock = cont.selectAll("#acard")
                 .data(alumni_data)
                 .enter()
                 .append("div")
                 .attr("id", "acard")
                 .attr("class", "relative rounded-sm bg-white")
                 
        mainblock.append("div")
                 .attr("class", "flex items-center relative")
                 .append("p")
                 .attr("class", "text-gray-600 text-xs pl-2 m-3")
                 .append("img")
                 .attr("src", d => d.Picture)
                 .attr("class", "w-28 rounded-full absolute z-30 shadow-lg grayscale hover:grayscale-0")

        var infoblock = mainblock.append("div")
                 .attr("class", "px-2 py-24 pb-4")
                 .append("p")
                 .attr("class", "text-gray-600 text-xs pl-2 m-3")

        infoblock.append("span")
                 .attr("class", "font-bold")
                 .append("a")
                 .attr("href", d => d.Website)
                 .attr("style","text-decoration: none")
                 .html(d => d.Name)
        infoblock.append("br")
                 
        infoblock.append("span")
                 .html(d => d.Role+"<br>")

        infoblock.append("span")
                 .html(d => d.Place)

    })


}