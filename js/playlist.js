(function ($) {

  // var init = function () {

  //   getAllPlaylists();

  // }

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

    }).done(function (res) {
      console.log(res.data);
      

     

      var newPlaylist = res.data.map(function(item){
        return `<div class="col s12 m6 l4 xl3 playlist">
        <img src=${item.image}  alt="preview img" class="center">
        <div  class="arcText">${item.name}</div>
                <i class="material-icons playBtn">play_circle_outline</i>
            <div class="actions">
                <i class="material-icons cancel">cancel</i>
                <a class=" modal-trigger" href="#modalAdd">
                <i data-id = ${item.id} class="material-icons edit">edit</i>
                </a>
            </div>`
      });

      

     

      $('.mainPlaylist').html(newPlaylist)

     

    }).fail(function (textStatus) {
      console.log(textStatus);
    });
  }

  //GET EXISTING PLAYLIST

  var getPlaylist = function(){
    $(document).on('click','.edit', function(){
      var playlistID = $(this).data("id")
      $.ajax({
        url: `http://localhost/playlist2019/api/playlist/${playlistID}`,
        method:"GET"
  
      }).done(function(res){
        $('#modalAdd .modal-content h4').text("Edit Playlist");
          console.log(res.data)
          $('#modalAdd .playlistName').val(res.data.name);
          $('#modalAdd .playlistUrl').val(res.data.image);
          $(".preview").css("background-image", "url(" + res.data.image + ")"); 
  
         
  
          $('#modalAdd .input-field label').addClass('active');
        setTimeout(function () {
          $('#modalEdit .input-field label').addClass('active');
        }, 1);
  });
      
    });
    
    
  }

  //UPDATE PLAYLIST 
  var updatePlaylist = function (name, image){
    console.log('ajax call update playlist');
   
    
  }

  

return{
    _addPlaylist:addPlaylist,
    _insertSongToPlaylist:insertSongToPlaylist,
    _getAllPlaylist:getAllPlaylist,
    _updatePlaylist:updatePlaylist,
    _getPlaylist:getPlaylist
}
})();


var processPlaylist = (function(){

  playlist._getAllPlaylist();
  $('#modal-add-songs .finishAndSave').click(function(){

    $name = $("input[name='playlist_name']").val();
    $image = $("input[name='playlist_url']").val();
    var songs = playlist._insertSongToPlaylist();
    playlist._addPlaylist($name, $image, songs);
    // $('.playlist').html('');
    playlist._getAllPlaylist();
  });

    playlist._getPlaylist()

  

  
})();
    // end of document ready
})(jQuery); // end of jQuery name space