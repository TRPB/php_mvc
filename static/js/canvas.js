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
}
