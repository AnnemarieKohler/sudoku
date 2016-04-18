require 'sinatra'

class Sudoku < Sinatra::Base

get '/' do
  erb(:index)
end

end
