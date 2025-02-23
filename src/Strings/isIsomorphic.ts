/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s: string, t: string) {
    if(s.length !== t.length) return false
    let sArr: Array<string> = s.split('')
    let tArr: Array<string> = t.split('')
    let charMapping: Record<string,string> = {}

    for(let i = 0; i < sArr.length; i++) {
        let sChar = sArr[i]
        let tChar = tArr[i]

        if (charMapping[sChar] === undefined) {
            if(Object.values(charMapping).includes(tChar)) continue
            charMapping[sChar] = tChar
        } 
    }
    let strbld = "" //If strings are large this operation can get expensive. Better to use strBuilder class
    for(let i = 0; i < sArr.length; i++) {
        strbld += charMapping[sArr[i]]
    } 
    return (t === strbld)
};

console.assert( isIsomorphic("title", "paper") === true)
console.assert( isIsomorphic("foo", "bar") === false)