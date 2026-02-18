
 function counter (){
    let count =0;

    return {
        increment(){
            return ++count;
        },
        getCount(){
            return count;
        }
    }
 }
 let c = counter();
 c.count = 100; // it won't change ( private )
 console.log(c.getCount());
 console.log(c.increment());
