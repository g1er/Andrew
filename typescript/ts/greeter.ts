// 1. first execise with greeter
function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";
if(document.body) {
    document.body.innerHTML = greeter(user);
}
setTimeout(function(){
    document.body.innerHTML = greeter(user);
}, 1000);