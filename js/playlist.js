(function ($) {

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
      //getAllPlaylists();
      alert("Playlist added successfully");

    }).fail(function (textStatus) {
      console.log(textStatus);
    });
  }

  //UPDATE PLAYLIST 
  var updatePlaylist = function (name, image){
    // var id = $("#addSongForm .playlistId").val();
    // console.log("id from updateplaylist" , id)

    // $.ajax({
    //   url: `http://localhost/playlist2019/api/playlist/${id}`,

    //   method: 'POST',
    //   data: {
    //     'name': name,
    //     'image': image
    //   }

    // }).done(function (r) {
    //   console.log("r from updateplaylist",r);
    //   //getAllPlaylists();


    // }).fail(function (textStatus) {
    //   console.log(textStatus);
    // });
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

  

  

return{
    _addPlaylist:addPlaylist,
    _insertSongToPlaylist:insertSongToPlaylist,
    _getAllPlaylist:getAllPlaylist,
    _updatePlaylist:updatePlaylist,
    _getPlaylist:getPlaylist
}
})();


var processPlaylist = (function(){

  // $(document).on('click','.test', function(){
  //   var arrInp = $(".inputName").val()
  //   alert(arrInp)
  // })

  playlist._getAllPlaylist();



  $('#modal-add-songs .finishAndSave').click(function(){


    function editPlaylistSongsAndFinish(id, songData) {
      $.ajax({
        url: `http://localhost/playlist2019/api/playlist/${$id}/songs`,
  
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







    var $id = $("input[name='playlist_id']").val();
    console.log("id from click on finish and save" , $id)
    var $name = $("input[name='playlist_name']").val();
    var $image = $("input[name='playlist_url']").val();
    var songs = playlist._insertSongToPlaylist();


    if($id===""){
      playlist._addPlaylist($name, $image, songs);
      // $('.playlist').html('');
      playlist._getAllPlaylist();
    }
    else{
      // var $id = $("input[name='playlist_id']").val();
     //playlist._updatePlaylist($name, $image);

    //  var id = $("#addSongForm .playlistId").val();
    //  var name = $("#addSongForm .inputName").val();
    //  var image = $("#addSongForm .inputUrl").val();

    
     $.ajax({
       url: `http://localhost/playlist2019/api/playlist/${$id}`,
 
       method: 'POST',
       data: {
         'name': $name,
         'image': $image
       }
 
     }).done(function (r) {
     
    //  playlist._insertSongToPlaylist();

   
 
     }).fail(function (textStatus) {
       console.log(textStatus);
     });
     editPlaylistSongsAndFinish($id, songs);
     playlist._getAllPlaylist();

    }
    
  });

    playlist._getPlaylist()

    //DELETE PLAYLIST
    $(".okDelete").on('click', function(){
      //  alert("delete")
      var id = $(".playlist .cancel").data("id")
      //alert(id)
      $.ajax({
        url: `http://localhost/playlist2019/api/playlist/${id}`,
  
        method: 'DELETE',
        
  
      }).done(function (r) {

           playlist._getAllPlaylist();

     //  playlist._insertSongToPlaylist();
 
    
  
      }).fail(function (textStatus) {
        console.log(textStatus);
      });
    });


    

   

  

  
})();
    // end of document ready
})(jQuery); // end of jQuery name space