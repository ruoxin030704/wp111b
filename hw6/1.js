function vadd(a,b){
    let r = []
    for (let i=0; i<a.length; i++){
        r[i] = a[i]+b[i]
    }
    return r
}

let v1 =[8,5],v2=[9,7]
console.log('vadd(v1,v2)=', vadd(v1,v2))

//老師範例改數字測試