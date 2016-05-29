User.destroy_all

u1 = User.create :name => 'Harrison', :gender => 'Male', :email => 'harrison.chow@hotmail.com', :password => '123456',
:password_confirmation => '123456', :admin => true
u2 = User.create :name => 'Jack', :gender => 'Male', :email => 'jack@ga.co', :password => '123456',
:password_confirmation => '123456', :admin => true
u3 = User.create :name => 'Lucy', :gender => 'Female', :email => 'lucy@ga.co', :password => '123456',
:password_confirmation => '123456'
u4 = User.create :name => 'David', :gender => 'Male', :email => 'david@ga.co', :password => '123456',
:password_confirmation => '123456'
u5 = User.create :name => 'Kathy', :gender => 'Female', :email => 'kathy@ga.co', :password => '123456',
:password_confirmation => '123456'

Shop.destroy_all

s1 = Shop.create :name => 'Social Hideout', :address => '2a/20 Victoria Rd, , Parramatta, New South Wales', :phone => '12345678', :website => 'http://socialhideout.com.au/'
s2 = Shop.create :name => 'Cavalier Specialty Coffee', :address => '34 Oxley St, , St Leonards, NSW', :phone => '12345678', :website => 'http://www.cavalierspecialtycoffee.com.au/'
s3 = Shop.create :name => 'Coffee Brothers', :address => '54 Darley St, Mona vale, New South Wales', :phone => '+61 2 8411 2190', :website => 'http://www.coffeebrothers.com.au/'
s4 = Shop.create :name => 'Draft coffee roaster', :address => '404 Botany Rd, Beaconsfield, NSW', :phone => '02-96981539', :website => 'http://www.draftcoffeeroasters.com.au/'
s5 = Shop.create :name => 'The Little Lord', :address => '102 Salisbury Rd, Camperdown, NSW', :phone => '12345678', :website => 'http://littlelordcafe.com/'
