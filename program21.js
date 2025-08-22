//callback function

function parent(name,callback) {
    console.log(`hai my name is ${name}`);
    callback()
}

function child() {
    console.log(`this is child`);
    
}

parent('grace',child)

console.log(`----------------------------------------------------------------------`);

function parent(name) {
    console.log(`hai my name is ${name}`);
    child()
}

function child() {
    console.log(`this is child`);
    
}

parent('grace')


//nested function

function a() {
    console.log(`inside A`);
    function b() {
        console.log(`inside B`);
        
    }
    b()
}

a ()

console.log(`----------------------------------------------------------------------`);

function c() {
    paarent_variable='parent'
    console.log(`${paarent_variable}`);
    // console.log(`${child_variable}`);      //dont work

    function d() {
        child_variable='child'
        console.log(`${paarent_variable}`);
        console.log(`${child_variable}`);
    }
    d()
}

c()