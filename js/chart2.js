function barStack(d) {
    var l = d[0].length
    while (l--) {
        var posBase = 0, negBase = 0;
        d.forEach(function(d) {
            d=d[l]
            d.size = Math.abs(d.y)
            if (d.y<0)  {
                d.y0 = negBase
                negBase-=d.size
            } else
            { 
                d.y0 = posBase = posBase + d.size
            } 
        })
    }
    d.extent= d3.extent(d3.merge(d3.merge(d.map(function(e) { return e.map(function(f) { return [f.y0,f.y0-f.size]})}))))
    return d
}


var allData = {"Study":[[{x:1,y:-3,genre:"Jazz",artists:["Chris Botti","Louis Armstrong","Thelonious Monk"]},{x:2,y:-6,genre:"Jazz",artists:[""]},{x:3,y:-3,genre:"Jazz",artists:["Benny Goodman","Frank Sinatra"]},{x:4,y:-3,genre:"Jazz",artists:["Chris Botti"]},{x:5,y: 0,genre:"Jazz",artists:[""]}],
             [{x:1,y:0,genre:"Classical",artists:["Wolfgang Mozart","Chicago Symphony"]},{x:2,y:-2,genre:"Classical",artists:["Ludwig Beethoven","Chicago Symphony"]},{x:3,y:-9,genre:"Classical",artists:["London Symphonic"]},{x:4,y:-3,genre:"Classical",artists:["Chicago Symphony","London Symphonic"]},{x:5,y:-6,genre:"Classical",artists:["Johann Bach","Johannes Brahms"]}],
             [{x:1,y:-10,genre:"Karnatic",artists:[""]},{x:2,y:-3,genre:"Karnatic",artists:["Sudha Raghunathan","Soumya","Unnikrishnan","T.M.Balamuralikrishna"]},{x:3,y:0,genre:"Karnatic",artists:[""]},{x:4,y:-3,genre:"Karnatic",artists:[""]},{x:5,y:-6,genre:"Karnatic",artists:[""]}],
             [{x:1,y:-5,genre:"Instrumental",artists:["Vitamin String Quartet"]},{x:2,y:-3,genre:"Instrumental",artists:[""]},{x:3,y:-2,genre:"Instrumental",artists:[""]},{x:4,y:-3,genre:"Instrumental",artists:["2Cellos"]},{x:5,y:0,genre:"Instrumental",artists:[""]}]]
              ,"Workout":[[{x:1,y:-4,genre:"Jazz",artists:["Chris Botti","Louis Armstrong","Thelonious Monk"]},{x:2,y:-8,genre:"Jazz",artists:[""]},{x:3,y:-2,genre:"Jazz",artists:["Benny Goodman","Frank Sinatra"]},{x:4,y:-5,genre:"Jazz",artists:["Chris Botti"]},{x:5,y: 0,genre:"Jazz",artists:[""]}],
             [{x:1,y:0,genre:"Classical",artists:["Wolfgang Mozart","Chicago Symphony"]},{x:2,y:-2,genre:"Classical",artists:["Ludwig Beethoven","Chicago Symphony"]},{x:3,y:-9,genre:"Classical",artists:["London Symphonic"]},{x:4,y:-3,genre:"Classical",artists:["Chicago Symphony","London Symphonic"]},{x:5,y:-6,genre:"Classical",artists:["Johann Bach","Johannes Brahms"]}],
             [{x:1,y:-10,genre:"Karnatic",artists:[""]},{x:2,y:-4,genre:"Karnatic",artists:["Sudha Raghunathan","Soumya","Unnikrishnan","T.M.Balamuralikrishna"]},{x:3,y:0,genre:"Karnatic",artists:[""]},{x:4,y:-6,genre:"Karnatic",artists:[""]},{x:5,y:-2,genre:"Karnatic",artists:[""]}],
             [{x:1,y:-3,genre:"Instrumental",artists:["Vitamin String Quartet"]},{x:2,y:-1,genre:"Instrumental",artists:[""]},{x:3,y:-7,genre:"Instrumental",artists:[""]},{x:4,y:-6,genre:"Instrumental",artists:["2Cellos"]},{x:5,y:-2,genre:"Instrumental",artists:[""]}],
             [{x:1,y:-8,genre:"Techno",artists:["Fat Boy Slim","iiO"]},{x:2,y:-6,genre:"Techno",artists:[""]},{x:3,y:-3,genre:"Techno",artists:["Quench"]},{x:4,y:-5,genre:"Techno",artists:["Quench","OSnap!"]},{x:5,y:0,genre:"Techno",artists:[""]}],
             [{x:1,y:-8,genre:"Hip-Hop",artists:[""]},{x:2,y:-4,genre:"Hip-Hop",artists:[""]},{x:3,y:-2,genre:"Hip-Hop",artists:["Kanye West","Jay-Z","50 Cent","Eminem","Lil Wayne"]},{x:4,y:-7,genre:"Hip-Hop",artists:[""]},{x:5,y:-7,genre:"Hip-Hop",artists:[""]}],
             [{x:1,y:-9,genre:"World",artists:[""]},{x:2,y:-5,genre:"World",artists:["Shreya Ghoshal"]},{x:3,y:-2,genre:"World",artists:["Sunidhi Chauhan"]},{x:4,y:-3,genre:"World",artists:[""]},{x:5,y:-7,genre:"World",artists:["Alisha Chinai"]}]]
             , "Relax":[[{x:1,y:-3,genre:"Jazz",artists:["Chris Botti","Louis Armstrong","Thelonious Monk"]},{x:2,y:-6,genre:"Jazz",artists:[""]},{x:3,y:-3,genre:"Jazz",artists:["Benny Goodman","Frank Sinatra"]},{x:4,y:-3,genre:"Jazz",artists:["Chris Botti"]},{x:5,y: 0,genre:"Jazz",artists:[""]}],
             [{x:1,y:0,genre:"Classical",artists:["Wolfgang Mozart","Chicago Symphony"]},{x:2,y:-4,genre:"Classical",artists:["Ludwig Beethoven","Chicago Symphony"]},{x:3,y:-10,genre:"Classical",artists:["London Symphonic"]},{x:4,y:-6,genre:"Classical",artists:["Chicago Symphony","London Symphonic"]},{x:5,y:-8,genre:"Classical",artists:["Johann Bach","Johannes Brahms"]}],
             [{x:1,y:-10,genre:"Karnatic",artists:[""]},{x:2,y:-3,genre:"Karnatic",artists:["Sudha Raghunathan","Soumya","Unnikrishnan","T.M.Balamuralikrishna"]},{x:3,y:0,genre:"Karnatic",artists:[""]},{x:4,y:-3,genre:"Karnatic",artists:[""]},{x:5,y:-6,genre:"Karnatic",artists:[""]}],
             [{x:1,y:-5,genre:"Instrumental",artists:["Vitamin String Quartet"]},{x:2,y:-7,genre:"Instrumental",artists:[""]},{x:3,y:-2,genre:"Instrumental",artists:[""]},{x:4,y:-3,genre:"Instrumental",artists:["2Cellos"]},{x:5,y:0,genre:"Instrumental",artists:[""]}],
             [{x:1,y:-4,genre:"Techno",artists:["Fat Boy Slim","iiO"]},{x:2,y:-2,genre:"Techno",artists:[""]},{x:3,y:-3,genre:"Techno",artists:["Quench"]},{x:4,y:-7,genre:"Techno",artists:["Quench","OSnap!"]},{x:5,y:-3,genre:"Techno",artists:[""]}],
             [{x:1,y:-6,genre:"Hip-Hop",artists:[""]},{x:2,y:-3,genre:"Hip-Hop",artists:[""]},{x:3,y:-5,genre:"Hip-Hop",artists:["Kanye West","Jay-Z","50 Cent","Eminem","Lil Wayne"]},{x:4,y:-8,genre:"Hip-Hop",artists:[""]},{x:5,y:-7,genre:"Hip-Hop",artists:[""]}],
             [{x:1,y:-10,genre:"World",artists:[""]},{x:2,y:-3,genre:"World",artists:["Shreya Ghoshal"]},{x:3,y:0,genre:"World",artists:["Sunidhi Chauhan"]},{x:4,y:-3,genre:"World",artists:[""]},{x:5,y:-6,genre:"World",artists:["Alisha Chinai"]}]]
             ,"Party":[[{x:1,y:-6,genre:"Jazz",artists:["Chris Botti","Louis Armstrong","Thelonious Monk"]},{x:2,y:-1,genre:"Jazz",artists:[""]},{x:3,y:0,genre:"Jazz",artists:["Benny Goodman","Frank Sinatra"]},{x:4,y:-9,genre:"Jazz",artists:["Chris Botti"]},{x:5,y: -6,genre:"Jazz",artists:[""]}],
             [{x:1,y:-2,genre:"Classical",artists:["Wolfgang Mozart","Chicago Symphony"]},{x:2,y:0,genre:"Classical",artists:["Ludwig Beethoven","Chicago Symphony"]},{x:3,y:-4,genre:"Classical",artists:["London Symphonic"]},{x:4,y:-7,genre:"Classical",artists:["Chicago Symphony","London Symphonic"]},{x:5,y:-3,genre:"Classical",artists:["Johann Bach","Johannes Brahms"]}],
             [{x:1,y:-10,genre:"Karnatic",artists:[""]},{x:2,y:-3,genre:"Karnatic",artists:["Sudha Raghunathan","Soumya","Unnikrishnan","T.M.Balamuralikrishna"]},{x:3,y:0,genre:"Karnatic",artists:[""]},{x:4,y:-3,genre:"Karnatic",artists:[""]},{x:5,y:-6,genre:"Karnatic",artists:[""]}],
             [{x:1,y:-8,genre:"Instrumental",artists:["Vitamin String Quartet"]},{x:2,y:-2,genre:"Instrumental",artists:[""]},{x:3,y:-8,genre:"Instrumental",artists:[""]},{x:4,y:-5,genre:"Instrumental",artists:["2Cellos"]},{x:5,y:0,genre:"Instrumental",artists:[""]}],
             [{x:1,y:-8,genre:"Techno",artists:["Fat Boy Slim","iiO"]},{x:2,y:-6,genre:"Techno",artists:[""]},{x:3,y:-5,genre:"Techno",artists:["Quench"]},{x:4,y:-6,genre:"Techno",artists:["Quench","OSnap!"]},{x:5,y:-4,genre:"Techno",artists:[""]}],
             [{x:1,y:-8,genre:"Hip-Hop"},{x:2,y:-3,genre:"Hip-Hop",artists:[""]},{x:3,y:-4,genre:"Hip-Hop",artists:["Kanye West","Jay-Z","50 Cent","Eminem","Lil Wayne"]},{x:4,y:-3,genre:"Hip-Hop",artists:[""]},{x:5,y:-2,genre:"Hip-Hop",artists:[""]}],
             [{x:1,y:-10,genre:"World",artists:[""]},{x:2,y:0,genre:"World",artists:["Shreya Ghoshal"]},{x:3,y:0,genre:"World",artists:["Sunidhi Chauhan"]},{x:4,y:-3,genre:"World",artists:[""]},{x:5,y:-6,genre:"World",artists:["Alisha Chinai"]}]]
             ,"Chill":[[{x:1,y:-3,genre:"Jazz",artists:["Chris Botti","Louis Armstrong","Theolonious Monk"]},{x:2,y:-6,genre:"Jazz",artists:[""]},{x:3,y:-3,genre:"Jazz",artists:["Benny Goodman","Frank Sinatra"]},{x:4,y:-3,genre:"Jazz",artists:["Chris Botti"]},{x:5,y: 0,genre:"Jazz",artists:[""]}],
             [{x:1,y:0,genre:"Classical",artists:["Wolfgang Mozart","Chicago Symphony"]},{x:2,y:-2,genre:"Classical",artists:["Ludwig Beethoven","Chicago Symphony"]},{x:3,y:-9,genre:"Classical",artists:["London Symphonic"]},{x:4,y:-3,genre:"Classical",artists:["Chicago Symphony","London Symphonic"]},{x:5,y:-6,genre:"Classical",artists:["Johann Bach","Johannes Brahms"]}],
             [{x:1,y:-4,genre:"Karnatic",artists:[""]},{x:2,y:-5,genre:"Karnatic",artists:["Sudha Raghunathan","Soumya","Unnikrishnan","T.M.Balamuralikrishna"]},{x:3,y:-2,genre:"Karnatic",artists:[""]},{x:4,y:-5,genre:"Karnatic",artists:[""]},{x:5,y:-8,genre:"Karnatic",artists:[""]}],
             [{x:1,y:-6,genre:"Instrumental",artists:["Vitamin String Quartet"]},{x:2,y:-5,genre:"Instrumental",artists:[""]},{x:3,y:-4,genre:"Instrumental",artists:[""]},{x:4,y:-7,genre:"Instrumental",artists:["2Cellos"]},{x:5,y:-2,genre:"Instrumental",artists:[""]}],
             [{x:1,y:-7,genre:"Techno",artists:["Fat Boy Slim","iiO"]},{x:2,y:-5,genre:"Techno",artists:[""]},{x:3,y:-4,genre:"Techno",artists:["Quench"]},{x:4,y:-5,genre:"Techno",artists:["Quench","OSnap!"]},{x:5,y:-2,genre:"Techno",artists:[""]}],
             [{x:1,y:-7,genre:"Hip-Hop",artists:[""]},{x:2,y:-3,genre:"Hip-Hop",artists:[""]},{x:3,y:0,genre:"Hip-Hop",artists:["Kanye West","Jay-Z","50 Cent","Eminem","Lil Wayne"]},{x:4,y:-3,genre:"Hip-Hop",artists:[""]},{x:5,y:-8,genre:"Hip-Hop",artists:[""]}],
             [{x:1,y:-8,genre:"World",artists:[""]},{x:2,y:-6,genre:"World",artists:["Shreya Ghoshal"]},{x:3,y:-2,genre:"World",artists:["Sunidhi Chauhan"]},{x:4,y:-5,genre:"World",artists:[""]},{x:5,y:0,genre:"World",artists:["Alisha Chinai"]}]]
             ,"Fun":[[{x:1,y:-4,genre:"Jazz",artists:["Chris Botti","Louis Armstrong","Theolonious Monk"]},{x:2,y:-8,genre:"Jazz",artists:[""]},{x:3,y:-4,genre:"Jazz",artists:["Benny Goodman","Frank Sinatra"]},{x:4,y:-5,genre:"Jazz",artists:["Chris Botti"]},{x:5,y:-3,genre:"Jazz",artists:[""]}],
             [{x:1,y:0,genre:"Classical",artists:["Wolfgang Mozart","Chicago Symphony"]},{x:2,y:-2,genre:"Classical",artists:["Ludwig Beethoven","Chicago Symphony"]},{x:3,y:-9,genre:"Classical",artists:["London Symphonic"]},{x:4,y:-3,genre:"Classical",artists:["Chicago Symphony","London Symphonic"]},{x:5,y:-6,genre:"Classical",artists:["Johann Bach","Johannes Brahms"]}],
             [{x:1,y:-2,genre:"Karnatic",artists:[""]},{x:2,y:-6,genre:"Karnatic",artists:["Sudha Raghunathan","Soumya","Unnikrishnan","T.M.Balamuralikrishna"]},{x:3,y:-8,genre:"Karnatic",artists:[""]},{x:4,y:-5,genre:"Karnatic",artists:[""]},{x:5,y:-7,genre:"Karnatic",artists:[""]}],
             [{x:1,y:-5,genre:"Instrumental",artists:["Vitamin String Quartet"]},{x:2,y:-3,genre:"Instrumental",artists:[""]},{x:3,y:-2,genre:"Instrumental",artists:[""]},{x:4,y:-3,genre:"Instrumental",artists:["2Cellos"]},{x:5,y:0,genre:"Instrumental",artists:[""]}],
             [{x:1,y:-6,genre:"Techno",artists:["Fat Boy Slim","iiO"]},{x:2,y:-4,genre:"Techno",artists:[""]},{x:3,y:-6,genre:"Techno",artists:["Quench"]},{x:4,y:-7,genre:"Techno",artists:["Quench","OSnap!"]},{x:5,y:-2,genre:"Techno",artists:[""]}],
             [{x:1,y:0,genre:"Hip-Hop",artists:[""]},{x:2,y:-3,genre:"Hip-Hop",artists:[""]},{x:3,y:0,genre:"Hip-Hop",artists:["Kanye West","Jay-Z","50 Cent","Eminem","Lil Wayne"]},{x:4,y:-3,genre:"Hip-Hop",artists:[""]},{x:5,y:0,genre:"Hip-Hop",artists:[""]}],
             [{x:1,y:0,genre:"World",artists:[""]},{x:2,y:-8,genre:"World",artists:["Shreya Ghoshal"]},{x:3,y:-7,genre:"World",artists:["Sunidhi Chauhan"]},{x:4,y:-3,genre:"World",artists:[""]},{x:5,y:-6,genre:"World",artists:["Alisha Chinai"]}]] }            

var data = allData["Chill"]

function draw() {
d3.select("svg").remove();
var  h=500
    ,w=1200
    ,margin=10
    ,color = ["#0033CC", "#8A2E8A", "#ff7f0e", "#33CC33", "#CC0000", "#996633", "#786f6f"]
    ,user = ["Shugo","Lavanya","Stavan","Rimi","Shruthi"]

    ,x = d3.scale.ordinal()
        .domain(d3.range(data[0].length+1))
        .rangeRoundBands([margin,w-margin], .1)

    ,y = d3.scale.linear()
        .range([h-margin,0+margin])

    ,xAxis = d3.svg.axis().scale(x).orient("top").tickSize(6, 0)
    ,yAxis = d3.svg.axis().scale(y).orient("left")

barStack(data)
y.domain(data.extent)


svg = d3.select("#chart")
    .append("svg")
    .attr("height",h)
    .attr("width",w)

/*var text = svgContainer.selectAll("text")
                        .data(circleData)
                        .enter()
                        .append("text");*/

var barChart = svg.selectAll(".series").data(data)
    .enter().append("g").classed("series",true).style("fill", function(d,i) { return color[i]})
        .selectAll("rect").data(Object)
        .enter();

barChart.append("rect");
barChart.append("text");

svg.append("g").attr("class","axis x")
svg.append("g").attr("class","axis y")

var layout = 0,dur=0
redraw()
dur = 1500

function redraw() {
        /* Readjust the range to witdh and height */
        x.rangeRoundBands([margin,w-margin], .1)
        y.range([h-margin,0+margin])
        
        /* Reposition and redraw axis */
        svg.select(".x.axis")
            .transition().duration(dur)
            .attr("transform","translate (0 "+y(0)+")")
            .call(xAxis.orient("top"))
        svg.select(".y.axis")
            .transition().duration(dur)
            .attr("transform","translate ("+x(0)+" 0)")
            .call(yAxis.orient("left"))

        /* Reposition the elements */
        svg.selectAll(".series rect")
            .transition().duration(dur)
            .attr("x",function(d,i) { return x(d.x)})
            .attr("y",function(d) { return y(d.y0)})
            .attr("height",function(d) { return y(0)-y(d.size)})
            .attr("width",x.rangeBand())

        svg.selectAll(".series text")
            .attr("x", function(d) { return x(d.x) + x.rangeBand()/2; })
            .attr("y", function(d) { return y(d.y0) + (y(0)-y(d.size))/2; })
            .attr("dy", ".35em")
            .text(function(d) { 
                if(d.y<0){
                    if(mode == 0)
                        return d.genre;
                    else
                        return d.artists;
                }
                else 
                    return ""; })
            .style("fill", "white")
            .style("text-anchor", "middle")
            .style("font-weight", "bold");

    }
}