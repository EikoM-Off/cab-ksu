<template>
  <ul class="collapsible expandable" ref="collapsible">
    <li>
      <div class="collapsible-header"><i class="material-icons">arrow_drop_down</i>2016-2017 (1-курс)</div>
      <div class="collapsible-body"><SemestersTable /></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">arrow_drop_down</i>2017-2018 (2-курс)</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">arrow_drop_down</i>2018-2019 (3-курс)</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
  </ul>
</template>

<script>
import M from 'materialize-css'
import SemestersTable from '@/components/SemestersTable'
export default {
  mounted(){
    M.Collapsible.init(this.$refs.collapsible, {
      accordion: false
      });
  },
  components:{
    SemestersTable
  }
}
</script>