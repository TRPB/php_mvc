<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo $title ?></title>
    <script type="text/javascript">
        function draw() {
            var canvas = document.getElementById('tutorial');
            if (canvas.getContext) {
                var ctx /* :CanvasRenderingContext2D */ = canvas.getContext('2d');
            }
        }
    </script>
    <style type="text/css">
        canvas {
            border: 1px solid black;
        }
    </style>
</head>