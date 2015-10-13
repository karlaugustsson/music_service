function play(id){
var playButton = document.getElementsByName('playbutton')
var audio = document.getElementById('myplayer');


// if(!id){
// 	id = 0
// }

var playButton = document.getElementsByName('playbutton')
var source = document.getElementById("source");


insertMeta(audio,id);

audio.load()	



audio.onloadstart = function(){

audio.play();	
}



playButton[0].id = "playing"
songPlaying = id
	
	audio.ondurationchange = function(){
		updateSeekbarDuration(audio)
	}
		

}
function pause(){
var audio = document.getElementById('myplayer')
audio.pause()
}
function nextTrack(){
if(queuesonglist.length == 0){

	return false
}

var nextID = getNextSong()



if(randomQueueList.length == nextID ){

	if(isItShuffleTime() == true ){
		play(randomQueueList[0])
	}else{

	play(queueTracks[0])


	}
pause()	
}else{
	play(nextID)

}



}

function resumePlayback(audio){

		audio.play();
}

function prevTrack(){

if(queuesonglist.length == 0){

	return false
}

var nextID = getPrevSong()

	play(nextID)
}


function mutesound(sound){
var audio = document.getElementById('myplayer');
audio.muted = true
sound.className = "mute true"

}
function unmuteSound(sound){
var audio = document.getElementById('myplayer');
audio.muted = false
sound.className = "mute false"

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



function getNextSong(){
if(isItShuffleTime()){
	track = randomQueueList.indexOf(songPlaying)
	if(randomQueueList.length -1 == track){
		return randomQueueList.length
	}
	track = parseInt(randomQueueList[track + 1]) 

	

}else{
	
	track = parseInt(queueTracks[songPlaying]) + 1
}


		return track

}
function getPrevSong(){
if(isItShuffleTime()){
	var track = randomQueueList.indexOf(songPlaying)
	if(randomQueueList[0] == randomQueueList[track]){
		newRandomPlayQueue()
	return randomQueueList[0];
	}

	track = randomQueueList[track - 1] 

	

}else{
	
	var track = parseInt(queueTracks[songPlaying]) - 1
}


		return track

}

function isPlaying(audio){
	{ return !audio.paused; }
}
function insertMeta(audio,id){
	var imagediv = document.getElementById("albumart")
	var image = queuesonglist[id]["album"]["full_path_album_art"]
	var albumName = queuesonglist[id]["album"]["name"]
	var albumId = queuesonglist[id]["album"]["id"]
	var songTitle = queuesonglist[id]["name"]
	var artist = queuesonglist[id]["album"]["music_groups"][0]["name"]
	var songinfo = document.getElementById("songinfo")
	var track = queuesonglist[id]["music_file_file_name"] + new Date().getTime()
	
	var type = queuesonglist[id]["music_file_content_type"]


	var source = document.getElementById("source");

	source.setAttribute("src",track);
	source.type = type 
	if(!document.getElementById("album_art_image_tag")){
		var imagetag = document.createElement("img");
		imagetag.id = "album_art_image_tag"

	}else{
		var imagetag = document.getElementById("album_art_image_tag")
	}

	if(!document.getElementById("song_title")){
		var song_title_paragraf = document.createElement("p");
		song_title_paragraf.id = "song_title"
		

	}else{
		var song_title_paragraf = document.getElementById("song_title")

	}
	song_title_paragraf.innerHTML = songTitle
	
	if(!document.getElementById("artist_name")){
		var artist_name_paragraf = document.createElement("p");
		artist_name_paragraf.id = "artist_name"


	}else{
		var artist_name_paragraf = document.getElementById("artist_name")
		
	}

	artist_name_paragraf.innerHTML = artist
	
	imagetag.src = image
	imagetag.alt = albumName
	imagelink = document.createElement("a")
	imagelink.href = "albums/"+ albumId +"/"
	imagelink.title = albumName
	attr = document.createAttribute("data-remote")
	attr.value = "true"
	imagelink.setAttributeNode(attr)
	imagelink.appendChild(imagetag)
	imagediv.innerHTML = ""
	imagediv.appendChild(imagelink)

	songinfo.appendChild(song_title_paragraf)
	songinfo.appendChild(artist_name_paragraf)



}
function newPlayQueue(){


		queuesonglist = songlist ; 
		queueTracks = [] ; 
		i = 0 ; 
		while (queueTracks.length != queuesonglist.length){
			queueTracks.push(i++)
		}



}
function updatePlayListAndPlay(id){
	var audio = document.getElementById('myplayer');
	
	
	newPlayQueue()
	newRandomPlayQueue()
	play(id)
}

function playPause(){
var audio = document.getElementById('myplayer');
if (this.id == 'notplaying'){

	setTimeout(function(){

			resumePlayback(audio)


	}, 200);
	this.id = "playing"

}else{
	setTimeout(function(){
		pause()
	}, 200);

	this.id = "notplaying"
}

}

function toggleShuffle(){
	if(this.className == "shuffle off"){
		this.className = "shuffle on"
		newRandomPlayQueue()
	

	}else{
		this.className = "shuffle off"

	}
}
function isItShuffleTime(){
	var shuffleButton = document.getElementById('shuffle');
	return shuffleButton.className == "shuffle on"
}


function newRandomPlayQueue(){
	randomQueueList = [] ; 
while(queuesonglist.length != randomQueueList.length){

	var number = Math.floor(Math.random() * queuesonglist.length -1) + 1
		if (randomQueueList.indexOf(number) > -1 == false){
			randomQueueList.push(number)
		}

}


}

function toggleMute(){

	if (this.className == "mute false"){
		mutesound(this)

	}else{

		unmuteSound(this)

	}
}

function changeSongTimePosition(){
	var audio = document.getElementById('myplayer');
	var seekBar = document.getElementById('seekBar')
	var time = this.value
	audio.pause
	audio.currentTime = time;

	audio.onseeked = function() {
    seekBar.value = time
	}


	audio.oncanplay = function(){

		audio.play();

	}
	
}

function updateSeekbarDuration (audio){

	var trackSearchBar = document.getElementById('seekBar')

	trackSearchBar.max = Math.ceil(audio.seekable.end(0))
}

function updateSeekBar(){
	var audio = document.getElementById('myplayer');
	var seekBar = document.getElementById('seekBar')
	var play = document.getElementsByName('play')

	var currentTimeSpanTag = document.getElementById('currentTime')
		currentTimeSpanTag.textContent = convertToMinutesSeconds(audio.currentTime)

			 seekBar.value = Math.ceil(audio.currentTime)

		 if (audio.ended && play.id != "play"){

	
		 nextTrack()

		 	
		 }
	
}

function convertToMinutesSeconds(time){
	var minutes = Math.floor(time / 60);
	var seconds = Math.floor(time - minutes * 60);
	if(seconds < 10){
		seconds = "0" + seconds
	}
	return minutes + ":" + seconds
}



