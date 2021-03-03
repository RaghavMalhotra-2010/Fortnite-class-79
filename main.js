var playerarray=[];
function submit(){
    var names=[];
    var name1=document.getElementById("name1").value;
    var name2=document.getElementById("name2").value;
    var name3=document.getElementById("name3").value;
    playerarray.push(name1);
    playerarray.push(name2);
    playerarray.push(name3);
    document.getElementById("LMAO").innerHTML=playerarray;
    }