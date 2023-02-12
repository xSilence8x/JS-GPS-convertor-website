function convertToDecimal() {
    var userInput = document.getElementById("toDecimal").value;
    userInput = userInput.replace(/\s/g, "");
    userInput = userInput.replace("E", ",E");
    userInput = userInput.replace(/°/g, ",")
    var newArray = userInput.split(",");

    var Nss = parseInt(newArray[0].replace(/\D/g,''));
    var Ess = parseInt(newArray[2].replace(/\D/g,''));
    
    var Nmm = parseFloat(newArray[1]);
    var Emm = parseFloat(newArray[3]);

    var Nsouradky = Nss * 1.0  + (Nmm / 60.0);
    Nsouradky = Math.round(Nsouradky * 1000000.0) / 1000000.0;

    var Esouradky = Ess * 1.0  + (Emm / 60.0);
    Esouradky = Math.round(Esouradky * 1000000.0) / 1000000.0;


    document.getElementById("decimalResult").value = Nsouradky + ", " + Esouradky;

}


function convertToDegree() {
    var userInput = document.getElementById("toDegree").value;
    userInput = userInput.replace(/\s/g, "");
    var newArray = userInput.split(",");
    
    //document.getElementById("degreeResult").value = newArray[0];

    //prevod decimal na dd° mm.mmm
   var Ndd = parseInt(newArray[0]);
   var Edd = parseInt(newArray[1]);

   var Nzbytek = parseFloat(newArray[0]) - (Ndd * 1.0);
   var Ezbytek = parseFloat(newArray[1]) - (Edd * 1.0);

   var Nmm = Nzbytek * 60.0;
   var Emm = Ezbytek * 60.0;

   Nmm = Math.round (Nmm * 1000.0) / 1000.0;
   var Nmm3desmista = Nmm.toFixed(3);
   Emm = Math.round (Emm * 1000.0) / 1000.0;
   var Emm3desmista = Emm.toFixed(3);

   var Nsouradky = "N " + Ndd + "° " + Nmm3desmista;
   var Esouradky = "E " + Edd + "° " + Emm3desmista;

   document.getElementById("degreeResult").value = Nsouradky + " " + Esouradky;

}

function resetFieldsToDecimal() {
    document.getElementById("toDecimal").value = "";
    document.getElementById("decimalResult").value = "";
    
}

function resetFieldsToDegree() {
    document.getElementById("toDegree").value = "";
    document.getElementById("degreeResult").value = "";
}