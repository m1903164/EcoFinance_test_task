<script setup>
import {ref, onMounted} from "vue"

const props = defineProps({
  dataFromServer: {
    type: Array,
    required: true
  }
})

onMounted(() => {
  console.log(props.dataFromServer)
})
</script>

<template>
  <div class="user-card">
    <el-card
        class="user-card__container"
        v-for="user in dataFromServer"
        :key="user.login.uuid"
        shadow="hover"
    >
      <img
          class="user-card__image"
          :src="user.picture.large"
          :alt="user.name.first"
      />
      <h3 class="user-card__info">
        {{ user.name.first }} {{ user.name.last }}
      </h3>
      <p class="user-card__info">
        {{ user.dob.date }}
      </p>
      <p class="user-card__info">
        {{ user.email }}
      </p>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
.user-card {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  margin-bottom: 20px;

  &__container {
    width: 40%;
    margin-right: 15px;
    margin-bottom: 15px;
  }

  &__image {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }

  &__info {
    margin-bottom: 10px;
  }
}
</style>