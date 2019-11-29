
(function ($) {

  // MODAL
  $('.modal').modal();

  var modal = (function () {


    //VARIABLES

    //ADD HIDDEN FIELDS TO SONGS FORM
  
    var fields = `<div class="row modal-form-row">
      <div class="input-field col s12">
        <input id="playlist_id" name ="playlist_id" type="text" class="validate">
        <label for="playlist_id">Playlist ID</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="playlist_name" name ="playlist_name" type="text" class="validate">
        <label for="playlist_name">Playlist Name</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="playlist_url" name="playlist_url"  type="text" class="validate">
        <label for="playlist_url">Playlist URL</label>
      </div>
    </div> `;
  

    var addHiddenFields = function () {

      var titleModal = $("#modalAdd .modal-content h4").text();
      console.log("titleModal",titleModal)
      if(titleModal==="Add New Playlist"){
        validatePlaylistParams(false , true , true);
      }
      else{
        validatePlaylistParams(true , true , true);
      }
      
      dest.prepend(fields);

      var idInput = $("#addPlaylistForm input[name = 'playlist_id']");
      var nameInput = $("#addPlaylistForm input[name ='playlist_name']");
      var urlInput = $("#addPlaylistForm input[name = 'playlist_url']");

      var playListID = $("#addSongForm input[name ='playlist_id']");
      var playListName = $("#addSongForm input[name ='playlist_name']");
      var playListUrl = $("#addSongForm input[name ='playlist_url']");
  
      var idValue = idInput.val();
      var nameValue = nameInput.val();
      var urlValue = urlInput.val();
      
      playListID.val(idValue);
      playListName.val(nameValue);
      playListUrl.val(urlValue)
  
      $('.input-field label').addClass('active');
      setTimeout(function () {
        $('.input-field label').addClass('active');
      }, 1);
  
    }

    
  
  
  
    //ADDING ROWS TO THE MODAL ADD SONGS

    
    var row = ` <div class="row">
    
    <div class="input-field col s12 m8">
      <input value = ""  type="text" class="validate inputUrl" name = "songs">
      <label for="song_url">Song URL</label>
    </div>
    <div class="input-field col s12 m4">
      <input value = ""  type="text" class="validate inputName" name = "songs">
      <label for="song_name">Name</label>
    </div>
  </div>`;
  
    var dest = $('#addSongForm');
    var modal = $("#modal-add-songs");
  
    var count = 3;
  
    var displayCounter = function () {
      var displayCounter = $('#modal-add-songs .modal-footer .count span');
      displayCounter.text("(" + count + ")");
  
    }
  
    var appendRow = function () {
      dest.append(row)
      count++;
      displayCounter();
      modal.animate({
        scrollTop: $(modal)[0].scrollHeight
      }, 1000);
  
    }


    //ADD PLAYLIST FORM VALIDATION
  
    function validatePlaylistParams(id , name, url) {
      var ret = {};
      var err = [];
      if (id) {
        ret.pid = $('#modalAdd .playlistID').val().trim();
        if (ret.pid == '') {
          err.push('Playlist ID');
        }
      }
      if (name) {
        ret.pname = $('#modalAdd .playlistName').val().trim();
        if (ret.pname == '') {
          err.push('Playlist Name');
        }
      }
      if (url) {
        ret.purl = $('#modalAdd .playlistUrl').val().trim();
        if (ret.purl == '') {
          err.push('Playlist Url');
        }
      
      }
      if (err.length > 0) {


        $('#modalAdd .next').attr('data-target' , "alert-modal");
        

        $('#modalAdd .playlistUrl').change(function(e){
          var res = $(this).val()
         $('#modalAdd .next').attr('data-target' , "modal-add-songs")

         
          return res
        })

        $('#alert-modal .modal-content p').html('Missing: ' + err.join(', '));
        ret = null;
      }
      return ret;

    }  

    //RESET FIELDS
    function resetFields(){

      var nameInput = $("#addPlaylistForm input[name ='playlist_name']");
      var urlInput = $("#addPlaylistForm input[name = 'playlist_url']");
  
       nameInput.val('');
      urlInput.val('');

    }


//DISPLAY PREVIEW IMAGE ON PLAYER
    function displayPreview(){
      var urlInput = $("#addPlaylistForm input[name = 'playlist_url']");
      var urlValue = urlInput.val();
        $(".preview").css("background-image", "url(" + urlValue + ")"); 
    }
  
    return {
      _appendRow: appendRow,
      _addHiddenFields: addHiddenFields,
      _resetFields:resetFields,
      _displayPreview:displayPreview
    }
  
  })();


  var displayModal = (function(){

    var urlInput = $("#addPlaylistForm input[name = 'playlist_url']");
    urlInput.keyup(function(){
        modal._displayPreview();
    })

    var btnNext = $('#addPlaylistForm .next');
    btnNext.click(function () {
      var titleModal = $("#modalAdd .modal-content h4").text();
      console.log("titleModal",titleModal)
      if(titleModal==="Add New Playlist"){
        modal._addHiddenFields();
      }
      else{
        modal._addHiddenFields();
        $('#modal-add-songs .modal-content h4').text("Edit Playlist Songs");

        $( ".songDiv" ).remove();
        // $(document).on('click','.edit', function(){
          var id = $("#addSongForm #playlist_id").val();
          $.ajax({
            url: `http://localhost/playlist2019/api/playlist/${id}/songs`,
            method:"GET"
      
          }).done(function(res){
            console.log(res)
            var playlistSongs = res.data.songs.map(function(song){
              return ` <div class="row songDiv">
              <div class="input-field col s12 m8">
                <input value = "${song.url}"  type="text" class="validate inputUrl" name = "songs">
                <label for="song_url">Song URL</label>
              </div>
              <div class="input-field col s12 m4">
                <input value = "${song.name}"  type="text" class="validate inputName" name = "songs">
                <label for="song_name">Name</label>
              </div>
            </div>`
            })

            $("#addSongForm").append(playlistSongs)
            $(".finishAndSave").text("Update and Save")

            $('#modalAdd .input-field label').addClass('active');
            setTimeout(function () {
              $('#modalEdit .input-field label').addClass('active');
            }, 1);
             
      
             
      
            
      });
          
       
      }
    });

    

    var btnReset = $('#addPlaylistForm .reset');
    btnReset.click(function(){
      modal._resetFields();
     
    })

    
      var btnAddRow = $('#modal-add-songs .modal-footer a.left.addAnotherSong');
      btnAddRow.click(function () {
        modal._appendRow();
      }) 
    })();
  
  // end of document ready
})(jQuery); // end of jQuery name space











