class CreateUsers < ActiveRecord::Migration
	def up
	    create_table :users do |t|
	      t.string :email , :limit => 200 , :null => false
	      t.string :password_digest
	      t.boolean :activated , :default => 0
	      t.timestamps null: false
	      

	  	
	  	end   
	  	add_index :users, :email
	end

	def down
	drop_table :users
	end

end