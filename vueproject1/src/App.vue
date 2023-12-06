<template>
  <div class="post">
    <button @click="inc">Лайк</button>
    <button @click="decr">Дизлайк</button>
    <div>
      <p>Кол-во лайков <strong>{{ likes }}</strong></p>
      <p>Кол-во дизлайков <strong>{{ dislikes }}</strong></p>
    </div>
  </div>

  <div class="post">
    <button @click="inc">Лайк</button>
    <button @click="decr">Дизлайк</button>
    <div>
      <p>Кол-во лайков <strong>{{ likes }}</strong></p>
      <p>Кол-во дизлайков <strong>{{ dislikes }}</strong></p>
    </div>
  </div>

  <div class="post">
    <button @click="inc">Лайк</button>
    <button @click="decr">Дизлайк</button>
    <div>
      <p>Кол-во лайков <strong>{{ likes }}</strong></p>
      <p>Кол-во дизлайков <strong>{{ dislikes }}</strong></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      likes: 0,
      dislikes: 0,
    };
  },
  methods: {
    inc () {
      this.likes += 1;
    },
    decr () {
      this.dislikes += 1;
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.post {
  padding: 5px;
  border: 2px solid teal;
  border-radius: 10px;
  margin-top: 10px;
}

button {
  margin: 0 5px;
}
</style>
