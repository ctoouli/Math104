function quadraticEquation() {
    var aQuadratic = parseInt(document.getElementById("aQuadratic").value);
    var bQuadratic = parseInt(document.getElementById("bQuadratic").value);
    var cQuadratic = parseInt(document.getElementById("cQuadratic").value);

    var answer1 = (-1*bQuadratic + Math.sqrt((bQuadratic*bQuadratic)-(4*aQuadratic*cQuadratic)))/(2*aQuadratic);
    var answer2 = (-1*bQuadratic - Math.sqrt((bQuadratic*bQuadratic)-(4*aQuadratic*cQuadratic)))/(2*aQuadratic);
    document.getElementById("answer").innerHTML = "x = "+answer1+", "+answer2;
}
