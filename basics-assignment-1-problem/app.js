Vue.createApp({
    data() {
        return {
            name: 'VINODH',
            age: 33,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/1200px-African_Bush_Elephant.jpg'
        }
    },
    methods: {
        ageInFiveYears() {
            return this.age + 5;
        },

        favouriteNumber() {
            return Math.random();
        }
    }
}).mount('#assignment');