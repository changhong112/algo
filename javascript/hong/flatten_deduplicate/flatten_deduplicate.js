// 一个正整数数组例如[1, 2, 3, 4, 5]、[1, 1, 100], [50, 50, 100]等
// 每隔一秒可以操作数组中的任意两项减一（最多两项，也可以只操作一项）
// 问：最少需要多少秒，使得数组中的所有数都变成0

// 在不使用任何数组API的前提下，实现一个数组拍平且去重的方法：[1,2,3,[4,5,6, [7,8]], [9, 8], 7, [6], 5]
// 遍历嵌套的数据结构，树只是嵌套数据结构中的一种

let arr = [1, 2, 3, [4, 5, 6, [7, 8]], [9, 8], 7, [6], 5];

module.exports = {
  arr
};

/**
 * 拍平嵌套的数组：
 * 1，只是用函数进行递归，内部使用指针递增来模拟for循环功能
 * 2，模拟栈调用过程深度优先遍历
 * 3，模拟队列处理过程广度优先遍历
 * 4，使用函数结合for循环遍历
 * 5，原地拍平
 */






