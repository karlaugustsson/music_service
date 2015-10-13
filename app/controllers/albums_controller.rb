class AlbumsController < ApplicationController
  layout "music"
  def index
  end

  def show
  	@album = open("http://localhost:3000/v1/search_albums?id=#{params[:id]}").read
  	puts params[:album]
  	respond_to do |format|
  	format.html
  	format.js{@album}
  	end
  end
end
