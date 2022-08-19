class WorkoutsController < ApplicationController
    before_action :authenticate_user!
end