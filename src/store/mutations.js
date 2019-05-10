export const mutations = {
    plus:(state,payload)=>{
        state.people.forEach(person => {
          person.age+=payload;
      });
    },
    minus:(state,payload)=>{
      state.people.forEach(person => {
        person.age-=payload;
      });
    },
    updateData:(state,payload)=>{
      state.people=payload;
    },
    modalSayHelloShow:(state)=>{
      state.sayHelloModalEffect=false;
      state.sayHelloModal=true;
    },
     modalSayHelloHideEffect:(state)=>{
      state.sayHelloModalEffect=true;
    },
    modalSayHelloHide:(state)=>{
      state.sayHelloModal=false;
    }
  }