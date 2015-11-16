require 'open-uri'
require 'json'
class PublicController < ApplicationController
	layout "music"
	before_action :redirect_if_not_logged_in ,:only => :main
	before_action :redirect_if_logged_in ,:only => :index
	before_action :set_logged_in_user , :only => :main
	before_action :set_environment_url

	def index
		@index = "fox"
	end
	def main
		@latest = open("#{@url}/v1/search_albums?latest_release=").read

  		  	respond_to do |format|
	 		
	  		format.js {@latest = JSON.parse(@latest)}
	  		format.html {@latest = JSON.parse(@latest) }

	  	end

	end
end
