require 'open-uri'
require 'json'
class SearchController < ApplicationController
	layout "music"
	skip_before_filter :verify_authenticity_token

  def index
  	if params[:search] && params[:search].blank? == false
  		  	@search = open("http://localhost:3000/v1/search_music_groups?search=#{params[:search]}").read
  	
    else
  		@search = "{}"

  	end

  		  	respond_to do |format|
	 		
	  		format.js {@search}
	  		format.html

	  	end

 end



end
