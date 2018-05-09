"use strict"
$("document").ready(function() {
    tinymce.init({
      selector: "textarea",
      language: "de",
      branding: false,
      height: "45vh",
      theme: "modern",
      plugins: "borderinsert paste code print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help imagetools",
      toolbar1: "formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat code | border_insert",
      image_advtab: true,
      templates: [
        { title: "Test template 1", content: "Test 1" },
        { title: "Test template 2", content: "Test 2" }
      ],
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
