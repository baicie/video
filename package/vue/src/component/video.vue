<script lang='ts' setup>
// # config import
import videojs from 'video.js'
import { onMounted } from 'vue'
import { PLAYER_ID } from '../util'

// # base state
// # pinia
// # computed
// # watch
// # function
function main() {
  const player = videojs(PLAYER_ID)
  console.log(player)
}
// # lifecycle
onMounted(() => {
  main()
})
// # style
</script>

<template>
  <div class="@baicie-video-vue">
    <video :id="PLAYER_ID" />
  </div>
</template>

<style lang='scss' scoped></style>
