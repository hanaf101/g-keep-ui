<template>
	<li class="list-item" :class="{done : done}">
        <span class="text">
            {{text}}
        </span>
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

