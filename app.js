const app = Vue.createApp({
    // data, function
    data() {
        return {
            showBooks : true,
            title : "this is new test",
            author : "Ali Raza",
            age : "25",
            x:0,
            y:0
        }
    },
    methods : {
        toggleShowBooks(){
            this.showBooks = !this.showBooks;
        },

        handleEvent(e,data){
            console.log(e.type);
            if(data){
                console.log(data)
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }
});

app.mount("#app")