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

const obj = new b()
obj.methodb()
obj.methoda()


            