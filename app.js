

var config = {
    // delimiter: $('#delimiter').val(),
    // header: $('#header').prop('checked'),
    // dynamicTyping: $('#dynamicTyping').prop('checked'),
    // skipEmptyLines: $('#skipEmptyLines').prop('checked'),
    // preview: parseInt($('#preview').val() || 0),
    // step: $('#stream').prop('checked') ? stepFn : undefined,
    // encoding: $('#encoding').val(),
    // worker: $('#worker').prop('checked'),
    // comments: $('#comments').val(),
    complete: completeFn,
    // error: errorFn,
    // download: inputType == "remote"
};

function doOpen() {
    var file = document.getElementById('file').files[0];
    //     reader = new FileReader();
    //   reader.onload = function() {
    //       showout.value = this.result;
    //   };

    //   csvFileToJSON(files[0])

    Papa.parse(file, config)
  
      // reader.readAsText(files[0]);
  }

  function completeFn (str){
    console.log(str);
  }
      
//   var openbtn = document.getElementById("openselect"),
//       showout = document.getElementById("showresult");
//   openselect.addEventListener("change", doOpen, false);
  