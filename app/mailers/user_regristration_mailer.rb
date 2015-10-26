class UserRegristrationMailer < ApplicationMailer

 def register_email(user,regCode,siteUrl)
    @user = user
    @url  = "http://" + siteUrl + '/register?reg=' + regCode
    mail(to: @user.email, subject: 'Welcome to MusicService')
  end
end

