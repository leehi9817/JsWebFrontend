var sum = 0;

for(var i = 1; i <= 50; i++) {
    sum += i;
}

// anonymous function
(function() {
    for(var i = 0; i < 5; i++) {
        console.log(i);
    }
})();

for( ; i <= 100; i++) {
    sum += i;
}

console.log(sum);

// anonymous function
setTimeout(
    function() {
        console.log("timeout");
    },
3000);