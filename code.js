function fib(n) {
    if (n<=0){ 
        x = [0];
        return x;
    }
    else if (n==1){
        x = [0,1];
        return x
    }
    else{
        x = [0,1];
        fibFind(n);
    }

    return x;
}

function fibFind(n){ // fnx = (fn(x-1)) + (fn(x-2)) where fn(x-2) = 0 and fn(x-1) = 1
    if (n==2){
        x.push(1);
        return;
    }
    else{
        fibFind(n-1);
        return x.push(x[n-1] + x[n-2]);
    }
}

//console.log(fib(5));