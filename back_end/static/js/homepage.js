var userInfo='';
var complete = 0;

function getAlter(){
    let select = document.getElementById('alter');
    let option = select.options[select.selectedIndex];
    userInfo+=option.value.toString();
    userInfo+="_";
    //console.log(userInfo);
    complete +=1;
}


function getGeschlecht(){
    let select = document.getElementById('geschlecht');
    let option = select.options[select.selectedIndex];
    userInfo += option.value.toString();
    userInfo+="_";
    //console.log(userInfo);
    complete+=1;
}
function getDialekt(){
    let select = document.getElementById('dialekt');
    let option = select.options[select.selectedIndex];
    userInfo += option.value.toString();
    userInfo+="_";
    //console.log(userInfo);
    complete+=1;
}


function validate(){
    if (complete >= 3){
        localStorage.setItem('data', userInfo);
        location.href = "/recorder";
    }else{
        document.querySelector("#submitError").textContent = `Bitte füll alle Felder aus😢`;
    }
}


