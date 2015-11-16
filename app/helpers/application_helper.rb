module ApplicationHelper

	def error_messages_for(object)
		render(:partial => "application/error_messages" , :locals => {:object => object})
	end
	def check_if_touch()
		@touch = ["android","webos","safari","iphone","ipad","ipod","blackberry","iemobile","opera mini/i"]
		@browser = users_browser()
		puts @browser
		unless @touch.include?(@browser)
			return false
		else
			return true
		end
	end



end
