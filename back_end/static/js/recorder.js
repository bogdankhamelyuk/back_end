var button = document.getElementById("startStopButton");

const befehle = [
    "wie ist das Wetter?",
    "Schalt das Mikrophon ein.",
    "Schalt das Mikrophon aus.",
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
    "mein, dein, sein, euer.",
    "zu welcher Schule bin ich gegangen?",
    "wie heißt mein Vater?",
    "wie heißt meine Mutter?"
    
];

if (navigator.mediaDevices.getUserMedia) {
    console.log('getUserMedia supported.');
    const constraints = { audio: true };
    let chunks = [];
    let onSuccess = function(stream) {
        const mediaRecorder = new MediaRecorder(stream);

        button.onclick = function(){
            if (button.value === "Start"){
                button.value = "Stop";
                document.getElementById('status').textContent = '...aufnahme gestartet.';
                mediaRecorder.start();
                console.log(mediaRecorder.state);
                console.log("recorder started");
            } else {
                button.value = "Start";
                mediaRecorder.stop();
                console.log(mediaRecorder.state);
                console.log("recorder stopped");
            } 
        }

        mediaRecorder.onstop = function(e) {
            console.log("data available after MediaRecorder.stop() called.");
      
            var user_data = localStorage.getItem('data');

            var text_num = document.getElementById('satzNummer').textContent;

            var filename = user_data + "_" + text_num + "-" + Date.now() + ".wav";

            document.getElementById('status').textContent = '...wird hochgeladen ';

            const blob = new Blob(chunks, { 'type' : 'audio/wav; codecs=MS_PCM'});
            chunks = [];
        
           
            var fd=new FormData();
            fd.append("audio_data",blob, filename);
            console.log(fd);
            fetch('https://wavreceiver-bogdankha.pitunnel.com',  {
            method: 'POST',
            body: fd,
            })
            .then((resp) => {
                if(resp.status === 200){
                    if(document.getElementById('satzNummer').textContent < 21){
                        document.getElementById('status').textContent = 'hochgeladen';
                        document.getElementById('satzNummer').textContent++;
                        document.getElementById('satz').textContent = befehle[document.getElementById('satzNummer').textContent];
                        document.getElementById('status').textContent = ' bereit zu aufnehmen';
                    } else {
                        location.href = "/recorder/success";
                    }
                }
            })
            .catch((err) => ('Error occurred', err))
            
            console.log("recorder stopped");
        }
        mediaRecorder.ondataavailable = function(e) {
            chunks.push(e.data);
        }
    }
    let onError = function(err) {
        console.log('The following error occured: ' + err);
    }
    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
} else {
    console.log('getUserMedia not supported on your browser!');
}


