class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception



private
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
  def generate_random_string

    o = [('a'..'z'), ('A'..'Z'), (1 .. 9)].map { |i| i.to_a }.flatten
    
    return (0...50).map { o[rand(o.length)] }.join 

  end 
  def create_user_session(id)
  session[:user] = id
end
def set_environment_url
  if Rails.env == "development"
    @url = "http://localhost:3000"
  else
    @url = "http://artistservice.xyz"
  end
end

def users_browser
user_agent =  request.env['HTTP_USER_AGENT'].downcase 
@users_browser ||= begin
  if user_agent.index('msie') && !user_agent.index('opera') && !user_agent.index('webtv')
        'ie'+user_agent[user_agent.index('msie')+5].chr
            elsif user_agent.index('webos')
        'webos'
        elsif user_agent.index('/android')
        'android'
    elsif user_agent.index('gecko/')
        'gecko'
    elsif user_agent.index('opera')
        'opera'
    elsif user_agent.index('konqueror')
        'konqueror'
    elsif user_agent.index('ipod')
        'ipod'
    elsif user_agent.index('ipad')
        'ipad'
    elsif user_agent.index('iphone')
        'iphone'
    elsif user_agent.index('chrome/')
        'chrome'
    elsif user_agent.index('applewebkit/')
        'safari'
    elsif user_agent.index('googlebot/')
        'googlebot'
    elsif user_agent.index('msnbot')
        'msnbot'
    elsif user_agent.index('yahoo! slurp')
        'yahoobot'
    #Everything thinks it's mozilla, so this goes last
    elsif user_agent.index('mozilla/')
        'gecko'
    else
        'unknown'
    end
    end

    return @users_browser
end

