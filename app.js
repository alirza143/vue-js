const app = Vue.createApp({
    // data, function
    data() {
        return {
            url : "www.google.com",
            showBooks : true,
            books : [
                {id:1, isFav:false,title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpeg'},
                {id:2, isFav:true,title: 'the way of kings' , author: ' brandon sanderson', img: 'assets/2.jpeg'},
                {id:3, isFav:false,title: 'the final empire' , author: ' brandon sanderson',img: 'assets/3.jpeg' },
            ]
        }
    },
    methods : {
        toggleShowBooks(){
            this.showBooks = !this.showBooks;
        },
// That is one more way to toggle
        toggleBook(nook){
            books.isFav = !books.isFav;
        }
    },
    computed:{
        filterBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
});

app.mount("#app")