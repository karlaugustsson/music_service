class LoginController < ApplicationController
	layout "music"
  def index

  end
def attempt_login

  	if params[:email].present? && params[:password].present?

  		found_user = User.where("email" => params[:email]).first

  	if found_user
  		auth_user = found_user.authenticate(params[:password])
  	end	

  	if auth_user
       if auth_user.activated
           create_user_session(auth_user.id)
      			
      		
      	redirect_to(:action =>"main", :controller => "public")
        else
        	message("This user has not been activated or has been deactivated","danger")
            render("index")         
        end  
  	else
  		message("wrong credentials","danger")
  		render("index")
  	end


  	else

  	message("both field are required","danger")

  	render("index")

 	end
  	
  end

  def logout
  	session[:user] = nil
  	redirect_to("/")
  end

protected

def redirect_if_logged_in

  if session[:user]
      redirect_to(:action => "index")
  end
end
def users_params
    params.require(:user).permit(:email,:password)
end



end