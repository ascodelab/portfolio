/* eslint-disable no-console */
import db from '../database/firebaseInit'

export const actions = {
    plus:(context,payload)=>{
      setTimeout(function(){
        context.commit('plus',payload);
      },1000)
    },
    minus:(context,payload)=>{
      setTimeout(function(){
        context.commit('minus',payload);
      },1000)
    },
    initData:(context)=>{
        var users = [];
        db.collection("emails").get().then(function(querySnapshot) {
          querySnapshot.docs.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              users.push(doc.data());
          });
          // changing the state data
          context.commit('updateData',users);
          
      })
    },
    //adding data to the firebase
    sendSayHello:(contest,payload)=>{
      db.collection("emails").add(payload).then(function(resp){
       return(resp.id);
      });
    },
    subscribe:(contest,payload)=>{
      db.collection("subscribers").add(payload).then(function(resp){
       return(resp.id);
      });
    },
    modalSayHelloShow:(context)=>{
      setTimeout(function(){
        context.commit('modalSayHelloShow');
      },1)
    },
    modalSayHelloHide:(context)=>{
      // trigger animation mutation
      context.commit('modalSayHelloHideEffect');
      setTimeout(function(){
        context.commit('modalSayHelloHide');
      },2000)
    }
  }