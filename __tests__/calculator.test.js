const calculator  = require("../calculator")
describe("Validate The String Field" ,()=>{

    describe("If Has Smaller Then 2 Numbers ",()=>{
        test('Check If String is Empty ', () => { 
            const result = calculator()
            expect(result).toBe(0)
            const input = ""
            const result2 = calculator(input)
            expect(result2).toBe(0)
            const input3 = "    "
            const result3 = calculator(input3)
            expect(result3).toBe(0)
         })
         test('Check If String Has Spaces ', () => { 
            const input = " 1 "
            const result1 = calculator(input)
            expect(result1).toBe(1)
            const input2 = " 1,2 "
            const result2 = calculator(input2)
            expect(result2).toBe(3)
         })
         test('Check If String Has One Number  ', () => { 
            const input = "1"
            const result1 = calculator(input)
            expect(result1).toBe(1)
         })
         test('Check If String Has Two Numbers  ', () => { 
            const input = "1,2"
            const result1 = calculator(input)
            expect(result1).toBe(3)
         })
    })
    describe("Check If I Passed unknown amount of numbers",()=>{
        test('Check If String Has More Than 2 Numbers  ', () => { 
            const input = "1,2,3,4"
            const result1 = calculator(input)
            expect(result1).toBe(10)
         })
    })

    describe("Check If I Passed Not numbers",()=>{
        test('Check If String Has 1 Letter Only ', () => { 
            const input ="a"
            expect(()=>calculator(input)).toThrow("Invalid Input. Only numbers allowed.")
         })
         test('Check If String Has 2 Letters Only ', () => { 
            const input ="ab"
            expect(()=>calculator(input)).toThrow("Invalid Input. Only numbers allowed.")
         })
        test('Check If String Has One Letter , One Symbol ', () => { 
            const input ="1,2,a,4 ,!"
            expect(()=>calculator(input)).toThrow("Invalid Input. Only numbers allowed.")
         })
    })

    describe("Check If I Passed Negative numbers",()=>{
        test('Check If String was Negative Number Only ', () => { 
            const input = "-4"
            expect(()=>calculator(input)).toThrow('Negatives Not Allowed');
         })
        test('Check If Passed One Negative Number', () => { 
            const input = "1,2,-3,4"
            expect(()=>calculator(input)).toThrow('Negatives Not Allowed');
         })
         test('Check If Passed 4 Negative Numbers', () => { 
            const input = "1,-2,3,-4,10,-5,9,-1"
            expect(()=>calculator(input)).toThrow('Negatives Not Allowed');
         })
    })
    describe("Check If I Passed numbers Bigger Than 1000",()=>{
        test('If String was 1000', () => { 
            const input = "1000"
            const result = calculator(input)
            expect(result).toBe(1000);
         })
         test('If I Passed Number Bigger Than  1000 ', () => { 
            const input = "2,1001"
            const result = calculator(input)
            expect(result).toBe(2);
         })
         test('If I Passed Number Bigger Than  1000 With Spaces ', () => { 
            const input = "  2   ,    1001    ,    3    "
            const result = calculator(input)
            expect(result).toBe(5);
         })
         test('If I Passed Numbers Bigger Than  1000 ', () => { 
            const input = "2,1001,3,2000"
            const result = calculator(input)
            expect(result).toBe(5);
         })
    })

})
