(function ($) {

var playlist = (function(){

function addPlaylist(name, image, songs) {

    $.ajax({
      url: 'http://localhost/playlist2019/api/playlist',

      method: 'POST',
      data: {
        'name': name,
        'image': image,
        'songs': songs
      }

    }).done(function (r) {
      console.log(r.data);
      //getAllPlaylists();

    }).fail(function (textStatus) {
      console.log(textStatus);
    });
  }

  function insertSongToPlaylist () {
    $songName = $('.inputName');
    $songUrl = $('.inputUrl');
    var song = [];
    for (var i = 0; i < $songName.length; i++) {
      var name = $songName[i].value;
      var url = $songUrl[i].value;
      song[i] = {
        'name': name,
        'url': url
      };
    }
    return song;
  }

  

return{
    _addPlaylist:addPlaylist,
    _insertSongToPlaylist:insertSongToPlaylist
}
})();


var processPlaylist = (function(){
  $('#modal-add-songs .finishAndSave').click(function(){
    // playlist._addPlaylist();

    

    $name = $("input[name='playlist_name']").val();
    $image = $("input[name='playlist_url']").val();

    console.log($name)
    console.log($image)


    var songs = playlist._insertSongToPlaylist();
    playlist._addPlaylist($name, $image, songs);
    // $('#addPlaylistModal').modal('toggle');
    // $('.playlist').html('');
    // getAllPlaylists();
});

})();



   

    // end of document ready
})(jQuery); // end of jQuery name space