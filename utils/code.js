
var code = [
  { "id": "8", "bookName": "深入理解计算机系统（原书第2版）", "grade": "9.7", "gradeNum": "1196", "author": "作者/译者： （美）Randal E.Bryant / David O'Hallaron / 龚奕利 / 雷迎春 ", "publish": "出版信息：  机械工业出版社 / 2011-1-1 / 99.00元" },
  { "id": "15", "bookName": "The  C Programming Language", "grade": "9.6", "gradeNum": "1005", "author": "作者/译者： Brian W. Kernighan / Dennis M. Ritchie ", "publish": "出版信息：  Prentice Hall / 1989-03-01 / $48.67" },
  { "id": "26", "bookName": "计算机程序的构造和解释", "grade": "9.5", "gradeNum": "1382", "author": "作者/译者： Harold Abelson / Gerald Jay Sussman / Julie Sussman / 裘宗燕 ", "publish": "出版信息：  机械工业出版社 / 2004-02-01 / 45.00元" },
  { "id": "27", "bookName": "深入理解计算机系统", "grade": "9.5", "gradeNum": "2291", "author": "作者/译者： Randal E.Bryant / David O'Hallaron / 龚奕利 / 雷迎春 ", "publish": "出版信息：  中国电力出版社 / 2004-5-1 / 85.00元" },
  { "id": "53", "bookName": "C程序设计语言", "grade": "9.4", "gradeNum": "3214", "author": "作者/译者： （美）Brian W. Kernighan / （美）Dennis M. Ritchie / 徐宝文 / 李志 ", "publish": "出版信息：  机械工业出版社 / 2004-1-1 / 30.00元" },
  { "id": "54", "bookName": "算法导论（原书第2版）", "grade": "9.4", "gradeNum": "4304", "author": "作者/译者： [美] Thomas H.Cormen / Charles E.Leiserson / Ronald L.Rivest / Clifford Stein / 潘金贵 等 ", "publish": "出版信息：  机械工业出版社 / 2006-9 / 85.00元" },
  { "id": "55", "bookName": "UNIX环境高级编程", "grade": "9.4", "gradeNum": "1864", "author": "作者/译者： W.Richard Stevens / Stephen A.Rago / 尤晋元 / 张亚英 / 戚正伟 ", "publish": "出版信息：  人民邮电出版社 / 2006年 / 99.00元" },
  { "id": "84", "bookName": "代码大全（第2版）", "grade": "9.3", "gradeNum": "2941", "author": "作者/译者： [美] 史蒂夫·迈克康奈尔 / 金戈 / 汤凌 / 陈硕 / 张菲 译 / 裘宗燕 审校 ", "publish": "出版信息：  电子工业出版社 / 2006-3 / 128.00元" },
  { "id": "130", "bookName": "编程珠玑", "grade": "9.2", "gradeNum": "1535", "author": "作者/译者： Jon Bentley / 黄倩 / 钱丽艳 ", "publish": "出版信息：  人民邮电出版社 / 2008-10 / 39.00元" },
  { "id": "131", "bookName": "编码", "grade": "9.2", "gradeNum": "1015", "author": "作者/译者： [美] 佩措尔德 (Charles Petzold) / 左飞 / 薛佟佟 ", "publish": "出版信息：  电子工业出版社 / 2010 / 55.00元" },
  { "id": "132", "bookName": "Head First 设计模式（中文版）", "grade": "9.2", "gradeNum": "1866", "author": "作者/译者： 弗里曼 / O'Reilly Taiwan公司 ", "publish": "出版信息：  中国电力出版社 / 2007-9 / 98.00元" },
  { "id": "133", "bookName": "鸟哥的Linux私房菜.基础学习篇（第三版）", "grade": "9.2", "gradeNum": "1625", "author": "作者/译者： 鸟哥 ", "publish": "出版信息：  人民邮电出版社 / 2010-6-28 / 88.00元" },
  { "id": "134", "bookName": "C++ Primer 中文版（第 4 版）", "grade": "9.2", "gradeNum": "3848", "author": "作者/译者： Stanley B.Lippman / Josée LaJoie / Barbara E.Moo / 李师贤 / 蒋爱军 / 梅晓勇 / 林瑛 ", "publish": "出版信息：  人民邮电出版社 / 2006 / 99.00元" },
  { "id": "135", "bookName": "TCP/IP详解 卷1：协议", "grade": "9.2", "gradeNum": "1561", "author": "作者/译者： W.Richard Stevens / 范建华 ", "publish": "出版信息：  机械工业出版社 / 2000-4-1 / 45.00元" },
  { "id": "136", "bookName": "C专家编程", "grade": "9.2", "gradeNum": "1552", "author": "作者/译者： Peter Van Der Linden / 徐波 ", "publish": "出版信息：  人民邮电出版社 / 2008-2 / 45.00元" },
  { "id": "142", "bookName": "Effective C++中文版", "grade": "9.2", "gradeNum": "1222", "author": "作者/译者： [美] Scott Meyers / 侯捷 ", "publish": "出版信息：  华中科技大学出版社 / 2001-9 / 49.80元" },
  { "id": "187", "bookName": "设计模式", "grade": "9.1", "gradeNum": "2278", "author": "作者/译者： [美] Erich Gamma / Richard Helm / Ralph Johnson / John Vlissides / 李英军 / 马晓星 / 蔡敏 / 刘建中 等 ", "publish": "出版信息：  机械工业出版社 / 2000-9 / 35.00元" },
  { "id": "188", "bookName": "Java编程思想 （第4版）", "grade": "9.1", "gradeNum": "2148", "author": "作者/译者： [美] Bruce Eckel / 陈昊鹏 ", "publish": "出版信息：  机械工业出版社 / 2007-6 / 108.00元" },
  { "id": "189", "bookName": "JavaScript语言精粹", "grade": "9.1", "gradeNum": "1107", "author": "作者/译者： Douglas Crockford / 赵泽欣 / 鄢学鹍 ", "publish": "出版信息：  电子工业出版社 / 2009年 / 35.00" },


]
module.exports = {
  code: code
}