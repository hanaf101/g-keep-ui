<template class="container">
	<div class="ani-slideInDown row justify-content-center">
		<div class="col-lg-4">
			<ToDoInput @eventAddNewTask="onAddNewTask"/>
			<ul class="list mt-3">
                <CheckListInput/>
                <li class="list-item" >
                        <form id="chart_datas"  >
      <div class="grid-container">
        <div class="grid-x grid-padding-x input_wrp">
          <div class="small-1 cell column">
            <label>
              <input type="text" placeholder="id">
            </label>
          </div>
         
        </div>
        
         <div class="addRowBtn" v-on:click.prevent="addRow" value=""><i class="fa fa-plus" aria-hidden="true"></i></div>
      </div>  

    </form>

                </li>    
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
                axios.post('/notes', {
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
                axios.get('/notes')
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
