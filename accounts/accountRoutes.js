const express = require('express')
const router = express.Router()

const Accounts = require('./accountController')
const {validateAccountId ,validateAccount} = require('../helpers/validation')
router.get('/', Accounts.GetAccounts )
router.get('/:id',validateAccountId, Accounts.GetAccounts )
router.post('/' , validateAccount, Accounts.AddAccounts)
router.put('/:id',validateAccountId, validateAccount , Accounts.UpdateAccount)
router.delete('/:id', validateAccountId, Accounts.DeleteAccount)

module.exports= router