require("CoreLibs/graphics");
require("CoreLibs/sprites");
require("CoreLibs/object");

const { graphics: gfx } = playdate

playdate.update = () => {
  gfx.drawTextAligned("hello world", 165, 100, 0)
};
