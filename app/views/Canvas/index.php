  <h1><?php echo $title ?></h1>

  <body onload="draw();">
      <h3>1.基本用法</h3>
      <canvas id="canvas" width="150" height="150"></canvas>
      <canvas id="canvas2" width="150" height="150"></canvas>

      <h3>2.使用canvas来绘制图形</h3>
      <div class="graph">
          <div>
              <h4>绘制矩形</h4>
              <canvas id="canvas3" width="150" height="150"></canvas>
          </div>
          <div>
              <h4>绘制路径 - 三角形</h4>
              <canvas id="canvas4" width="150" height="150"></canvas>
          </div>
          <div>
              <h4>绘制路径 - 移动笔触</h4>
              <canvas id="canvas5" width="150" height="150"></canvas>
          </div>
          <div>
              <h4>绘制路径 - 线</h4>
              <canvas id="canvas6" width="150" height="150"></canvas>
          </div>
          <div>
              <h4>绘制路径 - 圆弧</h4>
              <canvas id="canvas7" width="150" height="150"></canvas>
          </div>
          <div>
              <h4>绘制路径 - 二次贝塞尔曲线</h4>
              <canvas id="canvas8" width="150" height="150"></canvas>
          </div>
          <div>
              <h4>绘制路径 - 三次贝塞尔曲线</h4>
              <canvas id="canvas9" width="150" height="150"></canvas>
          </div>
          <div>
              <h4>绘制路径 - 组合使用</h4>
              <canvas id="canvas10" width="200" height="200"></canvas>
          </div>
          <div>
              <h4>绘制路径 - Path2D对象</h4>
              <canvas id="canvas11" width="200" height="200"></canvas>
          </div>
      </div>
      <script src="/static/js/canvas.js"></script>
  </body>