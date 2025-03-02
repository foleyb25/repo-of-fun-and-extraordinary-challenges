/**
 * @param {string} columnTitle
 * @return {number}
 * 
 * Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.
 */
var titleToNumber = function(columnTitle: string): number {
    //convert from Base 26 to base 10
    function mapVal(char: string) {
        let map: {[index:string]: number} = {
            "A": 1,
            "B": 2,
            "C": 3,
            "D": 4,
            "E": 5,
            "F": 6,
            "G": 7,
            "H": 8,
            "I": 9,
            "J": 10,
            "K": 11,
            "L": 12,
            "M": 13,
            "N": 14,
            "O": 15,
            "P": 16,
            "Q": 17,
            "R": 18,
            "S": 19,
            "T": 20,
            "U": 21,
            "V": 22,
            "W": 23,
            "X": 24,
            "Y": 25,
            "Z": 26
        }
        return map[char]
    }
    let sum: number = 0
    let multiplier: number = 1
    for(let i = columnTitle.length-1; i >= 0; i--) {
        sum += mapVal(columnTitle[i]) * multiplier
        multiplier *= 26
    }
    return sum
};