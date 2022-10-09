const app = Vue.createApp({
    // data, function
    data() {
        return {
            title : "this is new test",
            author : "Ali Raza",
            age : "25",
        }
    },
    methods : {
        changeTitle(){
            this.title = "Changing this from app.js"
        },
        changeTitleWithArgument(title){
            this.title = title
        }

    
    }
});

app.mount("#app")