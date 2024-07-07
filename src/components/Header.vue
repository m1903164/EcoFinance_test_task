<script setup>
import {ref, watch} from "vue"
import { useRouter } from 'vue-router'
import { useUserStore } from '../store/user.js'

const user = useUserStore()
const router = useRouter()

const isMenuItemDisable = ref(true)
const isMenuItemVisible = ref(false)

watch(
    () => [user.email, user.password],
    ([email, password]) => {
      isMenuItemDisable.value = email === '' || password === ''
      isMenuItemVisible.value = email !== '' && password !== ''
    },
    { immediate: true }
)

function pageRedirect(index) {
  switch (true){
  case index.index === '1':
    router.push({name: 'Public'})
        break
  case  index.index === '2':
    router.push({name: 'Protected'})
        break
  case index.index === '3':
    router.push({name: 'Login'})
    user.email = ''
    user.password = ''
  }
}
</script>

<template>
  <el-menu
      class="header"
      mode="horizontal"
  >
    <el-menu-item index="1" @click="pageRedirect">Публичная</el-menu-item>
    <el-menu-item index="2" @click="pageRedirect" :disabled="isMenuItemDisable">Приватная</el-menu-item>
    <el-menu-item v-if="isMenuItemVisible" index="3" @click="pageRedirect">Выйти</el-menu-item>
  </el-menu>
</template>

<style scoped>
.header {
  margin-bottom: 20px;
}
</style>