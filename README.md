![travis](https://travis-ci.org/singcl/php_mvc.svg?branch=master)

1. **unable to bind listening socket for address '/run/php/php7.1-fpm.sock' no such file or directory**

原因：`php-fpm` 没有启动，如下启动：

```bash
# 启动命令：
sudo /etc/init.d/php7-fpm start
```

2. 查看Ubuntu Apache2 服务器日志
```sh
tail -f /var/log/apache2/*.log
```

3. remote-ssh

4. 启动Apache2后打开php 网站报错

```sh
sudo apache2 start
```
```
Service Unavailable
The server is temporarily unable to service your request due to maintenance downtime or capacity problems. Please try again later.
```

有可能是php-fpm没有启动
```bash
sudo /etc/init.d/php7.3-fpm start
```

5. MYSQL
```sh
# 启动mysql
sudo service mysql start 
```
一直报错
```
-su: 30: export: : bad variable name
```
最终问题定位： 在`/etc/profile` 之前添加了如下语句
```sh
SET NODE_HOME=/opt/node10.16.0-linux-x64
PATH = $PAHT:NODE_HOME
```
删除上面自己添加的即可启动


6. WSL 暂不支持 netstat  ss 等命令

7. 
```sh
# 查看MYSQL数据库中所有用户
mysql> SELECT DISTINCT CONCAT('User: ''',user,'''@''',host,''';') AS query FROM mysql.user;

# 查看数据库中具体某个用户的权限
mysql> select * from mysql.user where user='singcl' \G    

#查看user表结构　需要具体的项可结合表结构来查询
mysql> desc mysql.user;
```

8. 数据库操作相关问题
```bash
ERROR 1698 (28000): Access denied for user 'root'@'localhost'
# 创建新的管理员账户
https://stackoverflow.com/questions/39281594/error-1698-28000-access-denied-for-user-rootlocalhost

#
# 将新创建的管理员账号设置为密码链接
ERROR 1698 (28000): Access denied for user 'root'@'localhost' (using password: NO)
https://www.jianshu.com/p/2b63c65caf6a
```


## 启动
```sh
# 1 启动apache2
sudo service apache2 start

# 2 启动php-fpm
sudo service php7.3-fpm start

# 3 启动mysql
sudo service mysql start
```

9. PDO 相关问题

```sh
# 环境：Ubuntu 16.02
```

代码中使用PDO 时候返回 `PDOException: can not find driver`。 然后我们查看`phpinfo()` 确认下： PDO 显示：`drivers no value`

说明PDO 链接MYSQL 驱动找不到。

网上搜索这个问题，答案都是挺多的， 赞成数最多的方案：
```sh
# @see https://stackoverflow.com/questions/32728860/php-7-rc3-how-to-install-missing-mysql-pdo

# 第一步安装
apt-get install php7.3-mysql

#第二步 激活

# phpenmod@see https://tecadmin.net/enable-disable-php-modules-ubuntu/
phpenmod pdo_mysql

ln: failed to create symbolic link '/etc/php/7.3/cli/conf.d/20-pdo_mysql.ini': Permission denied
rm: cannot remove '/var/lib/php/modules/7.3/cli/disabled_by_admin/pdo_mysql': Permission denied

# 可以看出来这一步会在/etc/php/7.3/cli/conf.d/ 中创建一个符号链接 到/etc/php/7.3/mods-abailable/pdo_mysql.so
# 同时创建 /var/lib/php/modules/7.3/cli/enabled_by_admin/pdo_mysql

# 权限不够sudo
sudo phpenmod pdo_mysql
# 第三步 重启
sudo service apache2 restart
```

然后不幸的是还是失败了！！

我观察`/etc/php/7.3`中的目录 发现有个fpm。  fpm 和 cli 目录下都有php.ini 文件？

**我的PHP 使用的是 apache2 fast-cgi php-fpm 方式启动的，那么配置完三个步骤我只是重启了apache， php-fpm 是不是也要重启？**

```sh
sudo service php7.3-fpm restart
```

OK!! 成功了。

10. Mysql 链接不上

`ERROR 1698 (28000): Access denied for user 'root'@'localhost'`

@see https://stackoverflow.com/questions/39281594/error-1698-28000-access-denied-for-user-rootlocalhost

11. `php -r 'phpinfo();' | grep 'mysql'`

## 调试

xdebug 安装文档 https://xdebug.org/docs/install#compile

vscode xdebug 文档 https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug

#### pecl安装php扩展
Pecl全称The PHP Extension Community Library，php社区扩展库，由社区编写，维护。

使用pecl方便之处在于我们不用到处找源码包下载编译，配置，不用手动phpize,configure,make,make install,自动识别模块安装路径，

我们只需要编辑php.ini配置文件开启扩展，当然我们也需要自己配置一些参数的时候可以先下载源码再构建

https://www.cnblogs.com/hk-faith/p/8777289.html

## Composer

1. php composer.phar update 时候warning: `Failed to download phpunit/phpunit-mock-objects from dist: The zip extension and unzip command are both missing, skipping.`

解决：没有安装zip导致的。 `sudo apt-get install zip`