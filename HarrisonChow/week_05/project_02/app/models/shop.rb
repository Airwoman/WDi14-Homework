# == Schema Information
#
# Table name: shops
#
#  id          :integer          not null, primary key
#  name        :text
#  address     :text
#  image       :text
#  phone       :integer
#  hours       :text
#  description :text
#  owner_id    :string
#  integer     :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Shop < ActiveRecord::Base
end
