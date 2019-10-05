const Accounts = require('./accountModel')

const status = (res, data, status) => {
    return res.status(status).json(data);
  };

  const GetAccounts = async( req , res) => {
    const {id} = req.params
    const {limit , orderby  ,order} = req.query
    try{
        const data = await Accounts.get(id,limit, orderby ,order)
        status(res ,data, 200)
    }
    catch(err){
        status(res ,'Cannot Get Accounts', 500)
    }
  }


  const AddAccounts = async(req ,res) => {
      const {name , budget} = req.body
      try{
          const data = await Accounts.insert({name , budget})
          status(res ,data , 200)
      }
      catch(err){
          status(res, 'Cannot Add Accounts', 500)
      }
  }

  const UpdateAccount = async(req, res) => {
      const {id} = req.params;
      const {name , budget} = req.body

      try{
        const data = await Accounts.update(id ,{name , budget})
        status(res ,data , 200)
    }
    catch(err){
        status(res, 'Cannot Update Accounts', 500)
    }
  }

  const DeleteAccount = async(req, res) => {
      const {id} = req.params;
      try{
          await Accounts.remove(id)
          status(res, "Account Deleted", 200)
      }
      catch(err){
          status(res , 'Cannot Delete Account' , 500)
      }
  }

  module.exports = ({
    AddAccounts,UpdateAccount,DeleteAccount, GetAccounts
  })