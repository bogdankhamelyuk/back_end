//webkitURL is deprecated but nevertheless
URL = window.URL || window.webkitURL;

var recordButton = document.getElementById("recordButton");
var buttonRow = document.getElementById("button-row");
var stopButton = document.getElementById("stopButton");
var rec;
var blob;

navigator.mediaDevices.getUserMedia({audio:true})
.then(stream => {handlerFunction(stream)})
function handlerFunction(stream) {
    rec = new MediaRecorder(stream);
    rec.ondataavailable = e => {
        audioChunks.push(e.data);
        if (rec.state == "inactive"){
            let blob = new Blob(audioChunks,{type:'audio/wav'});

            var au = document.createElement('audio');
            var user_data = localStorage.getItem('data');
            var parentDivId = buttonRow.parentNode.id;;
            
            var text_num = localStorage.getItem(parentDivId);

            var filename = user_data + "_" + text_num + ".wav";
            var url = URL.createObjectURL(blob);
            var li = document.createElement('li');
            au.controls = true;
            au.src = url;
            li.appendChild(au);

            var upload = document.createElement('a'); // creating upload link
                upload.href="#";
                upload.innerHTML = "Hochladen";
        
            li.appendChild(document.createTextNode (" "))//add a space in between
            li.appendChild(upload)//add the upload link to li
            recordings.appendChild(li);
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
                        location.href = "/recorder/success";
                    }
                })
                .catch((err) => ('Error occurred', err))
            }
        }
    }
}

recordButton.onclick = e => {
  console.log('start')
  recordButton.disabled = true;
  stopButton.disabled=false;
  audioChunks = [];
  rec.start();
}

stopButton.onclick = e => {
  console.log("stop")
  recordButton.disabled = false;
  stopButton.disabled=true;
  rec.stop();
}