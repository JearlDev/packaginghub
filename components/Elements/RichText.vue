<template>
  <div v-html="formattedContent"></div>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Array,
    required: true,
  },
});

const { formattedContent } = useRichText(props.content);
</script>
