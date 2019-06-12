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