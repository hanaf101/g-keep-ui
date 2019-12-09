<template>
	<li class="list-item" :class="{ done: isDone }">
        <!-- <input type="checkbox" class="checkbox" :id="idComputed" @change="onTaskStatusChange" :checked="isDone"> -->
        <label class="mr-3" :for="idComputed"></label>
        <span class="text">
            {{ text }}
        </span>
        <span class="icon-delete" @click="onTaskDelete"></span>
    </li>
</template>

<script>
	export default {
        name: "ListItem",
        props: {
            id: {
                type: Number,
                default: 0
            },
            text: {
                type: String,
                default: ""
            },
            isDone: {
                type: Boolean,
                default: false
            }
        },
        
        methods: {
            /**
             * Event: on task status changed
             */
            onTaskStatusChange(e) {
                const checked = e.target.checked
                this.$emit("eventTaskStatusChange", this.id, checked)
            }
        }
    }
</script>

