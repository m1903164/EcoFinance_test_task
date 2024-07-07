<script setup>
import { reactive } from "vue"
import { useRouter } from 'vue-router'
import { useUserStore } from '../store/user.js'

const user = useUserStore()
const router = useRouter()

const defualtData = {
  email: 'admin@example.com',
  password: 'Qwerty12345'
}

const formData = reactive({
  email: '',
  password: ''
})

function Login() {
  if(Object.keys(formData).every((key) => formData[key] === defualtData[key])) {
    user.email = defualtData.email
    user.password = defualtData.password

    console.log('userStore =>', user.email)
    console.log('userStore =>', user.password)

    router.push({name: 'Protected'})
  }else {
    alert('lox')
  }
}
</script>

<template>
  <div class="form-container">
    <el-card class="card-box">
      <el-form
          label-position="right"
          label-width="50px"
      >
        <el-form-item label="Email">
          <el-input v-model="formData.email"/>
        </el-form-item>
        <el-form-item label="Пароль">
          <el-input v-model="formData.password"/>
        </el-form-item>
        <el-button
            class="card-box__button"
            @click="Login"
        >
          Войти
        </el-button>
      </el-form>
    </el-card>
  </div>
</template>

<style>
.card-box {
  margin: auto;

  width: 500px;
  height: 200px;
}

.card-box__button {
  float: right;
}
</style>