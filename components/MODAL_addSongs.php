<!-- MODAL ADD PLAYLIST SONGS  //////////////////////////////////////////////////////////////// -->

<!-- Modal Structure -->
<div id="modal-add-songs" class="modal">
  <div class="modal-content">
    <h4>Add Playlist Songs</h4>

    <div class="row">
      <form id="addSongForm" name = "addSongForm" class="col s12">
       
        
        <div class="row modal-form-row">
          <div class="input-field col s12 m8">
            <input value = "song1Url" type="text" class="validate inputUrl" name = "songs">
            <label for="song_url">Song URL</label>
          </div>

          <div class="input-field col s12 m4">
            <input value = "song1Name" type="text" class="validate inputName" name = "songs">
            <label for="song_name">Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12 m8">
            <input value = "song2Url"  type="text" class="validate inputUrl" name = "songs">
            <label for="song_url">Song URL</label>
          </div>
          <div class="input-field col s12 m4">
            <input value = "song2Name"  type="text" class="validate inputName" name = "songs">
            <label for="song_name">Name</label>
          </div>
        </div>       
        <div class="row">
            <div class="input-field col s12 m8">
              <input value = "song3Url"  type="text" class="validate inputUrl" name = "songs">
              <label for="song_url">Song URL</label>
            </div>
            <div class="input-field col s12 m4">
              <input value = "song3Name"  type="text" class="validate inputName" name = "songs">
              <label for="song_name">Name</label>
            </div>
          </div>         
      </form>
    </div>
  </div>
  <div class="modal-footer">
      <a class="left addAnotherSong"> <i class="material-icons left ">add_circle </i>Add Another Song</a>
      <div class="left count"><span>(3)</span></div>
    <a  class="finishAndSave modal-action modal-close waves-effect waves-green btn">Finish & Save</a>
  </div>
</div>