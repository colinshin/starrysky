<template>
    <div class="blog-article" id="blog-article">
        <article class="blog-post px-3 py-5 p-md-5">
            <div class="container">
                <button id = "backbtn" @click="toBack()">返回</button>
                <header class="blog-post-header">
                    <h2 class="title mb-2">{{detail.title}}</h2>
                    <div class="meta mb-3"><span class="date">{{detail.modify_time}} 发布</span>
                        <!--                        <span class="time">{{update_date}} 阅读</span><span class="comment"><a href="#">{{comment_nums}} 评论</a></span>-->
                    </div>
                </header>

                <div class="blog-post-body"  id="show-content">
                    {{detail.content}}
                </div>
            </div><!--//container-->
        </article>
    </div>
</template>


<script>
    import axios from 'axios'
    // import marked from 'marked'
    import  hljs  from 'highlight.js';

    export default {

        name: 'blog-article',
        data() {
            return {
                id: this.$route.query.id,
                detail: {
                    title: "",
                    summary: "",
                    modify_time: "",
                    content: "",
                },
                toBack: function () {
                    this.$router.back()
                },

            }
        },
        components: {},
        mounted() {
        },
        created() {
            this.getDetail()
        },
        methods: {
            getDetail: function () {
                axios.get(this.Api.getDetail + "/?id=" + this.id).then(res => {
                    if (res.data.ret == 0) {
                        let html = ''
                        // if (res.data.data.show_type == 2) {
                        //     let rendererMD = new marked.Renderer()
                        //     marked.setOptions({
                        //         renderer: rendererMD,
                        //         highlight: function (code) {
                        //             return hljs.highlightAuto(code).value;
                        //         },
                        //         gfm: true,
                        //         tables: true,
                        //         breaks: false,
                        //         pedantic: false,
                        //         sanitize: false,
                        //         smartLists: true,
                        //         smartypants: false
                        //     });
                        //     html = marked(res.data.data.contents);
                        //     res.data.data.contents = html;
                        // } else {
                        //     html = res.data.data.contents;
                        // }
                        console.log(res.data.data.content)
                        document.getElementById('show-content').innerHTML = res.data.data.content;
                        this.detail = res.data.data
                    }
                })
            }
        },
    }
</script>

<style>
    #backbtn {
        border-radius: 5px;
        -webkit-opacity: .8;
        -moz-opacity: .8;
        opacity: .8;
        border: 1px solid rgba(255, 255, 255, 0.8);
        padding: .25rem .6rem;
        background: #fff;
        color: #5ECCA9;
        margin-bottom: 1rem;
        border: 2px solid #f1ecec;
    }
    .blog-post-header{
        padding-bottom: 1rem;
    }
</style>

