function pinta(_n, _divId, _class){
  if (_n < 0 || _n > 50000) _n = 50;
  var cont = 0;
  for (;cont<_n;cont++){
      $('#'+_divId).append('<div class="'+_class+'">capa hija '+cont+"-" + _class + "</div>");
  }
}

function pintaD3(){
  d3.selectAll("div").style("color", function() {
  return "hsl(" + Math.random() * 360 + ",100%,50%)";
});
  //d3.selectAll("div").data([14, 18, 25, 26, 33, 42]).style("font-size", function(d) { return d + "px"; });
  var p = d3.select("body").selectAll("div").data([4, 8, 15, 16, 23, 42]).text(String);
  // Enter…
  p.enter().append("p").text(String);
  // Exit…
  //p.exit().remove();
  d3.select("body").transition().duration(750).style("background-color", "black");
}
