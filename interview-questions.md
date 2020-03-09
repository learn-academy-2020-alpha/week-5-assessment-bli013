# ASSESSMENT 5: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own there is always something more to learn.   

1. Rails follows an MVC pattern. What does that mean?

  Your answer: Model, Viewer, Controller

  Researched answer:
  Rails has an application directory called app/ with three subdirectories: models, views, and controllers. This is the model-view-controller (MVC) architectural pattern, which enforces a separation between business logic from the input and presentation logic associated with a graphical user interface (GUI).



2. What is a gem?

  Your answer: gems are files that help rails be more user friendly in terms of programmers.

  Researched answer:
  gems are plugins, additional functionalities of a product designed to fulfill specific goals.



3. Why is it important to have validations in your application?

  Your answer: It leaves the user with less chance of an error by having limits of sorts.

  Researched answer: Data validation is vital to ensure the data is clean, correct and useful



4. Describe a possible relationship between a model called Person and a model called Computer. Based on your description, which model would hold the foreign key?

  Your answer: This could actually go both ways in reality, but from personal expereince with encryption keys, a Person can have_many Computers as Computer belongs_to Person.  Computer would hold the foreign key.

  Researched answer:
  A primary key-foreign key relationship defines a one-to-many relationship between two tables in a relational database. A foreign key is a column or a set of columns in one table that references the primary key columns in another table



5. What is object-relational mapping?

  Your answer: I would need to google object raltional mapping, but from the name I would predict that it has to do with finding objects related to one another in the data.

  Researched answer:
  Object-relational mapping (ORM, O/RM, and O/R mapping tool) in computer science is a programming technique for converting data between incompatible type systems using object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes- A RESTful route is a route that provides mapping between HTTP verbs (get, post, put, delete, patch) to controller CRUD actions (create, read, update, delete).
- json- JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate.
- API- a set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service.
- Endpoints- When an API interacts with another system, the touchpoints of this communication are considered endpoints. For APIs, an endpoint can include a URL of a server or service
- Strong params- It provides an interface for protecting attributes from end-user assignment.
