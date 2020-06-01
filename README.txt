MasterProgram文件夹：后端字体识别的主程序，Python3编写，用于字体识别，配置环境Python3.7。其中，程序入口为Font_Recognition.ipynb，font_patch中保存了经过旋转、加噪、模糊、底纹等方式增强的训练集，sample中保存了用于实验的示例图片。

训练完成的模型可至百度云https://pan.baidu.com/s/1l0Dl8AFCaBQ9ad9qNuke9A处自行下载，提取码为oug7，或联系作者获取。下载完成后的模型保存至./MasterProgram/model文件夹中。

WeChatSmartAPP文件夹：微信小程序前端，用于与用户的交互。利用微信开发者工具打开，程序入口为app.json。利用微信扫码登陆后申请测试ID，联系作者获得权限后即可进行真机调试。端口号需修改为本地计算机中封装好的后端程序所对应的目录。

demo文件夹：WeChatSmartAPP为前端交互的录屏演示。

#联系作者：haiantanxiao@whu.edu.cn