module ApplicationHelper

	def error_messages_for(object)
		render(:partial => "application/error_messages" , :locals => {:object => object})
	end
	def check_if_touch()
		 if request.env["HTTP_USER_AGENT"] && request.env["HTTP_USER_AGENT"][/(iPhone|iPad|iPod|Silk|Opera Mini|BlackBerry|AppleWebKit|Android)/]
		 	return true
		 else
		 	return false
		 end
	end



end
