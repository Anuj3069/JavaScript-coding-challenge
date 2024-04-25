//  find largest string


let input="100 Days of JavaScript dxddddCoding Challenges || Day #1"

function largestString(input){
    if(input.trim()==0){
        console.log("string is empty")
    }else{
        let largestStringValue=input.split(' ').sort((a,b)=>
            b.length-a.length
        )
        console.log(largestStringValue[0])
        return largestStringValue
       
    }

}
largestString(input)