const db = require('../data/dbConfig')


module.exports = {
  get,
  insert,
  update,
  remove,
};

function get(id , limit , orderby ,order) {
  let query = db('Accounts as p');

  if (id) {
    return query.where('p.id', id).first();

  }

  if(limit){
    query.limit(limit)
  }
  if(orderby){
    query.orderBy(orderby , order)
  }
  return query
}

function insert(Account) {
  return db('Accounts')
    .insert(Account)
    .then(([id]) => this.get(id));
}

function update(id, changes) {
  return db('Accounts')
    .where('id', id)
    .update(changes)
    .then(count => (count > 0 ? this.get(id) : null));
}

function remove(id) {
  return db('Accounts')
    .where('id', id)
    .del()
    .then(()=> this.get())
}


