class Skill < ActiveRecord::Base
  t.string :name, null: false
  t.integer :level, null: false, default: 0
  t.text :description
end
