function isPrime(n) {
  for (let i=2; i<n; i++){
    if (n%i === 0)return false
  }
  return true
}

console.log('isPrime(7)=',isPrime(7))
console.log('isPrime(9)=',isPrime(9))
console.log('isPrime(285)=',isPrime(285))
console.log('isPrime(9785)=',isPrime(9785))

//老師上課範例，只有改數字測試