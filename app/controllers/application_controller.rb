class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception


      def message message  , type
      flash['notice'] = message
      flash['type'] = type
    end 


def redirect_if_not_logged_in
   		unless session[:user]
   			message("you need to be logged in to view this page","danger")
   			redirect_to("/")
   		end	
   			
   		end
end
def redirect_if_logged_in
   		if session[:user]
   			redirect_to(:action => "main" ,:controller => :public)
   		end	
   			
end

def set_logged_in_user
@onlineUser = User.find(session[:user])
end

