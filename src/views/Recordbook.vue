<template>
    <div>
    <div class="page-title">
      <h3>Зачетная книжка</h3>
    </div>

      <RecordBookTable />
      
    </div>
</template>

<script>
import RecordBookTable from '@/components/RecordBookTable'
export default {
  components:{
    RecordBookTable
  }
}
</script>