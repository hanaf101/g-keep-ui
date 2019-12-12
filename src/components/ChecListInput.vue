<template>
<li class="list-item" :class="{done : done}">
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



</template>

<script>
	export default {
        name: "ListItem",
        props: {
            id: {
                type: String, 
                default: ""
            },
            text: {
                type: String,
                default: ""
            },
            done: {
                type: Boolean,
                default: false
            }
        },
        methods: {
        }
    }
</script>

