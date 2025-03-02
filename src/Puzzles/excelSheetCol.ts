/**
 * @param {number} columnNumber
 * @return {string}
 * 
 * Converting base 10 value to a psuedo-base 26 value
 * 
 */
var convertToTitle = function(columnNumber: number) {
    //letters in alphabet
    function mapVal(val: number): string {
        let map: {[index:number]:string} = {
            1: "A",
            2: "B",
            3: "C",
            4: "D",
            5: "E",
            6: "F",
            7: "G",
            8: "H",
            9: "I",
            10: "J",
            11: "K",
            12: "L",
            13: "M",
            14: "N",
            15: "O",
            16: "P",
            17: "Q",
            18: "R",
            19: "S",
            20: "T",
            21: "U",
            22: "V",
            23: "W",
            24: "X",
            25: "Y",
            26: "Z"
        }
        return map[val]
    }
    let res: string = ""
    while(columnNumber > 26) {
        let remainder = columnNumber % 26;
        if(remainder !== 0) {
            res = mapVal(remainder)+res
            columnNumber -= remainder
            columnNumber /= 26
        } else {
            // It's key how remainder 0 is handled. If number is divisible by 26, need to pre-pend a 'Z', divide by 26, and subtract 1
            res = mapVal(26)+res //
            columnNumber /= 26
            columnNumber--
        }
    }
    res = mapVal(columnNumber)+res
    return res
};