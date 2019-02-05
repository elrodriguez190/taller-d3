// margenes del Gráfico
var margin = {
  left: 80,
  right: 40,
  top: 40,
  bottom: 40
};
//Tamaño del gráfico
var width = 600 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var svg = d3.select("#grafico")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom);

var circulo = svg.append("circle")
.attr("r",100)
.attr("cx",100)
.attr("cy",100);
var circulo = svg.append("circle").attr("class", "gafas")
.attr("r",30)
.attr("cx",60)
.attr("cy",90);
var circulo = svg.append("circle").attr("class", "gafas")
.attr("r",30)
.attr("cx",150)
.attr("cy",90);
var line = svg.append("line")
.attr("x1",80)
.attr("x2",120)
.attr("y1",160)
.attr("y2",160);
var line = svg.append("line").attr("class", "gafas-linea")
.attr("x1",95)
.attr("x2",120)
.attr("y1",90)
.attr("y2",90);
