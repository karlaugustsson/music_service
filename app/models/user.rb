class User < ActiveRecord::Base
	has_secure_password
	has_one :user_activation_code
	scope :activated , lambda { where("users.activated")}



			#validation#
	EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i	

	validates_presence_of(:email) 

	validates_format_of(:email , :with => EMAIL_REGEX)

	validates_length_of(:password , { in: 5..40 })

	validates_uniqueness_of :email

end
