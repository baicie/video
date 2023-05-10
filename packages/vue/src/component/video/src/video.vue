<script lang='ts' setup>
// # config import
import videojs from 'video.js'
import { onMounted } from 'vue'
import { PLAYER_ID } from '../../../util'

const props = defineProps({
  id: {
    type: String,
    required: true,
    default: PLAYER_ID,
  },
})

// import 'video.js/dist/video-js.min.css'

// define opions
defineOptions({
  name: 'BCVideo',
})

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
  <video :id="id" src="http://liuzhiwei.love/movies/Peaky.Blinders.S06E01.1080p.iP.WEBRip.AAC2.0.x264-FLUX.chs.eng.mp4" />
</template>

<style lang='scss' scoped></style>
