class BlogsController < ApplicationController

  # get blogs
    def index
        blogs = Blog.all
        render json: blogs
      end

  # show blog
      def show
        blog = Blog.find_by(id: params[:id])
        render json: blog
      end

  # create blog
      def create
        blog = Blog.new(blog_params)
        if blog.save
          render json: blog, status: :created
        else
          render json: { errors: blog.errors.full_messages }, status: :unprocessable_entity
        end
      end
  
    
  # update blog
      def update
        blog = Blog.find_by(id: params[:id])
        blog.update(blog_params)
        render json: blog, status: :created
      end
    
  # delete blog
      def destroy
        blog = Blog.find_by(id: params[:id])
        blog.destroy
        head :no_content
      end


      private
      
      def blog_params
        params.permit(:title, :image, :content, :writer)
      end
end
