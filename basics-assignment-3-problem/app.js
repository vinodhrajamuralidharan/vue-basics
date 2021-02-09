Vue.createApp({
    data () {
        return {
            counter: 0
        }
    },
    watch: {
        counter() {
            setTimeout(() => { 
                this.counter = 0;
            },5000)
        }
    },
    computed: {
        result() {
            debugger;
            if (this.counter < 37 ) {
                return 'Not there yet';
            } 
            return 'Too much!';
        }
    },
    methods: {
        incrementBy5() {
            this.counter = this.counter + 5;
        },
        incrementBy1() {
            this.counter = this.counter + 1;
        }
    }

}).mount('#assignment');