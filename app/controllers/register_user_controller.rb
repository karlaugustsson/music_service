class RegisterUserController < ApplicationController
	before_action :have_code
  before_action :set_environment_url
  def register_user
  	@user = @code.user

  	if @user.update_columns(:activated => true)
  		message("Welcome to musicservice","success")
  		create_user_session(@user.id)
  		@code.destroy()
  		redirect_to("/")
  	else
  		message("something went wrong on activation try again i suppose","alert")
  		redirect_to("/")
  	end
  end



    def delete_account
  	@user = @code.user
  		@user.destroy
  		session[:user]= nil
  		@code.destroy()
  		message("Your no longer part of musicservice","success")
  		redirect_to("/")
  	end

  private 
  def have_code
  	if !params[:reg]
  		message("you have to have the code to take this action","danger")
  		redirect_to("/")
  	else
  	@code = UserActivationCode.where(:code => params[:reg]).first

  	if !@code
  		message("Code is invalid","danger")
  		redirect_to("/")
  	end
  	return true
  end
  end
end
