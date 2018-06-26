<template lang="pug">
.col-md-4
  .event-card
    h4.card-title {{ event.title }}
    p.card-text {{ event.description }}
    ul.list-group.list-group-flush
      li.list-group-item Date: {{ event.date }}
      li.list-group-item Location: {{ event.location }}
      li.list-group-item Host: {{ event.email }}
</template>

<script>
export default {
 props: ['event'] 
}
</script>

<style lang="scss">
.event-card {
  border: 2px solid #2C3E50;
  margin-top: 10px;
  border-radius: 4px;
}
</style>
