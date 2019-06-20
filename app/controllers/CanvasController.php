<?php
namespace app\controllers;

use fastphp\base\Controller;
// use app\models\CanvasModel;

class CanvasController extends Controller
{
    // 首页方法，测试框架自定义DB查询
    public function index()
    {
        // echo phpinfo();
        $this->assign('title', 'canvas |');
        $this->render();
        // echo phpinfo();
    }

    public function compositing()
    {
        $this->assign('title', '图像合成实例');
        $this->render();
    }
}
