<template>
  <div v-html="htmlContent"/>
</template>

<script setup lang="ts">

const props = defineProps({
  text: {
    type: String,
    required: true
  }
})

const htmlContent = ref<string>('')

watch(
  () => props.text,
  (newText) => {
    if (newText) {
      htmlContent.value = simpleMarkdownToHtml(newText)
    }
  },
  { immediate: true }
)

function simpleMarkdownToHtml(markdown: string) {
  let html = markdown || ''

  html = html.replace(/\n/g, '<br>')
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')

  html = html.replace(/\* ([^*]+)/g, '<li>$1</li>')
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
  html = html.replace(/((?:\|[^\|\n]+\|?\n)+)/g, (match) => {
    const rows = match.trim().split('\n')
    let tableHtml = '<table><tbody>'
    rows.forEach(row => {
      tableHtml += '<tr>'
      const cells = row.split('|').slice(1, -1)
      cells.forEach(cell => {
        tableHtml += `<td>${cell.trim()}</td>`
      })
      tableHtml += '</tr>'
    })
    tableHtml += '</tbody></table>'
    return tableHtml
  })

  return html
}
</script>

<style scoped>
::v-deep td {
  @apply border p-2;
}
</style>
