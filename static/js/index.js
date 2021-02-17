new Vue({
  el: '#app',
  data() {
    return {
      info: null
    }
  },
  mounted() {
    axios
      .get('https://t74g7a8705.execute-api.ap-northeast-1.amazonaws.com/dev/lists')
      .then(response => (this.info = response.data))
      .catch(function (error) {
        alert('データの取得に失敗しました');
        console.log(error);
      });
  }
})