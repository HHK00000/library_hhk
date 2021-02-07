# coding=utf-8
#通过多个图片链接批量爬取图片并以特定名称命名
#Author Your_Majesty！ (王原)
#2020/10/15
import urllib.request
print("Let's do it!")#开始提示
path = r"E:\code_personal\normal\library_hhk\13python\01"#图片链接文件所在路径
f_pic = open(path + "/url.txt", "r")#图片链接文件名
file_pic = f_pic.readlines()# 表示读取文件所有行内容
list_pic = []#将图片链接存放在列表中
for t in file_pic:#遍历文件中每个链接
    if t[-1] == '\n':
        x = t[:-1]
    else:
        x = t[:]
    list_pic.append(x)
#print(list(list_pic))
f_pic.close()

path_name = r"E:\code_personal\normal\library_hhk\13python\01"#图片名字文件所在路径
f_name = open(path_name + "/name.txt", "r")#图片名字文件名
fi_name = f_name.readlines()# 表示读取文件所有行内容
list_name = []#将图片名存放在列表中
for j in fi_name:#遍历文件中每个名字
    if j[-1] == '\n':
        y = j[:-1]
    else:
        y = j[:]
    list_name.append(y)
f_name.close()

k = 0#图片列表索引
for i in list_pic:#图片和名字组合
    k += 1
    file_name = path + r"\%s.jpg"%(list_name[k])
    print(file_name)
    urllib.request.urlretrieve(i, filename=file_name)
print("You made it!")#结束提示(此代码不会出现该提示)。