class MyClass {
    myMethod() {
        const foo = 123;
        console.log('1', this);
        setTimeout(() => {
            console.log(foo);
        }, 2);
    }
    asd() {
        setTimeout(function() {
            console.log('asd');
        }, 2)
    }
}

const myInstance = new MyClass();
myInstance.myMethod();

