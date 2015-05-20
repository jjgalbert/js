// _datos: array de elementos {_etiqueta, _valor} -
// _color: array de colores. Nº de elementos = nº de elementos de _datos
// _ancho: total del donut
// _alto:  total del donut
// _anchoDonut: ancho interior del donut
function pintaDonut(_datos, _color, _ancho, _alto, _anchoDonut){
 var width = _ancho,
 height = _alto,
 radius = Math.min(width, height) / 2,
 ancho = _anchoDonut;
var color = d3.scale.ordinal().range(_color);
// Variable arco
var arc = d3.svg.arc().outerRadius(radius).innerRadius(radius - ancho);
// Variable tarta
var pie = d3.layout.pie().sort(null).value(function(d) { return d.valor; });
// Datos
var data = ( $.isArray(_datos))? _datos : [{etiqueta: "No hay datos", valor: 1}];
///////////// Dibujo
// SVG y g
var svg = d3.select("body").append("svg").attr("width", width).attr("height", height).append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
// Arco
var g = svg.selectAll(".arc").data(pie(data)).enter().append("g").attr("class", "arc");
// Relleno
g.append("path").attr("d", arc).style("fill", function(d) { return color(d.data.etiqueta); });
// Texto
g.append("text").attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; }).attr("dy", ".35em").style("text-anchor", "middle").text(function(d) { return d.data.etiqueta; });
}
