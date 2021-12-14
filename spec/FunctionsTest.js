
//challenege 1 test


describe('MORE! MORE! MORE!',function()
{
    it('MORE! MORE! MORE!',function()
    {
        var chocolates = [
            "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
            "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
            "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
            "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
            "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
            "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
            "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
            "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
            "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
            "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
        ];
        var color='red';
        var count=5;

        expect(addChocolates(chocolates,color,count)).toEqual([
        'red',     'red',     'red',     'red',     'red',     'green',
        'green',   'green',   'silver',  'blue',    'crimson', 'purple',
        'red',     'crimson', 'purple',  'purple',  'green',   'pink',
        'blue',    'red',     'silver',  'crimson', 'purple',  'silver',
        'silver',  'red',     'green',   'red',     'silver',  'pink',
        'crimson', 'purple',  'green',   'red',     'silver',  'crimson',
        'pink',    'silver',  'blue',    'pink',    'crimson', 'crimson',
        'crimson', 'red',     'purple',  'purple',  'green',   'pink',
        'blue',    'red',     'crimson', 'silver',  'purple',  'purple',
        'purple',  'red',     'purple',  'red',     'blue',    'silver',
        'green',   'crimson', 'silver',  'blue',    'crimson', 'purple',
        'green',   'pink',    'green',   'red',     'silver',  'crimson',
        'blue',    'green',   'red',     'red',     'pink',    'blue',
        'silver',  'pink',    'crimson', 'purple',  'green',   'red',
        'blue',    'red',     'purple',  'silver',  'blue',    'pink',
        'silver',  'crimson', 'silver',  'blue',    'purple',  'purple',
        'green',   'blue',    'blue',    'red', 'red', 'silver', 'purple', 'silver', 'crimson' 
        ]);
    })
})



//challenege 2 test


describe('LESS! LESS! LESS!',function()
{
    it('LESS! LESS! LESS!',function()
    {
        var chocolates = [
            "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
            "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
            "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
            "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
            "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
            "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
            "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
            "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
            "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
            "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
        ];
        var color='red';
        var count=5;
        var number=3;

        expect(addChocolates(chocolates,color,count)).toEqual([
        'red',     'red',     'red',     'red',     'red',     'green',
        'green',   'green',   'silver',  'blue',    'crimson', 'purple',
        'red',     'crimson', 'purple',  'purple',  'green',   'pink',
        'blue',    'red',     'silver',  'crimson', 'purple',  'silver',
        'silver',  'red',     'green',   'red',     'silver',  'pink',
        'crimson', 'purple',  'green',   'red',     'silver',  'crimson',
        'pink',    'silver',  'blue',    'pink',    'crimson', 'crimson',
        'crimson', 'red',     'purple',  'purple',  'green',   'pink',
        'blue',    'red',     'crimson', 'silver',  'purple',  'purple',
        'purple',  'red',     'purple',  'red',     'blue',    'silver',
        'green',   'crimson', 'silver',  'blue',    'crimson', 'purple',
        'green',   'pink',    'green',   'red',     'silver',  'crimson',
        'blue',    'green',   'red',     'red',     'pink',    'blue',
        'silver',  'pink',    'crimson', 'purple',  'green',   'red',
        'blue',    'red',     'purple',  'silver',  'blue',    'pink',
        'silver',  'crimson', 'silver',  'blue',    'purple',  'purple',
        'green',   'blue',    'blue',    'red', 'red', 'silver', 'purple', 'silver', 'crimson' 
      ]);
        expect(removeChocolates(chocolates,number)).toEqual(['red',     'red',     'green',
        'green',   'green',   'silver',  'blue',    'crimson', 'purple',
        'red',     'crimson', 'purple',  'purple',  'green',   'pink',
        'blue',    'red',     'silver',  'crimson', 'purple',  'silver',
        'silver',  'red',     'green',   'red',     'silver',  'pink',
        'crimson', 'purple',  'green',   'red',     'silver',  'crimson',
        'pink',    'silver',  'blue',    'pink',    'crimson', 'crimson',
        'crimson', 'red',     'purple',  'purple',  'green',   'pink',
        'blue',    'red',     'crimson', 'silver',  'purple',  'purple',
        'purple',  'red',     'purple',  'red',     'blue',    'silver',
        'green',   'crimson', 'silver',  'blue',    'crimson', 'purple',
        'green',   'pink',    'green',   'red',     'silver',  'crimson',
        'blue',    'green',   'red',     'red',     'pink',    'blue',
        'silver',  'pink',    'crimson', 'purple',  'green',   'red',
        'blue',    'red',     'purple',  'silver',  'blue',    'pink',
        'silver',  'crimson', 'silver',  'blue',    'purple',  'purple',
        'green',   'blue',    'blue',    'red', 'red', 'silver', 'purple', 'silver', 'crimson']);
    });
})

//challenge 3 test


describe(' One is not enough!  ',function()
{
    it(' One is not enough!  ',function()
    {
        var chocolates = [
            "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
            "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
            "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
            "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
            "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
            "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
            "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
            "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
            "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
            "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
        ];

        expect(dispenseChocolates(3,chocolates)).toEqual(
            [ 'purple', 'silver', 'crimson' ]
        );
    })
})


//challenge 4 test


describe(' My favourite color is.. ',function()
{
    it('My favourite color is.. ',function()
    {
        var chocolates = [
            "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
            "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
            "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
            "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
            "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
            "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
            "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
            "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
            "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
            "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
        ];
        var color='red';
        expect(dispenseChocolatesOfColor(chocolates,3,color)).toEqual(
            [
                'green',   'green',   'green',   'silver',  'blue',    'crimson',
                'purple',  'red',     'crimson', 'purple',  'purple',  'green',
                'pink',    'blue',    'red',     'silver',  'crimson', 'purple',
                'silver',  'silver',  'red',     'green',   'red',     'silver',
                'pink',    'crimson', 'purple',  'green',   'red',     'silver',
                'crimson', 'pink',    'silver',  'blue',    'pink',    'crimson',
                'crimson', 'crimson', 'red',     'purple',  'purple',  'green',
                'pink',    'blue',    'red',     'crimson', 'silver',  'purple',
                'purple',  'purple',  'red',     'purple',  'red',     'blue',
                'silver',  'green',   'crimson', 'silver',  'blue',    'crimson',
                'purple',  'green',   'pink',    'green',   'red',     'silver',
                'crimson', 'blue',    'green',   'red',     'red',     'pink',
                'blue',    'silver',  'pink',    'crimson', 'purple',  'green',
                'red',     'blue',    'purple',  'silver',  'blue',    'pink',
                'silver',  'crimson', 'silver',  'blue',    'purple',  'purple',
                'green',   'blue',    'blue',    'silver',  'purple',  'silver',
                'crimson'
            ]
        );
    })
})


//challenge 5 test


describe(' LED my chocos! ',function()
{
    it(' LED my chocos! ',function()
    {
        var chocolates = [
            "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
            "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
            "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
            "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
            "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
            "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
            "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
            "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
            "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
            "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
        ];

        expect(noOfChocolates(chocolates)).toEqual(
            [13, 17, 13, 15, 17, 16,  9]
        );
    })
})

//challenge 6 test


describe(' Lets stack em up!  ',function()
{
    it(' Lets stack em up!  ',function()
    {
        var chocolates = [
            "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
            "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
            "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
            "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
            "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
            "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
            "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
            "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
            "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
            "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
        ];

        expect(sortChocolateBasedOnCount(chocolates)).toEqual(
            ['silver',  'silver',  'silver',  'silver',  'silver',  'silver',
            'silver',  'silver',  'silver',  'silver',  'silver',  'silver',
            'silver',  'silver',  'silver',  'silver',  'silver',  'purple',
            'purple',  'purple',  'purple',  'purple',  'purple',  'purple',
            'purple',  'purple',  'purple',  'purple',  'purple',  'purple',
            'purple',  'purple',  'purple',  'purple',  'red',      'red',
            'red','red','red','red','red','red','red','red','red','red','red','red','red','red','crimson', 'crimson',
            'crimson', 'crimson', 'crimson', 'crimson', 'crimson', 'crimson',
            'crimson', 'crimson', 'crimson', 'crimson', 'crimson', 'crimson',
            'crimson', 'blue',    'blue',    'blue',    'blue',
            'blue',    'blue',    'blue',    'blue',    'blue',    'blue',
            'blue',    'blue',    'blue',    'green',   'green',   'green',   'green',   'green',
            'green',   'green',   'green',   'green',   'green',   'green',
            'green',   'green',   'pink',    'pink',    'pink',
            'pink',    'pink',    'pink',    'pink',    'pink',    'pink']
        );
    })
})


//challenge 7 test


describe(' They taste the same!  ',function()
{
    it(' They taste the same!  ',function()
    {
        var chocolates = [
            "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
            "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
            "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
            "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
            "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
            "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
            "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
            "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
            "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
            "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
        ];

        expect( changeChocolateColor(chocolates,3,'red','blue')).toEqual(
            ['green',   'green',   'green',   'silver',  'blue',    'crimson',
            'purple',  'blue',  'crimson', 'purple',  'purple',  'green',
            'pink',    'blue',    'blue',  'silver',  'crimson', 'purple',
            'silver',  'silver',  'blue',  'green',   'red',  'silver',
            'pink',    'crimson', 'purple',  'green',   'red',  'silver',
            'crimson', 'pink',    'silver',  'blue',    'pink',    'crimson',
            'crimson', 'crimson', 'red',  'purple',  'purple',  'green',
            'pink',    'blue',    'red',  'crimson', 'silver',  'purple',
            'purple',  'purple',  'red',  'purple',  'red',  'blue',
            'silver',  'green',   'crimson', 'silver',  'blue',    'crimson',
            'purple',  'green',   'pink',    'green',   'red',  'silver',
            'crimson', 'blue',    'green',   'red',  'red',  'pink',
            'blue',    'silver',  'pink',    'crimson', 'purple',  'green',
            'red',  'blue',    'red',  'purple',  'silver',  'blue',
            'pink',    'silver',  'crimson', 'silver',  'blue',    'purple',
            'purple',  'green',   'blue',    'blue',    'red',  'red',
            'silver',  'purple',  'silver',  'crimson']
        );
    })
})

//challenge 8 test


describe(' Convert these heretics!' ,function()
{
    it(' Convert these heretics!',function()
    {
        var chocolates = [
            "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
            "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
            "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
            "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
            "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
            "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
            "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
            "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
            "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
            "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
        ];
        var color="red"
        var finalColor="orange";
        expect(changeChocolateColorAllofxCount(chocolates,finalColor,color)).toEqual(
            [
                [
                  'green',   'green',   'green',   'silver',  'blue',    'crimson',
                  'purple',  'orange',  'crimson', 'purple',  'purple',  'green',
                  'pink',    'blue',    'orange',  'silver',  'crimson', 'purple',
                  'silver',  'silver',  'orange',  'green',   'orange',  'silver',
                  'pink',    'crimson', 'purple',  'green',   'orange',  'silver',
                  'crimson', 'pink',    'silver',  'blue',    'pink',    'crimson',
                  'crimson', 'crimson', 'orange',  'purple',  'purple',  'green',
                  'pink',    'blue',    'orange',  'crimson', 'silver',  'purple',
                  'purple',  'purple',  'orange',  'purple',  'orange',  'blue',
                  'silver',  'green',   'crimson', 'silver',  'blue',    'crimson',
                  'purple',  'green',   'pink',    'green',   'orange',  'silver',
                  'crimson', 'blue',    'green',   'orange',  'orange',  'pink',
                  'blue',    'silver',  'pink',    'crimson', 'purple',  'green',
                  'orange',  'blue',    'orange',  'purple',  'silver',  'blue',
                  'pink',    'silver',  'crimson', 'silver',  'blue',    'purple',
                  'purple',  'green',   'blue',    'blue',    'orange',  'orange',
                  'silver',  'purple',  'silver',  'crimson'
                ],
                16
              ]
        );
    })
})
