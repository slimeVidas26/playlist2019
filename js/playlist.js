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

  //DISPLAY ALL THE PLAYLISTS

  var getAllPlaylist = function(){
    $.ajax({
      url: 'http://localhost/playlist2019/api/playlist',

      method: 'GET',
      // data: {
      //   'name': name,
      //   'image': image,
      //   'songs': songs
      // }

    }).done(function (response) {
      console.log(response.data);
      for(var i = 0;i< response.data.length; i++){
        console.log(response.data[0].image)
        console.log(response.data[1].image)


        $('.mainPlaylist').append( `
        <div class="col s12 m6 l4 xl3 playlist">
          <img src="${response.data[i].image}"  alt="" class="center">
          <div class="arcText">${response.data[i].name}"</div>
          <i class="material-icons playBtn">
              play_circle_outline
              </i>
              <div class="actions">
                  <i class="material-icons cancel">
                      cancel
                      </i>
        
                      <i class="material-icons edit">
                          edit
                          </i>"
                          </div>
                          `)

      }

    }).fail(function (textStatus) {
      console.log(textStatus);
    });
  }

  

return{
    _addPlaylist:addPlaylist,
    _insertSongToPlaylist:insertSongToPlaylist,
    _getAllPlaylist:getAllPlaylist
}
})();


var processPlaylist = (function(){

  playlist._getAllPlaylist();
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
    playlist._getAllPlaylist()
  });



})();



   

    // end of document ready
})(jQuery); // end of jQuery name space