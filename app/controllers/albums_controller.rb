class AlbumsController < ApplicationController
  layout "music"
  def index
  end

  def show
  	@album = open("http://localhost:3000/v1/search_albums?id=#{params[:id]}").read
  
  	respond_to do |format|
  	format.js{@album}
  	end
  end
end
