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