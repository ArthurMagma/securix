(()=>{document.addEventListener("DOMContentLoaded",()=>{let o=document.querySelector(".menu-togle"),s=document.querySelector(".side_bar"),a=document.querySelector(".side_bar .logo i"),e=document.querySelector(".menu-togle .fa-solid");a.addEventListener("click",()=>{s.classList.contains("show")?(e.classList.remove("fa-plus"),e.classList.add("fa-bars")):(e.classList.remove("fa-bars"),e.classList.add("fa-plus")),s.classList.toggle("show")}),o.addEventListener("click",()=>{s.classList.contains("show")?(e.classList.remove("fa-plus"),e.classList.add("fa-bars")):(e.classList.remove("fa-bars"),e.classList.add("fa-plus")),s.classList.toggle("show")}),$(".profil_block").on("click",()=>{$.ajax({url:"/admin/logout",method:"get",contentType:!1,processData:!1,success:function(t){Swal.fire({icon:"success",text:"bye bye  !",showConfirmButton:!1,timer:1e3}),setInterval(()=>{location.replace("/admin")},1e3)},error:function(t){Swal.fire({icon:"error",title:"Oops...",text:t.responseJSON.error})}})})});})();