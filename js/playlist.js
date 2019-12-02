(function ($) {

  $("#spinner").show()

  // var init = function () {

  //   getAllPlaylists();

  // }

var playlist = (function(){


  //ADD PLAYLIST
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
      getAllPlaylist();
      //alert("Playlist added successfully");

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
    $('#spinner').show();
    $.ajax({
      url: 'http://localhost/playlist2019/api/playlist',

      method: 'GET',

    }).done(function (res) {
      console.log(res.data);
      $('#spinner').hide();
      

      var newPlaylist = res.data.map(function(item){
        return `<div class="col s12 m6 l4 xl3 playlist">
        <img src=${item.image}  alt="preview img" class="center">
        <div  class="arcText">${item.name}</div>
                <i class="material-icons playBtn">play_circle_outline</i>
            <div class="actions">
            <a class=" modal-trigger" href="#modal-warning">
                <i data-id = ${item.id} class="material-icons cancel">cancel</i>
                </a>
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
      var id = $(this).data("id")
      $.ajax({
        url: `http://localhost/playlist2019/api/playlist/${id}`,
        method:"GET"
  
      }).done(function(res){
        $('#modalAdd .modal-content h4').text("Edit Playlist");
          console.log(res.data)
          $('#modalAdd .playlistID').val(res.data.id);

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

// EDIT PLAYLIST SONGS AND FINISH
  function editPlaylistSongsAndFinish(id, songData) {
    $.ajax({
      url: `http://localhost/playlist2019/api/playlist/${id}/songs`,

      method: 'POST',
      data: {
        'songs': songData
      }

    }).done(function (r) {
      console.log(r.data);

    }).fail(function (textStatus) {
      console.log(textStatus);
    });
  }

  //DELETE PLAYLIST
  var deletePlaylist = function(){
    $(document).on('click','.cancel', function(){
    var id = $(this).data("id");
      $('#modal-warning .modal-footer .okDelete').attr('data-id' , "id");
      $('#modal-warning .modal-content h4').attr('data-id' , "id");
      $('#modal-warning .modal-footer .okDelete').on('click', function(){
      $.ajax({
         url: `http://localhost/playlist2019/api/playlist/${id}`,
  
         method: 'DELETE',
      }).done(function (r) {
        getAllPlaylist();
      }).fail(function (textStatus) {
        console.log(textStatus);
      });
    })
  });
  }


 
   

  

  

return{
    _addPlaylist:addPlaylist,
    _insertSongToPlaylist:insertSongToPlaylist,
    _getAllPlaylist:getAllPlaylist,
    _getPlaylist:getPlaylist,
    _editPlaylistSongsAndFinish:editPlaylistSongsAndFinish,
    _deletePlaylist:deletePlaylist

}
})();


var processPlaylist = (function(){


  playlist._getAllPlaylist();

  $('#modal-add-songs .finishAndSave').click(function(){
    var $id = $("input[name='playlist_id']").val();
    var $name = $("input[name='playlist_name']").val();
    var $image = $("input[name='playlist_url']").val();
    var songs = playlist._insertSongToPlaylist();

    if($id===""){
      playlist._addPlaylist($name, $image, songs);
      playlist._getAllPlaylist();
    }
    else{
      
     $.ajax({
       url: `http://localhost/playlist2019/api/playlist/${$id}`,
 
       method: 'POST',
       data: {
         'name': $name,
         'image': $image
       }
 
     }).done(function (r) {
    
 
     }).fail(function (textStatus) {
       console.log(textStatus);
     });

     playlist._editPlaylistSongsAndFinish($id, songs);
     playlist._getAllPlaylist();

    }
    
  });

    playlist._getPlaylist()

    //DELETE PLAYLIST
      playlist._deletePlaylist();
  
 
})();
    // end of document ready
})(jQuery); // end of jQuery name space