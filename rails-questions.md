# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?
rails new file_name -d postgresql -T


2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - http verb that is passing this to the url
library - the library is the .http.erb file
:id - is the column called id in the model
book - is the name of the controller
show - name of method in the controller

3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

just in case you just forgot to migrate, $rails db:migrate 
then, if nothing:$ rails generate modelname_id:integer  
after, link the foreign key to the model with belongs_to in the id file



4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?
rails generate model Person shirt:string pants:string shoes:string




5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?
in the Person model, add:
validates :person, :shirt, :pants, :shoes, :presence, :true
