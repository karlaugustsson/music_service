class UsersController < ApplicationController
  layout 'music'

  before_action :redirect_if_logged_in , :only => :new
  before_action :set_logged_in_user , :except => [:new , :create]
  before_action :set_environment_url
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
    @user_activation_code = UserActivationCode.new
    @user_activation_code.code = new_user_activation_code

    if @user.save
    @user_activation_code.user_id = @user.id
    @user_activation_code.save

      UserRegristrationMailer.register_email(@user,@user_activation_code.code , request.host_with_port).deliver_later
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
   @user = User.find(params[:id])
   if @user
    if !@user.user_activation_code
      @user_activation_code = UserActivationCode.new
      @user_activation_code.code = new_user_activation_code
      @user_activation_code.user_id = @user.id
      @user_activation_code.save
      UserRegristrationMailer.unregister_account(@user,@user_activation_code.code , request.host_with_port).deliver_later
      message("a mail with link to remove your account has been sent","success")
      redirect_to("/", :controller => "public")
    end
  end
  end

  def destroy
    @user = params[:id]
    @user.destroy
    message("your account has been deleted" , "success")
    redirect_to ("/")
  end
  private

  def users_params
    params.require(:user).permit(:email,:password)
end
def new_user_activation_code
      
    while true
        uniquestring = generate_random_string
        if UserActivationCode.where(:code => uniquestring).first == nil
          return uniquestring
        end
      

    end
end

end
