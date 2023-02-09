let eventBus = new Vue()

Vue.component('product', {
    props:{
        reviews:{
            type: Array
        },
    },
    template: `
   <div class="product">
        <div class="product-info">
            <div>
            <h2>Чем хочешь поделиться?</h2>          
            <ul>
                <li v-for="(review,index) in reviews " :key="index">
                  <p>Название: {{ review.name }}</p>
                  <p>Заметка: {{ review.review }}</p>
                  <button @click="zel1_del(index)">я лох</button>
                  </li>                              
            </ul>
            </div>   
        </div> 
   </div>
 `,
    methods: {
        zel1_del(id) {
            let lox=this.reviews.splice(id, 1)
            console.log(lox)
            let lox2=lox.pop()
            this.reviews2.push(lox2)
        },

    },
    mounted() {
        eventBus.$on('review-submitted', productReview => {
            this.reviews.push(productReview)
        })
    }
})
// Vue.component('product2',{
//     props:{
//         reviews2:{
//             type: Array
//         },
//     },
//     template: `
//    <div class="product2">
//         <div class="bll">
//             <div>
//             <ul>
//                 <li v-for="(review,index) in reviews2 " :key="index">
//                   <p>Название: {{ review.name }}</p>
//                   <p>Заметка: {{ review.review }}</p>
// <!--                  <button @click="zel1_del(index)">я лох</button>-->
//                   </li>
//             </ul>
//             </div>
//         </div>
//    </div>
//  `,
    // methods: {
    //     zel1_del(id) {
    //         let lox=this.reviews.splice(id, 1)
    //         console.log(lox)
    //         let lox2=lox.pop()
    //     },
    //
    // },
// })

let app = new Vue({

    el: '#app',
    data: {
        cart: [],
        reviews: [],
        reviews2: [],
        reviews3: [],
        popa:{
            name:"",
            review:"",

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
        }
    }
})

