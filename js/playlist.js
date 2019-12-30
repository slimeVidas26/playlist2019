

(function ($) {
//AUDIO
  var myAudio = $("#sound");
  var songName_index = 0;

  $("#spinner").show()

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
        // url: `http://localhost/music-player/api/playlist/${query}`,
        // url: `http://nemorak.com/api/playlist/${query}`,
        method: 'GET',
  
      }).done(function (res) {
        console.log(res.data);
        $('#spinner').hide();
        var newQuery = res.data.map(function(item){
          return `<div  class="col s12 m6 l4 xl3 playlist" isPlaying = "false">
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
      // url: `http://nemorak.com/api/playlist`,


      method: 'GET',

    }).done(function (res) {
      //console.log(res.data);
      $('#spinner').hide();
      

      var newPlaylist = res.data.map(function(item){
        return `<div   class="col s12 m6 l4 xl3 playlist"  isPlaying ="false">
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

  //GET PLAYLIST IMAGE(URL)

  var getPlaylistImage = function(id){
     
    $.ajax({
      url: `http://localhost/playlist2019/api/playlist/${id}`,
      method:"GET"

    }).done(function(res){
        $(".itemIsPlaying").addClass("itemIsPlaying");
      $(".itemIsPlaying").css('background-image', 'url(' + res.data.image +' )');
      $(".itemIsPlaying").css('background-size', '100%');
      
      $(".itemIsPlaying").css('background-position', '8% 50%'); 
      $(".itemIsPlaying").css('border-radius','50%');    
    
}); 
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

  var switchTrack = function(collection){
        
    if(songName_index == (collection.length - 1)){
      songName_index = 0;
      myAudio.src = collection[songName_index].url;
      myAudio.play();
      $('.nowPlaying').html(`Now Playing : ${songName[0].name}`);
      $('.nowPlaying').textMarquee({
        mode:'loop'
      });
    } else {
      $('.listSongs ul a li').eq(songName_index).removeClass("current");

      songName_index++;
      myAudio.attr("src"  ,  collection[songName_index].url);
      $('.listSongs ul a li').eq(songName_index).addClass("current");

      myAudio.get(0).play();
      $('.nowPlaying').html(`${collection[songName_index].name}`);
      $('.nowPlaying').textMarquee({
        mode:'loop'
      });
    }
  }

  //GET PLAYLIST SONGS
  var getPlaylistSongs = function(id){

    $.ajax({
      url: `http://localhost/playlist2019/api/playlist/${id}/songs`,
      method:"GET",
    }).done(function(res){
     var playlistSongArr = res.data.songs;
     $('.updateImg').attr('data-id' ,`${id}`);
     getPlaylistImage(id);

     var listSongs = playlistSongArr.map(function(item , index){
       return   `<a><li data-id = ${id} data-url = ${item.url} class="collection-item"><span>${index+1}</span>${item.name}</li></a>`;
     })

     var songName  = playlistSongArr.map(function(item,index){
       var objSong = {
         name:item.name,
         url:item.url,
         index: index

       }
       return objSong;
     })

     $(myAudio).attr("src",songName[songName_index].url);
      
      $(myAudio).on('ended', function(){
        switchTrack(songName);
    });
    
     $('.player .info .listSongs ul').html(listSongs);
    $('.listSongs ul a li:first').addClass("current");

     $('.nowPlaying').append(`Now Playing : ${songName[0].name}`);
     $('.nowPlaying').textMarquee({
      mode:'loop'
    });

      $(".listSongs ul a").on('click' , ' li' , function(){
        if( $(this).is('.current') ) {
          
           $(this).removeClass( "current");
           $(this).addClass( "currentStop");
           $(myAudio).get(0).pause();
           $('.itemIsPlaying').removeClass('rotate')
           $('.nowPlaying').html(`Stop Sound :${$(this).text()}`);
         
           if ($('.playlist').hasClass('rotate')) {  
            $('.playlist').removeClass('rotate');        
           }  
         
      }
       else if($(this).hasClass('currentStop')){
        $(this).removeClass( "currentStop");
        $(this).addClass( "current");
        myAudio.get(0).play();
        $('.itemIsPlaying').addClass('rotate');
        $('.nowPlaying').html(`Now Playing :${$(this).text()}`);
          $('.nowPlaying').textMarquee({
            mode:'loop'
          });
         
          var playlistId = $(this).data("id");
          console.log("playlistId",playlistId);
          
          var $p = $('.playlist i.material-icons.playBtn').filter(function() { 
            return $(this).data("id") == playlistId;
          });

          $p.parent().addClass('rotate')
          
      }
          else{
              $( "li.current" ).removeClass( "current" );
          $( "li.currentStop" ).removeClass( "currentStop" );
          $(this).addClass( "current" );
           $('.itemIsPlaying').addClass('rotate');
           //$(".nowPlaying").replaceWith(`Now Playing :${$(this).text()}`);
          $('.nowPlaying').html(`Now Playing :${$(this).text()}`);
          $('.nowPlaying').textMarquee({
            mode:'loop'
          });
          var url =$(this).data("url"); 
          $(myAudio).attr("src"  , url);
          $(myAudio).get(0).play();

            }
      })

}).fail(function (textStatus) {
  console.log(textStatus);
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
    $(document).on('click','.cancel , .cancelImg', function(){
    var id = $(".cancel").data("id");
    
    $('.cancelImg').attr('data-id' ,"id");

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

   
    $(document).on('click','.edit , .editImg', function(){
      var playlistID = $(".edit").data("id")
      $('.editImg').attr('data-id' ,"playlistID");

      playlist._getPlaylist(playlistID);
 
    });

  
    //DELETE PLAYLIST
      playlist._deletePlaylist();
    //end of delete playlist

    $(document).on('click' , 'i.material-icons.playBtn' , function(){


      

      //         $(this).text("pause_circle_outline")
      //         $(this).parent().attr("isplaying" , "true")

             
                if($(this).text()=="pause_circle_outline"){ 
               myAudio.get(0).pause();
               $(this).text("play_circle_outline");
               $(this).parent().removeClass("rotate");
               $(".itemIsPlaying").removeClass("rotate");
               return;
            
            } 
            if($(this).text()=="play_circle_outline"){
              const activePlaylist = $('.playlist').filter(function(){
                return $(this).attr("isplaying")=="true" });

                // if(activePlaylist.length >0){
                //   activePlaylist.each(function(){
                //     $(this).find(".playBtn").text("play_circle_outline").parent().siblings().attr("isplaying" , "false").removeClass("rotate");
                   
                // });
                //  }
       
                console.log(activePlaylist);
                $(".player").slideDown("slow");
                $('#index-banner').fadeTo('slow', 0.3, function(){
                  $(this).css('background-image', 'url("Docs/audience.jpg")');
                   }).fadeTo('slow', 1);
                  $('#index-banner').css('height', '100vh');
                  $(".item").hide();
                  $(".itemIsPlaying").show().addClass("rotate");
                  var playlistID = $(this).data("id");
                 playlist._getPlaylistSongs(playlistID);
       
                  $('.nowPlaying').textMarquee({
                        mode:'loop'
                      });
              $(this).text("pause_circle_outline");
                setTimeout(function () {      
               myAudio.get(0).play();
               
            }, 150);
            $(this).parent().attr("isplaying" , "true").addClass("rotate")
            // $(this).parent().siblings().attr("isplaying" , "false").removeClass("rotate")
            // $(this).siblings().text("play_circle_outline")

        
            }  
            
           
            
            
          
    });

  //SHOW PLAYER FUNCTION
  $(document).on('click' , 'i.materialbbbb-icons.playBtn2' , function(){

//show player
    $(".player").slideDown("slow");
    //  $(".player").css("opacity" , 0.2);
    $(".item").hide();
    $(".itemIsPlaying").show();

    
    var playlistID = $(this).data("id");
    playlist._getPlaylistSongs(playlistID);

    $('.nowPlaying').textMarquee({
          mode:'loop'
        });

        $('#index-banner').fadeTo('slow', 0.3, function(){
        $(this).css('background-image', 'url("Docs/audience.jpg")');
         }).fadeTo('slow', 1);
        $('#index-banner').css('height', '100vh');

        const activePlaylist = $('.playlist').filter(function(){
          return $(this).attr("isplaying")=="true" });
          
          //const textBtn = ($(this).text ());


          
          // switch (textBtn){
          
          // case "play_circle_outline":
          
          // $(this).text ("pause_circle_outline");
          //  $("#boom").get(0).play();
          // $(this).parent().addClass('rotate').attr(  "isplaying" , "true");
          // break;
          
          
          // case "pause_circle_outline":
        
          // $(this).text ("play_circle_outline");
          // // $("#boom").get(0).pause();
          // $(this).parent().removeClass('rotate').attr(  "isplaying" , "false");
          // break;
          
                
          // }

        

              


             


           
     
          
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