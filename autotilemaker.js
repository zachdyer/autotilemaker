// This function will return an an image of an autotile set

function autoTileMaker(tileWidth, tileHeight, tileColor, borderColor, blankColor = "black") {
  let tileColumns = 8;
  let tileRows = 6;
  let width = tileWidth * tileColumns;
  let height = tileHeight * tileRows;
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  canvas.width = width;
  canvas.height = height;
  ctx.width = width * window.devicePixelRatio;
  ctx.height = height * window.devicePixelRatio;
  ctx.fillStyle = tileColor;
  ctx.strokeStyle = borderColor;
  ctx.lineWidth = 10;
  let padding = ctx.lineWidth / 2;
  let drawTile = function (col, row) {
    if (col == null || row == null) col = tileX;
    row = tileY;
    ctx.fillRect(tileWidth * col, tileHeight * row, tileWidth, tileHeight);
  };
  let borderBottomTile = function (col, row) {
    if (col == null || row == null) col = tileX;
    row = tileY;
    ctx.moveTo(tileWidth * col, tileHeight * row + tileHeight - padding);
    ctx.lineTo(
      tileWidth * col + tileWidth,
      tileHeight * row + tileHeight - padding
    );
  };
  let borderTopRightCorner = function (col, row) {
    if (col == null || row == null) col = tileX;
    row = tileY;
    ctx.moveTo(tileWidth * col + tileWidth, tileHeight * row + padding);
    ctx.lineTo(
      tileWidth * col + tileWidth - ctx.lineWidth,
      tileHeight * row + padding
    );
  };
  let borderTopTile = function (col, row) {
    if (col == null || row == null) col = tileX;
    row = tileY;
    ctx.moveTo(tileWidth * col, tileHeight * row + padding);
    ctx.lineTo(tileWidth * col + tileWidth, tileHeight * row + padding);
  };
  let borderLeftTile = function (col, row) {
    if (col == null || row == null) col = tileX;
    row = tileY;
    ctx.moveTo(tileWidth * col + padding, tileHeight * row);
    ctx.lineTo(tileWidth * col + padding, tileHeight * row + tileHeight);
  };
  function borderRightTile(col, row) {
    if (col == null || row == null) col = tileX;
    row = tileY;
    ctx.moveTo(tileWidth * col + tileWidth - padding, tileHeight * row);
    ctx.lineTo(
      tileWidth * col + tileWidth - padding,
      tileHeight * row + tileHeight
    );
  }
  function borderTopLeftCorner(col, row) {
    if (col == null || row == null) col = tileX;
    row = tileY;
    ctx.moveTo(tileWidth * col, tileHeight * row + padding);
    ctx.lineTo(tileWidth * col + ctx.lineWidth, tileHeight * row + padding);
  }
  function borderBottomLeftCorner(col, row) {
    if (col == null || row == null) col = tileX;
    row = tileY;
    ctx.moveTo(tileWidth * col, tileHeight * row + tileHeight - padding);
    ctx.lineTo(
      tileWidth * col + ctx.lineWidth,
      tileHeight * row + tileHeight - padding
    );
  }
  function borderBottomRightCorner(col, row) {
    if (col == null || row == null) col = tileX;
    row = tileY;
    ctx.moveTo(
      tileWidth * col + tileWidth,
      tileHeight * row + tileHeight - padding
    );
    ctx.lineTo(
      tileWidth * col + tileWidth - ctx.lineWidth,
      tileHeight * row + tileHeight - padding
    );
  }
  //tile 0,0
  let tileX = 0;
  let tileY = 0;
  ctx.fillStyle = blankColor
  ctx.fillRect(tileX, tileY, tileWidth, tileHeight);
  ctx.fillStyle = tileColor
  // ctx.strokeRect(0,0, tileWidth, tileHeight)
  //tile 1,0
  tileX = 1;
  ctx.fillRect(tileWidth * tileX, tileHeight * tileY, tileWidth, tileHeight);
  ctx.moveTo(tileWidth * tileX + padding, tileHeight * tileY);
  ctx.lineTo(
    tileWidth * tileX + padding,
    tileHeight * tileY + tileHeight - padding
  );
  ctx.lineTo(
    tileWidth * tileX + tileWidth - padding,
    tileHeight * tileY + tileHeight - padding
  );
  ctx.lineTo(
    tileWidth * tileX + tileWidth - padding,
    tileHeight * tileY - padding
  );
  // tile 2,0
  ctx.fillRect(tileWidth * 2, tileHeight * 0, tileWidth, tileHeight);
  ctx.moveTo(tileWidth * 2, tileHeight * 0 + padding);
  ctx.lineTo(tileWidth * 2 + tileWidth - padding, tileHeight * 0 + padding);
  ctx.lineTo(
    tileWidth * 2 + tileWidth - padding,
    tileHeight * 0 + tileHeight - padding
  );
  ctx.lineTo(tileWidth * 2, tileHeight * 0 + tileHeight - padding);
  // tile 3,0
  tileX = 3;
  ctx.fillRect(tileWidth * tileX, tileHeight * tileY, tileWidth, tileHeight);
  ctx.moveTo(tileWidth * tileX, tileHeight * tileY + padding);
  ctx.lineTo(tileWidth * tileX + ctx.lineWidth, tileHeight * tileY + padding);
  ctx.moveTo(tileWidth * tileX + tileWidth - padding, tileHeight * tileY);
  ctx.lineTo(
    tileWidth * tileX + tileWidth - padding,
    tileHeight * tileY + tileHeight - padding
  );
  ctx.lineTo(tileWidth * tileX, tileHeight * tileY + tileHeight - padding);
  // tile 4,0
  tileX = 4;
  drawTile(tileX, tileY);
  borderBottomTile(tileX, tileY);
  borderRightTile(tileX, tileY);
  // tile 5,0
  tileX = 5;
  drawTile(tileX, tileY);
  borderTopTile(tileX, tileY);
  borderLeftTile(tileX, tileY);
  borderBottomTile(tileX, tileY);
  // tile 6,0
  tileX = 6;
  drawTile(tileX, tileY);
  borderLeftTile(tileX, tileY);
  borderBottomTile(tileX, tileY);
  borderTopRightCorner(tileX, tileY);
  // tile 7,0
  tileX = 7;
  drawTile(tileX, tileY);
  borderLeftTile(tileX, tileY);
  borderBottomTile(tileX, tileY);
  // tile 0,1
  tileX = 0;
  tileY = 1;
  drawTile(tileX, tileY);
  borderTopTile(tileX, tileY);
  borderBottomTile(tileX, tileY);
  // tile 1,1
  tileX = 1;
  drawTile(tileX, tileY);
  borderBottomTile(tileX, tileY);
  borderTopLeftCorner(tileX, tileY);
  borderTopRightCorner(tileX, tileY);
  // tile 2,1
  tileX = 2;
  drawTile(tileX, tileY);
  borderBottomTile(tileX, tileY);
  borderTopRightCorner(tileX, tileY);
  // tile 3,1
  tileX = 3;
  drawTile(tileX, tileY);
  borderBottomTile(tileX, tileY);
  borderTopLeftCorner(tileX, tileY);
  // tile 4,1
  tileX = 4;
  drawTile(tileX, tileY);
  borderBottomTile(tileX, tileY);
  // tile 5,1
  tileX = 5;
  drawTile(tileX, tileY);
  borderLeftTile(tileX, tileY);
  borderTopTile(tileX, tileY);
  borderRightTile(tileX, tileY);
  // tile 6,1
  tileX = 6;
  drawTile(tileX, tileY);
  borderLeftTile(tileX, tileY);
  borderRightTile(tileX, tileY);
  // tile 7,1
  tileX = 7;
  drawTile(tileX, tileY);
  borderTopTile(tileX, tileY);
  borderRightTile(tileX, tileY);
  borderBottomLeftCorner(tileX, tileY);
  // tile 0,2
  tileX = 0;
  tileY = 2;
  drawTile();
  borderRightTile();
  borderTopLeftCorner();
  borderBottomLeftCorner();
  // tile 1,2
  tileX = 1;
  drawTile();
  borderRightTile();
  borderBottomLeftCorner();
  // tile 2,2
  tileX = 2;
  drawTile();
  borderLeftTile();
  borderTopTile();
  borderBottomRightCorner();
  // tile 3,2
  tileX = 3;
  drawTile();
  borderLeftTile();
  borderTopRightCorner();
  borderBottomRightCorner();
  // tile 4,2
  tileX = 4;
  drawTile();
  borderLeftTile();
  borderBottomRightCorner();
  // tile 5,2
  tileX = 5;
  drawTile();
  borderTopTile();
  borderBottomLeftCorner();
  borderBottomRightCorner();
  // tile 6,2
  tileX = 6;
  drawTile();
  borderTopRightCorner();
  borderTopLeftCorner();
  borderBottomLeftCorner();
  borderBottomRightCorner();
  // tile 7,2
  tileX = 7;
  drawTile();
  borderTopRightCorner();
  borderBottomLeftCorner();
  // tile 0,3
  tileX = 0;
  tileY = 3;
  drawTile();
  borderTopLeftCorner();
  borderBottomLeftCorner();
  borderBottomRightCorner();
  // tile 1,3
  tileX = 1;
  drawTile();
  borderBottomLeftCorner();
  borderBottomRightCorner();
  // tile 2,3
  tileX = 2;
  drawTile();
  borderTopTile();
  borderRightTile();
  // tile 3,3
  tileX = 3;
  drawTile();
  borderTopLeftCorner();
  borderRightTile();
  // tile 4,3
  tileX = 4;
  drawTile();
  borderRightTile();
  // tile 5,3
  tileX = 5;
  drawTile();
  borderTopTile();
  borderBottomRightCorner();
  // tile 6,3
  tileX = 6;
  drawTile();
  borderTopLeftCorner();
  borderBottomRightCorner();
  // tile 7,3
  tileX = 7;
  drawTile();
  borderTopRightCorner();
  borderBottomRightCorner();
  // tile 0,4
  tileX = 0;
  tileY = 4;
  drawTile();
  borderTopLeftCorner();
  borderBottomRightCorner();
  // tile 1,4
  tileX = 1;
  drawTile();
  borderBottomRightCorner();
  // tile 2,4
  tileX = 2;
  drawTile();
  borderLeftTile();
  borderTopTile();
  // tile 3,4
  tileX = 3;
  drawTile();
  borderLeftTile();
  borderTopRightCorner();
  // tile 4,4
  tileX = 4;
  drawTile();
  borderLeftTile();
  // tile 5,4
  tileX = 5;
  drawTile();
  borderTopTile();
  borderBottomLeftCorner();
  // tile 6,4
  tileX = 6;
  drawTile();
  borderTopRightCorner();
  borderTopLeftCorner();
  borderBottomLeftCorner();
  // tile 7,4
  tileX = 7;
  drawTile();
  borderTopRightCorner();
  borderBottomLeftCorner();
  // tile 0,5
  tileX = 0;
  tileY = 5;
  drawTile();
  borderTopLeftCorner();
  borderBottomLeftCorner();
  // tile 1,5
  tileX = 1;
  drawTile();
  borderBottomLeftCorner();
  // tile 2,5
  tileX = 2;
  drawTile();
  borderTopTile();
  // tile 3,5
  tileX = 3;
  drawTile();
  borderTopLeftCorner()
  borderTopRightCorner()
  // tile 4,5
  tileX = 4
  drawTile()
  borderTopRightCorner()
  // tile 5,5
  tileX = 5
  drawTile()
  borderTopLeftCorner()
  // tile 6,5
  tileX=6
  drawTile()
  // tile 7,5
  tileX=7
  drawTile()
  borderTopTile()
  borderRightTile()
  borderBottomTile()
  borderLeftTile()
  ctx.stroke();
  
  ctx.beginPath();
  // debug grid
  ctx.lineWidth = 1;
  ctx.strokeStyle = "black";
  for (let x = 0; x < tileColumns; x++) {
    ctx.moveTo(x * tileWidth, 0);
    ctx.lineTo(x * tileWidth, tileHeight * tileRows);
  }
  for (let y = 0; y < tileColumns; y++) {
    ctx.moveTo(0, y * tileHeight);
    ctx.lineTo(tileHeight * tileColumns, y * tileHeight);
  }

  // ctx.stroke(); //debug grid
  return canvas
}
// This function creates an image from a 2d autotile map
function drawAutoTileMap(map, image) {
  let tileWidth = image.width / 8
  let tileHeight = image.height / 6
  let canvas = document.createElement("canvas")
  canvas.width = tileWidth * map[0].length
  canvas.height = tileHeight * map.length
  let ctx = canvas.getContext("2d")
  ctx.width = canvas.width * window.devicePixelRatio
  ctx.height = canvas.height * window.devicePixelRatio
  let imageNumTiles = 8
  for(let row = 0; row < map.length; row++){
    for(let col = 0; col < map[row].length; col++) {
      let tile = map[ row ][ col ];
      let tileRow = (tile / imageNumTiles) | 0; // Bitwise OR operation
      let tileCol = (tile % imageNumTiles) | 0;
      let sx = tileCol * tileWidth
      let sy = tileRow * tileHeight
      let sWidth = tileWidth
      let sHeight = tileHeight
      let dx = col * tileWidth
      let dy = row * tileHeight
      let dWidth = tileWidth
      let dHeight = tileHeight
      ctx.drawImage(
        image,
        sx, sy,
        sWidth, sHeight,
        dx, dy,
        dWidth, dHeight
        )
    }
  }
  console.log('tileWidth', tileWidth, 'tileHeight', tileHeight)
  return canvas
}