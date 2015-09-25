function play(id){
var playButton = document.getElementsByName('playbutton')
var audio = document.getElementById('myplayer');

if(!id){
	id = 0
}

var playButton = document.getElementsByName('playbutton')
playButton[0].id = "playing"
insertMeta(audio,id)
songPlaying = id
audio.load()
audio.play()


}
function pause(){
var audio = document.getElementById('myplayer')
audio.pause()
}
function nextTrack(){
if(queuesonglist.length == 0){

	return false
}

if(isItShuffleTime()){
	
	var nextID = randomTrack()


}else{
var nextID = getSongPlaying() + 1

}

if(!queuesonglist[nextID]){
	console.log(0)
	play(0)
	pause()
}else{
		play(nextID)
}



}

function resumePlayback(audio){
	audio.play()
}

function prevTrack(){

if(queuesonglist.length == 0){

	return false
}
if(isItShuffleTime()){
	
	
		var prevID = playedTracks[playedTracks.length - 2]
		console.log(prevID)



}else{
var prevID = getSongPlaying() - 1

}

if(!queuesonglist[prevID]){
	console.log(0)
	play(0)
	pause()
}else{
		play(prevID)
}

}


function mutesound(){

}
function unmuteSound(){

}
function setVolume(){

}



function getSongPlaying(){
return parseInt(songPlaying)
}

function isPlaying(audio){
	{ return !audio.paused; }
}
function insertMeta(audio,id){


	var artist = queuesonglist[id]["album"]["music_groups"][0]["name"]

	var track = queuesonglist[id]["music_file_file_name"]
	
	var type = queuesonglist[id]["music_file_content_type"]

	data = '<source src="' + track + '"'  + ' type="' + type + '" name ="source" />' ; 

	audio.innerHTML = data
}
function newPlayQueue(){

		queuesonglist = songlist



}
function updatePlayListAndPlay(){
	newPlayQueue()
	play(this.id)
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
	

	}else{
		this.className = "shuffle off"

	}
}
function isItShuffleTime(){
	var shuffleButton = document.getElementById('shuffle');
	return shuffleButton.className == "shuffle on"
}
function randomTrack(){
while(true){

	var number = Math.floor(Math.random() * queuesonglist.length -1) + 1
		if (playedTracks.indexOf(number) > -1 == false){
			playedTracks.push(number)

			break;
		}else if(queuesonglist.length == playedTracks.length){
			playedTracks = []
			number = queuesonglist.length + 1
			break;
		}

}
return number

}

function shuffleIsSet(){
	return shuffleSet
}



