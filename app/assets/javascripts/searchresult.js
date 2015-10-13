function printSearchResult(){

		if (searchResult.length == 0){
			var i = createNewElement("i")
			console.log(i)
			i.innerHTML = "No results were found"
			return i
		}else{
			return itterateSearchResult()
		}
}
function printAlbumResult(){
	itterateAlbumResult()
}
function itterateAlbumResult(){

	
	tableHeader = ["Track" ,"length"]
	
	var table = createTableHeaders("AlbumResult",tableHeader)

}
function itterateSearchResult(){

	
	var tableHeader = ["Track" , "Artist" , "Album"]
	
	var table = createTableHeaders("searchResult",tableHeader)
	

for (var i = 0 ;  i < searchResult.length; i++) {
		var track = searchResult[i]['name']
		
		var artist = searchResult[i]["album"]["music_groups"][0]["name"]
		
		var artistId = searchResult[i]["album"]["music_groups"][0]["id"]
		
		var album = searchResult[i]["album"]["name"]
		
		var albumId = searchResult[i]["album"]["id"]

		var tr = createNewElement("tr")

		var trackparagraf = createSongParagraf(i,track)
	

		var artistlink = createlink(artist,"artists/"+ artistId +"/")

		
		var albumlink = createlink(album,"albums/"+ albumId +"/")
			
	
		tr.appendChild(appendTo("td",trackparagraf))
		
		tr.appendChild(appendTo("td",artistlink))
		
		tr.appendChild(appendTo("td",albumlink))


		table.appendChild(tr);
	
}

	return table 
}

function createlink(subject,path){
	var dataremotelink = document.createAttribute("data-remote")
			dataremotelink.value = "true"
	var subjectlink = createNewElement("a")
		subjectlink.setAttributeNode(dataremotelink)
		subjectlink.href = path 
		subjectlink.innerHTML = subject

	return subjectlink

}
function createSongParagraf(id,song){
	var p = createNewElement("p")
	var attribute = document.createAttribute("ondblclick")
		attribute.value = "updatePlayListAndPlay(" + id + ")"

		p.setAttributeNode(attribute)
		p.innerHTML = song

	return p
}
function appendTo(type,data){
	var element  = createNewElement(type)
		element.appendChild(data)
	return element
}
function createNewElement(element){
	return document.createElement(element)
}
function createTableHeaders(classname,header){
	var table = createNewElement("table")
		table.className = classname
	var h = createNewElement("th")
	for (var i = 0; i < header.length;i++) {
		h.innerHTML = header[i];
	
		table.appendChild(h)
	}

	return table
}