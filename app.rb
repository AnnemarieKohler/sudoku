require 'sinatra/base'

class Sudoku < Sinatra::Base

  get '/' do
    erb(:index)
  end

end
