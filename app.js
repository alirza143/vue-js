const app = Vue.createApp({
    // data, function
    data() {
        return {
            showBooks : true,
            title : "this is new test",
            author : "Ali Raza",
            age : "25",
        }
    },
    methods : {
        toggleShowBooks(){
            this.showBooks = !this.showBooks;
        }
    }
});

app.mount("#app")