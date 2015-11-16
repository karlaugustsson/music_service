class ArtistsController < ApplicationController
	before_action :redirect_if_not_logged_in
	  before_action :set_environment_url
  def show
 

  	  @artist = open("#{@url}/v1/search_music_groups?id=#{params[:id]}").read

  	respond_to do |format|
  	format.js{@artist}
  	end
  end

  def index
  end
end
