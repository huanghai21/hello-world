/**
 * IPV4 的 IP 地址是32位的二进制数，为增强可读性，通常我们以8位为1组进行分割，
 * 用十进制来表示每一部分，并用点号连接，譬如 192.168.1.1。显然，存在这样的 IP 地址，
 * 0到9十个数字各出现一次。具备这样特征的 IP 地址里，表示成二进制数时，二进制数左右对称
 * （也就是“回文”，表示成32位二进制不省略0）的情况有几种，分别是哪些？要求性能尽可能高 
 */
function findPalindromeIPList () {
  var palindromePair = _findPalindromePair();
  console.log(`palindromePair length is: `, palindromePair.length, palindromePair);
  return _filterCandidates(palindromePair);
}

function _findPalindromePair () {
  var candidates = [];
  for (var num = 0; num < Math.pow(2, 8); num++) {
    if (_duplicatedNumber(num)) continue;
    var reverseNum = _revertNumber(num);
    if (num === reverseNum) continue;
    var composeNum = [num, reverseNum].join('');
    if (_duplicatedNumber(composeNum)) continue;
    candidates.push([num, reverseNum]);
  }
  return candidates;
}

/**
 * @description: Find out if a number had duplicated digit exist
 * [e.g.]
 * [0-9] return false;
 * [11 | 22 | 121] return true;
 * [123 | 234 | 254] return false;
 * @param {Number} x
 * @return: Boolean value
 */
function _duplicatedNumber (x) {
  if (x < 10) return false; // no duplicated number cause only 1 digit exist

  var map = Object.create(null);
  var arr = x.toString().split('');
  for (var i = 0; i < arr.length; i++) {
    var key = arr[i];
    if (map[key]) return true; // duplicated number exist
    map[key] = true;
  }
  return false;
}

/**
 * @description: convert number to binary string with a fixed size. 
 * It will add '0' if the binary length is less than the fixed size
 * [e.g.]
 * _binaryStr(1, 2) = '01';
 * _binaryStr(1, 4) = '0001';
 * _binaryStr(1, 8) = '00000001';
 * @param {Number} x number to convert
 * @param {Number} size fixed size of the binary string
 * @return: binary string with a fixed size
 */
function _binaryStr (x, size) {
  var binary = x.toString(2);
  while (binary.length < size) {
    binary = '0' + binary;
  }
  return binary;
}

function _binaryStr8Digits (x) {
  return _binaryStr(x, 8);
}

function _revertStr (x) {
  return x.toString().split('').reverse().join('');
}

function _revertNumber (x) {
  var binaryStr = _binaryStr8Digits(x);
  var reverseStr = _revertStr(binaryStr);
  return parseInt(reverseStr, 2);
}

function _filterCandidates (candidates) {
  var result = [];
  for (var i = 0; i < candidates.length; i++) {
    for (var j = 0; j < candidates.length; j++) {
      if (i === j) continue; // no need to compare 2 same candidates
      var composeList = [
        candidates[i][0],
        candidates[j][0],
        candidates[j][1],
        candidates[i][1]
      ];
      const composeNum = composeList.join('');
      if (composeNum.length !== 10) continue; // composeNum length must equal 10
      if (_duplicatedNumber(composeNum)) continue;
      result.push({ [composeList.join('.')]: composeList.map(_binaryStr8Digits).join('.') });
    }
  }
  return result;
}

console.log(`Palindrome IP list is: `, findPalindromeIPList());
