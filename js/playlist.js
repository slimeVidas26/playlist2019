

(function ($) {
//AUDIO
  var myAudio = new Audio();

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
        //console.log(res.data)
        $(".itemIsPlaying").addClass("itemIsPlaying");
        // $(this).css('background-image','url('+bg[1]+','+bg[0]+')');
      $(".itemIsPlaying").css('background-image', 'url(' + res.data.image +' )');
      $(".itemIsPlaying").css('background-size', '100%');
      
      $(".itemIsPlaying").css('background-position', '8% 50%'); 
      $(".itemIsPlaying").css('border-radius','50%'); 

      // $(".itemIsPlaying").css('border-radius', '50%'); 

 

 

       

    
    
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

  //GET PLAYLIST SONGS
  var getPlaylistSongs = function(id){

    $.ajax({
      url: `http://localhost/playlist2019/api/playlist/${id}/songs`,
      method:"GET",
    }).done(function(res){
       
      //console.log("id" , `${id}`)

    //  console.log("res.data.songs",res.data.songs)
     var playlistSongArr = res.data.songs;
    //  console.log("playlistSongArr" , playlistSongArr)
     $('.updateImg').attr('data-id' ,`${id}`);
     getPlaylistImage(id);

     //var imageUrl =`${res.data.songs.url}`; 
      //$(".item").css("background-image", "url(" + imageUrl + ")"); 
     var listSongs = playlistSongArr.map(function(item , index){
       return   `<a><li data-id = ${id} data-url = ${item.url} class="collection-item"><span>${index+1}</span>${item.name}</li></a>`;
     })

     //console.log("listSongs" , listSongs)

     var songName  = playlistSongArr.map(function(item,index){
       //console.log(item.name)
       //console.log("index" , index)
       var objSong = {
         name:item.name,
         url:item.url,
         index: index

       }
        //console.log("objSong",objSong);
       return objSong;
     })

     //console.log("songName",songName)
     //console.log("songName.length",songName.length)
    
      var songName_index = 0;
      var myAudio = $(".audio-control audio");
       //myAudio.src = songName[songName_index].url;
       //myAudio.play();

       
      myAudio.attr("src"  ,  songName[songName_index].url);
      
      var switchTrack = function(){
       
        if(songName_index == (songName.length - 1)){
          songName_index = 0;
          myAudio.src = songName[songName_index].url;
          myAudio.play();
          $('.nowPlaying').html(`Now Playing : ${songName[0].name}`);
          $('.nowPlaying').textMarquee({
            mode:'loop'
          });
        } else {
          $('.listSongs ul a li').eq(songName_index).removeClass("current");

          songName_index++;
          myAudio.attr("src"  ,  songName[songName_index].url);
          $('.listSongs ul a li').eq(songName_index).addClass("current");

          $('#boom').get(0).play();
          $('.nowPlaying').html(`${songName[songName_index].name}`);
          $('.nowPlaying').textMarquee({
            mode:'loop'
          });




        }

      
      }

      $(myAudio).on('ended', function(){
      
        switchTrack();
    });
    
     $('.player .info .listSongs ul').html(listSongs);
    $('.listSongs ul a li:first').addClass("current");

     $('.nowPlaying').append(`Now Playing : ${songName[0].name}`);
     $('.nowPlaying').textMarquee({
      mode:'loop'
    });

      $(document).on('click' , '.listSongs ul a li' , function(){
       console.log($(this).parent())
        
       var playing = false;

       if (playing == false) {
        $('#boom').get(0).play();
          playing = true;
          //$('#boom').get(0).pause();

      } else {
        $('#boom').get(0).pause();
          playing = false;
      }


        if( $(this).is('.current') ) {
          
           $(this).removeClass( "current");
           $(this).addClass( "currentStop");
           $('#boom').get(0).pause();
           $('.itemIsPlaying').removeClass('rotate')
           playing = false;
           $('.nowPlaying').html(`Stop Sound :${$(this).text()}`);
          //  $(this).siblings().removeClass( "currentStop");
           //$( "li.currentStop" ).removeClass( "currentStop" );

           if ($('.playlist').hasClass('rotate')) {  
            $('.playlist').removeClass('rotate');        
           }  
         
      }
      else if($(this).is('.currentStop')){
        
        $(this).removeClass( "currentStop");
        $(this).addClass( "current");
        $('#boom').get(0).play();
        $('.itemIsPlaying').addClass('rotate');
        playing = true;
        $('.nowPlaying').html(`Now Playing :${$(this).text()}`);
          $('.nowPlaying').textMarquee({
            mode:'loop'
          });
         


          
          // $(this).siblings().removeClass( "currentStop");
          var playlistId = $(this).data("id");
          console.log("playlistId",playlistId);
          

          var $p = $('.playlist i.material-icons.playBtn').filter(function() { 
            return $(this).data("id") == playlistId;
          });

          // console.log("p" , $p)
            

          $p.parent().addClass('rotate')

      }
      // else if (!$(this).hasClass("current") && !$(this).hasClass("currentStop")) {
        else{
        
          $( "li.current" ).removeClass( "current" );
          $( "li.currentStop" ).removeClass( "currentStop" );
          $(this).addClass( "current" );
           $('.itemIsPlaying').addClass('rotate');
          $('.nowPlaying').html(`Now Playing :${$(this).text()}`);
          $('.nowPlaying').textMarquee({
            mode:'loop'
          });
          var url =$(this).data("url"); 
          //myAudio.src = url ;
          myAudio.attr("src"  , url);
          $('#boom').get(0).play();
          
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


  //SHOW PLAYER FUNCTION

  $(document).on('click' , '.playBtn' , function(){

    myAudio = $(".audio-control audio");

    
    
    $(".player").slideDown("slow");
    //  $(".player").css("opacity" , 0.2);
    $(".item").hide();
    $(".itemIsPlaying").show();

    
    var playlistID = $(this).data("id");
    playlist._getPlaylistSongs(playlistID);

    $('.nowPlaying').textMarquee({
          mode:'loop'
        });

        //show background image
        $('#index-banner').fadeTo('slow', 0.3, function()
{
    $(this).css('background-image', 'url("Docs/audience.jpg")');
}).fadeTo('slow', 1);
        // $('#index-banner').css('background-image', 'url("Docs/audience.jpg")');
        $('#index-banner').css('height', '100vh');

      

        

       const activePlaylist = $('.playlist').filter(function(){
         //console.log("this" , $(this));
         return $(this).attr("isPlaying")=="true"
       });

       console.log("activePlaylist",activePlaylist);

       if(activePlaylist.length >0){
        activePlaylist.each(function(){
          $(this).find(".playBtn").text("play_circle_outline");
         
      });
       }
      
       $(this).parent().attr("isPlaying") === "false" ? 
          $(this).text("pause_circle_outline").parent().attr("isPlaying" , "true").addClass( "rotate" )
           .siblings().removeClass("rotate")
           :
           $(this).text("play_circle_outline").parent().attr("isPlaying" , "false").removeClass( "rotate" )

          
           $(this).parent().attr("isPlaying") === "false" ? 
           $(".itemIsPlaying").removeClass('rotate')
            :
            $(".itemIsPlaying").addClass('rotate')

            $(this).parent().attr("isPlaying") === "false" ? 
            $("#boom").get(0).play()
            :
            $("#boom").get(0).pause()

         

      


        


       

             
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