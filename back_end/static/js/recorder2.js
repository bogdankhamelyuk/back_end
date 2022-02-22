var recordButton2 = document.getElementById("recordButton2");
var stopButton2 = document.getElementById("stopButton2");

//main block for doing the audio recording

if (navigator.mediaDevices.getUserMedia) {
    console.log('getUserMedia supported.');
    const constraints = { audio: true };
    let chunks = [];
    let onSuccess = function(stream) {
        const mediaRecorder2 = new MediaRecorder(stream);
    
        //visualize(stream);

        recordButton2.onclick = function() {
          mediaRecorder2.start();
          console.log(mediaRecorder2.state);
          console.log("recorder started");
          
    
          stopButton2.disabled = false;
          recordButton2.disabled = true;
        }

        stopButton2.onclick = function() {
            mediaRecorder2.stop();
            console.log(mediaRecorder2.state);
            console.log("recorder stopped");
            stopButton2.disabled = true;
            recordButton2.disabled = false;
        }
        mediaRecorder2.onstop = function(e) {
            console.log("data available after MediaRecorder.stop() called.");
      
            var au = document.createElement('audio');
            var user_data = localStorage.getItem('data');

            var buttonRow2 = recordButton2.parentNode;
            var parentDivId2 = buttonRow2.parentNode.id;
            var text_num = localStorage.getItem(parentDivId2);

            var filename = user_data + "_" + text_num + ".wav";
            var li = document.createElement('li');
            au.controls = true;

            const blob = new Blob(chunks, { 'type' : 'audio/wav; codecs=MS_PCM'});
            chunks = [];
            var url = window.URL.createObjectURL(blob);
            au.src = url;
            li.appendChild(au);
            buttonRow2.appendChild(au);

            var upload = document.createElement('a'); // creating upload link
            upload.href="#";
            upload.innerHTML = "Hochladen";
    
            li.appendChild(document.createTextNode (" "))//add a space in between
            li.appendChild(upload)//add the upload link to li
            buttonRow2.appendChild(li);
            upload.onclick = e => {
                var fd=new FormData();
                fd.append("audio_data",blob, filename);
                console.log(fd);
                fetch('https://wavreceiver-bogdankha.pitunnel.com',  {
                method: 'POST',
                body: fd,
                })
                .then((resp) => {
                    if(resp.status === 200){
                        buttonRow2.parentNode.appendChild(document.createTextNode ("OK"));
                    }
                })
                .catch((err) => ('Error occurred', err))
            }
            console.log("recorder stopped");
        }
        mediaRecorder2.ondataavailable = function(e) {
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


