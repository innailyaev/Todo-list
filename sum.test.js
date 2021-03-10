const {sum,sumArr}=require('./sum');


    test('Properly adds two numbers',()=>{
        expect(sum(1,2)).toBe(3);
    })

    test('Properly sum array numbers',()=>{
        //arange
        let arr=[1,2,3,4,5];
        //act+assert
        expect(sumArr(arr)).toBe(15);
    })





