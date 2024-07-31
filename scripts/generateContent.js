

function generateNews(){

    d3.csv("content/news.csv").then(function(news_data){

        var news_cont = d3.select("#news-content")

        news_cont.selectAll("#newsdiv")
                 .data(news_data)
                 .enter()
                 .append("div")
                 .attr("class", "p-2")
                 .attr("id", "news_data")
                 .append("div")
                 .html(function(d){
                    var color = "black"
                    switch(d.Tag) {
                        case 'People': color ="red"; break;
                        case 'Paper': color ="green"; break;
                        case 'Project': color ="blue"; break; 
                    }

                    return "<font color='"+color+"'>["+d.Tag+"]</font> "+d.Content+"</br><font size=1 color='darkgray'>"+d.Date+"</font>"
                 })
    })


}

