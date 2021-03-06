(function ($) {
  //DEFINE VARIABLES
  const LOCAL =  `http://localhost/playlist2019/api/playlist`;
  const PROD =  `http://nemorak.com/api/playlist`;

  var myAudio = $("#sound");
  var songName_index = 0;
  var activePlaylist = $('.playlist').filter(() =>
     $(this).attr("isplaying") == "true");

  console.log(activePlaylist.length)
  $("#spinner").show();

  var playlist = (function () {




    //ADD PLAYLIST
    function addPlaylist(name, image, songs) {

      $.ajax({
        url: `${LOCAL}`,
        //url:`${PROD}`,


        method: 'POST',
        data: {
          'name': name,
          'image': image,
          'songs': songs
        }

      }).done(function (r) {
        // console.log(r.data);
        // console.log(`Playlist ${r.data.id} added successfully`);

        getAllPlaylist();

      }).fail(function (textStatus) {
        //console.log(textStatus);
      });
    }


    function insertSongToPlaylist() {
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




    var getAllPlaylist = function (query) {
      $('#spinner').show();

      // if (query !== undefined) {
        if (undefined !== query && query.length) {
        $.ajax({
          url: `${LOCAL}/${query}`,
           //url: `${PROD}/${query}`,
          method: 'GET',

        }).done(function (res) {
          console.log(res.data);
          $('#spinner').hide();
          console.log("activePlaylist in get all playlists with query")

          var newQuery = res.data.map(function (item) {
            return `<div  class="col s12 m6 l4 xl3 playlist" isplaying = "false">
          <img src=${item.image}  alt="preview img" class="center">
          <div  class="arcText">${item.name}</div>
          <i data-id = ${item.id} class="material-icons playBtn">play_circle_outline</i>
             
              <a class=" modal-trigger" href="#modal-warning">
                  <i data-id = ${item.id} class="material-icons cancel">cancel</i>
                  </a>
                  <a class=" modal-trigger" href="#modalAdd">
                  <i data-id = ${item.id} class="material-icons edit">edit</i>
                  </a>
             `
          });

          $('.mainPlaylist').html(newQuery).fadeIn(1500);

        })
      } else {
        $.ajax({

          url: `${LOCAL}`,
          //url:`${PROD}`,
          method: 'GET',

        }).done(function (res) {
          $('#spinner').hide();

          //console.log("activePlaylist in get all playlists without query")

          var newPlaylist = res.data.map(function (item) {
            return `<div   class="col s12 m6 l4 xl3 playlist"  isplaying ="false">
             <img src=${item.image}  alt="preview img" class="center">
             <div  class="arcText">${item.name}</div>
                <i data-id = ${item.id} class="material-icons playBtn">play_circle_outline</i>
           
            <a class=" modal-trigger" href="#modal-warning">
                <i data-id = ${item.id} class="material-icons cancel">cancel</i>
                </a>
                <a class=" modal-trigger" href="#modalAdd">
                <i data-id = ${item.id} class="material-icons edit">edit</i>
                </a>`
          });

          $('.mainPlaylist').html(newPlaylist).fadeIn(1500);
        }).fail(function (textStatus) {
          console.log(textStatus);
        });
      }
    }



    //GET PLAYLIST IMAGE(URL)

    var getPlaylistImage = function (id) {

      $.ajax({
        url: `${LOCAL}/${id}`,
        //url: `${PROD}/${id}`,

        method: "GET"

      }).done(function (res) {

        $(".itemIsPlaying").addClass("itemIsPlaying");
        $(".itemIsPlaying").css('background-image', 'url(' + res.data.image + ' )');
        $(".itemIsPlaying").css('background-size', '100%');
        $(".itemIsPlaying").css('background-color', 'black');


        $(".itemIsPlaying").css('background-position', '8% 50%');
        $(".itemIsPlaying").css('border-radius', '50%');


      });
    }

    //GET EXISTING PLAYLIST

    var getPlaylist = function (id) {

      $.ajax({
        url: `${LOCAL}/${id}`,
        //url: `${PROD}/${id}`,

        method: "GET"

      }).done(function (res) {
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

    // GET PLAYLIST NAME

    var getPlaylistName = function (id) {

      $.ajax({
        url: `${LOCAL}/${id}`,
        //url: `${PROD}/${id}`,

        method: "GET"

      }).done(function (res) {
        console.log("res.data.name" , res.data.name)
        $(".playlist-title").empty().append(res.data.name);
      });

    }

    var switchTrack = function (collection) {

      if (songName_index == (collection.length - 1)) {
        $('.listSongs ul a li').eq(songName_index).removeClass("current");
        songName_index = 0;
        myAudio.src = collection[songName_index].url;
        myAudio.get(0).play();
       
        $('.listSongs ul a li').eq(songName_index).addClass("current");
        $('.nowPlaying').html(`Now Playing :\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ${collection[0].name}`);
        $('.nowPlaying').textMarquee({
          mode: 'loop'
        });
      } else {
        $('.listSongs ul a li').eq(songName_index).removeClass("current");

        songName_index++;
        myAudio.attr("src", collection[songName_index].url);
        $('.listSongs ul a li').eq(songName_index).addClass("current");

        myAudio.get(0).play();
        $('.nowPlaying').html(`Now Playing :\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${collection[songName_index].name}`);
        $('.nowPlaying').textMarquee({
          mode: 'loop'
        });
      }
    }

    //GET PLAYLIST SONGS
    var getPlaylistSongs = function (id) {

      $.ajax({
        url: `${LOCAL}/${id}/songs`,
        //url: `${PROD}/${id}/songs`,

        method: "GET",
      }).done(function (res) {
        var playlistSongArr = res.data.songs;
        $('.updateImg').attr('data-id', `${id}`);
        getPlaylistImage(id);

        var listSongs = playlistSongArr.map(function (item, index) {
          return `<a><li data-id = ${id} data-url = ${item.url} class="collection-item"><span>${index+1}</span>${item.name}</li></a>`;
        })

        var songName = playlistSongArr.map(function (item, index) {
          var objSong = {
            name: item.name,
            url: item.url,
            index: index

          }
          return objSong;
        })

        $(myAudio).attr("src", songName[songName_index].url);

        $(myAudio).on('ended', function () {
          switchTrack(songName);
        });

        $('.player .info .listSongs ul').html(listSongs);
        $('.listSongs ul a li:first').addClass("current");

        $('.nowPlaying').append(`Now Playing :\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ${songName[0].name}`);
        $('.nowPlaying').textMarquee({
          mode: 'loop'
        });

        $(".listSongs ul a").on('click', ' li', function () {
          if ($(this).is('.current')) {

            $(this).removeClass("current");
            $(this).addClass("currentStop");
            $(myAudio).get(0).pause();
            $('.itemIsPlaying').removeClass('rotate')
            $('.nowPlaying').html(`Stop Sound :\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${$(this).text()}`);

            if ($('.playlist').hasClass('rotate')) {
              $('.playlist').removeClass('rotate');
            }

          } else if ($(this).hasClass('currentStop')) {
            $(this).removeClass("currentStop");
            $(this).addClass("current");
            myAudio.get(0).play();
            $('.itemIsPlaying').addClass('rotate');
            $('.nowPlaying').html(`Now Playing :\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${$(this).text()}`);
            $('.nowPlaying').textMarquee({
              mode: 'loop'
            });

            var playlistId = $(this).data("id");
            console.log("playlistId", playlistId);

            var $p = $('.playlist i.material-icons.playBtn').filter(function () {
              return $(this).data("id") == playlistId;
            });

            $p.parent().addClass('rotate')

          } else {
            $("li.current").removeClass("current");
            $("li.currentStop").removeClass("currentStop");
            $(this).addClass("current");
            $('.itemIsPlaying').addClass('rotate');
            //$(".nowPlaying").replaceWith(`Now Playing :${$(this).text()}`);
            $('.nowPlaying').html(`Now Playing :\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${$(this).text()}`);
            $('.nowPlaying').textMarquee({
              mode: 'loop'
            });
            var url = $(this).data("url");
            $(myAudio).attr("src", url);
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
        url: `${LOCAL}/${id}/songs`,
        //url: `${PROD}/${id}/songs`,


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
    

    var deletePlaylist = function () {
          $.ajax({
            url: `${LOCAL}/${id}`,
            //url: `${PROD}/${id}`,


            method: 'DELETE',
          }).done(function (r) {
            getAllPlaylist();
          }).fail(function (textStatus) {
            console.log(textStatus);
          }); 
    }

    return {
      _addPlaylist: addPlaylist,
      _insertSongToPlaylist: insertSongToPlaylist,
      _getAllPlaylist: getAllPlaylist,
      _getPlaylist: getPlaylist,
      _editPlaylistSongsAndFinish: editPlaylistSongsAndFinish,
      _deletePlaylist: deletePlaylist,
      _getPlaylistSongs: getPlaylistSongs,
      deletePlaylist: deletePlaylist,
      _getPlaylistName : getPlaylistName



    }
  })();


  var processPlaylist = (function () {

    //SHOW RESUME

    $('a.resumePlaylist').on('click', function (e) {
      // console.log(e.target)
      // console.log($(this).text())
      // console.log($(this).children())



      var myStr = $(this).text();
      var textBtn = myStr.slice(myStr.length - 8).trim()
      //console.log("textBtn", textBtn);



      switch (textBtn) {

        case "About Me":
          $(this).text("Playlist")
          //console.log("this", $(this))
          //console.log("children" , $(this).children(":first"))
          $(this).append('<i class="material-icons left">playlist_play</i>');

          $('.resume').fadeIn();
          $('.playlist').fadeOut();
          $('.player').fadeOut();
          $('.nav-wrapper form').fadeOut();


          break;

        case "ist_play":
          $(this).text("About Me")
          console.log("this", $(this))
          //console.log("children" , $(this).children(":first"))
          $(this).prepend('<i class="material-icons left">face</i>');
          // $(this).prepend('<i class="material-icons left">playlist_play</i>');

          $('.resume').fadeOut();
          $('.playlist').fadeIn();
          $('.nav-wrapper form').fadeIn();
          if (activePlaylist.length == 0) {

            $('.player').fadeOut();

          } else {

            $('.player').fadeIn();

          }
          break;
        default:

      }

    });




    playlist._getAllPlaylist();


    $('#modal-add-songs .finishAndSave').click(function () {
      var $id = $("input[name='playlist_id']").val();
      var $name = $("input[name='playlist_name']").val();
      var $image = $("input[name='playlist_url']").val();
      var songs = playlist._insertSongToPlaylist();

      if ($id === "") {
        playlist._addPlaylist($name, $image, songs);
        playlist._getAllPlaylist();
      } else {

        $.ajax({
          url: `${LOCAL}/${$id}`,
          //url: `${PROD}/${$id}`,


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

    //GET PLAYLIST TO UPDATE
    $(document).on('click', '.edit  , #editImg', function () {
      var playlistID = $(this).data("id");
      $(this).attr('data-id', playlistID);
      playlist._getPlaylist(playlistID);

    });

    
    //DELETE PLAYLIST

      $(document).on('click', '.cancel , #cancelImg', function () {
        var id = $(this).data("id");
        $(this).attr('data-id', id);
        //console.log(id);
         //console.log($(this).attr('data-id'));
         playlist._getPlaylistName(id);


        $('#modal-warning .modal-footer .okDelete').attr('data-id', "id");
        $('#modal-warning .modal-content h4').attr('data-id', "id");
        $('#modal-warning .modal-footer .okDelete').on('click', function () {
          playlist._deletePlaylist()
        })
      });
    
    //end of delete playlist


    $(document).on('click', 'i.material-icons.playBtn', function () {

      $("html, body").animate({ scrollTop: 0 }, 600);

      //$(window).scrollTop(0); 

      if ($(this).text() == "pause_circle_outline") {

        myAudio.get(0).pause();
        $(this).text("play_circle_outline");
        $(this).parent().removeClass("rotate").attr("isplaying", "false");
        $(".itemIsPlaying").removeClass("rotate");
        return;
      }



      if ($(this).text() == "play_circle_outline") {



        activePlaylist.push($(this).parent())
        console.log("activePlaylist > 0", activePlaylist.length);

        $(".player").slideDown("slow");
        $('#index-banner').fadeTo('slow', 0.3, function () {
          $(this).css('background-image', 'url("Docs/audience.jpg")');
        }).fadeTo('slow', 1);
        $('#index-banner').css('display', 'block');

        $(".item").hide();
        $(".itemIsPlaying").show().addClass("rotate");
        var playlistID = $(this).data("id");
        $('#editImg').attr('data-id', playlistID);
        $('#cancelImg').attr('data-id', playlistID);

        playlist._getPlaylistSongs(playlistID);

        $('.nowPlaying').textMarquee({
          mode: 'loop'
        });
        $(this).text("pause_circle_outline");
        setTimeout(function () {
          myAudio.get(0).play();

        }, 150);

        $(this).parent().attr("isplaying", "true").addClass("rotate")
        $(this).parent().siblings().attr("isplaying", "false").removeClass("rotate").find(".playBtn").text("play_circle_outline");

      }
    });



    $('#search').keyup(function () {
      var search = $(this).val();
  
      if (search.length >0) {
        playlist._getAllPlaylist(search);
        console.log("search", search)
      } else {
        playlist._getAllPlaylist();
        console.log("emptysearch", search)

      }

      myAudio.onplay = function() {
         /* do something */
         console.log("toto")
        };

      

    });


  })();
  // end of document ready
})(jQuery); // end of jQuery name space