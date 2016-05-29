class AddImageToCaseinAdminUsers < ActiveRecord::Migration
  def change
    add_column :casein_admin_users, :image, :string
  end
end
