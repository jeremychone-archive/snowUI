function drawBaseBall(ctx){
	var gradient;
	
	// This is to set the snow.gtx the reference scale for this graphic
	// So, this is to be set to the original canvas drawing size
	ctx.referenceScale(94,75);
	  
	  
	// layer1/Group
	ctx.save();
	
	// layer1/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(76.4, 40.2);
	ctx.bezierCurveTo(76.4, 54.0, 65.2, 65.2, 51.4, 65.2);
	ctx.bezierCurveTo(37.6, 65.2, 26.4, 54.0, 26.4, 40.2);
	ctx.bezierCurveTo(26.4, 26.4, 37.6, 15.2, 51.4, 15.2);
	ctx.bezierCurveTo(65.2, 15.2, 76.4, 26.4, 76.4, 40.2);
	ctx.closePath();
	gradient = ctx.createRadialGradient(59.9, 45.7, 0.0, 51.4, 40.2, 25.0);
	gradient.addColorStop(0.38, "rgb(255, 255, 255)");
	gradient.addColorStop(0.69, "rgb(234, 234, 234)");
	gradient.addColorStop(1.00, "rgb(214, 214, 214)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group
	
	// layer1/Group/Group/Clipping Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(76.4, 40.2);
	ctx.bezierCurveTo(76.4, 54.0, 65.2, 65.2, 51.4, 65.2);
	ctx.bezierCurveTo(37.6, 65.2, 26.4, 54.0, 26.4, 40.2);
	ctx.bezierCurveTo(26.4, 26.4, 37.6, 15.2, 51.4, 15.2);
	ctx.bezierCurveTo(65.2, 15.2, 76.4, 26.4, 76.4, 40.2);
	ctx.closePath();
	ctx.clip();
	
	
	// layer1/Group/Group/Group
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(30.0, 46.4);
	ctx.bezierCurveTo(29.6, 46.4, 29.3, 46.7, 29.2, 47.1);
	ctx.bezierCurveTo(29.2, 47.5, 29.6, 47.8, 30.0, 47.9);
	ctx.bezierCurveTo(30.4, 47.9, 30.8, 47.6, 30.8, 47.2);
	ctx.bezierCurveTo(30.8, 46.8, 30.5, 46.4, 30.0, 46.4);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.038, -0.999, 0.999, 0.038, 1509.2, 2111.0);
	gradient = ctx.createRadialGradient(2006.7, -1555.7, 0.0, 2006.7, -1555.7, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(28.5, 45.8);
	ctx.bezierCurveTo(29.2, 45.9, 29.9, 46.1, 30.2, 46.8);
	ctx.bezierCurveTo(30.4, 47.2, 29.8, 47.5, 29.6, 47.1);
	ctx.bezierCurveTo(29.4, 46.7, 29.0, 46.5, 28.5, 46.5);
	ctx.bezierCurveTo(28.1, 46.5, 28.1, 45.8, 28.5, 45.8);
	ctx.lineTo(28.5, 45.8);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(26.3, 44.6);
	ctx.bezierCurveTo(25.8, 44.6, 25.5, 44.9, 25.5, 45.3);
	ctx.bezierCurveTo(25.4, 45.7, 25.8, 46.0, 26.2, 46.0);
	ctx.bezierCurveTo(26.6, 46.1, 27.0, 45.8, 27.0, 45.4);
	ctx.bezierCurveTo(27.0, 45.0, 26.7, 44.6, 26.3, 44.6);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.038, -0.999, 0.999, 0.038, 1509.2, 2111.0);
	gradient = ctx.createRadialGradient(2008.4, -1559.6, 0.0, 2008.4, -1559.6, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(27.9, 46.4);
	ctx.bezierCurveTo(27.5, 45.8, 27.0, 45.6, 26.3, 45.6);
	ctx.bezierCurveTo(25.9, 45.7, 25.9, 45.0, 26.3, 45.0);
	ctx.bezierCurveTo(27.1, 44.9, 27.9, 45.3, 28.4, 45.9);
	ctx.bezierCurveTo(28.7, 46.2, 28.2, 46.7, 27.9, 46.4);
	ctx.lineTo(27.9, 46.4);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(57.4, 62.7);
	ctx.bezierCurveTo(57.8, 62.7, 58.2, 62.9, 58.3, 63.3);
	ctx.bezierCurveTo(58.3, 63.7, 58.1, 64.1, 57.6, 64.2);
	ctx.bezierCurveTo(57.2, 64.2, 56.8, 64.0, 56.7, 63.6);
	ctx.bezierCurveTo(56.7, 63.2, 57.0, 62.8, 57.4, 62.7);
	ctx.closePath();
	ctx.save();
	ctx.transform(-0.174, -0.985, -0.985, 0.174, 1169.2, 1908.9);
	gradient = ctx.createRadialGradient(2010.5, 774.5, 0.0, 2010.5, 774.5, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(58.8, 61.9);
	ctx.bezierCurveTo(58.1, 62.1, 57.4, 62.4, 57.3, 63.2);
	ctx.bezierCurveTo(57.2, 63.6, 57.8, 63.8, 57.9, 63.4);
	ctx.bezierCurveTo(58.0, 62.9, 58.4, 62.7, 58.9, 62.6);
	ctx.bezierCurveTo(59.4, 62.5, 59.2, 61.8, 58.8, 61.9);
	ctx.lineTo(58.8, 61.9);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(60.9, 60.4);
	ctx.bezierCurveTo(61.3, 60.3, 61.7, 60.6, 61.8, 61.0);
	ctx.bezierCurveTo(61.8, 61.4, 61.5, 61.8, 61.1, 61.8);
	ctx.bezierCurveTo(60.7, 61.9, 60.3, 61.7, 60.2, 61.3);
	ctx.bezierCurveTo(60.2, 60.9, 60.4, 60.5, 60.9, 60.4);
	ctx.closePath();
	ctx.save();
	ctx.transform(-0.174, -0.985, -0.985, 0.174, 1169.2, 1908.9);
	gradient = ctx.createRadialGradient(2012.1, 770.6, 0.0, 2012.1, 770.6, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(59.5, 62.4);
	ctx.bezierCurveTo(59.8, 61.8, 60.3, 61.5, 61.0, 61.4);
	ctx.bezierCurveTo(61.4, 61.4, 61.3, 60.7, 60.9, 60.8);
	ctx.bezierCurveTo(60.0, 60.8, 59.3, 61.3, 58.9, 62.0);
	ctx.bezierCurveTo(58.7, 62.4, 59.3, 62.8, 59.5, 62.4);
	ctx.lineTo(59.5, 62.4);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(56.1, 60.2);
	ctx.bezierCurveTo(56.6, 60.2, 56.9, 60.6, 56.8, 61.0);
	ctx.bezierCurveTo(56.8, 61.4, 56.4, 61.6, 56.0, 61.6);
	ctx.bezierCurveTo(55.5, 61.5, 55.2, 61.2, 55.3, 60.8);
	ctx.bezierCurveTo(55.3, 60.4, 55.7, 60.1, 56.1, 60.2);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.104, -0.994, -0.994, -0.104, 720.7, 1778.2);
	gradient = ctx.createRadialGradient(1638.6, 840.5, 0.0, 1638.6, 840.5, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(57.7, 59.8);
	ctx.bezierCurveTo(57.0, 59.7, 56.3, 59.9, 55.9, 60.5);
	ctx.bezierCurveTo(55.7, 60.9, 56.2, 61.3, 56.4, 60.9);
	ctx.bezierCurveTo(56.7, 60.5, 57.2, 60.4, 57.7, 60.4);
	ctx.bezierCurveTo(58.1, 60.5, 58.2, 59.8, 57.7, 59.8);
	ctx.lineTo(57.7, 59.8);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(60.1, 58.9);
	ctx.bezierCurveTo(60.6, 58.9, 60.9, 59.3, 60.8, 59.7);
	ctx.bezierCurveTo(60.8, 60.1, 60.4, 60.4, 60.0, 60.3);
	ctx.bezierCurveTo(59.5, 60.3, 59.2, 59.9, 59.3, 59.5);
	ctx.bezierCurveTo(59.3, 59.1, 59.7, 58.9, 60.1, 58.9);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.104, -0.994, -0.994, -0.104, 720.7, 1778.2);
	gradient = ctx.createRadialGradient(1640.2, 836.6, 0.0, 1640.2, 836.6, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(58.2, 60.4);
	ctx.bezierCurveTo(58.7, 59.9, 59.3, 59.8, 60.0, 59.9);
	ctx.bezierCurveTo(60.4, 60.0, 60.4, 59.3, 60.0, 59.2);
	ctx.bezierCurveTo(59.2, 59.1, 58.4, 59.3, 57.8, 59.9);
	ctx.bezierCurveTo(57.5, 60.2, 57.9, 60.7, 58.2, 60.4);
	ctx.lineTo(58.2, 60.4);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(55.1, 57.5);
	ctx.bezierCurveTo(55.5, 57.7, 55.8, 58.1, 55.7, 58.5);
	ctx.bezierCurveTo(55.5, 58.8, 55.1, 59.0, 54.7, 58.9);
	ctx.bezierCurveTo(54.3, 58.8, 54.0, 58.4, 54.2, 58.0);
	ctx.bezierCurveTo(54.3, 57.6, 54.7, 57.4, 55.1, 57.5);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.309, -0.951, -0.951, -0.309, 418.5, 1601.6);
	gradient = ctx.createRadialGradient(1355.4, 822.7, 0.0, 1355.4, 822.7, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(56.8, 57.5);
	ctx.bezierCurveTo(56.1, 57.3, 55.3, 57.3, 54.8, 57.9);
	ctx.bezierCurveTo(54.6, 58.2, 55.0, 58.7, 55.3, 58.4);
	ctx.bezierCurveTo(55.6, 58.0, 56.1, 58.0, 56.6, 58.1);
	ctx.bezierCurveTo(57.0, 58.3, 57.2, 57.6, 56.8, 57.5);
	ctx.lineTo(56.8, 57.5);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(59.3, 57.1);
	ctx.bezierCurveTo(59.7, 57.3, 60.0, 57.7, 59.8, 58.1);
	ctx.bezierCurveTo(59.7, 58.4, 59.3, 58.6, 58.9, 58.5);
	ctx.bezierCurveTo(58.5, 58.4, 58.2, 58.0, 58.3, 57.6);
	ctx.bezierCurveTo(58.5, 57.2, 58.9, 57.0, 59.3, 57.1);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.309, -0.951, -0.951, -0.309, 418.5, 1601.6);
	gradient = ctx.createRadialGradient(1357.1, 818.8, 0.0, 1357.1, 818.8, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(57.2, 58.2);
	ctx.bezierCurveTo(57.7, 57.9, 58.3, 57.8, 58.9, 58.1);
	ctx.bezierCurveTo(59.3, 58.3, 59.5, 57.6, 59.2, 57.4);
	ctx.bezierCurveTo(58.4, 57.1, 57.6, 57.2, 56.9, 57.6);
	ctx.bezierCurveTo(56.5, 57.8, 56.8, 58.4, 57.2, 58.2);
	ctx.lineTo(57.2, 58.2);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(54.1, 54.4);
	ctx.bezierCurveTo(54.4, 54.6, 54.6, 55.0, 54.4, 55.4);
	ctx.bezierCurveTo(54.2, 55.7, 53.7, 55.8, 53.3, 55.6);
	ctx.bezierCurveTo(53.0, 55.4, 52.8, 54.9, 53.0, 54.6);
	ctx.bezierCurveTo(53.2, 54.3, 53.7, 54.2, 54.1, 54.4);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.500, -0.866, -0.866, -0.500, 158.6, 1366.9);
	gradient = ctx.createRadialGradient(1083.7, 746.9, 0.0, 1083.7, 746.9, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(55.7, 54.7);
	ctx.bezierCurveTo(55.1, 54.3, 54.3, 54.2, 53.7, 54.6);
	ctx.bezierCurveTo(53.4, 54.9, 53.7, 55.5, 54.0, 55.2);
	ctx.bezierCurveTo(54.5, 54.9, 54.9, 55.0, 55.4, 55.3);
	ctx.bezierCurveTo(55.7, 55.5, 56.1, 54.9, 55.7, 54.7);
	ctx.lineTo(55.7, 54.7);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(58.2, 54.8);
	ctx.bezierCurveTo(58.6, 55.1, 58.7, 55.5, 58.5, 55.9);
	ctx.bezierCurveTo(58.3, 56.2, 57.9, 56.3, 57.5, 56.1);
	ctx.bezierCurveTo(57.1, 55.9, 57.0, 55.4, 57.2, 55.1);
	ctx.bezierCurveTo(57.4, 54.7, 57.9, 54.6, 58.2, 54.8);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.500, -0.866, -0.866, -0.500, 158.6, 1366.9);
	gradient = ctx.createRadialGradient(1085.4, 743.0, 0.0, 1085.4, 743.0, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(55.9, 55.5);
	ctx.bezierCurveTo(56.5, 55.2, 57.1, 55.3, 57.7, 55.7);
	ctx.bezierCurveTo(58.0, 55.9, 58.4, 55.4, 58.0, 55.1);
	ctx.bezierCurveTo(57.3, 54.6, 56.5, 54.5, 55.7, 54.8);
	ctx.bezierCurveTo(55.3, 55.0, 55.5, 55.6, 55.9, 55.5);
	ctx.lineTo(55.9, 55.5);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(32.0, 44.7);
	ctx.bezierCurveTo(31.6, 44.7, 31.2, 45.0, 31.3, 45.4);
	ctx.bezierCurveTo(31.3, 45.8, 31.7, 46.1, 32.1, 46.1);
	ctx.bezierCurveTo(32.5, 46.1, 32.9, 45.8, 32.8, 45.4);
	ctx.bezierCurveTo(32.8, 45.0, 32.4, 44.7, 32.0, 44.7);
	ctx.closePath();
	ctx.save();
	ctx.transform(-0.050, -0.999, 0.999, -0.050, 1684.8, 2050.2);
	gradient = ctx.createRadialGradient(2084.3, -1551.2, 0.0, 2084.3, -1551.2, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(30.4, 44.2);
	ctx.bezierCurveTo(31.1, 44.2, 31.9, 44.4, 32.2, 45.1);
	ctx.bezierCurveTo(32.4, 45.5, 31.8, 45.8, 31.6, 45.4);
	ctx.bezierCurveTo(31.4, 45.0, 31.0, 44.9, 30.5, 44.9);
	ctx.bezierCurveTo(30.0, 44.9, 30.0, 44.2, 30.4, 44.2);
	ctx.lineTo(30.4, 44.2);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(28.1, 43.2);
	ctx.bezierCurveTo(27.7, 43.2, 27.3, 43.6, 27.3, 44.0);
	ctx.bezierCurveTo(27.4, 44.4, 27.7, 44.7, 28.2, 44.6);
	ctx.bezierCurveTo(28.6, 44.6, 28.9, 44.3, 28.9, 43.9);
	ctx.bezierCurveTo(28.9, 43.5, 28.5, 43.2, 28.1, 43.2);
	ctx.closePath();
	ctx.save();
	ctx.transform(-0.050, -0.999, 0.999, -0.050, 1684.8, 2050.2);
	gradient = ctx.createRadialGradient(2085.9, -1555.1, 0.0, 2085.9, -1555.1, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(29.9, 44.8);
	ctx.bezierCurveTo(29.4, 44.3, 28.9, 44.1, 28.2, 44.2);
	ctx.bezierCurveTo(27.8, 44.3, 27.7, 43.6, 28.2, 43.5);
	ctx.bezierCurveTo(29.0, 43.4, 29.8, 43.7, 30.3, 44.3);
	ctx.bezierCurveTo(30.6, 44.6, 30.2, 45.1, 29.9, 44.8);
	ctx.lineTo(29.9, 44.8);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(33.8, 42.8);
	ctx.bezierCurveTo(33.4, 42.8, 33.1, 43.2, 33.1, 43.6);
	ctx.bezierCurveTo(33.2, 44.0, 33.6, 44.3, 34.0, 44.2);
	ctx.bezierCurveTo(34.4, 44.1, 34.7, 43.8, 34.7, 43.4);
	ctx.bezierCurveTo(34.6, 43.0, 34.2, 42.7, 33.8, 42.8);
	ctx.closePath();
	ctx.save();
	ctx.transform(-0.137, -0.991, 0.991, -0.137, 1854.6, 1975.8);
	gradient = ctx.createRadialGradient(2162.8, -1540.0, 0.0, 2162.8, -1540.0, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(32.2, 42.4);
	ctx.bezierCurveTo(32.9, 42.4, 33.7, 42.5, 34.1, 43.1);
	ctx.bezierCurveTo(34.3, 43.5, 33.8, 43.9, 33.5, 43.6);
	ctx.bezierCurveTo(33.3, 43.1, 32.8, 43.0, 32.3, 43.1);
	ctx.bezierCurveTo(31.9, 43.2, 31.8, 42.5, 32.2, 42.4);
	ctx.lineTo(32.2, 42.4);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(29.8, 41.6);
	ctx.bezierCurveTo(29.4, 41.7, 29.1, 42.1, 29.1, 42.5);
	ctx.bezierCurveTo(29.2, 42.9, 29.6, 43.1, 30.0, 43.1);
	ctx.bezierCurveTo(30.4, 43.0, 30.7, 42.6, 30.7, 42.2);
	ctx.bezierCurveTo(30.6, 41.8, 30.2, 41.6, 29.8, 41.6);
	ctx.closePath();
	ctx.save();
	ctx.transform(-0.137, -0.991, 0.991, -0.137, 1854.6, 1975.8);
	gradient = ctx.createRadialGradient(2164.5, -1543.8, 0.0, 2164.5, -1543.8, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(31.7, 43.1);
	ctx.bezierCurveTo(31.2, 42.6, 30.6, 42.5, 30.0, 42.6);
	ctx.bezierCurveTo(29.6, 42.7, 29.5, 42.1, 29.9, 42.0);
	ctx.bezierCurveTo(30.7, 41.8, 31.5, 42.0, 32.1, 42.6);
	ctx.bezierCurveTo(32.4, 42.8, 32.0, 43.4, 31.7, 43.1);
	ctx.lineTo(31.7, 43.1);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(35.5, 40.7);
	ctx.bezierCurveTo(35.0, 40.8, 34.8, 41.2, 34.9, 41.6);
	ctx.bezierCurveTo(34.9, 42.0, 35.4, 42.2, 35.8, 42.1);
	ctx.bezierCurveTo(36.2, 42.0, 36.5, 41.6, 36.4, 41.2);
	ctx.bezierCurveTo(36.3, 40.9, 35.9, 40.6, 35.5, 40.7);
	ctx.closePath();
	ctx.save();
	ctx.transform(-0.222, -0.975, 0.975, -0.222, 2016.6, 1885.2);
	gradient = ctx.createRadialGradient(2238.0, -1521.5, 0.0, 2238.0, -1521.5, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(33.8, 40.5);
	ctx.bezierCurveTo(34.5, 40.4, 35.3, 40.4, 35.7, 41.1);
	ctx.bezierCurveTo(36.0, 41.4, 35.5, 41.9, 35.2, 41.5);
	ctx.bezierCurveTo(34.9, 41.1, 34.4, 41.1, 34.0, 41.2);
	ctx.bezierCurveTo(33.5, 41.3, 33.4, 40.6, 33.8, 40.5);
	ctx.lineTo(33.8, 40.5);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(31.3, 39.9);
	ctx.bezierCurveTo(30.9, 40.0, 30.6, 40.4, 30.7, 40.8);
	ctx.bezierCurveTo(30.8, 41.2, 31.2, 41.4, 31.7, 41.3);
	ctx.bezierCurveTo(32.1, 41.2, 32.3, 40.9, 32.3, 40.5);
	ctx.bezierCurveTo(32.2, 40.1, 31.8, 39.8, 31.3, 39.9);
	ctx.closePath();
	ctx.save();
	ctx.transform(-0.222, -0.975, 0.975, -0.222, 2016.6, 1885.2);
	gradient = ctx.createRadialGradient(2239.7, -1525.4, 0.0, 2239.7, -1525.4, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(33.4, 41.2);
	ctx.bezierCurveTo(32.8, 40.8, 32.3, 40.7, 31.6, 40.9);
	ctx.bezierCurveTo(31.2, 41.1, 31.1, 40.4, 31.5, 40.3);
	ctx.bezierCurveTo(32.3, 40.0, 33.1, 40.1, 33.7, 40.6);
	ctx.bezierCurveTo(34.1, 40.9, 33.7, 41.5, 33.4, 41.2);
	ctx.lineTo(33.4, 41.2);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(36.9, 38.5);
	ctx.bezierCurveTo(36.5, 38.6, 36.3, 39.1, 36.4, 39.4);
	ctx.bezierCurveTo(36.5, 39.8, 36.9, 40.0, 37.3, 39.9);
	ctx.bezierCurveTo(37.8, 39.8, 38.0, 39.3, 37.9, 39.0);
	ctx.bezierCurveTo(37.7, 38.6, 37.3, 38.4, 36.9, 38.5);
	ctx.closePath();
	ctx.save();
	ctx.transform(-0.306, -0.952, 0.952, -0.306, 2170.9, 1781.5);
	gradient = ctx.createRadialGradient(2312.3, -1497.3, 0.0, 2312.3, -1497.3, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(35.3, 38.5);
	ctx.bezierCurveTo(35.9, 38.3, 36.7, 38.3, 37.2, 38.8);
	ctx.bezierCurveTo(37.5, 39.2, 37.0, 39.7, 36.8, 39.3);
	ctx.bezierCurveTo(36.4, 38.9, 35.9, 39.0, 35.5, 39.1);
	ctx.bezierCurveTo(35.0, 39.2, 34.8, 38.6, 35.3, 38.5);
	ctx.lineTo(35.3, 38.5);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(32.7, 38.1);
	ctx.bezierCurveTo(32.3, 38.2, 32.1, 38.6, 32.2, 39.0);
	ctx.bezierCurveTo(32.3, 39.4, 32.8, 39.6, 33.2, 39.5);
	ctx.bezierCurveTo(33.6, 39.3, 33.8, 38.9, 33.7, 38.5);
	ctx.bezierCurveTo(33.6, 38.2, 33.1, 38.0, 32.7, 38.1);
	ctx.closePath();
	ctx.save();
	ctx.transform(-0.306, -0.952, 0.952, -0.306, 2170.9, 1781.5);
	gradient = ctx.createRadialGradient(2314.0, -1501.1, 0.0, 2314.0, -1501.1, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(34.9, 39.2);
	ctx.bezierCurveTo(34.3, 38.8, 33.7, 38.8, 33.1, 39.1);
	ctx.bezierCurveTo(32.7, 39.2, 32.5, 38.6, 32.9, 38.4);
	ctx.bezierCurveTo(33.7, 38.1, 34.5, 38.2, 35.2, 38.6);
	ctx.bezierCurveTo(35.6, 38.8, 35.2, 39.4, 34.9, 39.2);
	ctx.lineTo(34.9, 39.2);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(38.2, 36.2);
	ctx.bezierCurveTo(37.8, 36.4, 37.6, 36.8, 37.7, 37.2);
	ctx.bezierCurveTo(37.9, 37.5, 38.3, 37.7, 38.7, 37.5);
	ctx.bezierCurveTo(39.1, 37.4, 39.3, 36.9, 39.2, 36.6);
	ctx.bezierCurveTo(39.0, 36.2, 38.6, 36.0, 38.2, 36.2);
	ctx.closePath();
	ctx.save();
	ctx.transform(-0.388, -0.922, 0.922, -0.388, 2314.9, 1664.6);
	gradient = ctx.createRadialGradient(2383.7, -1466.0, 0.0, 2383.7, -1466.0, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(36.5, 36.3);
	ctx.bezierCurveTo(37.2, 36.0, 37.9, 36.0, 38.5, 36.5);
	ctx.bezierCurveTo(38.8, 36.8, 38.4, 37.3, 38.1, 37.0);
	ctx.bezierCurveTo(37.7, 36.7, 37.2, 36.7, 36.8, 36.9);
	ctx.bezierCurveTo(36.4, 37.1, 36.1, 36.5, 36.5, 36.3);
	ctx.lineTo(36.5, 36.3);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(34.0, 36.2);
	ctx.bezierCurveTo(33.6, 36.3, 33.4, 36.8, 33.5, 37.1);
	ctx.bezierCurveTo(33.7, 37.5, 34.1, 37.7, 34.5, 37.5);
	ctx.bezierCurveTo(34.9, 37.3, 35.1, 36.9, 35.0, 36.5);
	ctx.bezierCurveTo(34.8, 36.2, 34.4, 36.0, 34.0, 36.2);
	ctx.closePath();
	ctx.save();
	ctx.transform(-0.388, -0.922, 0.922, -0.388, 2314.9, 1664.6);
	gradient = ctx.createRadialGradient(2385.4, -1469.9, 0.0, 2385.4, -1469.9, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(36.2, 37.1);
	ctx.bezierCurveTo(35.6, 36.7, 35.0, 36.7, 34.4, 37.1);
	ctx.bezierCurveTo(34.0, 37.3, 33.8, 36.7, 34.1, 36.5);
	ctx.bezierCurveTo(34.9, 36.0, 35.7, 36.1, 36.5, 36.4);
	ctx.bezierCurveTo(36.8, 36.6, 36.6, 37.3, 36.2, 37.1);
	ctx.lineTo(36.2, 37.1);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(39.2, 33.8);
	ctx.bezierCurveTo(38.8, 34.0, 38.7, 34.4, 38.9, 34.8);
	ctx.bezierCurveTo(39.0, 35.1, 39.5, 35.3, 39.9, 35.1);
	ctx.bezierCurveTo(40.3, 34.9, 40.4, 34.4, 40.2, 34.1);
	ctx.bezierCurveTo(40.0, 33.7, 39.6, 33.6, 39.2, 33.8);
	ctx.closePath();
	ctx.save();
	ctx.transform(-0.467, -0.884, 0.884, -0.467, 2448.5, 1536.7);
	gradient = ctx.createRadialGradient(2453.5, -1428.3, 0.0, 2453.5, -1428.3, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(37.6, 34.0);
	ctx.bezierCurveTo(38.2, 33.7, 39.0, 33.6, 39.6, 34.1);
	ctx.bezierCurveTo(39.9, 34.3, 39.5, 34.9, 39.2, 34.6);
	ctx.bezierCurveTo(38.8, 34.3, 38.3, 34.4, 37.9, 34.6);
	ctx.bezierCurveTo(37.5, 34.8, 37.2, 34.2, 37.6, 34.0);
	ctx.lineTo(37.6, 34.0);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(35.0, 34.1);
	ctx.bezierCurveTo(34.6, 34.3, 34.5, 34.8, 34.7, 35.1);
	ctx.bezierCurveTo(34.9, 35.5, 35.3, 35.6, 35.7, 35.4);
	ctx.bezierCurveTo(36.1, 35.2, 36.2, 34.7, 36.1, 34.4);
	ctx.bezierCurveTo(35.9, 34.0, 35.4, 33.9, 35.0, 34.1);
	ctx.closePath();
	ctx.save();
	ctx.transform(-0.467, -0.884, 0.884, -0.467, 2448.5, 1536.7);
	gradient = ctx.createRadialGradient(2455.2, -1432.1, 0.0, 2455.2, -1432.1, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(37.3, 34.8);
	ctx.bezierCurveTo(36.7, 34.6, 36.1, 34.6, 35.5, 35.0);
	ctx.bezierCurveTo(35.2, 35.2, 34.9, 34.6, 35.2, 34.4);
	ctx.bezierCurveTo(35.9, 33.9, 36.8, 33.9, 37.5, 34.2);
	ctx.bezierCurveTo(37.9, 34.3, 37.7, 35.0, 37.3, 34.8);
	ctx.lineTo(37.3, 34.8);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(40.0, 31.3);
	ctx.bezierCurveTo(39.7, 31.5, 39.6, 32.0, 39.8, 32.3);
	ctx.bezierCurveTo(40.0, 32.7, 40.5, 32.7, 40.8, 32.5);
	ctx.bezierCurveTo(41.2, 32.3, 41.3, 31.8, 41.1, 31.5);
	ctx.bezierCurveTo(40.9, 31.1, 40.4, 31.1, 40.0, 31.3);
	ctx.closePath();
	ctx.save();
	ctx.transform(-0.542, -0.840, 0.840, -0.542, 2570.4, 1395.5);
	gradient = ctx.createRadialGradient(2517.7, -1386.2, 0.0, 2517.7, -1386.2, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(38.4, 31.7);
	ctx.bezierCurveTo(39.0, 31.3, 39.8, 31.1, 40.4, 31.5);
	ctx.bezierCurveTo(40.8, 31.8, 40.5, 32.4, 40.1, 32.1);
	ctx.bezierCurveTo(39.7, 31.8, 39.2, 32.0, 38.8, 32.2);
	ctx.bezierCurveTo(38.4, 32.5, 38.1, 31.9, 38.4, 31.7);
	ctx.lineTo(38.4, 31.7);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(35.9, 32.0);
	ctx.bezierCurveTo(35.5, 32.2, 35.4, 32.7, 35.6, 33.0);
	ctx.bezierCurveTo(35.9, 33.3, 36.3, 33.4, 36.7, 33.2);
	ctx.bezierCurveTo(37.0, 33.0, 37.2, 32.5, 36.9, 32.2);
	ctx.bezierCurveTo(36.7, 31.8, 36.3, 31.7, 35.9, 32.0);
	ctx.closePath();
	ctx.save();
	ctx.transform(-0.542, -0.840, 0.840, -0.542, 2570.4, 1395.5);
	gradient = ctx.createRadialGradient(2519.3, -1390.0, 0.0, 2519.3, -1390.0, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(38.3, 32.5);
	ctx.bezierCurveTo(37.6, 32.3, 37.0, 32.4, 36.5, 32.8);
	ctx.bezierCurveTo(36.2, 33.1, 35.8, 32.5, 36.1, 32.2);
	ctx.bezierCurveTo(36.8, 31.7, 37.6, 31.6, 38.4, 31.8);
	ctx.bezierCurveTo(38.8, 31.9, 38.7, 32.6, 38.3, 32.5);
	ctx.lineTo(38.3, 32.5);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(40.7, 28.7);
	ctx.bezierCurveTo(40.3, 29.0, 40.2, 29.5, 40.5, 29.8);
	ctx.bezierCurveTo(40.7, 30.1, 41.2, 30.1, 41.5, 29.9);
	ctx.bezierCurveTo(41.9, 29.6, 42.0, 29.1, 41.7, 28.8);
	ctx.bezierCurveTo(41.5, 28.5, 41.0, 28.5, 40.7, 28.7);
	ctx.closePath();
	ctx.save();
	ctx.transform(-0.613, -0.790, 0.790, -0.613, 2679.5, 1246.1);
	gradient = ctx.createRadialGradient(2579.5, -1337.1, 0.0, 2579.5, -1337.1, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(39.1, 29.3);
	ctx.bezierCurveTo(39.6, 28.8, 40.4, 28.6, 41.0, 28.9);
	ctx.bezierCurveTo(41.4, 29.2, 41.2, 29.8, 40.8, 29.6);
	ctx.bezierCurveTo(40.3, 29.3, 39.9, 29.5, 39.5, 29.8);
	ctx.bezierCurveTo(39.2, 30.1, 38.7, 29.5, 39.1, 29.3);
	ctx.lineTo(39.1, 29.3);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(36.6, 29.8);
	ctx.bezierCurveTo(36.2, 30.0, 36.2, 30.5, 36.4, 30.8);
	ctx.bezierCurveTo(36.7, 31.1, 37.1, 31.2, 37.5, 30.9);
	ctx.bezierCurveTo(37.8, 30.7, 37.9, 30.2, 37.6, 29.9);
	ctx.bezierCurveTo(37.4, 29.6, 36.9, 29.5, 36.6, 29.8);
	ctx.closePath();
	ctx.save();
	ctx.transform(-0.613, -0.790, 0.790, -0.613, 2679.5, 1246.1);
	gradient = ctx.createRadialGradient(2581.2, -1340.9, 0.0, 2581.2, -1340.9, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(39.0, 30.1);
	ctx.bezierCurveTo(38.3, 29.9, 37.7, 30.1, 37.3, 30.5);
	ctx.bezierCurveTo(36.9, 30.8, 36.5, 30.3, 36.8, 30.0);
	ctx.bezierCurveTo(37.4, 29.4, 38.3, 29.2, 39.1, 29.4);
	ctx.bezierCurveTo(39.5, 29.5, 39.4, 30.2, 39.0, 30.1);
	ctx.lineTo(39.0, 30.1);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(41.0, 26.1);
	ctx.bezierCurveTo(40.7, 26.4, 40.7, 26.9, 41.0, 27.2);
	ctx.bezierCurveTo(41.2, 27.5, 41.7, 27.5, 42.0, 27.2);
	ctx.bezierCurveTo(42.3, 26.9, 42.4, 26.4, 42.1, 26.1);
	ctx.bezierCurveTo(41.8, 25.8, 41.4, 25.8, 41.0, 26.1);
	ctx.closePath();
	ctx.save();
	ctx.transform(-0.680, -0.733, 0.733, -0.680, 2775.3, 1087.3);
	gradient = ctx.createRadialGradient(2636.7, -1283.2, 0.0, 2636.7, -1283.2, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(39.5, 26.8);
	ctx.bezierCurveTo(40.0, 26.3, 40.7, 26.0, 41.4, 26.3);
	ctx.bezierCurveTo(41.8, 26.5, 41.6, 27.1, 41.2, 27.0);
	ctx.bezierCurveTo(40.8, 26.7, 40.3, 27.0, 40.0, 27.3);
	ctx.bezierCurveTo(39.7, 27.6, 39.2, 27.1, 39.5, 26.8);
	ctx.lineTo(39.5, 26.8);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(37.1, 27.5);
	ctx.bezierCurveTo(36.8, 27.8, 36.7, 28.3, 37.0, 28.6);
	ctx.bezierCurveTo(37.3, 28.9, 37.7, 28.9, 38.1, 28.6);
	ctx.bezierCurveTo(38.4, 28.3, 38.4, 27.8, 38.1, 27.5);
	ctx.bezierCurveTo(37.9, 27.2, 37.4, 27.2, 37.1, 27.5);
	ctx.closePath();
	ctx.save();
	ctx.transform(-0.680, -0.733, 0.733, -0.680, 2775.3, 1087.3);
	gradient = ctx.createRadialGradient(2638.4, -1287.0, 0.0, 2638.4, -1287.0, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(39.5, 27.6);
	ctx.bezierCurveTo(38.8, 27.5, 38.3, 27.7, 37.8, 28.2);
	ctx.bezierCurveTo(37.5, 28.6, 37.1, 28.1, 37.4, 27.7);
	ctx.bezierCurveTo(37.9, 27.1, 38.7, 26.8, 39.5, 26.9);
	ctx.bezierCurveTo(39.9, 27.0, 39.9, 27.7, 39.5, 27.6);
	ctx.lineTo(39.5, 27.6);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(41.2, 23.5);
	ctx.bezierCurveTo(40.9, 23.8, 40.9, 24.3, 41.2, 24.6);
	ctx.bezierCurveTo(41.5, 24.8, 42.0, 24.8, 42.3, 24.5);
	ctx.bezierCurveTo(42.6, 24.2, 42.6, 23.7, 42.3, 23.4);
	ctx.bezierCurveTo(42.0, 23.2, 41.5, 23.2, 41.2, 23.5);
	ctx.closePath();
	ctx.save();
	ctx.transform(-0.741, -0.671, 0.671, -0.741, 2856.5, 920.1);
	gradient = ctx.createRadialGradient(2687.9, -1225.0, 0.0, 2687.9, -1225.0, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(39.7, 24.3);
	ctx.bezierCurveTo(40.2, 23.8, 40.9, 23.4, 41.6, 23.7);
	ctx.bezierCurveTo(42.0, 23.8, 41.9, 24.4, 41.5, 24.3);
	ctx.bezierCurveTo(41.0, 24.1, 40.6, 24.4, 40.2, 24.8);
	ctx.bezierCurveTo(39.9, 25.1, 39.4, 24.6, 39.7, 24.3);
	ctx.lineTo(39.7, 24.3);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(37.4, 25.2);
	ctx.bezierCurveTo(37.1, 25.6, 37.1, 26.0, 37.4, 26.3);
	ctx.bezierCurveTo(37.7, 26.6, 38.2, 26.5, 38.4, 26.2);
	ctx.bezierCurveTo(38.7, 25.9, 38.7, 25.4, 38.4, 25.2);
	ctx.bezierCurveTo(38.1, 24.9, 37.7, 24.9, 37.4, 25.2);
	ctx.closePath();
	ctx.save();
	ctx.transform(-0.741, -0.671, 0.671, -0.741, 2856.5, 920.1);
	gradient = ctx.createRadialGradient(2689.6, -1228.8, 0.0, 2689.6, -1228.8, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(39.8, 25.1);
	ctx.bezierCurveTo(39.1, 25.1, 38.6, 25.3, 38.2, 25.9);
	ctx.bezierCurveTo(37.9, 26.2, 37.4, 25.8, 37.7, 25.4);
	ctx.bezierCurveTo(38.2, 24.8, 38.9, 24.4, 39.8, 24.4);
	ctx.bezierCurveTo(40.2, 24.5, 40.2, 25.1, 39.8, 25.1);
	ctx.lineTo(39.8, 25.1);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(41.1, 20.9);
	ctx.bezierCurveTo(40.9, 21.2, 40.9, 21.7, 41.2, 21.9);
	ctx.bezierCurveTo(41.5, 22.2, 42.0, 22.1, 42.3, 21.8);
	ctx.bezierCurveTo(42.5, 21.4, 42.5, 20.9, 42.2, 20.7);
	ctx.bezierCurveTo(41.9, 20.5, 41.4, 20.5, 41.1, 20.9);
	ctx.closePath();
	ctx.save();
	ctx.transform(-0.797, -0.604, 0.604, -0.797, 2923.2, 747.4);
	gradient = ctx.createRadialGradient(2735.0, -1161.7, 0.0, 2735.0, -1161.7, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(39.7, 21.8);
	ctx.bezierCurveTo(40.2, 21.2, 40.8, 20.8, 41.6, 21.0);
	ctx.bezierCurveTo(42.0, 21.1, 41.9, 21.8, 41.5, 21.7);
	ctx.bezierCurveTo(41.0, 21.5, 40.6, 21.8, 40.3, 22.2);
	ctx.bezierCurveTo(40.0, 22.5, 39.5, 22.1, 39.7, 21.8);
	ctx.lineTo(39.7, 21.8);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(37.5, 22.9);
	ctx.bezierCurveTo(37.2, 23.3, 37.3, 23.8, 37.6, 24.0);
	ctx.bezierCurveTo(37.9, 24.2, 38.4, 24.2, 38.6, 23.8);
	ctx.bezierCurveTo(38.9, 23.5, 38.8, 23.0, 38.5, 22.8);
	ctx.bezierCurveTo(38.2, 22.5, 37.7, 22.6, 37.5, 22.9);
	ctx.closePath();
	ctx.save();
	ctx.transform(-0.797, -0.604, 0.604, -0.797, 2923.2, 747.4);
	gradient = ctx.createRadialGradient(2736.6, -1165.6, 0.0, 2736.6, -1165.6, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(39.9, 22.6);
	ctx.bezierCurveTo(39.2, 22.6, 38.7, 22.9, 38.3, 23.5);
	ctx.bezierCurveTo(38.1, 23.9, 37.6, 23.5, 37.8, 23.1);
	ctx.bezierCurveTo(38.2, 22.4, 38.9, 22.0, 39.8, 21.9);
	ctx.bezierCurveTo(40.2, 21.9, 40.3, 22.6, 39.9, 22.6);
	ctx.lineTo(39.9, 22.6);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(40.8, 18.3);
	ctx.bezierCurveTo(40.6, 18.6, 40.7, 19.1, 41.0, 19.3);
	ctx.bezierCurveTo(41.4, 19.5, 41.8, 19.4, 42.0, 19.0);
	ctx.bezierCurveTo(42.3, 18.7, 42.2, 18.2, 41.9, 18.0);
	ctx.bezierCurveTo(41.5, 17.8, 41.1, 17.9, 40.8, 18.3);
	ctx.closePath();
	ctx.save();
	ctx.transform(-0.847, -0.532, 0.532, -0.847, 2974.8, 569.3);
	gradient = ctx.createRadialGradient(2776.5, -1095.0, 0.0, 2776.5, -1095.0, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(39.5, 19.3);
	ctx.bezierCurveTo(39.9, 18.7, 40.5, 18.2, 41.3, 18.3);
	ctx.bezierCurveTo(41.7, 18.4, 41.7, 19.1, 41.2, 19.0);
	ctx.bezierCurveTo(40.7, 18.9, 40.4, 19.2, 40.1, 19.7);
	ctx.bezierCurveTo(39.9, 20.0, 39.3, 19.7, 39.5, 19.3);
	ctx.lineTo(39.5, 19.3);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(37.4, 20.6);
	ctx.bezierCurveTo(37.1, 21.0, 37.2, 21.5, 37.6, 21.7);
	ctx.bezierCurveTo(37.9, 21.9, 38.4, 21.8, 38.6, 21.4);
	ctx.bezierCurveTo(38.8, 21.0, 38.7, 20.6, 38.4, 20.4);
	ctx.bezierCurveTo(38.1, 20.2, 37.6, 20.3, 37.4, 20.6);
	ctx.closePath();
	ctx.save();
	ctx.transform(-0.847, -0.532, 0.532, -0.847, 2974.8, 569.3);
	gradient = ctx.createRadialGradient(2778.2, -1098.9, 0.0, 2778.2, -1098.9, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(39.7, 20.1);
	ctx.bezierCurveTo(39.0, 20.2, 38.5, 20.5, 38.3, 21.1);
	ctx.bezierCurveTo(38.1, 21.5, 37.5, 21.2, 37.7, 20.8);
	ctx.bezierCurveTo(38.0, 20.0, 38.7, 19.6, 39.6, 19.4);
	ctx.bezierCurveTo(40.0, 19.4, 40.1, 20.0, 39.7, 20.1);
	ctx.lineTo(39.7, 20.1);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(53.6, 50.9);
	ctx.bezierCurveTo(53.9, 51.2, 53.9, 51.6, 53.7, 51.9);
	ctx.bezierCurveTo(53.4, 52.2, 52.9, 52.2, 52.6, 51.9);
	ctx.bezierCurveTo(52.3, 51.6, 52.2, 51.2, 52.5, 50.9);
	ctx.bezierCurveTo(52.8, 50.6, 53.2, 50.6, 53.6, 50.9);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.669, -0.743, -0.743, -0.669, -46.7, 1082.7);
	gradient = ctx.createRadialGradient(833.2, 616.0, 0.0, 833.2, 616.0, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(55.1, 51.5);
	ctx.bezierCurveTo(54.5, 51.0, 53.8, 50.7, 53.2, 51.0);
	ctx.bezierCurveTo(52.8, 51.2, 53.0, 51.9, 53.4, 51.7);
	ctx.bezierCurveTo(53.8, 51.5, 54.3, 51.7, 54.6, 52.0);
	ctx.bezierCurveTo(55.0, 52.3, 55.4, 51.8, 55.1, 51.5);
	ctx.lineTo(55.1, 51.5);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(57.5, 52.2);
	ctx.bezierCurveTo(57.9, 52.5, 57.9, 53.0, 57.6, 53.3);
	ctx.bezierCurveTo(57.4, 53.6, 56.9, 53.6, 56.6, 53.3);
	ctx.bezierCurveTo(56.2, 53.0, 56.2, 52.5, 56.5, 52.2);
	ctx.bezierCurveTo(56.7, 51.9, 57.2, 51.9, 57.5, 52.2);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.669, -0.743, -0.743, -0.669, -46.7, 1082.7);
	gradient = ctx.createRadialGradient(834.9, 612.2, 0.0, 834.9, 612.2, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(55.1, 52.3);
	ctx.bezierCurveTo(55.8, 52.2, 56.4, 52.4, 56.8, 52.9);
	ctx.bezierCurveTo(57.1, 53.2, 57.5, 52.7, 57.3, 52.4);
	ctx.bezierCurveTo(56.7, 51.8, 55.9, 51.5, 55.1, 51.6);
	ctx.bezierCurveTo(54.7, 51.7, 54.7, 52.4, 55.1, 52.3);
	ctx.lineTo(55.1, 52.3);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(53.4, 47.5);
	ctx.bezierCurveTo(53.7, 47.9, 53.7, 48.3, 53.4, 48.6);
	ctx.bezierCurveTo(53.1, 48.9, 52.7, 48.9, 52.4, 48.6);
	ctx.bezierCurveTo(52.1, 48.2, 52.1, 47.8, 52.3, 47.5);
	ctx.bezierCurveTo(52.6, 47.2, 53.1, 47.2, 53.4, 47.5);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.719, -0.695, -0.695, -0.719, -100.6, 978.5);
	gradient = ctx.createRadialGradient(756.8, 562.6, 0.0, 756.8, 562.6, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(54.9, 48.3);
	ctx.bezierCurveTo(54.4, 47.8, 53.7, 47.4, 53.0, 47.7);
	ctx.bezierCurveTo(52.6, 47.8, 52.8, 48.5, 53.2, 48.3);
	ctx.bezierCurveTo(53.7, 48.2, 54.1, 48.4, 54.4, 48.8);
	ctx.bezierCurveTo(54.7, 49.1, 55.2, 48.6, 54.9, 48.3);
	ctx.lineTo(54.9, 48.3);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(57.3, 49.2);
	ctx.bezierCurveTo(57.6, 49.5, 57.6, 49.9, 57.3, 50.2);
	ctx.bezierCurveTo(57.0, 50.5, 56.5, 50.5, 56.2, 50.2);
	ctx.bezierCurveTo(55.9, 49.8, 55.9, 49.4, 56.2, 49.1);
	ctx.bezierCurveTo(56.5, 48.8, 57.0, 48.8, 57.3, 49.2);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.719, -0.695, -0.695, -0.719, -100.6, 978.5);
	gradient = ctx.createRadialGradient(758.4, 558.8, 0.0, 758.4, 558.8, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(54.9, 49.1);
	ctx.bezierCurveTo(55.5, 49.1, 56.1, 49.3, 56.5, 49.8);
	ctx.bezierCurveTo(56.8, 50.2, 57.3, 49.7, 57.0, 49.4);
	ctx.bezierCurveTo(56.5, 48.7, 55.7, 48.4, 54.9, 48.4);
	ctx.bezierCurveTo(54.5, 48.5, 54.4, 49.1, 54.9, 49.1);
	ctx.lineTo(54.9, 49.1);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(53.6, 44.7);
	ctx.bezierCurveTo(53.8, 45.1, 53.8, 45.5, 53.5, 45.8);
	ctx.bezierCurveTo(53.2, 46.0, 52.7, 46.0, 52.5, 45.6);
	ctx.bezierCurveTo(52.2, 45.3, 52.2, 44.8, 52.5, 44.6);
	ctx.bezierCurveTo(52.8, 44.3, 53.3, 44.4, 53.6, 44.7);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.766, -0.643, -0.643, -0.766, -148.0, 871.7);
	gradient = ctx.createRadialGradient(685.3, 503.9, 0.0, 685.3, 503.9, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(55.0, 45.6);
	ctx.bezierCurveTo(54.5, 45.0, 53.9, 44.6, 53.1, 44.8);
	ctx.bezierCurveTo(52.7, 45.0, 52.8, 45.6, 53.3, 45.5);
	ctx.bezierCurveTo(53.8, 45.4, 54.1, 45.6, 54.5, 46.0);
	ctx.bezierCurveTo(54.7, 46.3, 55.3, 45.9, 55.0, 45.6);
	ctx.lineTo(55.0, 45.6);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(57.3, 46.6);
	ctx.bezierCurveTo(57.6, 46.9, 57.6, 47.4, 57.3, 47.7);
	ctx.bezierCurveTo(57.0, 47.9, 56.5, 47.9, 56.2, 47.5);
	ctx.bezierCurveTo(55.9, 47.2, 56.0, 46.7, 56.3, 46.5);
	ctx.bezierCurveTo(56.6, 46.2, 57.0, 46.3, 57.3, 46.6);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.766, -0.643, -0.643, -0.766, -148.0, 871.7);
	gradient = ctx.createRadialGradient(687.0, 500.0, 0.0, 687.0, 500.0, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(54.9, 46.4);
	ctx.bezierCurveTo(55.6, 46.4, 56.1, 46.6, 56.5, 47.2);
	ctx.bezierCurveTo(56.7, 47.6, 57.2, 47.1, 57.0, 46.8);
	ctx.bezierCurveTo(56.6, 46.1, 55.8, 45.7, 55.0, 45.7);
	ctx.bezierCurveTo(54.5, 45.7, 54.5, 46.4, 54.9, 46.4);
	ctx.lineTo(54.9, 46.4);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(53.9, 42.0);
	ctx.bezierCurveTo(54.2, 42.4, 54.1, 42.9, 53.8, 43.1);
	ctx.bezierCurveTo(53.5, 43.3, 53.0, 43.2, 52.7, 42.9);
	ctx.bezierCurveTo(52.5, 42.5, 52.5, 42.1, 52.9, 41.8);
	ctx.bezierCurveTo(53.2, 41.6, 53.7, 41.7, 53.9, 42.0);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.809, -0.588, -0.588, -0.809, -187.4, 761.8);
	gradient = ctx.createRadialGradient(617.6, 440.5, 0.0, 617.6, 440.5, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(55.3, 43.0);
	ctx.bezierCurveTo(54.8, 42.4, 54.2, 42.0, 53.5, 42.1);
	ctx.bezierCurveTo(53.1, 42.2, 53.1, 42.9, 53.5, 42.8);
	ctx.bezierCurveTo(54.1, 42.7, 54.4, 43.0, 54.7, 43.4);
	ctx.bezierCurveTo(55.0, 43.7, 55.5, 43.3, 55.3, 43.0);
	ctx.lineTo(55.3, 43.0);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(57.5, 44.2);
	ctx.bezierCurveTo(57.8, 44.5, 57.7, 45.0, 57.4, 45.2);
	ctx.bezierCurveTo(57.1, 45.5, 56.6, 45.4, 56.4, 45.0);
	ctx.bezierCurveTo(56.1, 44.7, 56.2, 44.2, 56.5, 44.0);
	ctx.bezierCurveTo(56.8, 43.7, 57.3, 43.8, 57.5, 44.2);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.809, -0.588, -0.588, -0.809, -187.4, 761.8);
	gradient = ctx.createRadialGradient(619.3, 436.6, 0.0, 619.3, 436.6, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(55.1, 43.8);
	ctx.bezierCurveTo(55.8, 43.8, 56.3, 44.1, 56.7, 44.7);
	ctx.bezierCurveTo(56.9, 45.1, 57.4, 44.7, 57.2, 44.3);
	ctx.bezierCurveTo(56.8, 43.6, 56.1, 43.2, 55.2, 43.1);
	ctx.bezierCurveTo(54.8, 43.1, 54.7, 43.7, 55.1, 43.8);
	ctx.lineTo(55.1, 43.8);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(54.7, 39.3);
	ctx.bezierCurveTo(54.9, 39.7, 54.8, 40.1, 54.5, 40.4);
	ctx.bezierCurveTo(54.1, 40.6, 53.7, 40.4, 53.4, 40.1);
	ctx.bezierCurveTo(53.2, 39.7, 53.3, 39.2, 53.6, 39.0);
	ctx.bezierCurveTo(54.0, 38.8, 54.4, 38.9, 54.7, 39.3);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.848, -0.530, -0.530, -0.848, -219.8, 649.3);
	gradient = ctx.createRadialGradient(555.3, 371.9, 0.0, 555.3, 371.9, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(55.9, 40.3);
	ctx.bezierCurveTo(55.6, 39.7, 55.0, 39.3, 54.2, 39.4);
	ctx.bezierCurveTo(53.8, 39.4, 53.8, 40.1, 54.2, 40.0);
	ctx.bezierCurveTo(54.8, 40.0, 55.1, 40.3, 55.4, 40.7);
	ctx.bezierCurveTo(55.6, 41.1, 56.2, 40.7, 55.9, 40.3);
	ctx.lineTo(55.9, 40.3);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(58.1, 41.7);
	ctx.bezierCurveTo(58.3, 42.1, 58.2, 42.5, 57.9, 42.7);
	ctx.bezierCurveTo(57.6, 42.9, 57.1, 42.8, 56.9, 42.4);
	ctx.bezierCurveTo(56.7, 42.1, 56.7, 41.6, 57.1, 41.4);
	ctx.bezierCurveTo(57.4, 41.2, 57.9, 41.3, 58.1, 41.7);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.848, -0.530, -0.530, -0.848, -219.8, 649.3);
	gradient = ctx.createRadialGradient(556.9, 368.1, 0.0, 556.9, 368.1, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(55.8, 41.1);
	ctx.bezierCurveTo(56.4, 41.2, 56.9, 41.6, 57.2, 42.2);
	ctx.bezierCurveTo(57.4, 42.6, 58.0, 42.2, 57.8, 41.8);
	ctx.bezierCurveTo(57.4, 41.1, 56.7, 40.6, 55.9, 40.5);
	ctx.bezierCurveTo(55.5, 40.4, 55.3, 41.1, 55.8, 41.1);
	ctx.lineTo(55.8, 41.1);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(55.6, 36.6);
	ctx.bezierCurveTo(55.8, 37.0, 55.7, 37.5, 55.4, 37.7);
	ctx.bezierCurveTo(55.0, 37.9, 54.6, 37.7, 54.4, 37.3);
	ctx.bezierCurveTo(54.2, 36.9, 54.3, 36.5, 54.6, 36.3);
	ctx.bezierCurveTo(55.0, 36.1, 55.4, 36.3, 55.6, 36.6);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.883, -0.469, -0.469, -0.883, -243.3, 534.4);
	gradient = ctx.createRadialGradient(496.9, 299.2, 0.0, 496.9, 299.2, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(56.9, 37.8);
	ctx.bezierCurveTo(56.5, 37.1, 56.0, 36.6, 55.2, 36.7);
	ctx.bezierCurveTo(54.8, 36.7, 54.7, 37.4, 55.2, 37.3);
	ctx.bezierCurveTo(55.7, 37.3, 56.0, 37.6, 56.3, 38.1);
	ctx.bezierCurveTo(56.5, 38.4, 57.1, 38.1, 56.9, 37.8);
	ctx.lineTo(56.9, 37.8);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(58.9, 39.2);
	ctx.bezierCurveTo(59.1, 39.6, 59.0, 40.1, 58.6, 40.3);
	ctx.bezierCurveTo(58.3, 40.5, 57.8, 40.3, 57.6, 39.9);
	ctx.bezierCurveTo(57.4, 39.5, 57.6, 39.1, 57.9, 38.9);
	ctx.bezierCurveTo(58.3, 38.7, 58.7, 38.9, 58.9, 39.2);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.883, -0.469, -0.469, -0.883, -243.3, 534.4);
	gradient = ctx.createRadialGradient(498.6, 295.3, 0.0, 498.6, 295.3, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(56.6, 38.5);
	ctx.bezierCurveTo(57.3, 38.7, 57.7, 39.0, 58.0, 39.7);
	ctx.bezierCurveTo(58.2, 40.1, 58.7, 39.8, 58.6, 39.4);
	ctx.bezierCurveTo(58.3, 38.6, 57.6, 38.1, 56.8, 37.9);
	ctx.bezierCurveTo(56.4, 37.8, 56.2, 38.4, 56.6, 38.5);
	ctx.lineTo(56.6, 38.5);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(56.6, 34.1);
	ctx.bezierCurveTo(56.8, 34.5, 56.6, 35.0, 56.2, 35.1);
	ctx.bezierCurveTo(55.9, 35.3, 55.4, 35.1, 55.3, 34.7);
	ctx.bezierCurveTo(55.1, 34.3, 55.2, 33.9, 55.6, 33.7);
	ctx.bezierCurveTo(56.0, 33.6, 56.4, 33.7, 56.6, 34.1);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.913, -0.407, -0.407, -0.913, -259.6, 419.1);
	gradient = ctx.createRadialGradient(444.8, 223.1, 0.0, 444.8, 223.1, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(57.7, 35.3);
	ctx.bezierCurveTo(57.4, 34.7, 56.9, 34.1, 56.1, 34.1);
	ctx.bezierCurveTo(55.7, 34.1, 55.6, 34.8, 56.1, 34.8);
	ctx.bezierCurveTo(56.6, 34.8, 56.9, 35.2, 57.1, 35.6);
	ctx.bezierCurveTo(57.3, 36.0, 57.9, 35.7, 57.7, 35.3);
	ctx.lineTo(57.7, 35.3);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(59.7, 37.0);
	ctx.bezierCurveTo(59.8, 37.4, 59.7, 37.8, 59.3, 38.0);
	ctx.bezierCurveTo(59.0, 38.1, 58.5, 38.0, 58.3, 37.6);
	ctx.bezierCurveTo(58.2, 37.2, 58.3, 36.7, 58.7, 36.6);
	ctx.bezierCurveTo(59.1, 36.4, 59.5, 36.6, 59.7, 37.0);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.913, -0.407, -0.407, -0.913, -259.6, 419.1);
	gradient = ctx.createRadialGradient(446.4, 219.2, 0.0, 446.4, 219.2, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(57.4, 36.1);
	ctx.bezierCurveTo(58.1, 36.3, 58.5, 36.7, 58.7, 37.3);
	ctx.bezierCurveTo(58.8, 37.7, 59.5, 37.5, 59.3, 37.1);
	ctx.bezierCurveTo(59.1, 36.3, 58.5, 35.7, 57.7, 35.5);
	ctx.bezierCurveTo(57.2, 35.4, 57.0, 36.0, 57.4, 36.1);
	ctx.lineTo(57.4, 36.1);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(58.2, 31.7);
	ctx.bezierCurveTo(58.4, 32.1, 58.2, 32.6, 57.8, 32.7);
	ctx.bezierCurveTo(57.5, 32.8, 57.0, 32.6, 56.9, 32.2);
	ctx.bezierCurveTo(56.7, 31.8, 56.9, 31.4, 57.3, 31.2);
	ctx.bezierCurveTo(57.7, 31.1, 58.1, 31.3, 58.2, 31.7);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.940, -0.342, -0.342, -0.940, -266.8, 302.7);
	gradient = ctx.createRadialGradient(397.4, 143.4, 0.0, 397.4, 143.4, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(59.3, 33.0);
	ctx.bezierCurveTo(59.0, 32.3, 58.6, 31.7, 57.8, 31.7);
	ctx.bezierCurveTo(57.4, 31.7, 57.3, 32.3, 57.7, 32.4);
	ctx.bezierCurveTo(58.2, 32.4, 58.5, 32.8, 58.7, 33.2);
	ctx.bezierCurveTo(58.8, 33.6, 59.4, 33.4, 59.3, 33.0);
	ctx.lineTo(59.3, 33.0);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(61.1, 34.8);
	ctx.bezierCurveTo(61.3, 35.2, 61.1, 35.6, 60.7, 35.7);
	ctx.bezierCurveTo(60.3, 35.9, 59.9, 35.7, 59.8, 35.3);
	ctx.bezierCurveTo(59.6, 34.9, 59.8, 34.4, 60.2, 34.3);
	ctx.bezierCurveTo(60.6, 34.1, 61.0, 34.4, 61.1, 34.8);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.940, -0.342, -0.342, -0.940, -266.8, 302.7);
	gradient = ctx.createRadialGradient(399.1, 139.6, 0.0, 399.1, 139.6, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(58.9, 33.7);
	ctx.bezierCurveTo(59.6, 34.0, 60.0, 34.4, 60.2, 35.1);
	ctx.bezierCurveTo(60.3, 35.5, 60.9, 35.2, 60.8, 34.8);
	ctx.bezierCurveTo(60.6, 34.0, 60.0, 33.4, 59.2, 33.1);
	ctx.bezierCurveTo(58.8, 33.0, 58.5, 33.6, 58.9, 33.7);
	ctx.lineTo(58.9, 33.7);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(59.9, 29.4);
	ctx.bezierCurveTo(60.0, 29.8, 59.8, 30.2, 59.4, 30.4);
	ctx.bezierCurveTo(59.0, 30.5, 58.6, 30.2, 58.5, 29.8);
	ctx.bezierCurveTo(58.3, 29.4, 58.6, 29.0, 58.9, 28.8);
	ctx.bezierCurveTo(59.3, 28.7, 59.7, 29.0, 59.9, 29.4);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.961, -0.276, -0.276, -0.961, -266.3, 186.1);
	gradient = ctx.createRadialGradient(356.0, 60.7, 0.0, 356.0, 60.7, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(60.8, 30.8);
	ctx.bezierCurveTo(60.6, 30.1, 60.2, 29.4, 59.4, 29.3);
	ctx.bezierCurveTo(59.0, 29.3, 58.8, 29.9, 59.3, 30.0);
	ctx.bezierCurveTo(59.8, 30.1, 60.0, 30.5, 60.2, 30.9);
	ctx.bezierCurveTo(60.3, 31.3, 60.9, 31.2, 60.8, 30.8);
	ctx.lineTo(60.8, 30.8);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(62.5, 32.6);
	ctx.bezierCurveTo(62.6, 33.1, 62.4, 33.5, 62.0, 33.6);
	ctx.bezierCurveTo(61.7, 33.7, 61.3, 33.4, 61.1, 33.0);
	ctx.bezierCurveTo(61.0, 32.6, 61.2, 32.2, 61.6, 32.1);
	ctx.bezierCurveTo(62.0, 32.0, 62.4, 32.2, 62.5, 32.6);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.961, -0.276, -0.276, -0.961, -266.3, 186.1);
	gradient = ctx.createRadialGradient(357.7, 56.9, 0.0, 357.7, 56.9, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(60.4, 31.5);
	ctx.bezierCurveTo(61.0, 31.7, 61.4, 32.2, 61.5, 32.9);
	ctx.bezierCurveTo(61.6, 33.3, 62.2, 33.1, 62.2, 32.7);
	ctx.bezierCurveTo(62.0, 31.9, 61.5, 31.2, 60.7, 30.9);
	ctx.bezierCurveTo(60.3, 30.7, 60.0, 31.3, 60.4, 31.5);
	ctx.lineTo(60.4, 31.5);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(61.7, 27.3);
	ctx.bezierCurveTo(61.8, 27.8, 61.5, 28.2, 61.1, 28.3);
	ctx.bezierCurveTo(60.7, 28.3, 60.4, 28.1, 60.3, 27.6);
	ctx.bezierCurveTo(60.2, 27.2, 60.4, 26.8, 60.8, 26.7);
	ctx.bezierCurveTo(61.2, 26.6, 61.6, 26.9, 61.7, 27.3);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.978, -0.208, -0.208, -0.978, -258.2, 68.6);
	gradient = ctx.createRadialGradient(320.8, -26.2, 0.0, 320.8, -26.2, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(62.5, 28.8);
	ctx.bezierCurveTo(62.4, 28.1, 62.0, 27.4, 61.2, 27.3);
	ctx.bezierCurveTo(60.8, 27.2, 60.6, 27.8, 61.0, 27.9);
	ctx.bezierCurveTo(61.6, 28.0, 61.8, 28.4, 61.9, 28.9);
	ctx.bezierCurveTo(62.0, 29.3, 62.6, 29.2, 62.5, 28.8);
	ctx.lineTo(62.5, 28.8);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(64.1, 30.8);
	ctx.bezierCurveTo(64.2, 31.2, 64.0, 31.6, 63.6, 31.7);
	ctx.bezierCurveTo(63.2, 31.8, 62.8, 31.5, 62.7, 31.1);
	ctx.bezierCurveTo(62.6, 30.6, 62.9, 30.2, 63.2, 30.1);
	ctx.bezierCurveTo(63.6, 30.1, 64.0, 30.3, 64.1, 30.8);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.978, -0.208, -0.208, -0.978, -258.2, 68.6);
	gradient = ctx.createRadialGradient(322.4, -30.0, 0.0, 322.4, -30.0, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(62.1, 29.4);
	ctx.bezierCurveTo(62.7, 29.8, 63.0, 30.2, 63.1, 30.9);
	ctx.bezierCurveTo(63.1, 31.3, 63.8, 31.2, 63.8, 30.8);
	ctx.bezierCurveTo(63.7, 29.9, 63.2, 29.3, 62.5, 28.9);
	ctx.bezierCurveTo(62.1, 28.7, 61.7, 29.2, 62.1, 29.4);
	ctx.lineTo(62.1, 29.4);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(63.9, 25.7);
	ctx.bezierCurveTo(63.9, 26.2, 63.7, 26.6, 63.3, 26.6);
	ctx.bezierCurveTo(62.9, 26.7, 62.5, 26.4, 62.4, 25.9);
	ctx.bezierCurveTo(62.4, 25.5, 62.7, 25.1, 63.0, 25.1);
	ctx.bezierCurveTo(63.4, 25.0, 63.8, 25.3, 63.9, 25.7);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.990, -0.139, -0.139, -0.990, -240.6, -46.9);
	gradient = ctx.createRadialGradient(290.7, -114.3, 0.0, 290.7, -114.3, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(64.6, 27.2);
	ctx.bezierCurveTo(64.5, 26.5, 64.2, 25.8, 63.5, 25.6);
	ctx.bezierCurveTo(63.0, 25.5, 62.8, 26.1, 63.2, 26.2);
	ctx.bezierCurveTo(63.7, 26.4, 63.9, 26.8, 64.0, 27.3);
	ctx.bezierCurveTo(64.0, 27.7, 64.7, 27.6, 64.6, 27.2);
	ctx.lineTo(64.6, 27.2);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(66.1, 29.3);
	ctx.bezierCurveTo(66.1, 29.7, 65.9, 30.1, 65.5, 30.2);
	ctx.bezierCurveTo(65.1, 30.2, 64.7, 29.9, 64.6, 29.5);
	ctx.bezierCurveTo(64.6, 29.1, 64.8, 28.7, 65.2, 28.6);
	ctx.bezierCurveTo(65.6, 28.6, 66.0, 28.9, 66.1, 29.3);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.990, -0.139, -0.139, -0.990, -240.6, -46.9);
	gradient = ctx.createRadialGradient(292.3, -118.1, 0.0, 292.3, -118.1, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(64.1, 27.9);
	ctx.bezierCurveTo(64.7, 28.2, 65.0, 28.7, 65.1, 29.4);
	ctx.bezierCurveTo(65.1, 29.8, 65.7, 29.7, 65.7, 29.3);
	ctx.bezierCurveTo(65.7, 28.5, 65.3, 27.8, 64.5, 27.3);
	ctx.bezierCurveTo(64.2, 27.1, 63.8, 27.6, 64.1, 27.9);
	ctx.lineTo(64.1, 27.9);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(66.9, 24.3);
	ctx.bezierCurveTo(66.9, 24.7, 66.6, 25.1, 66.2, 25.1);
	ctx.bezierCurveTo(65.8, 25.1, 65.5, 24.8, 65.4, 24.4);
	ctx.bezierCurveTo(65.4, 23.9, 65.7, 23.6, 66.1, 23.5);
	ctx.bezierCurveTo(66.5, 23.5, 66.9, 23.8, 66.9, 24.3);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.998, -0.070, -0.070, -0.998, -215.7, -161.3);
	gradient = ctx.createRadialGradient(268.2, -204.8, 0.0, 268.2, -204.8, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(67.5, 25.8);
	ctx.bezierCurveTo(67.5, 25.1, 67.2, 24.4, 66.5, 24.1);
	ctx.bezierCurveTo(66.1, 24.0, 65.8, 24.6, 66.2, 24.7);
	ctx.bezierCurveTo(66.7, 24.9, 66.8, 25.3, 66.9, 25.8);
	ctx.bezierCurveTo(66.9, 26.2, 67.6, 26.2, 67.5, 25.8);
	ctx.lineTo(67.5, 25.8);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(68.8, 28.0);
	ctx.bezierCurveTo(68.8, 28.4, 68.6, 28.8, 68.2, 28.8);
	ctx.bezierCurveTo(67.8, 28.8, 67.4, 28.5, 67.4, 28.1);
	ctx.bezierCurveTo(67.4, 27.6, 67.6, 27.3, 68.0, 27.2);
	ctx.bezierCurveTo(68.4, 27.2, 68.8, 27.5, 68.8, 28.0);
	ctx.closePath();
	ctx.save();
	ctx.transform(0.998, -0.070, -0.070, -0.998, -215.7, -161.3);
	gradient = ctx.createRadialGradient(269.9, -208.6, 0.0, 269.9, -208.6, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	ctx.restore();
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(67.0, 26.4);
	ctx.bezierCurveTo(67.6, 26.8, 67.8, 27.3, 67.8, 28.0);
	ctx.bezierCurveTo(67.8, 28.4, 68.5, 28.4, 68.5, 27.9);
	ctx.bezierCurveTo(68.5, 27.1, 68.1, 26.4, 67.4, 25.9);
	ctx.bezierCurveTo(67.1, 25.6, 66.7, 26.1, 67.0, 26.4);
	ctx.lineTo(67.0, 26.4);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group
	ctx.restore();
	ctx.restore();
	
	// layer1/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(69.5, 23.2);
	ctx.bezierCurveTo(69.5, 23.7, 69.2, 24.0, 68.8, 24.0);
	ctx.bezierCurveTo(68.4, 24.0, 68.1, 23.7, 68.1, 23.2);
	ctx.bezierCurveTo(68.1, 22.8, 68.4, 22.5, 68.8, 22.5);
	ctx.bezierCurveTo(69.2, 22.5, 69.5, 22.8, 69.5, 23.2);
	ctx.closePath();
	gradient = ctx.createRadialGradient(68.8, 23.2, 0.0, 68.8, 23.2, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(70.1, 24.8);
	ctx.bezierCurveTo(70.1, 24.1, 69.8, 23.4, 69.1, 23.1);
	ctx.bezierCurveTo(68.7, 22.9, 68.4, 23.5, 68.8, 23.6);
	ctx.bezierCurveTo(69.3, 23.9, 69.4, 24.3, 69.4, 24.8);
	ctx.bezierCurveTo(69.4, 25.2, 70.1, 25.2, 70.1, 24.8);
	ctx.lineTo(70.1, 24.8);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	
	// layer1/Group/Group/Path
	ctx.restore();
	ctx.beginPath();
	ctx.moveTo(71.2, 27.1);
	ctx.bezierCurveTo(71.2, 27.5, 70.9, 27.9, 70.5, 27.9);
	ctx.bezierCurveTo(70.1, 27.9, 69.8, 27.5, 69.8, 27.1);
	ctx.bezierCurveTo(69.8, 26.7, 70.1, 26.3, 70.5, 26.3);
	ctx.bezierCurveTo(70.9, 26.3, 71.2, 26.7, 71.2, 27.1);
	ctx.closePath();
	gradient = ctx.createRadialGradient(70.5, 27.1, 0.0, 70.5, 27.1, 0.8);
	gradient.addColorStop(0.00, "rgb(0, 0, 0)");
	gradient.addColorStop(1.00, "rgb(198, 198, 198)");
	ctx.fillStyle(gradient);
	ctx.fill();
	
	// layer1/Group/Group/Group
	
	// layer1/Group/Group/Group/Path
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(69.5, 25.4);
	ctx.bezierCurveTo(70.0, 25.8, 70.3, 26.4, 70.2, 27.0);
	ctx.bezierCurveTo(70.1, 27.5, 70.8, 27.5, 70.9, 27.0);
	ctx.bezierCurveTo(70.9, 26.2, 70.6, 25.4, 70.0, 24.9);
	ctx.bezierCurveTo(69.6, 24.6, 69.2, 25.1, 69.5, 25.4);
	ctx.lineTo(69.5, 25.4);
	ctx.closePath();
	ctx.fillStyle("rgb(193, 40, 45)");
	ctx.fill();
	ctx.restore();
	ctx.restore();
	ctx.restore();
	ctx.restore();
}