function draw() {
    // 颜色格子
    +function () {
        var canvas = document.getElementById("canvas");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");

            for (var i = 0; i < 6; i++) {
                for (var j = 0; j < 6; j++) {
                    ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' +
                        Math.floor(255 - 42.5 * j) + ',0)';
                    ctx.fillRect(j * 25, i * 25, 25, 25);
                }
            }
        }
    }();

    // 基本图形
    ~function () {
        var canvas = document.getElementById("canvas2");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");

            ctx.fillStyle = "rgb(200,0,0)";
            ctx.fillRect(10, 10, 55, 50);

            ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
            ctx.fillRect(30, 30, 55, 50);
        }
    }();

    // 绘制矩形
    !function () {
        var canvas = document.getElementById("canvas3");
        // canvas.style.backgroundColor = 'red';
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");

            ctx.fillRect(25, 25, 100, 100);
            ctx.clearRect(45, 45, 60, 60);
            ctx.strokeRect(50, 50, 50, 50);
        }
    }();

    // 绘制路径 - 绘制一个三角形
    (function () {
        var canvas = document.getElementById("canvas4");
        // canvas.style.backgroundColor = 'red';
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.moveTo(75, 50);
            ctx.lineTo(100, 75);
            ctx.lineTo(100, 25);
            ctx.closePath();
            ctx.fill();
        }
    }());

    // 绘制路径 - 移动笔触
    (function () {
        var canvas = document.getElementById("canvas5");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");

            ctx.beginPath();
            ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
            ctx.moveTo(110, 75);
            ctx.arc(75, 75, 35, 0, Math.PI, false);   // 口(顺时针)
            ctx.moveTo(65, 65);
            ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // 左眼
            ctx.moveTo(95, 65);
            ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // 右眼
            ctx.stroke();
        }
    }());

    // 绘制路径 - 线
    (function () {
        var canvas = document.getElementById("canvas6");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");

            // 填充三角形
            ctx.beginPath();
            ctx.moveTo(25, 25);
            ctx.lineTo(105, 25);
            ctx.lineTo(25, 105);
            ctx.fill();

            // 描边三角形
            ctx.beginPath();
            ctx.moveTo(125, 125);
            ctx.lineTo(125, 45);
            ctx.lineTo(45, 125);
            ctx.closePath();
            ctx.stroke();
        }
    }());

    // 绘制路径 - 圆弧
    (function () {
        var canvas = document.getElementById("canvas7");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");

            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 3; j++) {
                    ctx.beginPath();
                    var x = 25 + j * 50; // x 坐标值
                    var y = 25 + i * 50; // y 坐标值
                    var radius = 20; // 圆弧半径
                    var startAngle = 0; // 开始点
                    var endAngle = Math.PI + (Math.PI * j) / 2; // 结束点
                    var anticlockwise = i % 2 == 0 ? false : true; // 顺时针或逆时针

                    ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

                    if (i > 1) {
                        ctx.fill();
                    } else {
                        ctx.stroke();
                    }
                }
            }
        }
    }());

    // 绘制路径 - 二次贝赛尔曲线
    (function () {
        var canvas = document.getElementById("canvas8");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");

            // 二次贝塞尔曲线
            ctx.beginPath();
            ctx.moveTo(75, 25);
            ctx.quadraticCurveTo(25, 25, 25, 62.5);
            ctx.quadraticCurveTo(25, 100, 50, 100);
            ctx.quadraticCurveTo(50, 120, 30, 125);
            ctx.quadraticCurveTo(60, 120, 65, 100);
            ctx.quadraticCurveTo(125, 100, 125, 62.5);
            ctx.quadraticCurveTo(125, 25, 75, 25);
            ctx.stroke();
        }
    }());

    // 绘制路径 - 三次贝赛尔曲线
    (function () {
        var canvas = document.getElementById("canvas9");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");

            //三次贝塞尔曲线
            ctx.beginPath();
            ctx.moveTo(75, 40);
            ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
            ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
            ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
            ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
            ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
            ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
            ctx.fill();
        }
    }());

    // 绘制路径 - 组合使用
    (function () {
        var canvas = document.getElementById("canvas10");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");

            roundedRect(ctx, 12, 12, 150, 150, 15);
            roundedRect(ctx, 19, 19, 150, 150, 9);
            roundedRect(ctx, 53, 53, 49, 33, 10);
            roundedRect(ctx, 53, 119, 49, 16, 6);
            roundedRect(ctx, 135, 53, 49, 33, 10);
            roundedRect(ctx, 135, 119, 25, 49, 10);

            ctx.beginPath();
            ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
            ctx.lineTo(31, 37);
            ctx.fill();

            for (var i = 0; i < 8; i++) {
                ctx.fillRect(51 + i * 16, 35, 4, 4);
            }

            for (i = 0; i < 6; i++) {
                ctx.fillRect(115, 51 + i * 16, 4, 4);
            }

            for (i = 0; i < 8; i++) {
                ctx.fillRect(51 + i * 16, 99, 4, 4);
            }

            ctx.beginPath();
            ctx.moveTo(83, 116);
            ctx.lineTo(83, 102);
            ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
            ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
            ctx.lineTo(111, 116);
            ctx.lineTo(106.333, 111.333);
            ctx.lineTo(101.666, 116);
            ctx.lineTo(97, 111.333);
            ctx.lineTo(92.333, 116);
            ctx.lineTo(87.666, 111.333);
            ctx.lineTo(83, 116);
            ctx.fill();

            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.moveTo(91, 96);
            ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
            ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
            ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
            ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
            ctx.moveTo(103, 96);
            ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
            ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
            ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
            ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
            ctx.fill();

            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
            ctx.fill();

            ctx.beginPath();
            ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
            ctx.fill();
        }

        // 封装的一个用于绘制圆角矩形的函数.
        function roundedRect(ctx, x, y, width, height, radius) {
            ctx.beginPath();
            ctx.moveTo(x, y + radius);
            ctx.lineTo(x, y + height - radius);
            ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
            ctx.lineTo(x + width - radius, y + height);
            ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
            ctx.lineTo(x + width, y + radius);
            ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
            ctx.lineTo(x + radius, y);
            ctx.quadraticCurveTo(x, y, x, y + radius);
            ctx.stroke();
        }
    }());

    // 绘制路径 - Path2D对象
    (function () {
        var canvas = document.getElementById("canvas11");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");

            var rectangle = new Path2D();
            rectangle.rect(10, 10, 50, 50);

            var circle = new Path2D();
            circle.moveTo(125, 35);
            circle.arc(100, 35, 25, 0, 2 * Math.PI);

            ctx.stroke(rectangle);
            ctx.fill(circle);
        }
    })();

    // 颜色与样式 - fillStyle
    (function () {
        var canvas = document.getElementById("canvas12");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");

            for (var i = 0; i < 6; i++) {
                for (var j = 0; j < 6; j++) {
                    ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' +
                        Math.floor(255 - 42.5 * j) + ',0)';
                    ctx.fillRect(j * 25, i * 25, 25, 25);
                }
            }
        }
    })();

    // 颜色与样式 - fillStyle
    (function () {
        var canvas = document.getElementById("canvas12");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");

            for (var i = 0; i < 6; i++) {
                for (var j = 0; j < 6; j++) {
                    ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' +
                        Math.floor(255 - 42.5 * j) + ',0)';
                    ctx.fillRect(j * 25, i * 25, 25, 25);
                }
            }
        }
    })();

    // 颜色与样式 - strokeStyle
    (function () {
        var canvas = document.getElementById("canvas13");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");

            for (var i = 0; i < 6; i++) {
                for (var j = 0; j < 6; j++) {
                    ctx.strokeStyle = 'rgb(0,' + Math.floor(255 - 42.5 * i) + ',' +
                        Math.floor(255 - 42.5 * j) + ')';
                    ctx.beginPath();
                    ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
                    ctx.stroke();
                }
            }
        }
    })();

    // 颜色与样式 - globalAlpha
    (function () {
        var canvas = document.getElementById("canvas14");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            // 画背景
            ctx.fillStyle = '#FD0';
            ctx.fillRect(0, 0, 75, 75);
            ctx.fillStyle = '#6C0';
            ctx.fillRect(75, 0, 75, 75);
            ctx.fillStyle = '#09F';
            ctx.fillRect(0, 75, 75, 75);
            ctx.fillStyle = '#F30';
            ctx.fillRect(75, 75, 75, 75);
            ctx.fillStyle = '#FFF';

            // 设置透明度值
            ctx.globalAlpha = 0.2;

            // 画半透明圆
            for (var i = 0; i < 7; i++) {
                ctx.beginPath();
                ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
                ctx.fill();
            }
        }
    })();

    // 颜色与样式 - RGBA
    (function () {
        var canvas = document.getElementById("canvas15");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            // 画背景
            ctx.fillStyle = 'rgb(255,221,0)';
            ctx.fillRect(0, 0, 150, 37.5);
            ctx.fillStyle = 'rgb(102,204,0)';
            ctx.fillRect(0, 37.5, 150, 37.5);
            ctx.fillStyle = 'rgb(0,153,255)';
            ctx.fillRect(0, 75, 150, 37.5);
            ctx.fillStyle = 'rgb(255,51,0)';
            ctx.fillRect(0, 112.5, 150, 37.5);

            // 画半透明矩形
            for (var i = 0; i < 10; i++) {
                ctx.fillStyle = 'rgba(255,255,255,' + (i + 1) / 10 + ')';
                for (var j = 0; j < 4; j++) {
                    ctx.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5)
                }
            }
        }
    })();

    // 线型 Line styles - lineWidth
    (function () {
        var canvas = document.getElementById("canvas16");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            for (var i = 0; i < 10; i++) {
                ctx.lineWidth = 1 + i;
                ctx.beginPath();
                ctx.moveTo(5 + i * 14, 5);
                ctx.lineTo(5 + i * 14, 140);
                ctx.stroke();
            }
        }
    })();

    // 线型 Line styles - lineCap 
    (function () {
        var canvas = document.getElementById("canvas17");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");

            var lineCap = ['butt', 'round', 'square'];

            // 创建路径
            ctx.strokeStyle = '#09f';
            ctx.beginPath();
            ctx.moveTo(10, 10);
            ctx.lineTo(140, 10);
            ctx.moveTo(10, 140);
            ctx.lineTo(140, 140);
            ctx.stroke();

            // 画线条
            ctx.strokeStyle = 'black';
            for (var i = 0; i < lineCap.length; i++) {
                ctx.lineWidth = 15;
                ctx.lineCap = lineCap[i];
                ctx.beginPath();
                ctx.moveTo(25 + i * 50, 10);
                ctx.lineTo(25 + i * 50, 140);
                ctx.stroke();
            }
        }
    })();

    // 线型 Line styles - lineJoin
    (function () {
        var canvas = document.getElementById("canvas18");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");

            var lineJoin = ['round', 'bevel', 'miter'];
            ctx.lineWidth = 10;

            for (var i = 0; i < lineJoin.length; i++) {
                ctx.lineJoin = lineJoin[i];
                ctx.beginPath();
                ctx.moveTo(-5, 5 + i * 40);
                ctx.lineTo(35, 45 + i * 40);
                ctx.lineTo(75, 5 + i * 40);
                ctx.lineTo(115, 45 + i * 40);
                ctx.lineTo(155, 5 + i * 40);
                ctx.stroke();
            }
        }
    })();

    // 线型 Line styles - 使用虚线
    (function () {
        var canvas = document.getElementById("canvas19");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            var offset = 0;

            function drawDash() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.setLineDash([4, 2]);
                ctx.lineDashOffset = -offset;
                ctx.strokeRect(10, 10, 100, 100);
            }

            function march() {
                offset++;
                if (offset > 16) {
                    offset = 0;
                }
                drawDash();
                setTimeout(march, 20);
            }

            march();
        }
    })();

    // 线型 Line styles - 线性渐变
    (function () {
        var canvas = document.getElementById("canvas20");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            // Create gradients
            var lingrad = ctx.createLinearGradient(0, 0, 0, 150);
            lingrad.addColorStop(0, '#00ABEB');
            lingrad.addColorStop(0.5, '#fff');
            lingrad.addColorStop(0.5, '#26C000');
            lingrad.addColorStop(1, '#fff');

            var lingrad2 = ctx.createLinearGradient(0, 50, 0, 95);
            lingrad2.addColorStop(0.5, '#000');
            lingrad2.addColorStop(1, 'rgba(0,0,0,0)');

            // assign gradients to fill and stroke styles
            ctx.fillStyle = lingrad;
            ctx.strokeStyle = lingrad2;

            // draw shapes
            ctx.fillRect(10, 10, 130, 130);
            ctx.strokeRect(50, 50, 50, 50);
        }
    })();

    // 线型 Line styles - 径向渐变
    (function () {
        var canvas = document.getElementById("canvas21");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            // 创建渐变
            var radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
            radgrad.addColorStop(0, '#A7D30C');
            radgrad.addColorStop(0.9, '#019F62');
            radgrad.addColorStop(1, 'rgba(1,159,98,0)');

            var radgrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
            radgrad2.addColorStop(0, '#FF5F98');
            radgrad2.addColorStop(0.75, '#FF0188');
            radgrad2.addColorStop(1, 'rgba(255,1,136,0)');

            var radgrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
            radgrad3.addColorStop(0, '#00C9FF');
            radgrad3.addColorStop(0.8, '#00B5E2');
            radgrad3.addColorStop(1, 'rgba(0,201,255,0)');

            var radgrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);
            radgrad4.addColorStop(0, '#F4F201');
            radgrad4.addColorStop(0.8, '#E4C700');
            radgrad4.addColorStop(1, 'rgba(228,199,0,0)');

            // 画图形
            ctx.fillStyle = radgrad4;
            ctx.fillRect(0, 0, 150, 150);
            ctx.fillStyle = radgrad3;
            ctx.fillRect(0, 0, 150, 150);
            ctx.fillStyle = radgrad2;
            ctx.fillRect(0, 0, 150, 150);
            ctx.fillStyle = radgrad;
            ctx.fillRect(0, 0, 150, 150);
        }
    })();

    // 图案样式 Patterns
    (function () {
        var canvas = document.getElementById("canvas22");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            // 创建新 image 对象，用作图案
            var img = new Image();
            img.src = '/static/images/zan.png';

            img.onload = function () {
                // 创建图案
                var ptrn = ctx.createPattern(img, 'repeat');
                ctx.fillStyle = ptrn;
                ctx.fillRect(0, 0, 150, 150);
            }
        }
    })();


    // 文字阴影
    (function () {
        var canvas = document.getElementById("canvas23");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 2;
            ctx.shadowBlur = 2;
            ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

            ctx.font = "20px 楷体";
            ctx.fillStyle = "Black";
            ctx.fillText("我爱你，中国", 5, 30);
        }
    })();

    // Canvas 填充规则
    (function () {
        var canvas = document.getElementById("canvas24");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.arc(50, 50, 30, 0, Math.PI * 2, true);
            ctx.arc(50, 50, 15, 0, Math.PI * 2, true);

            ctx.fill("evenodd");
        }
    })();

    // 缩放 Scaling
    (function () {
        var canvas = document.getElementById("canvas25");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            var img = new Image();
            img.onload = function () {
                for (var i = 0; i < 4; i++) {
                    for (var j = 0; j < 3; j++) {
                        ctx.drawImage(img, j * 50, i * 38, 50, 38);
                    }
                }
            };
            img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
        }
    })();

    // 缩放 Scaling
    (function () {
        var canvas = document.getElementById("canvas26");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");

            ctx.fillRect(0, 0, 150, 150);   // 使用默认设置绘制一个矩形
            ctx.save();                  // 保存默认状态

            ctx.fillStyle = '#09F'       // 在原有配置基础上对颜色做改变
            ctx.fillRect(15, 15, 120, 120); // 使用新的设置绘制一个矩形
            ctx.save();                  // 保存当前状态

            ctx.fillStyle = '#FFF'       // 再次改变颜色配置
            ctx.globalAlpha = 0.5;
            ctx.fillRect(30, 30, 90, 90);   // 使用新的配置绘制一个矩形

            ctx.restore();               // 重新加载之前的颜色状态
            ctx.fillRect(45, 45, 60, 60);   // 使用上一次的配置绘制一个矩形

            ctx.restore();               // 加载默认颜色配置
            ctx.fillRect(60, 60, 30, 30);   // 使用加载的配置绘制一个矩形
        }
    })();

    // translate
    (function () {
        var canvas = document.getElementById("canvas27");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");

            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                    ctx.save();
                    ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255)';
                    ctx.translate(10 + j * 50, 10 + i * 50);
                    ctx.fillRect(0, 0, 25, 25);
                    ctx.restore();
                }
            }
        }
    })();

    // rotate 
    (function () {
        var canvas = document.getElementById("canvas28");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            ctx.translate(75, 75);

            for (var i = 1; i < 6; i++) { // Loop through rings (from inside to out)
                ctx.save();
                ctx.fillStyle = 'rgb(' + (51 * i) + ',' + (255 - 51 * i) + ',255)';

                for (var j = 0; j < i * 6; j++) { // draw individual dots
                    ctx.rotate(Math.PI * 2 / (i * 6));

                    ctx.beginPath();
                    ctx.arc(0, i * 12.5, 5, 0, Math.PI * 2, true);
                    ctx.fill();
                }

                ctx.restore();
            }
        }
    })();

    // scale 
    (function () {
        var canvas = document.getElementById("canvas29");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            // draw a simple rectangle, but scale it.
            ctx.save();
            ctx.scale(10, 3);
            ctx.fillRect(1, 10, 10, 10);
            ctx.restore();

            // mirror horizontally
            ctx.scale(-1, 1);
            ctx.font = '48px serif';
            ctx.fillText('MDN', -135, 120);
        }
    })();

    // clip 
    (function () {
        var canvas = document.getElementById("canvas30");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");

            ctx.fillRect(0, 0, 150, 150);
            ctx.translate(75, 75);

            // Create a circular clipping path
            ctx.beginPath();
            ctx.arc(0, 0, 60, 0, Math.PI * 2, true);
            ctx.clip();

            // draw background
            var lingrad = ctx.createLinearGradient(0, -75, 0, 75);
            lingrad.addColorStop(0, '#232256');
            lingrad.addColorStop(1, '#143778');

            ctx.fillStyle = lingrad;
            ctx.fillRect(-75, -75, 150, 150);

            // draw stars
            for (var j = 1; j < 50; j++) {
                ctx.save();
                ctx.fillStyle = '#fff';
                ctx.translate(75 - Math.floor(Math.random() * 150),
                    75 - Math.floor(Math.random() * 150));
                drawStar(ctx, Math.floor(Math.random() * 4) + 2);
                ctx.restore();
            }

            function drawStar(ctx, r) {
                ctx.save();
                ctx.beginPath()
                ctx.moveTo(r, 0);
                for (var i = 0; i < 9; i++) {
                    ctx.rotate(Math.PI / 5);
                    if (i % 2 == 0) {
                        ctx.lineTo((r / 0.525731) * 0.200811, 0);
                    } else {
                        ctx.lineTo(r, 0);
                    }
                }
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }
        }
    })();

    // 太阳系动画 
    (function () {
        var sun = new Image();
        var moon = new Image();
        var earth = new Image();

        function init() {
            sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
            moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
            earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
            window.requestAnimationFrame(draw);
        }
        function draw() {
            var ctx = document.getElementById('canvas31').getContext('2d');
            ctx.globalCompositeOperation = 'destination-over';
            ctx.clearRect(0, 0, 300, 300); // clear canvas

            ctx.fillStyle = 'rgba(0,0,0,0.4)';
            ctx.strokeStyle = 'rgba(0,153,255,0.4)';

            ctx.save();
            ctx.translate(150, 150);

            // Earth
            var time = new Date();
            ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
            ctx.translate(105, 0);
            ctx.fillRect(0, -12, 50, 24); // Shadow
            ctx.drawImage(earth, -12, -12);

            // Moon
            ctx.save();
            ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
            ctx.translate(0, 28.5);
            ctx.drawImage(moon, -3.5, -3.5);
            ctx.restore();

            ctx.restore();

            ctx.beginPath();
            ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
            ctx.stroke();

            ctx.drawImage(sun, 0, 0, 300, 300);

            window.requestAnimationFrame(draw);
        }

        init();
    })();

    // 动画时钟 
    (function () {
        function init() {
            window.requestAnimationFrame(clock);
        }

        function clock() {
            var now = new Date();
            var ctx = document.getElementById('canvas32').getContext('2d');
            ctx.save();
            ctx.clearRect(0, 0, 150, 150);
            ctx.translate(75, 75);
            ctx.scale(0.4, 0.4);
            ctx.rotate(-Math.PI / 2);
            ctx.strokeStyle = "black";
            ctx.fillStyle = "white";
            ctx.lineWidth = 8;
            ctx.lineCap = "round";

            // Hour marks
            ctx.save();
            for (var i = 0; i < 12; i++) {
                ctx.beginPath();
                ctx.rotate(Math.PI / 6);
                ctx.moveTo(100, 0);
                ctx.lineTo(120, 0);
                ctx.stroke();
            }
            ctx.restore();

            // Minute marks
            ctx.save();
            ctx.lineWidth = 5;
            for (i = 0; i < 60; i++) {
                if (i % 5 != 0) {
                    ctx.beginPath();
                    ctx.moveTo(117, 0);
                    ctx.lineTo(120, 0);
                    ctx.stroke();
                }
                ctx.rotate(Math.PI / 30);
            }
            ctx.restore();

            var sec = now.getSeconds();
            var min = now.getMinutes();
            var hr = now.getHours();
            hr = hr >= 12 ? hr - 12 : hr;

            ctx.fillStyle = "black";

            // write Hours
            ctx.save();
            ctx.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec)
            ctx.lineWidth = 14;
            ctx.beginPath();
            ctx.moveTo(-20, 0);
            ctx.lineTo(80, 0);
            ctx.stroke();
            ctx.restore();

            // write Minutes
            ctx.save();
            ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec)
            ctx.lineWidth = 10;
            ctx.beginPath();
            ctx.moveTo(-28, 0);
            ctx.lineTo(112, 0);
            ctx.stroke();
            ctx.restore();

            // Write seconds
            ctx.save();
            ctx.rotate(sec * Math.PI / 30);
            ctx.strokeStyle = "#D40000";
            ctx.fillStyle = "#D40000";
            ctx.lineWidth = 6;
            ctx.beginPath();
            ctx.moveTo(-30, 0);
            ctx.lineTo(83, 0);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
            ctx.stroke();
            ctx.fillStyle = "rgba(0,0,0,0)";
            ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
            ctx.fill();
            ctx.restore();

            ctx.beginPath();
            ctx.lineWidth = 14;
            ctx.strokeStyle = '#325FA2';
            ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
            ctx.stroke();

            ctx.restore();

            window.requestAnimationFrame(clock);
        }

        init();
    })();

    // 循环全景照片 
    (function () {
        var img = new Image();

        // User Variables - customize these to change the image being scrolled, its
        // direction, and the speed.

        img.src = 'https://mdn.mozillademos.org/files/4553/Capitan_Meadows,_Yosemite_National_Park.jpg';
        var CanvasXSize = 800;
        var CanvasYSize = 200;
        var speed = 30; //lower is faster
        var scale = 1.05;
        var y = -4.5; //vertical offset

        // Main program

        var dx = 0.75;
        var imgW;
        var imgH;
        var x = 0;
        var clearX;
        var clearY;
        var ctx;

        img.onload = function () {
            imgW = img.width * scale;
            imgH = img.height * scale;
            if (imgW > CanvasXSize) { x = CanvasXSize - imgW; } // image larger than canvas
            if (imgW > CanvasXSize) { clearX = imgW; } // image larger than canvas
            else { clearX = CanvasXSize; }
            if (imgH > CanvasYSize) { clearY = imgH; } // image larger than canvas
            else { clearY = CanvasYSize; }
            //Get Canvas Element
            ctx = document.getElementById('canvas33').getContext('2d');
            //Set Refresh Rate
            return setInterval(draw, speed);
        }

        function draw() {
            //Clear Canvas
            ctx.clearRect(0, 0, clearX, clearY);
            //If image is <= Canvas Size
            if (imgW <= CanvasXSize) {
                //reset, start from beginning
                if (x > (CanvasXSize)) { x = 0; }
                //draw aditional image
                if (x > (CanvasXSize - imgW)) { ctx.drawImage(img, x - CanvasXSize + 1, y, imgW, imgH); }
            }
            //If image is > Canvas Size
            else {
                //reset, start from beginning
                if (x > (CanvasXSize)) { x = CanvasXSize - imgW; }
                //draw aditional image
                if (x > (CanvasXSize - imgW)) { ctx.drawImage(img, x - imgW + 1, y, imgW, imgH); }
            }
            //draw image
            ctx.drawImage(img, x, y, imgW, imgH);
            //amount to move
            x += dx;
        }
    })();

    // 颜色选择器
    (function () {
        var img = new Image();
        img.src = '/static/images/fk_1.png';
        var canvas = document.getElementById('canvas34');
        var ctx = canvas.getContext('2d');
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
            img.style.display = 'none';
        };
        var color = document.getElementById('color');
        function pick(event) {
            var x = event.layerX;
            var y = event.layerY;
            var pixel = ctx.getImageData(x, y, 1, 1);
            var data = pixel.data;
            var rgba = 'rgba(' + data[0] + ',' + data[1] +
                ',' + data[2] + ',' + (data[3] / 255) + ')';
            color.style.background = rgba;
            color.textContent = rgba;
        }
        canvas.addEventListener('mousemove', pick);
    })();

    // 图片灰度和反相颜色
    (function () {
        var img = new Image();
        img.src = '/static/images/fk_1.png';

        img.onload = function () {
            draw(this);
        };

        function draw(img) {
            var canvas = document.getElementById('canvas35');
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            img.style.display = 'none';
            var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            var data = imageData.data;

            var invert = function () {
                for (var i = 0; i < data.length; i += 4) {
                    data[i] = 255 - data[i];     // red
                    data[i + 1] = 255 - data[i + 1]; // green
                    data[i + 2] = 255 - data[i + 2]; // blue
                }
                ctx.putImageData(imageData, 0, 0);
            };

            var grayscale = function () {
                for (var i = 0; i < data.length; i += 4) {
                    var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
                    data[i] = avg; // red
                    data[i + 1] = avg; // green
                    data[i + 2] = avg; // blue
                }
                ctx.putImageData(imageData, 0, 0);
            };

            var invertbtn = document.getElementById('invertbtn');
            invertbtn.addEventListener('click', invert);
            var grayscalebtn = document.getElementById('grayscalebtn');
            grayscalebtn.addEventListener('click', grayscale);
        }
    })();

    // 缩放和反锯齿
    (function () {
        var img = new Image();
        img.src = '/static/images/fk_1.png';

        img.onload = function () {
            draw(this);
        };

        function draw(img) {
            var canvas = document.getElementById('canvas36');
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            img.style.display = 'none';
            var zoomctx = document.getElementById('zoom').getContext('2d');

            var smoothbtn = document.getElementById('smoothbtn');
            var toggleSmoothing = function (event) {
                zoomctx.imageSmoothingEnabled = this.checked;
                zoomctx.mozImageSmoothingEnabled = this.checked;
                zoomctx.webkitImageSmoothingEnabled = this.checked;
                zoomctx.msImageSmoothingEnabled = this.checked;
            };
            smoothbtn.addEventListener('change', toggleSmoothing);

            var zoom = function (event) {
                var x = event.layerX;
                var y = event.layerY;
                zoomctx.drawImage(canvas,
                    Math.abs(x - 5),
                    Math.abs(y - 5),
                    10, 10,
                    0, 0,
                    200, 200);
            };

            canvas.addEventListener('mousemove', zoom);
        }
    })();
}
