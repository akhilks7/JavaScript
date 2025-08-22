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

class c extends a{
      methodc(){
        console.log(`inside class c`);
    }
}


const obj = new c()
obj.methoda()
obj.methodc()