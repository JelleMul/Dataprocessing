// Jelle Mul
// 11402148

/* use this to test out your function */
window.onload = function() {
 	changeColor("dui", '#66CD00');
  changeColor("ita", '#FF69B4');
  changeColor("swe", '#F4A460');
  changeColor("port", '#FFA500');
}

/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color) {
  document.getElementById(id).style.fill = color
}
