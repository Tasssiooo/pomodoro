class TodoController < ApplicationController
  def index
    @todos = Todo.all
  end

  def show
    @todos = Todo.find(params[:id])
  end

  def new
    @todos = Todo.new
  end

  def create
    @todos = Todo.new(title: "", description: "")

    if @todos.save
      redirect_to @todos
    else
      render :new, status: :unprocessable_entity
    end
  end
end
