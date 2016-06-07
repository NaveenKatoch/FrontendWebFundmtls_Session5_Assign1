function calcCircleArea(r){
    var area = Math.PI*(r*r);
    return area;

}

// console.log(calcCircleArea(10));
first_area_txt = "Area =" & calcCircleArea(7);
console.log(first_area_txt);
document.getElementById("first_area").innerHTML = "Area =" + calcCircleArea(7);
document.getElementById("second_area").innerHTML = "Area =" + calcCircleArea(1.5);
document.getElementById("third_area").innerHTML = "Area =" + calcCircleArea(20);

