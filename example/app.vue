<script>
import dateparse from '../src/index.js'

export default {
  data() {
    return {
      date: 1461047503300,
    };
  },
  filters: {
    dateparse,
  },
};
</script>

<template>
  <input type="text" v-model="date | dateparse 'YYYY-mm-dd'">
  <p>{{1461047503300 | dateparse 'YYYY-MM-dd hh:mm:ss'}}</p>
  <p>{{1461047503300 | dateparse 'YYYY/MM/dd hh:mm:ss'}}</p>
  <p>{{1461047503300 | dateparse 'MM/dd hh:mm:ss'}}</p>
  <p>{{1461047503300 | dateparse 'hh:mm:ss'}}</p>
  <p>{{1461047503300 | dateparse 'YYYY年MM月dd日 hh时mm分ss秒'}}</p>
</template>
