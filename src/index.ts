require("CoreLibs/graphics");
require("CoreLibs/sprites");
require("CoreLibs/object");

const gfx = playdate.graphics

playdate.update = () => {
  gfx.drawTextAligned("hello world", 165, 100, 0)
};
