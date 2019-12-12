<template>
	<div class="formInput">
		
	<form @submit="onAddNewTask">
		<input class="listInput" type="text" placeholder="What needs to be done?" v-model="text" required>
		<input class="listInputb" type="submit" value="+">
	</form>
	</div>

</template>

<script>
	export default {
		name: "FormInput",
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

