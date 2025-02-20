//As we know var is functional scoped and setTimeout is an asynchronous task which will only be executed when synchronous task will end 
//so when the whole loop will be ended then the set timeout will be execyted in which var will have a constant value of 10 si it will print 10, 10 times

for (var i = 0; i < 10; i++) {

    setTimeout(function () {

        console.log(i);

    }, 10);

}
//modified correct code
//using let instead of var as let is block scoped and everytime a new value will be initialized for let 
for (let i = 0; i < 10; i++) {

    setTimeout(function () {

        console.log(i);

    }, 10);
}