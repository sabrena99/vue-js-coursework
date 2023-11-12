# After School Classes Web App

This web app is built using Vue.js, allows students and parents to explore and purchase after-school classes and activities. 
The project focuses on the front-end implementation without the need for backend storage.

## General Information

- The app is built with Vue.js and follows coursework requirements.
- No backend storage, such as MongoDB, is required for this project.


## Project Structure

- **`src/`**: Contains the source code of the Vue.js app.
  - **`components/`**: Vue components for different parts of the app.
  - **`App.vue`**: The main Vue component.
  - **`main.js`**: Entry point of the app.

### Display List of Lessons

- At least 10 lessons are displayed, each with 5 available spaces.
- Lesson information includes subject, location, price, spaces
- Lessons are stored as an array of JSON objects.

### Sort Functionality 

- Users can sort lessons by subject, location, price, or available spaces.
- Options for ascending and descending order are available.

### Add to Cart Functionality 

- Each lesson has an "Add to Cart" button.
- The button is visible and enabled only when there are available spaces.
- Clicking the button adds the lesson to the shopping cart, reducing available spaces.

### Shopping Cart Functionality 

- The shopping cart button is enabled only after at least one lesson is added.
- Clicking the cart button shows the cart page with added lessons.
- Users can remove lessons from the cart.

### Checkout Functionality

- Checkout is part of the shopping cart page.
- Users must provide a name and phone number for checkout.
- Validation ensures that the name contains letters only, and the phone number contains numbers only.



## How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/after-school-classes.git
