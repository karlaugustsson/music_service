require 'open-uri'
require 'json'
class SearchController < ApplicationController
	layout "music"
  def index
  	@search = open("http://localhost:3000/v1/search_music_groups?search=pearl jam").read

  end
end
