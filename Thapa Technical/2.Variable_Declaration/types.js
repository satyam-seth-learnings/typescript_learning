function myfun() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally outside of the block " + i);
}
myfun();
