/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex: number) {
    if (rowIndex === 0) return [1]
    let triangle: Array<Array<number>> = [[1]]
    triangle.push([1,1])
    let row: number = 2
    while (triangle.length <= rowIndex) {
        //insert 1,s on each end and make array of size row
        let newRow = []
        for(let i = 0; i <= row; i++) {
            if(i === 0) {
                newRow.push(1)
                continue
            }
            if(i === row) {
                newRow.push(1)
                break
            } 
            //add the previous col values
            newRow.push( (triangle[row-1][i-1] + triangle[row-1][i]) )
        }
        triangle.push(newRow)
        row++
    }

    return triangle.pop() 
};