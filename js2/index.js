var n=Number(prompt('..'));
document.write ('n-ne fib =' + fib (n)+'<br>');

function fib(n){
    var a=1,b=1
    for (var i=2;i<n;i++);{
        var c=a+b;
        a=b;
        b=c;
    }
    return b;
}


var n=Number(prompt('..'));
document.write ('n-ne fib  rec =' + fib (n));

function func(n) {
  return n <= 2 ? n : func(n - 1) + func(n - 2);
}
