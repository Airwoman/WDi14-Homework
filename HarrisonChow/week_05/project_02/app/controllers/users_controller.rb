class UsersController < ApplicationController
  before_action :authorise, :only=>[:index]

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new user_params
    if @user.save
      redirect_to users_path
    else
      render :new
    end
  end

  def show
    @user = User.find params[:id]
  end

  def edit
    @user = User.find params[:id]
  end

  def update
    user = User.find params[:id]

    user.update user_params if user.authenticate(params[:user][:password])
    redirect_to user
  end

  def destroy
    user = User.find params[:id]
    user.destroy
    redirect_to users_path

  end


  private
    def user_params
      params.require(:user).permit(:name, :gender, :email, :image, :password, :password_confirmation)
    end
    def authorise
      flash[:error] = "You need to be logged in for that" unless @current_user.present?

      redirect_to edit_user_path unless @current_user.present?
    end
end
