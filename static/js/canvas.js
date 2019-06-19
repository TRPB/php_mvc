function draw() {
    +function drawCanvas() {
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

    ~function drawCanvas2() {
        var canvas = document.getElementById("canvas2");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");

            ctx.fillStyle = "rgb(200,0,0)";
            ctx.fillRect(10, 10, 55, 50);

            ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
            ctx.fillRect(30, 30, 55, 50);
        }
    }();
}



