# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150701183835) do


  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "aspects", force: true do |t|
    t.string   "name"
    t.integer  "aspectable_id"
    t.string   "aspectable_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "aspects", ["aspectable_id", "aspectable_type"], name: "index_aspects_on_aspectable_id_and_aspectable_type", using: :btree

  create_table "locations", force: true do |t|
    t.string   "name"
    t.text     "description"
    t.integer  "system_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "systems", force: true do |t|
    t.string   "name"
    t.text     "description"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "public",      default: false
    t.string   "setting",     default: "no setting chosen"
  end

  create_table "users", force: true do |t|
    t.string   "name"
    t.string   "password_digest"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "picture",             default: "no-image.png"
    t.text     "bio"
    t.date     "birthday"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

end
