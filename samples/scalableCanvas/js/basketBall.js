function drawBasketBall(ctx){
	  var gradient;

	  // This is to set the snow.gtx the reference scale for this graphic
	  // So, this is to be set to the original canvas drawing size
	  ctx.referenceScale(50,50);
	  
      // layer1/Group
      ctx.save();

      // layer1/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(36.7, 47.0);
      ctx.lineTo(36.4, 47.3);
      ctx.bezierCurveTo(33.0, 49.0, 29.1, 50.0, 25.0, 50.0);
      ctx.bezierCurveTo(23.5, 50.0, 22.1, 49.9, 20.7, 49.6);
      ctx.bezierCurveTo(20.3, 49.6, 19.8, 48.8, 19.5, 48.9);
      ctx.bezierCurveTo(19.1, 48.9, 19.0, 49.2, 18.7, 49.2);
      ctx.bezierCurveTo(13.1, 48.3, 8.5, 45.2, 5.2, 40.8);
      ctx.bezierCurveTo(5.0, 40.5, 5.0, 39.9, 4.8, 39.6);
      ctx.bezierCurveTo(4.6, 39.3, 4.2, 39.3, 4.0, 39.0);
      ctx.bezierCurveTo(1.8, 35.4, 0.4, 31.3, 0.1, 27.0);
      ctx.bezierCurveTo(0.1, 26.7, 0.4, 26.3, 0.4, 26.1);
      ctx.bezierCurveTo(0.4, 25.9, 0.0, 25.4, 0.0, 25.2);
      ctx.bezierCurveTo(-0.0, 25.1, 0.0, 25.1, 0.0, 25.0);
      ctx.bezierCurveTo(0.0, 18.6, 2.4, 12.8, 6.4, 8.3);
      ctx.bezierCurveTo(6.6, 8.1, 6.9, 8.3, 7.1, 8.0);
      ctx.bezierCurveTo(7.4, 7.8, 7.5, 7.1, 7.8, 6.9);
      ctx.bezierCurveTo(12.3, 2.6, 18.3, 0.0, 25.0, 0.0);
      ctx.bezierCurveTo(25.6, 0.0, 25.8, 0.4, 26.3, 0.5);
      ctx.bezierCurveTo(26.6, 0.5, 27.6, 0.1, 27.9, 0.2);
      ctx.bezierCurveTo(34.8, 0.9, 40.3, 4.2, 44.4, 9.2);
      ctx.bezierCurveTo(44.6, 9.4, 44.5, 10.1, 44.6, 10.3);
      ctx.bezierCurveTo(44.8, 10.5, 45.4, 10.6, 45.6, 10.8);
      ctx.bezierCurveTo(48.4, 14.9, 50.0, 19.7, 50.0, 25.0);
      ctx.bezierCurveTo(50.0, 26.1, 49.9, 27.3, 49.8, 28.4);
      ctx.bezierCurveTo(49.7, 28.8, 49.0, 29.4, 48.9, 29.8);
      ctx.bezierCurveTo(48.8, 30.3, 49.3, 30.8, 49.2, 31.2);
      ctx.bezierCurveTo(47.7, 37.4, 43.9, 42.6, 38.7, 46.0);
      ctx.lineTo(36.7, 47.0);
      ctx.closePath();
      gradient = ctx.createRadialGradient(15.5, 35.0, 0.0, 25.0, 25.6, 25.0);
      gradient.addColorStop(0.00, "rgb(255, 204, 103)");
      gradient.addColorStop(0.29, "rgb(241, 163, 78)");
      gradient.addColorStop(0.58, "rgb(227, 122, 54)");
      gradient.addColorStop(0.76, "rgb(210, 106, 54)");
      gradient.addColorStop(0.90, "rgb(192, 89, 54)");
      ctx.fillStyle(gradient);
      ctx.fill();

      // layer1/Group/Group

      // layer1/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(49.4, 29.1);
      ctx.bezierCurveTo(49.4, 29.0, 49.5, 28.9, 49.5, 28.9);
      ctx.bezierCurveTo(45.0, 31.8, 39.5, 33.5, 34.3, 33.5);
      ctx.lineTo(34.3, 33.5);
      ctx.bezierCurveTo(29.6, 33.5, 25.6, 32.0, 23.1, 29.4);
      ctx.bezierCurveTo(16.6, 22.7, 20.5, 10.0, 26.8, 1.0);
      ctx.bezierCurveTo(27.0, 0.7, 27.4, 0.5, 27.6, 0.2);
      ctx.bezierCurveTo(27.4, 0.3, 26.9, 0.4, 26.6, 0.4);
      ctx.bezierCurveTo(26.3, 0.4, 25.9, 0.3, 25.7, 0.2);
      ctx.bezierCurveTo(25.6, 0.3, 25.7, 0.2, 25.7, 0.2);
      ctx.bezierCurveTo(22.1, 5.3, 19.6, 11.0, 18.7, 16.2);
      ctx.bezierCurveTo(17.7, 22.1, 18.9, 27.0, 22.1, 30.4);
      ctx.bezierCurveTo(24.9, 33.3, 29.2, 34.8, 34.3, 34.8);
      ctx.lineTo(34.3, 34.8);
      ctx.bezierCurveTo(39.4, 34.8, 44.6, 33.4, 49.1, 30.8);
      ctx.bezierCurveTo(48.9, 30.2, 48.9, 29.5, 49.4, 29.1);
      ctx.closePath();
      ctx.fillStyle("rgb(35, 35, 35)");
      ctx.fill();

      // layer1/Group/Group
      ctx.restore();

      // layer1/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(5.0, 40.3);
      ctx.lineTo(4.8, 39.6);
      ctx.lineTo(4.2, 39.2);
      ctx.lineTo(44.5, 9.6);
      ctx.lineTo(44.8, 10.3);
      ctx.lineTo(45.3, 10.6);
      ctx.lineTo(5.1, 40.0);
      ctx.lineTo(5.0, 40.3);
      ctx.closePath();
      ctx.fillStyle("rgb(35, 35, 35)");
      ctx.fill();

      // layer1/Group/Group
      ctx.restore();

      // layer1/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(7.3, 8.8);
      ctx.bezierCurveTo(7.4, 7.9, 7.5, 7.8, 7.7, 7.0);
      ctx.bezierCurveTo(7.6, 7.1, 7.6, 7.2, 7.5, 7.4);
      ctx.bezierCurveTo(7.4, 7.7, 7.2, 7.9, 7.0, 8.1);
      ctx.bezierCurveTo(6.8, 8.2, 6.6, 8.2, 6.4, 8.3);
      ctx.bezierCurveTo(6.3, 8.8, 6.3, 8.7, 6.3, 9.1);
      ctx.bezierCurveTo(5.5, 14.4, 6.6, 19.4, 9.4, 24.8);
      ctx.bezierCurveTo(12.2, 30.0, 16.4, 35.3, 21.1, 39.8);
      ctx.bezierCurveTo(25.8, 44.2, 31.0, 47.4, 35.9, 47.5);
      ctx.bezierCurveTo(36.1, 47.5, 36.5, 47.3, 36.7, 47.0);
      ctx.bezierCurveTo(37.1, 46.8, 37.6, 46.5, 37.8, 46.4);
      ctx.bezierCurveTo(30.7, 46.8, 21.6, 39.5, 15.7, 32.3);
      ctx.bezierCurveTo(9.9, 24.7, 6.0, 16.9, 7.3, 8.8);
      ctx.closePath();
      ctx.fillStyle("rgb(35, 35, 35)");
      ctx.fill();

      // layer1/Group/Group
      ctx.restore();

      // layer1/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(11.9, 37.7);
      ctx.bezierCurveTo(15.2, 41.0, 17.6, 44.7, 19.0, 48.8);
      ctx.bezierCurveTo(19.0, 48.9, 19.0, 49.0, 19.1, 49.1);
      ctx.bezierCurveTo(19.2, 49.0, 19.4, 48.8, 19.5, 48.9);
      ctx.bezierCurveTo(19.7, 49.0, 20.3, 49.4, 20.4, 49.5);
      ctx.bezierCurveTo(18.9, 45.1, 16.1, 40.5, 12.6, 37.0);
      ctx.bezierCurveTo(8.5, 32.9, 4.3, 28.9, 0.1, 25.5);
      ctx.bezierCurveTo(0.2, 25.9, 0.4, 26.5, 0.1, 26.7);
      ctx.bezierCurveTo(4.2, 30.1, 7.9, 33.7, 11.9, 37.7);
      ctx.closePath();
      ctx.fillStyle("rgb(35, 35, 35)");
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
}
