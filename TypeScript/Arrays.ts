function twoSum(nums: number[], target: number): number[] {
  var length = nums.length;
  var map: Map<any, any> = new Map();
  for (let i = 0; i < length; i++) {
    var complement: number = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(complement, i);
  }
  return [];
}

function longestConsecutive(nums: number[]): number {
  var hashSet: Set<number> = new Set();
  var longestConsecutiveConsecutive = 0;
  nums.forEach((number: number) => {
    hashSet.add(number);
  });
  hashSet.forEach((num: number) => {
    var counter = 0;
    if (!hashSet.has(Number(num) - 1)) {
      let curr: number = Number(num);
      while (hashSet.has(curr)) {
        curr++;
        counter++;
      }
      longestConsecutiveConsecutive = Math.max(
        longestConsecutiveConsecutive,
        counter
      );
    }
  });
  return longestConsecutiveConsecutive;
}

function repeatedNumber(A: number[]) {
  var length = A.length;
  var repeatedNumber = 0;
  var arraySum = 0;
  var missingNumber = 0;
  var map:any = {};
  
  A.map((x:any) => {
    if (map[x]) {
      map[x]++;
      if (map[x] > 1) {
        repeatedNumber = x
      }
    } else {
      map[x] = 1;
    }
    arraySum += x
  })
  var sum = (length * (length + 1)) / 2;
  arraySum = arraySum - repeatedNumber;
  missingNumber = sum - arraySum;
  return [ repeatedNumber, missingNumber ]
}

function firstMissingPositive(nums: number[]): number {
  var length = nums.length;

  for (let i = 0; i < length; i++) {
    while (nums[i] > 0 && nums[i] - 1 < length && nums[i] != nums[nums[i] - 1]) {
      let temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    }
  }

  for (let i = 0; i < length; i++) {
    if (nums[i] != i + 1) {
      return i + 1;
    }
  }

  return length + 1;
}

function myAtoi(s: string): number {
  var negative = false;
  var ans = "";
  for (let i = 0; i < s.length; i++){
    if (!isNaN(parseInt(s[i]))) {
         ans+=s[i]
    } else if (s[i] != " " && s[i] != "-" && s[i] != "+"  && ans.length == 0) {
      return 0
    }
    
    if(s[i]=="-") negative = true;
  }
  console.log(ans);
  
  if(parseInt(ans) < Math.pow(-2,31)) return Math.pow(-2,31)
  if(parseInt(ans) > Math.pow(2,31) -1) return Math.pow(2,31)-1
  return negative? 1-(parseInt(ans)+1):parseInt(ans);
}

function RotateImage(nums:any) {
  let n = nums.length;
  
  for (let i = 1; i < n; i++){
    let k = 0;
    let j = i;

    let m = nums.length-1;
    let l = i;

      while (k < j && k < n && k != j) {
        let temp = nums[j][k]
        nums[j][k] = nums[k][j];
        nums[k][j] = temp
        k++;
        j--;
    }
        while (m > l && m != l && m > 0 && l > 0) {
        let temp = nums[m][l]
        nums[m][l] = nums[l][m];
        nums[l][m] = temp
        m--;
        l++;
    }

  }

  for (let i = 0; i < n; i++){
    let m = 0;
    let l = nums.length-1;
    while (m < l) {
      let temp = nums[i][m];
      nums[i][m] = nums[i][l];
      nums[i][l] = temp;
      l--
      m++;
    }
  }

  console.log(nums)
} 

function merge(nums:number[], low:number, mid:number, high:number) {
  let k = low;
  let i = low;
  let j = mid+1;
  let temp: number[] = [];
  let cnt = 0;

  let p = low;
  let q = mid + 1;

  while (p <= mid && q <= high) {
    if (nums[p] > (nums[q] * 2)) { 
      cnt += (mid - p + 1)
      q++;
    } else {
      p++;
    }

  }
    while (i <= mid && j <= high) { 
   
    if (nums[i] >nums[j]) {
      temp[k] = nums[j];
      j++;
    } else {
      temp[k] = nums[i];
      i++;
    }
    k++;
  }

  if (i > mid) {
    while (j <= high) {
      temp[k] = nums[j];
      j++;
      k++;  
     
    }
  } else {
     while (i <= mid) {
      temp[k] = nums[i];
      i++;
       k++;
    }
  }

  for (let c = low; c <= high; c++){
    nums[c] = temp[c];
  }
  return cnt
}

function mergeSort(nums: number[], low: number, high: number,) {
  let cnt = 0;
  if (low < high) {
    let mid =  Math.floor((low + high) / 2);
    cnt += mergeSort(nums, low, mid)
    cnt += mergeSort(nums, mid + 1, high);
    cnt += merge(nums, low, mid, high);
  }
  return cnt
}

function mergeIntervals(intervals: number[][]): number[][] {
  let j = 0;
  while (j < intervals.length-1) {
    if (intervals[j][1] >= intervals[j + 1][0]) {
      let min = Math.min(intervals[j][0], intervals[j + 1][0]);
      let max = Math.max(intervals[j][1], intervals[j + 1][1]);
      intervals.splice(j,1);
      intervals.splice(j,1);
      intervals.splice(j,0,[min,max])
    } else {
      j++;
    }
  }
  return intervals
};

function searchMatrix(matrix: number[][], target: number): boolean {
  let length = matrix.length;
  for (let i = 0; i < length; i++) { 
    let start = 0;
    let end = matrix[i].length-1;
    while (start < end) { 
      let mid = Math.floor((start + end) / 2);

      if (matrix[i][mid] == target) return true;
      
      if (matrix[i][mid] > target) end = mid - 1;

      if (matrix[i][mid] < target) start = mid + 1;
    }
  }
  return false;
};

function setZeroes(matrix: number[][]): void {
  let col0 = 1;
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0) {
        if (j != 0) {
          matrix[0][j] = 0
        } else {
          col0 = 0;
        }
          matrix[i][0] = 0
      }
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if ( matrix[0][j] == 0 || matrix[i][0] == 0) {
          matrix[i][j] = 0
        }
      }
  }
  
  if (matrix[0][0] == 0) {
    for (let i = 0; i < matrix[0].length; i++) matrix[0][i] = 0;
  }

   if (col0 == 0) {
    for (let i = 0; i < matrix.length; i++) matrix[i][0] = 0;
  }
   console.log(matrix)
}

function removeDuplicates(nums: number[]): number {
    let i =0;
     while(i<nums.length){
         if(nums[i]==nums[i-1])
             nums.splice(i-1,1)
         else
             i++
     }
    
    return nums.length
};

function findMaxConsecutiveOnes(nums: number[]): number {
      let ans = 0;
    let counter = 0;
    
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1) {counter++}
        else{ counter=0}
        
        ans = Math.max(ans,counter)
    }
      return ans
};

let matri = [[1],[0],[1]]
console.log(setZeroes(matri));












































































