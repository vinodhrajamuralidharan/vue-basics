Vue.createApp(
    {
        data() {
            return {
                currentTask: '',
                tasks: [],
                visibility: true
            }
        },
        computed: {
            visibilityLabel() {
                if (this.visibility) {
                    return 'Hide';
                }
                return 'Show';
            }
        },
        methods: {
            addTask() {
                this.tasks.push(this.currentTask);
                this.currentTask = '';
            },

            toggleList() {
                this.visibility = !this.visibility;
            }
        }
    }
).mount('#assignment');