<template>
    <div v-html="htmlContent"></div>
</template>
    
<script setup lang="ts">

const props = defineProps({
    text: String
});

const htmlContent = ref('');

watch(
    () => props.text,
    (newText) => {
        if (newText) {
            htmlContent.value = simpleMarkdownToHtml(newText);
        }
    },
    { immediate: true }
);

function simpleMarkdownToHtml(markdown) {
    let html = markdown || '';

    // Remplace les retours à la ligne par <br>
    html = html.replace(/\n/g, '<br>');

    // Remplace les textes en gras
    html = html.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');

    // Remplace les listes
    html = html.replace(/\* ([^\*]+)/g, '<li>$1</li>');

    // Remplace les liens
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

    // Remplace les tableaux (support basique)
    html = html.replace(/((?:\|[^\|\n]+\|?\n)+)/g, (match) => {
        let rows = match.trim().split('\n');
        let tableHtml = '<table><tbody>';
        rows.forEach(row => {
            tableHtml += '<tr>';
            let cells = row.split('|').slice(1, -1);
            cells.forEach(cell => {
                tableHtml += `<td>${cell.trim()}</td>`;
            });
            tableHtml += '</tr>';
        });
        tableHtml += '</tbody></table>';
        return tableHtml;
    });

    return html;
}
</script>
  
<style scoped>
::v-deep td {
  @apply border p-2;
}
</style>

