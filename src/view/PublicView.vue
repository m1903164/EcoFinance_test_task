<template>
  <div class="page-container">
    <el-card class="profile-card" style="max-width: 480px">
      <template #header>
        <div class="card-header">
          <span>Гришин Иван</span>
        </div>
      </template>
      <div class="profile-card__info">
        <img class="profile-card__image" src="../assets/me.jpg" alt="photo">
          <h3 class="profile-card__info__text">Frontend developer</h3>
          <p class="profile-card__info__text">johnfrontend001@gmail.com</p>
          <p class="profile-card__info__text">89851313263</p>
      </div>
    </el-card>
    <el-card class="skill-card">
      <el-collapse>
        <el-collapse-item title="Анвио">
          <p>На данном месте работы занимался разработкой внутреннего лаунчера, который используется для запуска vr игр</p>
          <p>- Анализ и улучшение продукта</p>
          <p>- Написание документации для новых версий продукта (Jira-Docs)</p>
          <p>- Работа с backend - реализация новых функций лаунчера (C#)</p>
          <p>- Реализация стора (Vuex)</p>
          <p>- Разработка нового лаучера на Vue3(Compositipion Api)</p>
        </el-collapse-item>
        <el-collapse-item title="Авилон">
          <p>На данном месте работы занимался разработкой интерфейса веб-приложения для бьюти-сферы</p>
          <p>- разработка новых компонентов (nuxt 2, buefy)</p>
          <p>- рефактор адаптивной верстки всех компонентов проекта</p>
          <p>- работа с rest api (axios)</p>
          <p>- написание тз для дизайнеров (Figma, Notes)</p>
          <p>- подключение pwa модуля</p>
        </el-collapse-item>
        <el-collapse-item title="Дилявер Технолоджи">
          <p>Разработка новой версии комплексной автоматизированной системы учета электронной продажи билетов на культурно-массовые мероприятия</p>
          <p>- Разработка кастомных компонентов для проекта (Vue 3, element +) - создал кастомные компоненты и переписал все вьюхи на них</p>
          <p>-Работа со стором (Pinia) - разработка стора под каждый модуль проекта</p>
          <p>- Работа с rest api (Axios) - инициализация новых axios переменных для вспомогательных сервисов</p>
          <p>- Работа с Vue Router</p>
          <p>- Анализ и улучшение продукта</p>
          <p>- Написание документации для новых версий продукта (Gitlab - wiki)</p>
          <p>- инициализация websockets в переиспользуемые компоненты</p>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <el-card class="about-me-card">
      <p>Frontend-разработчик с 2+ годами опыта. Работал как в маленьких старапах, так и в больших корпорациях. Страстно интересуюсь информационными технологиями и как с помощью них построить бизнес. Больше всего привлекает разработка клиентской части приложения, но всегда готов к изучению новых технологий</p>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
.page-container {
  padding: 20px;
}

.profile-card {
  margin-bottom: 20px;

  &__image {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
  }

  &__info{
    display: flex;
    flex-direction: column;
    align-items: center;

    &__text {
      margin-bottom: 20px;
    }
  }

}

.skill-card {
  margin-bottom: 20px;
}
</style>