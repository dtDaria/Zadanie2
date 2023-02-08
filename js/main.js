let eventBus = new Vue()
Vue.component('product-review', {
    template: `
<div class="modal-body">    
        <form class="review-form" @submit.prevent="onSubmit"> 
           <p v-if="errors.length">
    <b>Введите всё правильно:</b>
    <ul>
        <li v-for="error in errors">{{ error }}</li>
    </ul>
</p>
</p>
 <p>
  <p>
   <label for="name">Название:</label>
   <input id="name" v-model="name" placeholder="name">
 </p>
   <label for="review">Заметка:</label>
   <textarea id="review" v-model="review"></textarea>
 </p>

 <p>
<input type="submit" value="Сохранить">
 </p>
</form>
      </div>
 `,
    data() {
        return {
            counter: 0,
            name:null,
            review: null,
            errors: [],
        }
    },
    methods: {
        onSubmit() {
            this.errors = [] // очищение при исправлении ошибки
            if (this.name && this.review) {
                let productReview = {
                    name: this.name,
                    review: this.review,
                }
                eventBus.$emit('review-submitted', productReview)
                this.name = null
                this.review = null
            }else {
                if (!this.name) this.errors.push("Имя отсутствует")
                if (!this.review) this.errors.push("Заметка отсутствует")
            }
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
let num = 0, submit = document.querySelector('[type=submit]');
submit.onclick = function () {
    num++, num > 3 ? this.disabled = true : '';
};
let ap = new Vue({
    el: '#ap',
    data: {
        cart: [],
    },
})










