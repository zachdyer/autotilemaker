let test = autoTileMaker(64, 64, "green", "blue", "black")
document.getElementById("demo-auto-tile").appendChild(test);

// Use auto tile to convert a demo 2d array map
let map = [
  [0,0,0,0,0,0,0,0],
  [0,0,1,1,1,0,1,0],
  [0,1,0,1,1,1,0,0],
  [0,0,1,1,1,0,0,0],
  [0,0,1,1,1,1,0,0],
  [0,0,0,0,0,0,0,0]
]
  
let automap = autotile(map)
console.log(map, automap)

// Use the new 2d map to draw the map on canvas
let mapDrawing = drawAutoTileMap(automap,test)
document.getElementById('demo-auto-tile-map').appendChild(mapDrawing)