const app = new Vue({
    el: '#app',
    data: {
      lessons: [
        { id: 1, title: 'Math', location: 'Room 101', price: 20, spaces: 5 },
        // Add more lessons...
      ],
      cart: [],
      sortBy: 'title',
      sortAsc: true,
      searchQuery: '',
      checkoutName: '',
      checkoutPhone: '',
      showCart: false,
    },
    methods: {
      addToCart(lesson) {
        if (lesson.spaces > 0) {
          this.cart.push({ ...lesson });
          lesson.spaces--;
        }
      },
      removeFromCart(index) {
        const removedLesson = this.cart.splice(index, 1)[0];
        const lessonIndex = this.lessons.findIndex(lesson => lesson.id === removedLesson.id);
        if (lessonIndex !== -1) {
          this.lessons[lessonIndex].spaces++;
        }
      },
      checkout() {
        if (this.isValidCheckout()) {
          alert('Order submitted!');
          this.cart = [];
          this.showCart = false;
        } else {
          alert('Invalid name or phone number!');
        }
      },
      isValidCheckout() {
        const nameRegex = /^[a-zA-Z]+$/;
        const phoneRegex = /^[0-9]+$/;
        return nameRegex.test(this.checkoutName) && phoneRegex.test(this.checkoutPhone);
      },
    },
    computed: {
      sortedLessons() {
        return this.lessons.slice().sort((a, b) => {
          const factor = this.sortAsc ? 1 : -1;
          return (a[this.sortBy] > b[this.sortBy]) ? factor : -factor;
        });
      },
      filteredLessons() {
        const query = this.searchQuery.toLowerCase();
        return this.lessons.filter(lesson =>
          lesson.title.toLowerCase().includes(query) || lesson.location.toLowerCase().includes(query)
        );
      },
    },
    template: `
      <div class="container mt-5">
        <div class="mb-3">
          <label>Search:</label>
          <input class="form-control" v-model="searchQuery">
        </div>
        
        <div class="mb-3">
          <label>Sort by:</label>
          <select class="form-control" v-model="sortBy">
            <option value="title">Title</option>
            <option value="location">Location</option>
            <option value="price">Price</option>
            <option value="spaces">Spaces</option>
          </select>
          <label>Order:</label>
          <input type="checkbox" v-model="sortAsc" class="form-check-input"> Ascending
        </div>
  
        <div v-if="filteredLessons.length === 0">
          No lessons found.
        </div>
        
        <div v-else>
          <div v-for="lesson in sortedLessons" :key="lesson.id" class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">{{ lesson.title }}</h5>
              <p class="card-text">Location: {{ lesson.location }}</p>
              <p class="card-text">Price: ${{ lessonprice }}</p>
              <p class="card-text">Spaces: {{ lesson.spaces }}</p>
              <button @click="addToCart(lesson)" :disabled="lesson.spaces === 0" class="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
  
        <button @click="showCart = !showCart" :disabled="cart.length === 0" class="btn btn-success">Shopping Cart ({{ cart.length }})</button>
  
        <div v-if="showCart" class="mt-3">
          <h2>Shopping Cart</h2>
          <div v-if="cart.length === 0">Cart is empty.</div>
          <div v-else>
            <div v-for="(cartItem, index) in cart" :key="cartItem.id" class="card mb-3">
              <div class="card-body">
                <p class="card-text">{{ cartItem.title }} - ${{ cartItemprice }}</p>
                <button @click="removeFromCart(index)" class="btn btn-danger">Remove</button>
              </div>
            </div>
            <div>
              <label>Name:</label>
              <input v-model="checkoutName" class="form-control">
              <label>Phone:</label>
              <input v-model="checkoutPhone" class="form-control">
              <button @click="checkout" :disabled="cart.length === 0 || !isValidCheckout()" class="btn btn-primary">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    `,
  });
  