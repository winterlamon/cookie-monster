class CookiesController < ApplicationController
  before_action :set_cookie, only: [:show, :update, :destroy]

    def index
      @cookies = Cookie.all
      render json: @cookies
    end

    def show
    end

    def create
      @cookie = Cookie.new(cookie_params)

      if @cookie.save
        render :show, status: :created, location: @cookie
      else
        render json: @cookie.errors, status: :unprocessable_entity
      end
    end

    def update
      if @cookie.update(cookie_params)
        render :show, status: :ok, location: @cookie
      else
        render json: @cookie.errors
      end
    end

    def destroy
      @cookie.destroy
    end

  private

    def set_cookie
      @cookie = Cookie.find(params[:id])
    end

    def cookie_params
      params.require(:cookie).permit(:name, :image_url, :ingredients, :prep_time, :bake_time)
    end

end
