class UsersController < ApplicationController
  layout 'music'

  before_action :redirect_if_logged_in , :only => :new
  before_action :set_logged_in_user , :except => [:new , :create]
  def index
  end

  def show
        respond_to do |format|
      
        format.js 
        format.html

      end
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(users_params)
    if @user.save
      message("SuccesFully created a account check email for activation","success")
      redirect_to("/", :controller => "public")

    else
      render("new")
    end
  end

  def edit
  end

  def update
  end

  def delete
  end

  def destroy
  end
  private

  def users_params
    params.require(:user).permit(:email,:password)
end
end
