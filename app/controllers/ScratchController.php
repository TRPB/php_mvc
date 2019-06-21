<?php
namespace app\controllers;

use fastphp\base\Controller;
// use app\models\CanvasModel;

class ScratchController extends Controller
{
    // 首页方法，测试框架自定义DB查询
    public function index()
    {
        // echo phpinfo();
        $this->assign('title', '刮刮卡示例');
        $this->render();
        // echo phpinfo();
    }
}
