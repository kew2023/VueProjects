import { createStore } from 'vuex';

export default createStore({
  state: {
    userVerification: true,
    bookArr: [
      {
        id: 1,
        name: 'КПК "Работа на высокие результаты ГИА-9 и ГИА-11 по русскому языку"',
        author: 'Я',
        series: 'Тип',
        genry: 'Жанр',
        publisher: 'Публикатор',
        circulation: 100,
        publishingyear: '',
        pages: 10,
        binding: '',
        size: '',
        format: '',
        annotation: ''

      },
      {
        id: 2,
        name: 'КПК «Проектная деятельность как способ повышения качества образования в школе»',
        author: 'Я',
        series: 'Тип',
        genry: 'Жанр',
        publisher: 'Публикатор',
        circulation: 100,
        publishingyear: '',
        pages: 10,
        binding: '',
        size: '',
        format: '',
        annotation: ''
      },
      {
        id: 3,
        name: 'КПК для учителей информатики для преподавания обучающимся с ОВЗ',
        author: 'Я',
        series: 'Тип',
        genry: 'Жанр',
        publisher: 'Публикатор',
        circulation: 100,
        publishingyear: '',
        pages: 10,
        binding: '',
        size: '',
        format: '',
        annotation: ''
      },
      {
        id: 4,
        name: 'КПК для учителей информатики',
        author: 'Я',
        series: 'Тип',
        genry: 'Жанр',
        publisher: 'Публикатор',
        circulation: 100,
        publishingyear: '',
        pages: 10,
        binding: '',
        size: '',
        format: '',
        annotation: ''
      },
      {
        id: 5,
        name: 'КПК к марафону #ЗАЗОЖ ПУТЬ К УСПЕХУ',
        author: 'Я',
        series: 'Тип',
        genry: 'Жанр',
        publisher: 'Публикатор',
        circulation: 100,
        publishingyear: '',
        pages: 10,
        binding: '',
        size: '',
        format: '',
        annotation: ''
      },
      {
        id: 6,
        name: 'Личная эффективность работника образования',
        author: 'Я',
        series: 'Тип',
        genry: 'Жанр',
        publisher: 'Публикатор',
        circulation: 100,
        publishingyear: '',
        pages: 10,
        binding: '',
        size: '',
        format: '',
        annotation: ''
      },
      {
        id: 7,
        name: 'Проектная деятельность: особенности организации и управления проектами, реализуемыми в рамках...',
        author: 'Я',
        series: 'Тип',
        genry: 'Жанр',
        publisher: 'Публикатор',
        circulation: 100,
        publishingyear: '',
        pages: 10,
        binding: '',
        size: '',
        format: '',
        annotation: ''
      },
      {
        id: 8,
        name: '«Апгрейд» для учителя, или на урок с «цифровым» портфелем',
        author: 'Я',
        series: 'Тип',
        genry: 'Жанр',
        publisher: 'Публикатор',
        circulation: 100,
        publishingyear: '',
        pages: 10,
        binding: '',
        size: '',
        format: '',
        annotation: ''
      },
      {
        id: 9,
        name: 'Особенности закупочной деятельности в образовательной организации',
        author: 'Я',
        series: 'Тип',
        genry: 'Жанр',
        publisher: 'Публикатор',
        circulation: 100,
        publishingyear: '',
        pages: 10,
        binding: '',
        size: '',
        format: '',
        annotation: ''
      }
    ],
    genryArr: [],
    seriesArr: []
  },
  getters: {
    getUserVerification (state) {
      return state.userVerification;
    },
    getBookArr (state) {
      return state.bookArr;
    },
    getGenryArr (state) {
      return state.genryArr;
    },
    getSeriesArr (state) {
      return state.genryArr;
    }
  },
  mutations: {
    setUserVerification (state, newState) {
      state.bookArr = newState;
    },
    setBookArr (state, newState) {
      state.bookArr = newState;
    },
    setGenryArr (state, newState) {
      state.genryArr = newState;
    },
    setSeriesArr (state, newState) {
      state.seriesArr = newState;
    },
  },
});
