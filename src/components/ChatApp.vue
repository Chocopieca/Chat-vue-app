<template>
  <v-container class="chat">
    <v-row>
      <v-img src="../assets/img/avatar.png" :max-width="breakpoint.xs ? 100 : 480" contain class="chat-avatar"/>
      <v-col cols="11" class="pl-3 offset-1">
        <h2 class="size16-weight700 pl-100">Вероника Ростова</h2>
        <p class="size12-weight400 pl-100 mb-0">Менеджер по продажам</p>
        <v-alert
            class="chat-alert pr-0 pl-100"
            :class="breakpoint.smAndUp ? 'size14-weight400' : 'size11-weight400'"
            :color="theme.info"
        >
          Подберу для вас самые лучшие предложения.
          Мои услуги абсолютно бесплатны
        </v-alert>
      </v-col>
    </v-row>
    <v-row no-gutters class="mb-5">
      <v-col cols="12" sm="9" class="offset-sm-3">
        <div class="d-flex justify-end mx-5">
          Услуги
        </div>
        <v-divider class="my-2"/>
        <v-row no-gutters class="mb-1">
          <v-col cols="9" class="pa-0 size13-weight400" :style="{ background: userQuality(userQuality1)}">Ручное бронирование</v-col>
          <v-col cols="3" class="pa-0 d-flex justify-center px-5 size13-weight700">{{ userQuality1 }}</v-col>
        </v-row>
        <v-row no-gutters class="mb-1">
          <v-col cols="9" class="pa-0 size13-weight400" :style="{ background: userQuality(userQuality2)}">Пакетные туры</v-col>
          <v-col cols="3" class="pa-0 d-flex justify-center px-5 size13-weight700">{{ userQuality2 }}</v-col>
        </v-row>
        <v-row no-gutters class="mb-1">
          <v-col cols="9" class="pa-0 size13-weight400" :style="{ background: userQuality(userQuality3)}">Отели</v-col>
          <v-col cols="3" class="pa-0 d-flex justify-center px-5 size13-weight700">{{ userQuality3 }}</v-col>
        </v-row>
        <v-divider class="my-2"/>
        <v-row no-gutters class="mb-1 size16-weight700">
          <v-col cols="9" class="pa-0">Всего</v-col>
          <v-col cols="3" class="pa-0 d-flex justify-center px-5">{{ totalQuality }}</v-col>
        </v-row>
      </v-col>
    </v-row>
    <div class="mb-16">
      <h2 class="float-left size16-weight700 mr-3">Последние отзывы</h2>
      <a href="#" class="float-left size14-weight400">Все отзывы</a>
      <div class="float-left float-md-right">
        <v-icon color="#73B4D5" class="mr-1">mdi-heart</v-icon>
        <span class="mr-5 size12-weight400">{{ likes }}</span>
        <v-icon color="#73B4D5" class="mr-1">mdi-message-reply</v-icon>
        <span class="size12-weight400">{{ totalComments }}</span>
      </div>
    </div>
    <template v-if="comments.length > 0">
      <div v-for="(comment, i) in comments" :key="i" class="mb-5">
        <div class="mb-4">
          <span class="size14-weight700 mr-1">
            {{ comment.name }}
          </span>
          <span class="size13-weight400">
            {{ comment.date }}
          </span>
        </div>
        <div class="chat-comment size14-weight400 pa-5">
          {{ comment.text }}
        </div>
      </div>
    </template>
    <div v-else class="mb-5">
      К сожелению комментариев нету.
    </div>
    <v-textarea
        v-model="text"
        hide-details
        no-resize
        height="63"
        solo
        name="comment"
        class="mb-5"
        @keydown.prevent.ctrl.enter="addComment()"
    />
    <v-sheet width="281" class="margin-auto" color="transparent">
      <v-btn
          block
          rounded
          :color="theme.button"
          class="size16-weight700"
          @click="addComment()"
      >
        Написать консультанту
      </v-btn>
    </v-sheet>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        userQuality1: 11,
        userQuality2: 3,
        userQuality3: 1,
        likes: 131,
        totalComments: 14,
        comments: [
          {
            name: 'Самуил',
            date: '13 октября 2011',
            text: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!! '
          },
          {
            name: 'Лилия Семёновна',
            date: '14 октября 2011',
            text: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами? '
          },
          {
            name: 'Лилия Семёновна',
            date: '14 октября 2011',
            text: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент? '
          },
        ],
        text: ''
      }
    },
    methods: {
      userQuality(quality) {
        let qualityValue, color, color2 = this.$vuetify.theme.themes.light.bg;

        if (quality >= 10) {
          qualityValue = '100%';
          color = '#B1E19B';
        } else {
          qualityValue = `${quality}0%`;
          color = '#ACE2F8';
        }
        return `linear-gradient(to right, ${color} ${qualityValue}, ${color2} ${qualityValue})`;
      },
      addComment() {
        if (!this.text) return;
        let today = new Date();
        let months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
        let comment = {
          name: 'Новый пользователь',
          date: `${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`,
          text: this.text,
        };
        this.comments.push(comment);
        this.text = '';
      }
    },
    computed: {
      totalQuality() {
        return this.userQuality1 + this.userQuality2 + this.userQuality3;
      },
      theme() {
        return this.$vuetify.theme.themes.light;
      },
      breakpoint() {
        return this.$vuetify.breakpoint;
      }
    }
  }
</script>

<style scoped lang="scss">
  .chat {
    justify-content: space-between;
    position: relative;
    margin: 0 auto;
    max-width: 480px;
    background: var(--v-bg-base);
    height: 100%;
    padding: 20px;

    &-avatar {
      position: absolute;
      border-radius: 50%;
      z-index: 1;
      width: 124px;
    }

    &-alert {
      border: 1px solid #DADADA;
    }

    &-comment {
      position: relative;
      background: var(--v-message-base);
      border: 1px solid #C4CBCF;

      &:before {
        content: " ";
        position: absolute;
        width: 0;
        height: 0;
        left: 10px;
        top: -11px;
        border: 10px solid;
        border-color: #C4CBCF transparent transparent #C4CBCF;
        z-index: 1;
        transform: rotate(
                135deg
        );
      }

      &:after {
        content: " ";
        position: absolute;
        width: 0;
        height: 0;
        left: 11px;
        top: -9px;
        border: 10px solid;
        border-color: var(--v-message-base) var(--v-message-base) transparent var(--v-message-base);
        z-index: 1;
        transform: rotate(
                135deg
        );
      }
    }
  }

  .margin-auto {
    margin: 0 auto;
  }

  .pl-100 {
    padding-left: 80px !important;

    @media (min-width: map-get($grid-breakpoints, sm)){
      padding-left: 80px !important;
    }
  }
</style>