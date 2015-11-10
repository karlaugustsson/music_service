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
end
end
