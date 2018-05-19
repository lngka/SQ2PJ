"use strict"
$("document").ready(function() {
    tinymce.init({
      selector: "textarea",
      language: "de",
      branding: false,
      height: "45vh",
      theme: "modern",
      plugins: "youtubemail leftborder paste code print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help imagetools",
      toolbar1: "formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat code | leftborder_btn youtubemail",
      image_advtab: true,
      templates: [
        { title: "colored_p_green", content: '<div style="border-left: 5px solid green">Text</div>' },
        { title: "Test template 2", content: "Test 2" }
      ],
      inline_styles : true,
      extended_valid_elements: "*[*]",
      valid_elements: "*[*]",
      content_css: [
        "//fonts.googleapis.com/css?family=Lato:300,300i,400,400i",
        "//www.tinymce.com/css/codepen.min.css"
      ]
     });

     $("#submit").click(function(event) {
         event.preventDefault();
         var data = {};
         data.subject = $("#subject").val();
         data.email   = $("#email").val();
         data.text    = tinyMCE.get("text").getContent();

         $.ajax({
          type: "POST",
          url: "/write",
          data: data,
          success: function() {
              alert("Ok");
          }
        });
     })
})
