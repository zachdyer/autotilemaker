# autotilemaker

## Introduction
AutoTileMaker is a function that allows you to create an auto-tile image that can be used to make 2d tile maps with borders.

## How to use
To create a new autotile image use the function `autoTileMaker`
and use the parameters to customize your tileset image.

### Parameters
The first and second parameter are the tile width and height. 
This is the size of the tile on the output graphic. 
The third and fourth paramter are the base color and the border color of the tile.

## Example Usage
let test = autoTileMaker(64, 64, "green", "blue", "black")
