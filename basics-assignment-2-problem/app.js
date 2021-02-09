Vue.createApp({
    data() {
        return {
            paragraph: '',
            enterPressedValue: ''
        }
    },
    methods: {
        showAlert() {
            alert('showAlert');
        },

        updateParagraph(event) {
            this.paragraph = event.target.value;
        },

        showEnteredValue(event) {
            this.enterPressedValue = event.target.value;
        }
    }
}).mount('#assignment');