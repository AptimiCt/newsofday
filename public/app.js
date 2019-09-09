new Vue({
    el: '#app',
    data: {
        news: [],
        loading: false,
        offset: 0
    },
    created() {
        this.loadMore()
    },
    computed: {
        newsLength: function(){
          return this.news.length
        }
    },
    methods:{
        loadMore() {
            loading = true
            this.$http.get('/list?limit=10&offset=' + this.offset)
            .then((response) => {
              if (response && response.status < 400) {
                const news = response.data || []
                this.news = this.news.concat(news)
                if (this.newsLength < this.offset ){
                    this.offset = 0
                    this.loading = true
                } else {
                    this.offset += 10
                    this.loading = false
                }
              } else {
                    console.warn(response.statusCode, response.data)
              }
            },  (error) => {
                console.log(error);
                this.loading = false
            })
        },
        onScroll(event) {
            let wrapper = event.target,
            list = wrapper.firstElementChild
            let scrollTop = wrapper.scrollTop,
            wrapperHeight = wrapper.offsetHeight,
            listHeight = list.offsetHeight
            const diffHeight = listHeight - wrapperHeight
            if (diffHeight <= scrollTop && !this.loading){
                this.loadMore()
            }
        }
    }
})