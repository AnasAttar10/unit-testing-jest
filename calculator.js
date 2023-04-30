const calculator  = function (str){ 
    if(str == undefined || str == false ) return 0 ;
    str=str.trim()
    if(str.length === 1)
    {
        if ( ! parseInt(str))
            throw Error("Invalid Input. Only numbers allowed.")
        else
            return parseInt(str)
    }
    const numbers = str.split(",")
    return numbers.reduce((sum , num)=>{
        num = parseInt(num) 
        if(!num)throw Error("Invalid Input. Only numbers allowed.")
        else if(num < 0) throw Error("Negatives Not Allowed")
        else if(num > 1000 ) sum += 0
        else  sum+=num
        return sum 
    } , 0)

}
module.exports = calculator