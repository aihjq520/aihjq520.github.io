var posts=["2024/01/11/large-file-download/","2024/01/11/handwrite-promise/","2023/05/25/webpack-1/","2024/10/16/vue3-1/","2024/01/16/type-and-interface/","2024/11/02/网络安全/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };