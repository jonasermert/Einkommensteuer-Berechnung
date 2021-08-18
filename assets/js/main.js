function changeText2() {
    document.getElementById("labelEinkommen1").innerHTML = "Einkommen (Person 1 in €) :"; //mit der Funktion zum Splittingtarif
    document.getElementById("labelEinkommen2").style.display = "inline-block";
    document.getElementById("einkommen2").style.display = "inline-block";   
}
function changeText1() {
    document.getElementById("labelEinkommen1").innerHTML = "Einkommen (in €) :"; // mit der Funktion zum Grundtarif
    document.getElementById("labelEinkommen2").style.display = "none";
    document.getElementById("einkommen2").style.display = "none";  
}

function rechnen (){
    let zvE=0; 
    if (document.getElementById("ledig").checked) { 
        zvE=document.getElementById("einkommen1").value; //Grundtarif
    } else {
        zvE=(document.getElementById("einkommen1").value)/2+(document.getElementById("einkommen2").value)/2;//Splittingtarif
        console.log(zvE);
    }
    let ESt=0;
    let StA=document.getElementById("ESteuern");
    let nG=document.getElementById("nettoGehalt");
    //Variablen deklariert
    function print(){
        if (document.getElementById("ledig").checked) { //da das Einkommen am ende nochmal mal 2 genommen werden muss beim Splitttarif
            StA.innerHTML=ESt.toFixed(2) +" €";
            nG.innerHTML=(zvE-ESt).toFixed(2) +" €"
        }
        else{
            StA.innerHTML=ESt.toFixed(2) +" €";
            nG.innerHTML=2*(zvE-ESt).toFixed(2) +" €"
        }
    }//unterfunktion Ende

    switch (document.getElementById("jahr").value) {
        case "2019":
            if(zvE<=9744){//1.Fall
                Est=0;
                console.log(ESt);
                print();

            }
            else if(9745<=zvE&&zvE<=14753)//2.Fall
            {
                let y=(zvE-9744)/10000;
                ESt=(995.21*y+1400)*y;
                console.log(ESt);
                print();
                
            }
            else if(14754<=zvE&&zvE<=57918){//3.Fall
                let z=(zvE-14753)/10000;
                ESt=(208.85*z+2397)*z+950.96;
                console.log(ESt);
                print();
                
            }
            else if(57919<=zvE&&zvE<=274612){//4.Fall
                ESt=0.42*zvE-9136.63;
                console.log(ESt);
                print();
                
            }
            else if(zvE>=274613){//5.Fall
                ESt=0.45*zvE-17374.99;
                console.log(ESt);
                print();
                
            }
            else{
                console.log("haha")
            }
            
            break;
        case "2020": //_______2020!_____________
            if(zvE<=9408){//1.Fall
                Est=0;
                console.log(ESt);
                print();

            }
            else if(9409<=zvE&&zvE<=14532)//2.Fall
            {
                let y=(zvE-9408)/10000;
                ESt=(972.87*y+1400)*y;
                console.log(ESt);
                print();
                
            }
            else if(14533<=zvE&&zvE<=57051){//3.Fall
                let z=(zvE-14532)/10000;
                ESt=(212.02*z+2397)*z+972.79;
                console.log(ESt);
                print();
                
            }
            else if(57052<=zvE&&zvE<=270500){//4.Fall
                ESt=0.42*zvE-8963.74;
                console.log(ESt);
                print();
                
            }
            else if(zvE>=274613){//5.Fall
                ESt=0.45*zvE-17078.74;
                console.log(ESt);
                print();
                
            }
            else{
                console.log("haha")
            }

                break;
        case "2021"://__________________________2021____________
            if(zvE<=9744){//1.Fall
                Est=0;
                console.log(ESt);
                print();

            }
            else if(9745<=zvE&&zvE<=14753)//2.Fall
            {
                let y=(zvE-9744)/10000;
                ESt=(995.21*y+1400)*y;
                console.log(ESt);
                print();
                
            }
            else if(14533<=zvE&&zvE<=57051){//3.Fall
                let z=(zvE-14753)/10000;
                ESt=(208.85*z+2397)*z+950.96;
                console.log(ESt);
                print();
                
            }
            else if(57919<=zvE&&zvE<=274612){//4.Fall
                ESt=0.42*zvE-9136.63;
                console.log(ESt);
                print();
                
            }
            else if(zvE>=274613){//5.Fall
                ESt=0.45*zvE-17374.99;
                console.log(ESt);
                print();
                
            }
            else{
                console.log("haha")
            }
            
            break;
        default:
            break;
    }
    
}