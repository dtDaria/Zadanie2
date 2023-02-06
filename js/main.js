let eventBus = new Vue()
Vue.component('product-review', {
    template: `
<div class="modal-body">    
        <form class="review-form" @submit.prevent="onSubmit">
</p>
 <p>
   <label for="review">Заметка:</label>
   <textarea id="review" v-model="review"></textarea>
 </p>
 <p>
   <input type="submit" value="Submit"> 
 </p>
</form>
      </div>
 `,
    data() {
        return {
            review: null,
            errors: [],

        }
    },
    methods: {
        onSubmit() {
            console.log(1)
            let productReview = {
                review: this.review,

            }
            eventBus.$emit('review-submitted', productReview)
            this.review = null


        }
    }


})
Vue.component('product', {
    template: `
   <div class="product">
        <div class="product-info">
            <div>
            <h2>Чем хочешь поделиться?</h2>
            <ul>
                  <li v-for="review in reviews">
                  <p>Заметка: {{ review.rating }}</p>
                  <p>{{ review.review }}</p>
                  </li>
            </ul>
            </div>   
        </div>
   </div>
 `,
    data() {
        return {
            reviews: []
        }
    },
    methods: {},
    mounted() {
        eventBus.$on('review-submitted', productReview => {
            this.reviews.push(productReview)
        })
    }

})
let app = new Vue({
    el: '#app',
    data: {
        cart: [],

    },
})






