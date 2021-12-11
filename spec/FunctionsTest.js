//challenge 1 test

describe('Array Slice',function()
{
    it('slice the given array',function()
    {
        const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll']; 
        const foods1 = ['pizza', 'burger', 'fingerChips', 'donuts', 'briyani']; 
        expect(slice1(foods)).toEqual([ 'burger', 'fingerChips', 'donuts' ]);
        expect(slice1(foods1)).toEqual([ 'fingerChips', 'donuts', 'briyani']);
    });
})


//challenge 2 test

describe('Array Splice',function()
{
    it('splice the given array',function()
    {
        const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll']; 
        const foods1 = ['pizza', 'burger', 'fingerChips', 'donuts', 'briyani']; 
        expect(splice1(foods)).toEqual([ 'pizza', 'burger','noodles','icecream', 'fingerChips', 'donuts', 'springRoll' ]);
        expect(splice1(foods1)).toEqual([ 'pizza', 'burger', 'noodles','icecream','fingerChips', 'donuts', 'briyani']);
    });
})


//challenge 3 test

describe('Filter',function()
{
    it('Filter',function()
    {
        const numberArray = [12,324,213,4,2,3,45,4234];
        const numberArray1 = [12,324,213,4,2,3,45,4234,17,19];
        expect(numberArray.filter(checkPrime)).toEqual([ 12, 324, 213, 4, 45, 4234  ]);
        expect(numberArray1.filter(checkPrime)).toEqual([ 12, 324, 213, 4, 45, 4234, 17, 19  ]);
        expect(numberArray.filter(checkEven)).toEqual([ 12, 324, 4, 2, 4234 ]);
        expect(numberArray1.filter(checkEven)).toEqual([ 12, 324, 4, 2, 4234, 19 ]);
    });
})

//challenge 4 test

describe('Reject',function()
{
    it('Reject',function()
    {
        const numberArray = [12,324,213,4,2,3,45,4234];
        const numberArray1 = [12,324,213,4,2,3,45,4234,17,19];
        expect(numberArray.filter(checknonPrime)).toEqual([ 2 ,3 ]);
        expect(numberArray1.filter(checknonPrime)).toEqual([ 2 ,3 ,17, 19  ]);
    });
})

//challenge 5 test

describe('Lambda ',function()
{
    it('Lambda ',function()
    {
        const a=[1,2,3,4,5];
        const numberArray = [12,324,213,4,2,3,45,4234];
        const numberArray1 = [12,324,213,4,2,3,45,4234,17,19];
        expect(anon(a)).toEqual([ 2 ,3 ]);
        expect(anon(numberArray)).toEqual([ 12 ,324 ,4 ,2 ,4234 ]);
        expect(anon(numberArray1)).toEqual([ 12 ,324 ,4 ,2 ,4234  ]);
    });
})

//challenge 6 test

describe('Map',function()
{
    it('Map',function()
    {
        const numbers = [65, 44, 12, 4];
        expect(numbers.map(multiply)).toEqual([ 4225, 1936, 144, 16 ]);
    });
})

//challenege 7 test


describe('Reduce',function()
{
    it('Reduce',function()
    {
        var myArray = [2, 3, 5, 10]; 
        expect(multiply(myArray)).toEqual(300);
        expect(multiply1(myArray)).toEqual(4800);
        expect(multiply1(myArray)).toEqual(4400);
    });
})
