<template>
    <div class="code-block">
        <div class="code-block__demo">
            <slot></slot>
        </div>
        <div class="code-block__description">
            <slot name="description"></slot>
        </div>
        <div class="code-block__inner-code highlight">
            <slot name="code"></slot>
        </div>
    </div>
</template>

<script>
import 'highlight.js/styles/color-brewer.css'
export default {
    props: {
        description: {
            type: String,
            default: ''
        }
    }
}
</script>

<style></style>
