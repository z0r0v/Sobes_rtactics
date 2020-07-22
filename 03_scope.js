function funcA() {
    let a = 1;

    function FuncB() {

        let b = 2;

        function FuncC() {
           let c = 3;
           console.log('funcC:', a,b,c);

        }
        FuncC();
        console.log("FuncB", a, b);
    }
    FuncB();
    console.log("funcA", a);
}

funcA();