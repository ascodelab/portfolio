export const getters = {
    ageText:state=>{
      var ageText = state.people.map(person=>{
        return{
          name:person.name,
          age:person.age +" years old!"
        }
      });
      return ageText;
    }
}