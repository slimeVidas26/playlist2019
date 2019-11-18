<!-- MODAL ADD PLAYLIST SONGS  //////////////////////////////////////////////////////////////// -->

<!-- Modal Structure -->
<div id="modal-add-playlist-songs" class="modal">
  <div class="modal-content">
    <h4>Add Playlist Songs</h4>

    <div class="row">
      <form id="addPlaylistSongForm" name = "addPlaylistSongForm" class="col s12">
       
        
        <div class="row modal-form-row">
          <div class="input-field col s12 m8">
            <input id="song_url" type="text" class="validate" name = "song_url[]">
            <label for="song_url">Song URL</label>
          </div>

          <div class="input-field col s12 m4">
            <input id="name" type="text" class="validate" name = "song_name[]">
            <label for="name">Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12 m8">
            <input id="song_url" type="text" class="validate" name = "song_url[]">
            <label for="song_url">Song URL</label>
          </div>
          <div class="input-field col s12 m4">
            <input id="playlist_name" type="text" class="validate" name = "song_name[]">
            <label for="name">Name</label>
          </div>
        </div>       
        <div class="row">
            <div class="input-field col s12 m8">
              <input id="song_url" type="text" class="validate" name = "song_url[]">
              <label for="song_url">Song URL</label>
            </div>
            <div class="input-field col s12 m4">
              <input id="playlist_name" type="text" class="validate" name = "song_name[]">
              <label for="name">Name</label>
            </div>
          </div>         
      </form>
    </div>
  </div>
  <div class="modal-footer">
      <a class="left addAnotherSong"> <i class="material-icons left ">add_circle </i>Add Another Song</a>
      <div class="left count"><span>(3)</span></div>
    <a class=" modal-action modal-close waves-effect waves-green btn">Finish & Save</a>
  </div>
</div>