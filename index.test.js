const Crud=require('./index');

test('createTask-add new task to array',()=>{
    const item=new Crud;
    let str='buy milk';
    item.createTask(str);

    expect(item.readTask(0)).toBe(str);

})