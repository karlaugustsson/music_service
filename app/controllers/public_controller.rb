class PublicController < ApplicationController
	layout "music"
	before_action :redirect_if_not_logged_in ,:only => :main
	before_action :redirect_if_logged_in ,:only => :index
	before_action :set_logged_in_user , :only => :main

	def index
	end
	def main
end
end
