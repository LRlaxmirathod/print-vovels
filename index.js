// using function print vovels

function countvovels(str){
    let count = 0;
    for(let char of str){
        if(char === "a"||
            char === "e"||
            char === "i"||
            char === "o"||
            char === "u"
        ){
            count++
        }
    }
    return count

}


console.log(countvovels("laxmi"))

