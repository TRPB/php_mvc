<?php
namespace app\controllers;

use fastphp\base\Controller;
use app\models\ItemModel;

class ItemController extends Controller
{
    // 首页方法，测试框架自定义DB查询
    public function index()
    {
        // // echo phpinfo();
        // $this->assign('title', '默认');
        // $this->assign('keyword', '苹果');
        // $this->assign('items', [['id' => 1, 'item_name' => '樱桃'], ['id' => 2, 'item_name' => '潘石榴']]);
        // // $this->render();
        // echo phpinfo();

        /***************** */
        $keyword = isset($_GET['keyword']) ? $_GET['keyword'] : '';
        if ($keyword) {
            $items = (new ItemModel())->search($keyword);
        } else {
            // 查询所有内容，并按倒序排列输出
            // where()方法可不传入参数，或者省略
            $items = (new ItemModel())->where()->order(['id DESC'])->fetchAll();
            // echo var_dump($items);
        }

        $this->assign('title', '全部条目');
        $this->assign('keyword', $keyword);
        $this->assign('items', $items);
        $this->render();
    }

    // 添加记录，测试框架DB记录创建（Create）
    public function add()
    {
        if ($_POST['value']) {
            $data['item_name'] = $_POST['value'];
            // debug code
            // echo \var_dump($data);
            $count = (new ItemModel())->add($data);

            $this->assign('title', '添加成功');
            $this->assign('count', $count);
            $this->render();
        } else {
            $this->assign('title', '添加失败');
            $this->assign('count', 0);
            $this->render();
        }
    }

    // 删除记录，测试框架DB记录删除（Delete）
    public function delete($id = null)
    {
        $count = (new ItemModel())->delete($id);
        $this->assign('title', '删除成功');
        $this->assign('count', $count);
        $this->render();
    }
}
