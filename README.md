# Austin-Filed-Test
A Technical test of skills for front end development using Angular and NGRX

1.  Write an angular application with the following requirements:

Create DTO for modeling User details like below, which will be used to make requests 
a. First Name (mandatory, string) 
b. Last Name (mandatory, string) 
c. Email (mandatory, string) 
d. Monthly Advertising Budget* (mandatory, number) 
e. Phone Number - CCV (mandatory, number)
- Using NgRx, create a state management solution that will hold our user.
- Write a Payment service with a function that creates a POST request.
- Create a new page and a new component (to be used in this page), with inputs for the DTO, created at point 1, use reactive forms and add validations on these inputs. Create a button with a click event and call the payment service method and based on the http response, show a toast notification informing the user.
- In the app.component.html, create a button (name it any way you like) and use the Angular router to navigate to the new page created at the previous point.
- To make sure that our state management solution is working, get the data from the store and display it on the app.component.html. Obligations:
- Use the angular/typescript style guide to separate the models/dto and the services.
- Use RxJS when making requests and demonstrate some operators.
- Make sure to avoid any memory leaks.
- The design should be pixel perfect and responsive ( https://xd.adobe.com/view/f5c37cba-a980-4d71- 9630-c7ab049aa5f4-a090/screen/96da058d-3014-4ede-bee2-6993f4ca1a04/ ).
- Make sure you have a good file hierarchy and follow best practices to improve naming conventions Recommendations:
- Follow clean code best practices, follow industry standards ( https://angular.io/guide/styleguide )
