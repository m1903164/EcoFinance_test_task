<script setup>
import {ref, reactive, onMounted} from 'vue'
import UserCards from "../components/UserCards.vue"

const usersFromServer = reactive([])

const loader = ref(false)

async function loadMoreUsers() {
  try {
    const response = await fetch('https://randomuser.me/api/?results=10')
    const data = await response.json()
    usersFromServer.push(...data.results)
    // console.log(usersFromServer)
  } catch (error) {
    console.error(error)
  }
}

onMounted(async () => {
  loader.value = true

  await loadMoreUsers()

  loader.value = false
})

</script>

<template>
  <div class="page-container" v-loading="loader">
    <UserCards :data-from-server="usersFromServer"/>
    <el-button class="addUserBtn" @click="loadMoreUsers">Еще</el-button>
  </div>
</template>

<style scoped lang="scss">
.page-container {
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.addUserBtn {
  width: 100px;
}
</style>