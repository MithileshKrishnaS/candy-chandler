
function addChocolates(chocolates,color,count)
{
    for(let i=0;i<count;i++)
    {
        chocolates.splice(0,0,color);
    }
    return chocolates;  
}


function removeChocolates(chocolates,numbers)
{
    var c1=chocolates.slice(numbers,chocolates.length);
    chocolates=c1;
    return chocolates;
}

function dispenseChocolates(n,chocolates)
{
    return chocolates.slice(-n);
}

function noOfChocolates(chocolates)
{
    var  a1=[];
    var array=['green', 'silver', 'blue', 'crimson', 'purple', 'red', 'pink'];
    for(let i=0;i<array.length;i++)
    {
       
        var count=0;
        for(let j=0;j<chocolates.length;j++)
        {
            if(array[i]==chocolates[j])
            {
                count++;
            }
        }
        a1.push(count);
    }
    return a1;
} 

function dispenseChocolatesOfColor(chocolate,n,color)
{
    var givenColor=[]
    for(let i=chocolate.length-1;i>=0;i--)
    {
        if(chocolate[i]==color && n!=0)
        {
            givenColor.push(chocolate[i])
            chocolate.splice(i,1)
            n--
        }
    }
    return chocolate;
}

function sortChocolateBasedOnCount(chocolates)
{
    var array=['green', 'silver', 'blue', 'crimson', 'purple', 'red', 'pink'];
    var x=noOfChocolates(chocolates)
    for(let i=0;i<x.length-1;i++)
    {
        for(let j=i+1;j<x.length;j++)
        {
            if(x[i]<x[j])
            {
                let temp=x[i]
                x[i]=x[j]
                x[j]=temp

                let stemp=array[i]
                array[i]=array[j]
                array[j]=stemp
            }
        }
    }

    var result=[]
    for(let i=0;i<array.length;i++)
    {
        for(let j=0;j<x[i];j++)
        {
            result.push(array[i])
        }
    }
    return(result)
}

function changeChocolateColor(chocolates,n,color,finalColor){
    for(let i=0;i<chocolates.length;i++)
    {
         if(chocolates[i]==color && n!=0)
         {
             chocolates[i]=finalColor
             n--;
         }
    }
    return(chocolates);
}

function changeChocolateColorAllofxCount(chocolates,finalColor,color)
{
    var count=0
    for(let i=chocolates.length-1;i>=0;i--)
    {
        if(chocolates[i]==color)
        {
            chocolates[i]=finalColor
            count++
        }
    }
    return [chocolates,count]
}