# 在做TikTok时需要用到的,苹果手机与笔记本电脑无线互联的方法

Source: https://zhuanlan.zhihu.com/p/574540807

首先前提条件是在同一个局域网（WIFI下）：

苹果手机和电脑互联的前提是要在一个局域网内

苹果手机与电脑互联传输数据：

- 首先在电脑建一个文件夹并共享。在目标文件夹上，点右键依次点击-->点属性-->点共享-->点高级共享-->勾选共享此文件夹-->点权限-->完全控制-->点允许，-->最后应用+确定。即可！！

![](https://pica.zhimg.com/v2-b9c3a70e8212415957b19373631fcf40_720w.jpg?source=d16d100b)

点击应用-确定

Tiktok上架共享文件设置[/caption]

- 苹果手机上打开文件（files），-->点右上角3个点图标，-->点连接服务器（connect to server）；
- 输入服务器 IPv4地址， IPv4地址如何查找，方法如下：
- 输入服务器IP地址，就是上面电脑的IP地址，一般是192.168.x.x的格式，再点连接（connect）；
- [caption id="attachment\_2100" align="alignnone" width="428"]
- win键+R 运行栏 输入cmd,-->点击确定,

![](https://picx.zhimg.com/v2-4f910612f70179d4882b0e6530bf4400_720w.jpg?source=d16d100b)

cmd

WIN键+R 输入cmd[/caption] ----> 输入 ipconfig/all --> 点击Enter键

![](https://pic1.zhimg.com/v2-22846a756f944dc804a92daad70de6bd_720w.jpg?source=d16d100b)

输入 ipconfig/all

在窗口中输入ipconfig/all，就可以看到当前服务器的IP地址；

- [caption id="attachment\_2102" align="alignnone" width="677"]

![](https://picx.zhimg.com/v2-d189fa9f445baee78f372af7bed897fe_720w.jpg?source=d16d100b)

看到当前服务器的IPv4地址[/caption]192.168.309.33

- 选择注册用户（registered user），输入名称（name）和密码（password），就是你登录电脑的账号密码，如果没有密码，最好先设一个，点下一步（next）；就能看到电脑上共享的文件夹了
