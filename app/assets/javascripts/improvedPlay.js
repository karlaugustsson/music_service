function play(id){

var audio = document.getElementById('myplayer');
console.log(id)
if(!id){
	id = 0
}

insertMeta(audio,queuesonglist[id])
songPlaying = id
audio.load()
audio.play()


}
function pause(){
var audio = document.getElementById('myplayer')
audio.pause()
}
function nextTrack(){

nextID = getSongPlaying() + 1
console.log(queuesonglist[nextId] )
if(null == queuesonglist[nextId]){
	play(0)
	pause()
}

	play(nextID)


}

function prevTrack(){

}


function mutesound(){

}
function unmuteSound(){

}
function setVolume(){

}



function getSongPlaying(){
return songPlaying
}

function isPlaying(audio){
	{ return !audio.paused; }
}
function insertMeta(audio,object){


	var artist = object["album"]["music_groups"][0]["name"]

	var track = object["music_file_file_name"]
	
	var type = object["music_file_content_type"]

	data = '<source src="' + track + '"'  + ' type="' + type + '" name ="source" />' ; 

	audio.innerHTML = data
}
function newPlayQueue(id){
	queuesonglist = [];
	for (var i = id ; songlist[i]; i++) {
		queuesonglist.push(songlist[i])
	};

}
function updatePlayListAndPlay(){
	newPlayQueue(this.id)
	play()
}

function findNextsong(source){
	


}

