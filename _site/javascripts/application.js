(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-48013823-1', 'phuonglh.name.vn');
  ga('send', 'pageview');

$(function () {
  $("#project_title").fitText(1.4).textillate({ in: { effect: "flipInY" }});
  $("#project_tagline").fitText(3.2, { maxFontSize: 18 })
  .textillate({
    initialDelay: 1000,
    in: { effect: "bounceInDown", delay: 3, shuffle: true }
  });
})
hljs.initHighlightingOnLoad();
