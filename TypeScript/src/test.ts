function sayHello(name: string): void {
    if (name) {
        console.log(`Hello ${name}`)
    } else {
        console.log('No name provided.')
    }
}

sayHello('Antonio');
