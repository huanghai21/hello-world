## 题目分析

IPV4是32位二进制的数，共约有42.9亿种可能性
> Math.pow(2, 32)=4294967296
分成4部分，每一部分有8位二进制构成，为了便于人类阅读，需要转换成十进制显示。
所以IP地址 `1.2.4.8` 的二进制也就是 `00000001.00000010.00000100.00001000`

## 解题思路

### Solution 0

找出[0, 2^32-1]中所有的二进制回文字符串
8个一组分成4组，并转换成十进制后存为长度为4的数组arr
找出拼接成字符串之后长度为10的并且0-9只出现一次的target数组

这种做法很慢很慢，需要遍历42.9亿种可能性

### Solution 1

利用排列组合的排列(permutation)公式，找出[0-9]排列的所有可能，362万种左右 10! = 10*9*8*7*6*5*4*3*2*1 = 3628800
将这10位数拆分成4部分，并且保证它是合理的IP地址
将IP地址转换成二进制，找出所有的回文

看似将可能性从亿降至百万级别，但是不具备可操作性，而且不准确。
`将这10位数拆分成4部分，并且保证它是合理的IP地址`对应着组合公式 10!/4!*(10-4)! = 210
每一个排序又对应着210种拆分可能性，也就是总的可能性变成了3628800*210 = 762048000 7.6亿
并且，如何拆解，如何判定一个IP地址是合法的IP地址也都挺麻烦的

### Solution 2 正确的解题思路

逆向思维
先将IP分成4组 并且用二进制显示
> 00000001.00000010.00000100.00001000
如果是回文，第一部分和第四部分肯定是对称的，第二部分和第三部分也是对称的，即
> 1 4对称，2 3对称 （2^8=256种可能性）
同理，也可以知道
> 1+2 和 3+4对称（2^16=65536种可能性）
需要考虑的可能性成指数级下降