
var moduleAddToDom = (function () {

    

    //ADD HIDDEN FIELDS TO THE SECOND FORM

    var fields = `  <div class="row modal-form-row">
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
    //   $("input[name='nameGoesHere']").val();

    //  var playListUrl = $("addPlaylistForm   input[name = 'playlist_url']").val();



    var addHiddenFields = function () {
        dest.prepend(fields)
        var playListName = $("#addPlaylistSongForm input[name ='playlist_name']");
        var nameInput = $("#addPlaylistForm input[name = 'playlist_name']");
        var nameValue = nameInput.val();
        
        playListName.val(nameValue);

        var playListUrl = $("#addPlaylistSongForm input[name ='playlist_url']");
        var urlInput = $("#addPlaylistForm input[name = 'playlist_url']");
        var urlValue = urlInput.val();
        
        playListUrl.val(urlValue)

         $('.input-field label').addClass('active');
         setTimeout(function(){ $('.input-field label').addClass('active'); }, 1);

    }



//ADDING ROWS TO THE MODAL ADD SONG TO PLAYLIST

    var row = ` <div class="row">
    <div class="input-field col s12 m8">
      <input id="song_url" name="song_url[]" type="text" class="validate">
      <label for="song_url">Song URL</label>
    </div>
    <div class="input-field col s12 m4">
      <input  id="song_name" name="song_name[]" type="text" class="validate">
      <label for="name">Name</label>
    </div>
  </div>`;

    var dest = $('#addPlaylistSongForm');
    var modal = $("#modal-add-playlist-songs");

    var count = 3;

    var displayCounter = function () {
        var displayCounter = $('.modal-footer .count span');
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


    return {
        _appendRow: appendRow,
        _addHiddenFields: addHiddenFields


    }

})();

var displayRow = (function () {
    var btnAddRow = $('.modal-footer a.left.addAnotherSong');
    btnAddRow.click(function () {
        moduleAddToDom._appendRow();
    });

    var btnNext = $('#addPlaylistForm .next');
    btnNext.click(function () {
        moduleAddToDom._addHiddenFields();
    });


})();