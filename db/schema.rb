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

ActiveRecord::Schema.define(version: 2022_09_13_155904) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "feedbacks", force: :cascade do |t|
    t.string "title", null: false
    t.string "body", null: false
    t.string "category"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "team_id", null: false
    t.boolean "resolved", default: false, null: false
    t.index ["team_id"], name: "index_feedbacks_on_team_id"
  end

  create_table "invites", force: :cascade do |t|
    t.string "role", default: "member", null: false
    t.string "message"
    t.bigint "user_id", null: false
    t.bigint "team_id", null: false
    t.index ["team_id"], name: "index_invites_on_team_id"
    t.index ["user_id"], name: "index_invites_on_user_id"
  end

  create_table "registrations", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "team_id"
    t.string "role", default: "member"
    t.index ["team_id"], name: "index_registrations_on_team_id"
    t.index ["user_id"], name: "index_registrations_on_user_id"
  end

  create_table "tasks", force: :cascade do |t|
    t.string "title", null: false
    t.string "body", null: false
    t.string "urgency"
    t.bigint "user_id", null: false
    t.bigint "team_id", null: false
    t.boolean "resolved", default: false, null: false
    t.index ["team_id"], name: "index_tasks_on_team_id"
    t.index ["user_id"], name: "index_tasks_on_user_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name", null: false
    t.string "description", null: false
    t.string "division"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "workouts", force: :cascade do |t|
    t.string "workout_type", null: false
    t.string "title", null: false
    t.string "description"
    t.integer "duration", null: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_workouts_on_user_id"
  end

end
