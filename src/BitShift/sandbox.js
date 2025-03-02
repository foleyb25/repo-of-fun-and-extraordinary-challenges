

function sandbox(n) {
    let bit = -1
    bit>>>=1
    console.log(bit)
    
    console.log( (2**31 - 1).toString(2))
}

let val = 43261596
sandbox(val)