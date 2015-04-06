function pinta(_n, _divId, _class){
  if (_n < 0 || _n > 5000) _n = 50;
  var cont = 0;
  for (;cont<_n;cont++){alert("n:" + cont);
      $('#'+_divId).append('<div class="'+_class+'">capa hija '+cont+"-" + _class + "</div>");
  }
}
