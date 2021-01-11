## 1.启动MYSQL服务器
- 使用 winmysqladmin
- DOS方式下运行 d:/mysql/bin/mysqld （具体路径为mysql安装路径）
## 2.进入mysql交互操作界面
- 在DOS方式下，(在mysql安装目录下，如 C:\Program Files\MySQL\MySQL Server 5.5\bin) 运行语句： mysql -u root -p  输入密码即可
## 3.退出MYSQL操作界面
- quit  在mysql>quit提示符下，输入quit可以随时退出交互操作界面
## 4.第一条MYSQL命令
- mysql>select version(),current_date(); 此命令要求mysql服务器输出它的版本号和当前日期
- 练习其它指令：select (20+5)*4;  select (20+5)*4,sin(pi()/3);  --- 如果结尾不加分号，则mysql视为你还会继续输入指令
![Image text](http://hanhuankang.com/images/mysql/mysql01.png)
## 5.多行语句 
- 一条语句可以分成多行输入，知道出现分号“;”为止
- mysql的关键字是不区分大小写的，如：select、from、where、group by、order by、having、update delete、insert into、sum、avg、min、max等等；查询内容是区分大小写的，如表明、字段名、内容等
## 6.查看当前所有数据库
- 使用show语句找出服务上当前存在什么数据库：  mysql>show databases;
## 7.创建一个数据库
- mysql>create databse hhk01; --- 创建一个名为 hhk01 的数据库，注意不同操作系统对大小写的敏感
## 8.选择创建好的数据库
- mysql>use hhk01  --- 此时进入你所创建好的数据库hhk01,注意，不需要加分号
## 9.创建一个数据库表
- 首先看现在数据库中存在什么表： mysql>show tables;
- 创建一个员工的生日表：mysql>create table mytable (name varchar(20),sex char(1)),birth date,birthaddress varchar(20)); 
## 10.显示表的结构
- mysql>describe mytable; 
## 11.查询所有数据
- mysql>select * from mytable;
## 12.增加记录
- mysql>insert into test3 values('abs');
![Image text](http://hanhuankang.com/images/mysql/mysql02.png)
## 13.选择特定行
- mysql>select * from mytable where name = 'tom';
- where的参数指定了检索条件，还可以用组合条件来进行查询：
- mysql> select * from mytable where sex = "f" and birthaddress = "china";
![Image text](http://hanhuankang.com/images/mysql/mysql03.png)
## 14.多表操作
- 创建好两个表格 create table selfinfo (name varchar(20),sex char(1),birth DATE,address varchar(20));  create table scoreinfo (name varchar(20),score char(20));
- 查询单个表格信息：mysql>select * from selfinfo; mysql>select name,sex from selfinfo where name='tom';
- 查询多个表 mysql>select name,score,sex,brith,address from selfinfo,scoreinfo where name=student and name='tom';  --- where name=student表示两个表的这两个字段值相等
![Image text](http://hanhuankang.com/images/mysql/mysql04.png)
## 15.增加一列
## 在table表中增加一列：mysql>alter table scoreinfo add column level char(1);
![Image text](http://hanhuankang.com/images/mysql/mysql05.png)
## 16.修改记录
- mysql>update mytable set birth = "1973-09-02" where name = "tom";
## 17.增加记录

## 18.删除记录
- 删除表中的一条记录： mysql>delete from scoreinfo where name='hanke';
![Image text](http://hanhuankang.com/images/mysql/mysql06.png)
## 19.删除表
- 删除一个或多个表：mysql>drop table scoreinfo,selfinfo;
![Image text](http://hanhuankang.com/images/mysql/mysql07.png)
## 20.数据库的删除
- 查看所有数据库： mysql>show databases;
- 删除数据库：mysql>drop database test,hhk01;
![Image text](http://hanhuankang.com/images/mysql/mysql08.png)
## 21.数据库的备份
- 退回到DOS：mysql>quit
- 使用命令对数据库hhk02进行备份：mysql>mysqldump -u root -pxxx hhk02>hhk02.sql
- 使用命令对数据库hhk02进行还原，先创建一个空数据库hhk03：mysql>mysql -u root -pxxx hhk03<hhk02.sql
- hhk02.sql就是数据库hhk02的备份文件
![Image text](http://hanhuankang.com/images/mysql/mysql09.png)
![Image text](http://hanhuankang.com/images/mysql/mysql10.png)
## 22.用批处理方式使用MySQL
## 23.先用root登录到mysql
## 24.创建一个用户
![Image text](http://hanhuankang.com/images/mysql/mysql20.png)