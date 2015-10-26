class CreateUserActivationCodes < ActiveRecord::Migration
  def up
    create_table :user_activation_codes do |t|
      t.string :code ,:limit => 100 ,  :null => false
       t.references(:user)
      t.timestamps null: false
      t.index [:user_id, :code], unique: true
    end

  end
  def down
  	drop_table :user_activation_codes
  end
end
