Server installation guidence:
1) please install node.js for your PC

==================================
For Windows XP 32 bit:

a) создай папку Nodejs в системной папке: C:\Program Files (x86)\Nodejs
b) скачай файл "node_pdb.zip" с сайта:
https://nodejs.org/dist/latest-v4.x/win-x86/
c) распакуй скаченный файл в созданную папку  C:\Program Files (x86)\Nodejs
d) в свойствах системных переменных для переменной 'PATH' добавить путь к Nodejs указав путь к папке где находиться Nodejs : "C:\Program Files (x86)\Nodejs"

****
* Внимание: инструкция как открыть системные переменные в Windows XP:
* https://www.computerhope.com/issues/ch000549.htm#windowsxp
****

e) для проверки что все работает правильно необходимо перейти в командную строку и набрать команду: node -v
При правильной установке в командной строке должна появиться версия node.js 

************************************

For Windows 7 and higher

  a) go to the link https://nodejs.org/en/download/
  b) download version for your operation system (for example Win 7 / 64 bit)
  c) install with default preferences
  d) once installed check if you properly installed "node.js" and node package manager "npm" by openning command line (cmd) and typing in command line two commands (one by one):
   d.1) node -v
   d.2) npm -v
  If node.js is properly installed, in both cases it should type the installed versions

===================================

2) in command line navigate to the root of your project: cd c:/my/project/path
and navigate into server folder: cd server

3) in command line (inside server folder) type: 
   npm install 
   
  it will install all dependencies
*****
* Attention: you do not need to install any dependencies if you are using Win XP
*****

4) in command line (inside server folder of the root of your project) type
  node app

  it should start server. 
  Now you can try submit your application and server will return back to browser submitted data and also will log information in command line.

  Enjoy coding!

