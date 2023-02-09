let eventBus = new Vue()
Vue.component('fiol',{

})
Vue.component('zel', {

})
Vue.component('product-review', {
    template: `
<div class="modal-body">    
        <form class="review-form" @submit.prevent="onSubmit">     
</p>
 <p>
  <p>
   <label for="name">Название:</label>
   <input  name="name" id="name" v-model="name" placeholder="name" value="Название">  
 </p>
   <label for="review">Заметка:</label>
   <textarea  id="review"  v-model="review" value="Заметка"></textarea>
 </p>
 <p>
<input  type="submit" value="Сохранить">
 </p>
</form>
      </div>
 `,
    data() {
        return {
            focused: false,
            focused1: false,
            counter: 0,
            name:null,
            review: null,
            errors: [],
        }
    },
    methods: {
        onSubmit() {
            if (this.name && this.review) {
                let productReview = {
                    name: this.name,
                    review: this.review,
                }
                eventBus.$emit('review-submitted', productReview)
                this.name = null
                this.review = null
            }
            const reviewTextarea = document.getElementById('review')
            reviewTextarea.focus()
        },
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
                  <p>Название: {{ review.name }}</p>
                  <p>Заметка: {{ review.review }}</p>
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
