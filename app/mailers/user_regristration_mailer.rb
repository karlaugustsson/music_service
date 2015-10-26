class UserRegristrationMailer < ApplicationMailer

 def register_email(user,regCode,siteUrl)
    @user = user
    @url  = "http://" + siteUrl + '/auth_user?reg=' + regCode
    mail(to: @user.email, subject: 'Welcome to MusicService')
  end


 def unregister_account(user,regCode,siteUrl)
    @user = user
    @url  = "http://" + siteUrl + '/delete_account?reg=' + regCode
    mail(to: @user.email, subject: 'Time to say  goodbyyyyeeee')
  end
end

