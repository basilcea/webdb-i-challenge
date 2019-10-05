const Account = require('../accounts/accountModel')
const Action = require('../accounts/accountModel')

const validateAccountId = async (req, res, next) => {
    const { id } = req.params;
    try {
      const data = await Account.get(id);
    
      if (!data) {
        return res.status(400).json({ message: "invalid account id" });
      }
      req.Account = data
      next();
    } catch (err) {
      return res.status(500).json(err.toString());
    }
  };


  const validateAccount = async (req, res, next) => {
  
    try {
      if (!req.body) {
        return res.status(400).json({ message: "missing Account data" });
      }
      if (!req.body.name) {
        return res.status(400).json({ message: "missing required name field" });
      }
      if (!req.body.budget) {
        return res.status(400).json({ message: "missing required budget field" });
      }
      next();
    } catch (err) {
      return res.status(500).json(err.toString());
    }
  };
  

  
  module.exports = ({
    validateAccountId,
    validateAccount,
  
  });