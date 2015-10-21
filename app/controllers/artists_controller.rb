class ArtistsController < ApplicationController
	before_action :redirect_if_not_logged_in
  def show
  	  @artist = open("http://localhost:3000/v1/search_music_groups?id=#{params[:id]}").read
  
  	respond_to do |format|
  	format.js{@artist}
  	end
  end

  def index
  end
end
