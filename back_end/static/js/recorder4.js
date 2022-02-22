var recordButton4 = document.getElementById("recordButton4");
var stopButton4 = document.getElementById("stopButton4");

//main block for doing the audio recording

if (navigator.mediaDevices.getUserMedia) {
    console.log('getUserMedia supported.');
    const constraints = { audio: true };
    let chunks = [];
    let onSuccess = function(stream) {
        const mediaRecorder4 = new MediaRecorder(stream);
    
        //visualize(stream);

        recordButton4.onclick = function() {
          mediaRecorder4.start();
          console.log(mediaRecorder4.state);
          console.log("recorder started");
          
    
          stopButton4.disabled = false;
          recordButton4.disabled = true;
        }

        stopButton4.onclick = function() {
            mediaRecorder4.stop();
            console.log(mediaRecorder4.state);
            console.log("recorder stopped");
            stopButton4.disabled = true;
            recordButton4.disabled = false;
        }
        mediaRecorder4.onstop = function(e) {
            console.log("data available after MediaRecorder.stop() called.");
      
            var au = document.createElement('audio');
            var user_data = localStorage.getItem('data');

            var buttonRow4 = recordButton4.parentNode;
            var parentDivId4 = buttonRow4.parentNode.id;
            var text_num = localStorage.getItem(parentDivId4);

            var filename = user_data + "_" + text_num + ".wav";
            var li = document.createElement('li');
            au.controls = true;

            const blob = new Blob(chunks, { 'type' : 'audio/wav; codecs=MS_PCM'});
            chunks = [];
            var url = window.URL.createObjectURL(blob);
            au.src = url;
            li.appendChild(au);
            buttonRow4.appendChild(au);
            
            var upload = document.createElement('a'); // creating upload link
            upload.href="#";
            upload.innerHTML = "Hochladen";
    
            li.appendChild(document.createTextNode (" "))//add a space in between
            li.appendChild(upload)//add the upload link to li
            buttonRow4.appendChild(li);
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
                        buttonRow4.parentNode.appendChild(document.createTextNode ("OK"));
                    }
                })
                .catch((err) => ('Error occurred', err))
            }
            console.log("recorder stopped");
        }
        mediaRecorder4.ondataavailable = function(e) {
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


