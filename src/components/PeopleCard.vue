<template>
  <div class="uk-child-width-expand" uk-grid>
    <div v-for="(item, index) in info" :key="index">
      <div class="uk-card card uk-animation-slide-bottom" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
        <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-width-auto">
                        <img class="uk-border-circle" width="80" height="80" :src="item.imgUrl">
                    </div>
                    <div class="uk-width-expand">
                        <h3 class="uk-card-title uk-margin-remove-bottom">{{item.name}}</h3>
                        <p class="uk-text-meta uk-margin-remove-top">{{item.note}}</p>
                    </div>
                </div>
            </div>
            <div class="uk-card-body">
                <p>{{item.text}}</p>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PeopleCard',
  props: {},
  data () {
    return {
      colors: [ '#4aa4fc', '#970700', '#257397', '#20673f', '#7e512a', '#7d9519' ],
      info: [ {
        name: '林浩捷',
        imgUrl: '/img/浩捷.jpg',
        text: '尘堆山花叠楼，今朝少年在何方,思无邪行如侠，明日垂暮忆此时',
        note: '杨朕帝'
      },
      {
        name: '冯振华',
        imgUrl: '/img/水哥.jpg',
        text: '你不需要很厉害才开始，你需要开始才能很厉害。爱好：在王者峡谷河岸听音乐，看小说和游泳。',
        note: '水哥'
      },
      {
        name: '郑泽金',
        imgUrl: '/img/泽金.jpg',
        text: '喜欢思考，一本正经做事，喜欢和人聊天',
        note: '金姐'
      },
      {
        name: '林漫衔',
        imgUrl: '/img/漫衔.jpg',
        text: '你低眉走过春光，流光太明媚',
        note: '漫姐'
      }
      ]
    }
  }
}
</script>

<style scoped>
  .card {
    height: 400px;
    border-radius: 5px;
    background: white;
    margin: 0 auto;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);

    &:hover {
      box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }
</style>
