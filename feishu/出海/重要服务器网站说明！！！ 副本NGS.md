---
title: "重要服务器网站说明！！！ 副本NGS"
feishu_url: https://my.feishu.cn/wiki/QbRTwGXQBiSkEbkc3IDcf4qOnMc
obj_type: docx
obj_token: TiVYdA17lo4I9xxCh4mcfN8lnOc
updated: 2026-01-08T12:22:58+08:00
---

# 重要服务器网站说明！！！ 副本NGS

```
轻量应用服务器创建成功
尊敬的腾讯云用户，您好！

       您（账号ID：100044969214，昵称：CC）于2025-11-11 16:23:10下单的轻量应用服务器（共1台）已创建成功（订单号：20251111214114096239801），您可以前往 产品控制台 查看实例，感谢您对腾讯云的支持！

服务器操作系统：OpenCloudOS 9.4

默认用户名：root
登录密码：N7{/(En^drYU_T92

上述密码为系统自动生成，为了您的便捷性与安全性，推荐您使用 重置密码 功能重置实例登录密码。您可以使用腾讯云遨驰终端 一键登录实例 ，或使用 SSH 客户端 远程登录 实例。
```

```
SecretId:AKIDoSqyqTqxwgBQUJsBE2Zqrc8OO9esqY1D
SecretKey:yhDSRAcokQpyqZ2FCtJTMyJPQBftrZ1I
```

```
https://175.24.40.238:9527/tencentcloud
501326938
```

# Bggg

```
version: '3.8'

services:
  # --- 1. bggg 的数据库 (MariaDB) ---
  db_bggg:
    image: mariadb:10.11
    container_name: bggg_db_container
    # 数据卷：数据库文件存在宿主机的 ./database 目录，方便备份
    volumes:
      - ./database:/var/lib/mysql
    # 账号密码：已为你设置好
    environment:
      MYSQL_ROOT_PASSWORD: 'Bggg_DB_RootP@ssw0rd_x2b!'
      MYSQL_DATABASE: 'bggg_wordpress_db'
      MYSQL_USER: 'bggg_wordpress_user'
      MYSQL_PASSWORD: 'Bggg_UserP@ssw0rd_a9c!'
    # 资源限制：(4核4G 服务器)
    mem_limit: 512m          # 最大 512MB 内存
    cpus: '0.5'              # 最大 0.5 个 CPU 核心
    restart: unless-stopped
    networks:
      - bggg_network

  # --- 2. bggg 的 WordPress ---
  wp_bggg:
    image: wordpress:latest
    container_name: bggg_wp_container
    # 数据卷：网站文件存在宿主机的 ./html 目录
    volumes:
      - ./html:/var/www/html
    # 端口映射：暴露 8081 端口给宝塔 Nginx
    ports:
      - "8081:80"
    # 数据库连接：使用上面设置的账号密码
    environment:
      WORDPRESS_DB_HOST: 'db_bggg:3306'  # 'db_bggg' 是上面数据库的服务名
      WORDPRESS_DB_NAME: 'bggg_wordpress_db'
      WORDPRESS_DB_USER: 'bggg_wordpress_user'
      WORDPRESS_DB_PASSWORD: 'Bggg_UserP@ssw0rd_a9c!'
      WORDPRESS_TABLE_PREFIX: 'wp_bggg_' # 数据库表前缀 (可选，但推荐)
    # 资源限制：(4核4G 服务器)
    mem_limit: 768m          # 最大 768MB 内存
    cpus: '1.5'              # 最大 1.5 个 CPU 核心
    restart: unless-stopped
    depends_on:              # 确保数据库先启动
      - db_bggg
    networks:
      - bggg_network

# --- 3. 网络隔离 ---
networks:
  bggg_network:
    driver: bridge
```

![](assets/%E9%87%8D%E8%A6%81%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%BD%91%E7%AB%99%E8%AF%B4%E6%98%8E%EF%BC%81%EF%BC%81%EF%BC%81%20%E5%89%AF%E6%9C%ACNGS_OyAubXhE5o.jpg)

swht ht0b 7arJ lTwJ WbWX k1l8

本地：/www/server/panel/data/compose/bggg

# Cc

```
version: '3.8'

services:
  # --- 1. cc 的数据库 (MariaDB) ---
  db_cc:
    image: mariadb:10.11
    container_name: cc_db_container
    # 数据卷：数据库文件存在宿主机的 ./database 目录
    volumes:
      - ./database:/var/lib/mysql
    # 账号密码：已为你设置好
    environment:
      MYSQL_ROOT_PASSWORD: 'CC_DB_RootP@ssw0rd_y3d!'
      MYSQL_DATABASE: 'cc_wordpress_db'
      MYSQL_USER: 'cc_wordpress_user'
      MYSQL_PASSWORD: 'CC_UserP@ssw0rd_b7z!'
    # 资源限制：(4核4G 服务器)
    mem_limit: 512m          # 最大 512MB 内存
    cpus: '0.5'              # 最大 0.5 个 CPU 核心
    restart: unless-stopped
    networks:
      - cc_network

  # --- 2. cc 的 WordPress ---
  wp_cc:
    image: wordpress:latest
    container_name: cc_wp_container
    # 数据卷：网站文件存在宿主机的 ./html 目录
    volumes:
      - ./html:/var/www/html
    # 端口映射：暴露 8082 端口给宝塔 Nginx (注意：和bggg不同)
    ports:
      - "8082:80"
    # 数据库连接：使用上面设置的账号密码
    environment:
      WORDPRESS_DB_HOST: 'db_cc:3306'  # 'db_cc' 是上面数据库的服务名
      WORDPRESS_DB_NAME: 'cc_wordpress_db'
      WORDPRESS_DB_USER: 'cc_wordpress_user'
      WORDPRESS_DB_PASSWORD: 'CC_UserP@ssw0rd_b7z!'
      WORDPRESS_TABLE_PREFIX: 'wp_cc_' # 数据库表前缀
    # 资源限制：(4核4G 服务器)
    mem_limit: 768m          # 最大 768MB 内存
    cpus: '1.5'              # 最大 1.5 个 CPU 核心
    restart: unless-stopped
    depends_on:              # 确保数据库先启动
      - db_cc
    networks:
      - cc_network

# --- 3. 网络隔离 ---
networks:
  cc_network:
    driver: bridge
```

http://175.24.40.238:8082/

![](assets/%E9%87%8D%E8%A6%81%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%BD%91%E7%AB%99%E8%AF%B4%E6%98%8E%EF%BC%81%EF%BC%81%EF%BC%81%20%E5%89%AF%E6%9C%ACNGS_Bn6Fba6Fco.jpg)

4KC&lJOA$uYeNGou1(

