<?php
// 数据库配置
$config['db']['host'] = 'localhost';
$config['db']['username'] = 'singcl';
$config['db']['password'] = 'singcl';
$config['db']['dbname'] = 'project';

// // 数据库配置 - 发布STUDIO 云配置
// $config['db']['host'] = $_ENV['MYSQL_HOST'];
// $config['db']['username'] = $_ENV['MYSQL_USERNAME'];
// $config['db']['password'] = $_ENV['MYSQL_PASSWORD'];
// $config['db']['dbname'] =   $_ENV['MYSQL_DBNAME'];

// 默认控制器和操作名
$config['defaultController'] = 'Item';
$config['defaultAction'] = 'index';

return $config;
