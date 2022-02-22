dtext();
console.log("entering text.js");
function dtext(){
    var befehle = [
        "wie ist das Wetter?",

        "Schalt die Mikrophone ein.",
        
        "Schalt die Mikrophone aus.",
        
        "wie viel Prozent hat der Akku noch?",
        
        "Wie spät ist es?",
        
        "Mach einen Timer für 5 Sekunden.",
        
        "Mach das Dokument auf.",
        
        "Ruf dem Josef an.",
        
        "wie lange dauert ein Tag?",
        
        "wie viel Minuten in einer Stunde?",
        
        "ein, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn.",
        
        "11, 12, 13, 14, 15, 16, 17, 18, 19, 20.",
        
        "wo ist meine Arbeit?",
        
        "wie komme ich in die Schule?",
        
        "schreib eine Nachricht/Email.",
        
        "wie viele Sekunden in einer Minute?",
        
        "Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag",
        
        "wann ist der Geburtstag von meiner Frau",
        
        "mein, dein, sein, ihr.",
        
        "zu welcher Schule bin ich gegangen?",
        
        "wie heißt mein Vatter?",
        
        "wie heißt meine Mutter?"
        
    ];
    
    let rand_num1;
    let rand_num2;
    let rand_num3;
    let rand_num4;

    let similarity = true;
    
    while (similarity === true){
        rand_num1 = Math.floor(Math.random() * 21);
        rand_num2 = Math.floor(Math.random() * 21);
        rand_num3 = Math.floor(Math.random() * 21);
        rand_num4 = Math.floor(Math.random() * 21);
        if( rand_num1 === rand_num2 &&
            rand_num1 === rand_num3 &&
            rand_num1 === rand_num4 &&
            rand_num2 === rand_num3 &&
            rand_num2 === rand_num4 &&
            rand_num3 === rand_num4
        ){
            similarity = true;
        }else{
            similarity = false;

        }
    }


    var rand_num = Math.floor(Math.random() * (befehle.length - 0) + 0);

    var TEXT1 = '<p1>' + befehle[rand_num1] + '</p1>';
    var TEXT2 = '<p1>' + befehle[rand_num2] + '</p1>';
    var TEXT3 = '<p1>' + befehle[rand_num3] + '</p1>';
    var TEXT4 = '<p1>' + befehle[rand_num4] + '</p1>';

    localStorage.setItem('t1', rand_num1);
    localStorage.setItem('t2', rand_num2);
    localStorage.setItem('t3', rand_num3);
    localStorage.setItem('t4', rand_num4);

    $('#text1').html(TEXT1);
    $('#text2').html(TEXT2);
    $('#text3').html(TEXT3);
    $('#text4').html(TEXT4);
}


