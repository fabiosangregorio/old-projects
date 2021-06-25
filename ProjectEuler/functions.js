function rotateArray(n) {
  var r = [];
  for(var x = 0; x < n.length; x++){
    r.push([]);
    for(var y = x; y < n.length; y++) {
      r[x].push(n[y][n[y].length - 1]);
      n[y].pop();
    }
  }
  return r;
}
