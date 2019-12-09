<template class="container">
	<div class="ani-slideInDown row justify-content-center">
		<div class="col-lg-4">
			<ToDoInput @eventAddNewTask="onAddNewTask"/>
			<ul class="list mt-3">
				<ListItem v-for="item in itemList" :key="item._id"   :id="item._id" :text="item.title" />
			</ul>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import ToDoInput from "@/components/ToDoInput.vue"
    import ListItem from "@/components/ListItem.vue"
    import axios from 'axios';

	export default {
		name: "Home",
		components: {
			ToDoInput,
			ListItem
		},
		data() {
            return {
                itemList: []
            }
        },
        methods: {
			/**
			 * Event: add new task
			 */
			onAddNewTask(taskName) {
                let that=this;
                axios.post('http://localhost:3002/notes', {
                    title: taskName,
                    description: '',
                    done: false
                })
                .then(function (response) {
                    that.loadItemList();
                })
                .catch(function (error) {
                });
			},

            /**
             * Load item list from db via GET call to NEST service
             */
            loadItemList() {
                axios.get(`http://localhost:3002/notes`)
                     .then(response => {
                        this.itemList = response.data || []
                    }).catch(e => {
                        this.errors.push(e)
                    });
            }
        },
        mounted() {
            // Load item list from db
            this.loadItemList()
        },
        watch: {
            itemList: {
                handler() {
                },
                deep: true
            }
        }
	}
</script>
