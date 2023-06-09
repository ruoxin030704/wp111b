function vdot(a, b) {
    if (a.length !== b.length) {
      throw new Error('向量長度不相等');
    }
  
    let result = 0;
  
    for (let i = 0; i < a.length; i++) {
      result += a[i] * b[i];
    }
  
    return result;
  }
  
const vector1 = [2,1,8];
const vector2 = [8,5,6];
  
const result = vdot(vector1, vector2);
console.log(result);
  