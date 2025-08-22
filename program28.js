 //nested array

 a=[[1,2,3],[4,5,6],[7,8,9]]

 for(item of a){
    // console.log(item);
    for(num of item){
        console.log(num);
        
    }
 }

 //w.a.p to find the highest number
//  find the highest number
//  find the highest number
console.log(`---------------------------------`);

h=a[0][0]

 for(item of a){
    // console.log(item);
    for(num of item){
        // console.log(num);
        if(num >= h){
            h=num
        }  
    }
    // console.log(h);    
 }
   console.log(h);

   
console.log(`---------------------------------`);

l=a[0][0]

 for(item of a){
    // console.log(item);
    for(num of item){
        // console.log(num);
        if(num <= l){
            l=num
        }  
    }
    // console.log(h);    
 }
   console.log(l);

console.log(`---------------------------------`);


s=0

 for(item of a){
    // console.log(item);
    for(num of item){
        // console.log(num);
        s=s+num  
    }
    // console.log(h);    
 }
   console.log(s);

console.log(`---------------------------------`);

