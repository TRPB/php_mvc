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
              <canvas id="canvas11" width="150" height="100"></canvas>
          </div>
      </div>

      <h3>3.添加样式和颜色</h3>
      <div class="color-style">
          <div>
              <h4>fillStyle </h4>
              <canvas id="canvas12" width="150" height="150"></canvas>
          </div>
          <div>
              <h4>strokeStyle </h4>
              <canvas id="canvas13" width="150" height="150"></canvas>
          </div>
          <div>
              <h4>globalAlpha </h4>
              <canvas id="canvas14" width="150" height="150"></canvas>
          </div>

          <div>
              <h4>RGBA </h4>
              <canvas id="canvas15" width="150" height="150"></canvas>
          </div>
          <div>
              <h4>线型 - lineWidth </h4>
              <canvas id="canvas16" width="150" height="150"></canvas>
          </div>
          <div>
              <h4>线型 - lineCap </h4>
              <canvas id="canvas17" width="150" height="150"></canvas>
          </div>
          <div>
              <h4>线型 - lineJoin </h4>
              <canvas id="canvas18" width="150" height="150"></canvas>
          </div>
          <div>
              <h4>线型 - 使用蚂蚁线 </h4>
              <canvas id="canvas19" width="150" height="150"></canvas>
          </div>
          <div>
              <h4>线型 - 线性渐变 </h4>
              <canvas id="canvas20" width="150" height="150"></canvas>
          </div>
          <div>
              <h4>线型 - 径向渐变 </h4>
              <canvas id="canvas21" width="150" height="150"></canvas>
          </div>
          <div>
              <h4>图案样式 Patterns </h4>
              <canvas id="canvas22" width="150" height="150"></canvas>
          </div>
          <div>
              <h4>文字阴影 </h4>
              <canvas id="canvas23" width="150" height="150"></canvas>
          </div>
          <div>
              <h4>Canvas 填充规则 </h4>
              <canvas id="canvas24" width="150" height="150"></canvas>
          </div>
      </div>
      <h3>4.绘制文本</h3>
      <h3>5.使用图片</h3>
      <div class="canvas-img">
          <div>
              <h4>缩放 Scaling </h4>
              <canvas id="canvas25" width="150" height="150"></canvas>
          </div>
          <div>
              <h4>切片 Slicing </h4>
          </div>
      </div>
      <h3>6.变形</h3>
      <div class="canvas-transformation">
          <div>
              <h4>save 和 restore</h4>
              <canvas id="canvas26" width="150" height="150"></canvas>
          </div>

          <div>
              <h4>translate</h4>
              <canvas id="canvas27" width="150" height="150"></canvas>
          </div>
          <div>
              <h4>rotate</h4>
              <canvas id="canvas28" width="150" height="150"></canvas>
          </div>
          <div>
              <h4>scale</h4>
              <canvas id="canvas29" width="150" height="150"></canvas>
          </div>
      </div>
      <script src="/static/js/canvas.js"></script>
  </body>