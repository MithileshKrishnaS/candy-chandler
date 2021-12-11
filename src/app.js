//challenge 1 

function slice1(foods){
    var  modifiedFood = foods.slice(1,4);
    return modifiedFood;
    
}

//challenge 2

function splice1(foods){
    foods.splice(2, 0, "noodles", "icecream");
    modifiedFood = foods;
    return modifiedFood;
}

//challenge 3

function checkEven(num)
{
    return num%2==0;
}

function checkPrime(num)
{
    let count=0;
    for(let i=2;i<num-1;i++)
    {
        if(num%i==0)
        {
            count++;
        }
        if(count>=1)
        {
            return num;
        }   
    }
}

//challenge 4

function checknonPrime(num)
{
    let count=0;
    for(let i=2;i<num-1;i++)
    {
        if(num%i==0)
        {
            count++;
        }     
    }
    if(count<1)
    {
        return num;
    } 
}

//challenge 5

var anon = a => {
    var b=[];
    for(let i=0;i<a.length;i++)
    {
        
        if(a[i]%2==0)
        {
            b.push(a[i]);
        }
       
    }
    return b;
};

//challenge 6

function multiply(num) {
    return num * num;
}

//challenge 7

function  multiply(myArray)
{
    var val = myArray.reduce((prev, curr) => prev * curr);
    return val;
}


function multiply1(myArray)
{
    var b = myArray.map(x => x * 2);
    var val = b.reduce((prev, curr) => prev * curr);
    return val;
}
