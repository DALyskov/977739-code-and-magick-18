'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var FONT_GAP = 16;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', CLOUD_X + 2 * GAP, CLOUD_Y + 3 * GAP);
  ctx.fillText('Список результатов:', CLOUD_X + 2 * GAP, CLOUD_Y + 3 * GAP + FONT_GAP);

  var timeMax = 0;

  for (var i = 0; i < players.length; i++) {
    var time = Math.ceil(times[i]);
    if (time > timeMax) {
      timeMax = time;
    }
  }

  for (i = 0; i < players.length; i++) {
    time = Math.ceil(times[i]);

    var barHeght = BAR_HEIGHT * time / timeMax;
    ctx.fillText(time, CLOUD_X + 4 * GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - 5 * GAP - barHeght);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.floor(Math.random() * 101) + '%, 50%)';
    }
    ctx.fillRect(CLOUD_X + 4 * GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - 4 * GAP - barHeght, BAR_WIDTH, barHeght);
    ctx.fillStyle = 'black';
    ctx.fillText(players[i], CLOUD_X + 4 * GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - 2 * GAP);
  }
};
