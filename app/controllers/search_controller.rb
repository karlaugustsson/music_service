require 'open-uri'
require 'json'
class SearchController < ApplicationController
	layout "music"
	skip_before_filter :verify_authenticity_token
  before_action :redirect_if_not_logged_in
  before_action :set_logged_in_user
  before_action :set_environment_url

  def index
  	if params[:search] && params[:search].blank? == false
        if 
          @searchTrack = open("#{@url}/v1/search_album_tracks?search=#{params[:search]}").read
  		  	@searchGroup = open("#{@url}/v1/search_music_groups?search=#{params[:search]}").read
          @searchAlbum = open("#{@url}/v1/search_albums?search=#{params[:search]}").read
          else

          end
          @search = []
          @searchTrack = JSON.parse(@searchTrack)
          @searchGroup = JSON.parse(@searchGroup)
          @searchAlbum = JSON.parse(@searchAlbum)
          @searchTrack.each do |s|
            @search.push(s)
          end
          @searchGroup.each do |s|
            @search.push(s)
          end

          @searchAlbum.each do |s|
            @search.push(s)

          end
              @searchremove = []
              @search.each do |song|
              if !@searchremove.include?(song)
                @searchremove.push(song)
        
              end
            end
       
            @search =  @searchremove.to_json
            
         
  	
    else
  		@search = "{}"

  	end

   
  	respond_to do |format|
	 		
	  format.js {@search}
	  format.html{redirect_to("/")}

	  	end

 end



end
