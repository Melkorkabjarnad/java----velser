function checkDrink(element){
    if (element.alt === "beer" || element.alt === "snaps"){
        console.log("Indeholder Alkohol");
    } else{
        console.log("Alkoholfri");
    }
}