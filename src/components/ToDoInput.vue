<template>
	<div>
		
	<form @submit="onAddNewTask">
		<input type="text" placeholder="What needs to be done?" v-model="text" required>
		<input type="submit" value="submit" class="btn" >
	</form>


	
	</div>

</template>

<script>
	export default {
		name: "ToDoInput",
		data() {
			return {
				text: ""
			}
		},
		methods: {
			onAddNewTask(e) {
				e.preventDefault()
				const taskName = this.text
				this.$emit("eventAddNewTask", taskName)
				// reset the textbox
				this.text = ""
			}
		}
	}
</script>

