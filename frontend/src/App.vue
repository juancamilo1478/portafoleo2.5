 


 <template>
  <div class="container-fluid p-0" style="overflow-x: hidden;">
    <div class="row pb-2 pt-2" style="background: var(--gris1)">
      <div class="col-lg-6">hola</div>
      <div class="col-lg-6">
        <div class="row justify-content-end">
          <div class="col-lg-2 page" style="color: white ">Home</div>
          <div class="col-lg-2 page" style="color: white">Proyectos</div>
          <div class="col-lg-2 page" style="color: white">Contactame</div>
      
        </div>
      </div>
    </div>
 
    <RouterView />

    <div class="navButton"> <div class="navCuttonContent"><div class="element">    <i class="fa-brands fa-facebook  icoButton"></i></div><div class="element">    <i class="fa-brands fa-github icoButton"></i></div><div class="element">   <i class="fa-brands fa-linkedin icoButton"></i></div><div class="element">   <i class="fa-solid fa-envelope icoButton"></i></div></div> </div>

  </div>
  
</template>


<script>
// main.js o App.vue
 

</script>

<style>
.navButton{ 
  position:fixed;
  bottom: 0;
  width: 100%;
}
.navCuttonContent{
  width: fit-content;
  margin:10px auto;
  background: var(--gris2);
 box-shadow: 0px 0px 10px white;
 border-radius: 40px;
  
 max-height: 50px;
 padding-left: 10vh;
 padding-right:10vh;
 display: flex;
 gap: 10px;

}
.element{
  margin: 5px;
  padding: 20px;
  background: #474747;
  border-radius: 100%;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
  color:#626262;
  font-size: 1.5rem;
 
}
.icoButton{
  
  position: absolute;
 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} 
.element:hover{
  padding: 25px;
  transform: translateY(-10px);
  color: rgb(192, 192, 192);
  font-size: 2rem;
}
.page{
  cursor: pointer;
}
</style>

 