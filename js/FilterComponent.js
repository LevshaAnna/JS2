Vue.component('filter-cart', {
    data {
    userSearch: ' ',
},
    template: `
            <form action="#" class="search-form" @submit.prevent="$parent.products.filter(userSearch)">
            <input type="text" class="search-field" v-model="userSearch">
            <button class="btn-search" type="submit">
                <i class="fas fa-search"></i>
            </button>
        </form>
    
      
    `

});