function convertToMinutesSeconds(time){
	var minutes = Math.floor(time / 60);
	var seconds = Math.floor(time - minutes * 60);
	if(seconds < 10){
		seconds = "0" + seconds
	}

	return minutes + ":" + seconds

}
function createQueueSonglist(){
	queuesonglist = []
	x = 0
	for (var i = Object.keys(songlist).length - 1; i >= 0; i--) {
		queuesonglist.push(x++)

	}
	return queuesonglist
}
function toggleShuffle(){
	if(this.className == "shuffle off"){
		this.className = "shuffle on"
	
		createShufflePlaylist()

	}else{
		this.className = "shuffle off"
		restoreOrdinaryOrderOfPlaylist()
	}
}
function isPlaying(audio){
	return !audio.paused; 
}
function createShufflePlaylist(){
	
	
		numberofsongs = Object.keys(songlist).length

		
	
			queuesonglist = shuffleSongs(numberofsongs)
	
		playSong(queuesonglist[0])

	

}
function restoreOrdinaryOrderOfPlaylist(){
	queuesonglist = createQueueSonglist()
	
}
function shuffleSongs(count){ 
	var usedNumbers = []
	shuffle = []
   
    while(shuffle.length <= count -1 ){
    	number = Math.floor(Math.random() * count )
    	if (usedNumbers.indexOf(number) > -1 == false){
    		shuffle.push(number) 
    		usedNumbers.push(number)
    
    	}
    }

    return shuffle
 
}
function updateSeekbarDuration (audio){

	var trackSearchBar = document.getElementById('seekBar')

	trackSearchBar.max = Math.ceil(audio.seekable.end(0))
}

function insertAudioData(id){


	
	var artist = songlist[id]["album"]["music_groups"][0]["name"]

	var track = songlist[id]["music_file_file_name"]
	
	var type = songlist[id]["music_file_content_type"]

	data = '<source src="' + track + '"' + 'id="' + id + '"' + ' type="' + type + '" />' ; 

	
	return data

}
function resetPlayback(audio){

	audio.currentTime = 0;

}
function nextSong(){
	id = getTrackIdplaying()
	LookForNextSongInThePlayList(id)
}
function prevSong(){
	id = getTrackIdplaying()
	LookForPreviousSongInThePLaylist(id)
}
function stopMusic(audio){

var play = document.getElementsByName('playbutton')
audio.pause()
play[0].id = "notplaying"

}

function playMusic(){
var play = document.getElementsByName('playbutton')
play[0].id = "playing"
}

function checkIfEnded(audio){
	if(audio.ended){
		return true;
	}else{
		return false
	}
}
function LookForNextSongInThePlayList(id){
	var audio = document.getElementById('myplayer');

	
	
	nextSong = id  + 1

	

	if (!queuesonglist[nextSong]){
		resetPlayback(audio)
		stopMusic(audio)
		nextSong = 0
		audio.innerHTML = insertAudioData(nextSong)
		audio.load()
	
	}else{
		playMusic()
		playSong(nextSong)
	}

	
	
}
function LookForPreviousSongInThePLaylist(id){
	var audio = document.getElementById('myplayer');
	
	prevSong = id - 1
	if (!queuesonglist[nextSong]){

		prevSong = 0
		resetPlayback(audio)
		stopMusic(audio)
		
		audio.innerHTML = insertAudioData(prevSong)
		audio.load()
	}else{
		playMusic()
		playSong(prevSong)
	}
}
function getTrackIdplaying(){
	var audio = document.getElementById('myplayer');
	if (audio.childNodes[0]){

		return parseInt(audio.childNodes[0].id)
	
	}else{
		return false
	}
}


function playPause(){
var audio = document.getElementById('myplayer');
if (this.id == 'notplaying'){

	setTimeout(function(){
		audio.play()
	}, 200);
	this.id = "playing"

}else{
	setTimeout(function(){
		audio.pause()
	}, 200);

	this.id = "notplaying"
}

}

function muteAndUnmuteAudio(){
var audio = document.getElementById('myplayer');
if (this.className == "mute false"){
	setTimeout(function(){
		audio.muted = true
	},200);
	this.className = "mute true"
}else{
	setTimeout(function(){
		audio.muted = false
	},200);
	this.className = "mute false"

}

}
function setVolume(){
var audio = document.getElementById('myplayer');

audio.volume = this.value

if (audio.volume == 0){
	
	this.className = "mute true"

}else{
	this.className = "mute false"
}

}

function changeSongTimePosition(){
	var audio = document.getElementById('myplayer');
	audio.currentTime = this.value
	var seekBar = document.getElementById('seekBar')
	
	setTimeout(function(){
			 seekBar.value = this.value
	},10);
	if(audio.paused == true){
		audio.play()
	}
}
function updateSeekBar(){
	var audio = document.getElementById('myplayer');
	var seekBar = document.getElementById('seekBar')
	var play = document.getElementsByName('play')

	var currentTimeSpanTag = document.getElementById('currentTime')
		currentTimeSpanTag.textContent = convertToMinutesSeconds(audio.currentTime)
		setTimeout(function(){
			 seekBar.value = audio.currentTime
		},10);
		
			
			
		 if (checkIfEnded(audio) && play.id != "play"){
		 	id = getTrackIdplaying()

		 	LookForNextSongInThePlayList(id)

		 	
		 }
	
}
function playSong(id){

	if (!queuesonglist.length){
		queuesonglist = createQueueSonglist();
	}
	

	var audio = document.getElementById('myplayer');
	resetPlayback(audio)
	audio.innerHTML = insertAudioData(id)

	audio.load()
	audio.play()
	setTimeout(function(){
		updateSeekbarDuration(audio)
	},50);

	


	
}




