<template>
   <div class="icard-wrapper">
    <div class="columns">
      <div class="column is-one-third">
       <div class="icard-content">
         <table class="table ic-table">
           <tbody>
             <tr>
               <td>Email</td>
               <td>anela.kumar@gmail.com</td>
             </tr>
              <tr>
               <td>Phone</td>
               <td>+91 934-0009-420</td>
             </tr>
             <tr>
               <td>Linkedin</td>
               <td>
                 <a href="https://www.linkedin.com/in/realanilsharma/" target="_blank">@realAnilSharma</a>
               </td>
             </tr>
              <tr>
               <td>Resume</td>
               <td>
                 <a href="mailto:anela.kumar@gmail.com?subject=Need%20Your%20Resume&amp;body=Hello%20Anil%2C%0D%0A%0D%0Ayour%20message%20goes%20here..">[ Get Link ]</a>
               </td>
             </tr>
           </tbody>
         </table>
       </div>
      </div>
    </div>
   </div>    
</template>

<style scoped>
.icard-wrapper{
  padding:50px;
}
.icard-wrapper .columns .column{
  margin: 0px auto;
  /* box-shadow: 0 8px 33px 0 rgba(0,0,0,.07); */
  min-height:300px;
  background-image: url("~@/assets/bg-icard.png");
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ic-table{
   display: flex;
   align-items: center;
   justify-content: center;
   position:relative;
   top:30px;
}
.ic-table tbody tr td a{
  text-decoration: none;
  color:#000;
}
.ic-table tbody tr td a:hover{
  text-decoration: underline;
  color:#000 !important;
}
</style>

<script>

  export default {
  name: 'infocard',
  components: {

  },
  data(){
      return {
          
      }
  },
}
</script>