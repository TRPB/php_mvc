<?php
namespace app\controllers;

use fastphp\base\Controller;

class ItemController extends Controller
{
    // 首页方法，测试框架自定义DB查询
    public function index()
    {
        // echo phpinfo();
        $this->assign('title', '默认');
        $this->assign('keyword', '苹果');
        $this->assign('items', [['id' => 1, 'item_name' => '樱桃'], ['id' => 2, 'item_name' => '潘石榴']]);
        $this->render();
    }
}
