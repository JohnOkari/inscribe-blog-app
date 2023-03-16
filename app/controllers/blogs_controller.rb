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
        blog = Blog.create(blog_params)
        render json: blog, status: :created
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
        params.permit(:title, :content, :writer, :image, :author_id)
      end
end
