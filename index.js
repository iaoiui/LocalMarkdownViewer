
window.onload = function() {  
    var editor = document.querySelector('.editor .ta');
    var preview = document.getElementById('preview');

    var sync = function() {
        var value = editor.value; 
        var md = marked(value); 
        var idoc = preview.contentDocument;
        idoc.open();
        idoc.write(md);
        idoc.close();
    };

    sync();

  editor.oninput = function() {
    sync();
  };
  
};
