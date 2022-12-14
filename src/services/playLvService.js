import firebase from "../firebase";

// const db = firebase.ref("/historys");
const db = firebase.ref("/h2f_playLv");
// const db = firebase.ref("/h2f_team_score");

class StDataService {
  getAll() {
    return db;
  }

  getByDate(detal) {
    return firebase.ref("/h2f_playLv").orderByChild('date').startAt(detal); 
  }

  uqcrat(userKey,user) { 
    return  db.child(userKey).set(user);  
  }

  create(od) {
    return db.push(od);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }


  getRef() {
    return db.no('value',(snapshot) => {

console.log(snapshot.val());

      });
  }
}

export default new StDataService();
