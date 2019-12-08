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

  var getAllPlaylist = function(query){
    $('#spinner').show();
    if(query){

      $.ajax({
        url: `http://localhost/playlist2019/api/playlist/${query}`,
  
        method: 'GET',
  
      }).done(function (res) {
        console.log(res.data);
        $('#spinner').hide();
        var newQuery = res.data.map(function(item){
          return `<div class="col s12 m6 l4 xl3 playlist">
          <img src=${item.image}  alt="preview img" class="center">
          <div  class="arcText">${item.name}</div>
                  <i data-id = ${item.id} class="material-icons playBtn">play_circle_outline</i>
              <div class="actions">
              <a class=" modal-trigger" href="#modal-warning">
                  <i data-id = ${item.id} class="material-icons cancel">cancel</i>
                  </a>
                  <a class=" modal-trigger" href="#modalAdd">
                  <i data-id = ${item.id} class="material-icons edit">edit</i>
                  </a>
              </div>`
        });

        $('.mainPlaylist').html(newQuery)

      })
    }
    else{
    
    $.ajax({
      url: 'http://localhost/playlist2019/api/playlist',

      method: 'GET',

    }).done(function (res) {
      //console.log(res.data);
      $('#spinner').hide();
      

      var newPlaylist = res.data.map(function(item){
        return `<div class="col s12 m6 l4 xl3 playlist">
        <img src=${item.image}  alt="preview img" class="center">
        <div  class="arcText">${item.name}</div>
                <i data-id = ${item.id} class="material-icons playBtn">play_circle_outline</i>
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
  }

  //GET EXISTING PLAYLIST

  var getPlaylist = function(id){
     
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
      
    
    
    
  }

  //GET PLAYLIST SONGS
  var getPlaylistSongs = function(id){
     
    $.ajax({
      url: `http://localhost/playlist2019/api/playlist/${id}/songs`,
      method:"GET"

    }).done(function(res){
     //console.log(res.data.songs)
     var playlistSongArr = res.data.songs;
     console.log("playlistSongArr" , playlistSongArr)
     
     var listSongs = playlistSongArr.map(function(item , index){
       return   `<a><li class="collection-item"><span>${index+1}.</span>${item.name}</li></a>`;
     })

     var songName  = playlistSongArr.map(function(item){
       console.log(item.name.length)
      //  console.log(str.slice(4, 19));
       let songShort  = item.name.substring(0,20);
       return songShort;
     })

     
     $('.player .info .listSongs ul').html(listSongs);
    $('.listSongs ul a li:first').find("span").hide();
    $('.listSongs ul a li:first').addClass("current");

     $('.nowPlaying').append(`${songName[0]}`);

      $(document).on('click' , '.listSongs ul a li' , function(){

        if( $(this).is('.current') ) {
          $(this).removeClass( "current");
          $(this).find( "span" ).show();
      }
      else {
          $( "li.current" ).removeClass( "current" );
          $(this).addClass( "current" );
          $(this).find( "span" ).hide();
          $('.nowPlaying').html('<span>NOW PLAYING :</span>'+$(this).text().substring(0,20));
          
      }
       
      })

   

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
    _deletePlaylist:deletePlaylist,
    _getPlaylistSongs:getPlaylistSongs

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

   //GET PLAYLIST

   
    $(document).on('click','.edit', function(){
      var playlistID = $(this).data("id")
      playlist._getPlaylist(playlistID);
      
    });
    

    //DELETE PLAYLIST
      playlist._deletePlaylist();


  //SHOW PLAYER FUNCTION

  $(document).on('click' , '.playBtn' , function(){
    $(".player").slideDown("slow");
    var playlistID = $(this).data("id");
    playlist._getPlaylistSongs(playlistID);
    
  })

  $('#search').keyup(function(){
    var search = $(this).val();
    if(search != '')
    {
      playlist._getAllPlaylist(search);
        }
    else
    {
     playlist._getAllPlaylist();
    }
   });
  
 
})();
    // end of document ready
})(jQuery); // end of jQuery name space