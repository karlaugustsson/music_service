class AlbumsController < ApplicationController
	before_action :redirect_if_not_logged_in
  before_action :set_environment_url
  layout "music"
  def index
  end

  def show

    	
      @album = open("#{@url}/v1/search_albums?id=#{params[:id]}").read



  respond_to do |format|
    format.js{@album}
  end 


  end


end
