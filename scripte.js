function ok() {
    var M = parseInt(document.getElementById('moiyen').value);
    var Ab = parseInt(document.getElementById('NbAbsence').value);
    var R = document.getElementById('redubl').checked;
    var an = document.getElementById('ann');
    var dicision = document.getElementById('dicision');

    if (an.value == "1er") {
        // pour un stagaire de premiére année :
        if (M >= 10 && Ab < 30) {
            dicision.value = "Admis";
        }
        else{
            if (M >= 9 && M < 10 && Ab < 30) {
                dicision.value = "racheté";
            }
            else {
                dicision.value = "Redublent";
            }
        }
    }
    if (an.value == "2er") {
        if(M<10  && R == true){
            dicision.value = "Iliminé";
        }     
        else{
            if (M >= 10 && Ab < 30) {
                dicision.value = "Admis";
            }
            else {
                dicision.value = "Redublent";
    
            }
        }

    }



    
}
