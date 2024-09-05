try {
    console.log("try - 1");
    throw 404;
    console.log("try - 2");
}
catch (e) {
    console.log("catch error : ", e);
}
finally {
    console.log("finally - this code will always be executed");
}