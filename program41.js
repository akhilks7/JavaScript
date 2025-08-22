class a{
    methoda(){
        console.log(`inside class a`);
        
    }
}

class b extends a{
      methodb(){
        console.log(`inside class b`);
        
    }
}

class c extends b{
      methodc(){
        console.log(`inside class c`);
    }
}


const obj = new c()
obj.methodc()
obj.methodb()
obj.methoda()
