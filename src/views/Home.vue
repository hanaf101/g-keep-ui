<template class="container">
	<div class="ani-slideInDown row justify-content-center">
		<div class="col-lg-6">
			<ToDoInput @eventAddNewTask="onAddNewTask"/>

			<ul class="list mt-3">
				<ListItem v-for="item in itemList" :key="item.id" :text="item.text" :id="item.id" :isDone="item.isDone" @eventTaskStatusChange="onTaskStatusChange" @eventTaskDelete="onTaskDelete" />
			</ul>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import ToDoInput from "@/components/ToDoInput.vue"
    import ListItem from "@/components/ListItem.vue"

	export default {
		name: "home",
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
				const task = {
					id: (new Date()).getTime(),
					text: taskName,
					isDone: false
				}

				this.itemList.push(task)
			},

            /**
             * Load item list from local storage
             */
            loadItemList() {
                this.itemList = JSON.parse(localStorage.getItem("VuejsTodo")) || []

            },

            /**
             * Update the item list to local storage
             */
            updateItemList() {
                localStorage.setItem("VuejsTodo", JSON.stringify(this.itemList))
            }
        },
        mounted() {
            // Load item list from local storage
            this.loadItemList()
        },
        watch: {
            itemList: {
                handler() {

                    // save to localStorage
                    this.updateItemList()
                },
                deep: true
            }
        }
	}
</script>
