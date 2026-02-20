
 function counter(){
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
    console.log(c.increment());
    console.log(c.increment());
    console.log(c.getCount());

    // count is invisible 
    // user only sees methods to interact with count
    // this is abstraction without classes .