const Agents = require('express').Router()
const AgentsController = require('../controllers/Agents')

Agents.get('/', AgentsController.read)
Agents.post('/', AgentsController.create)
Agents.patch('/:id', AgentsController.update)
Agents.delete('/:id', AgentsController.delete)

module.exports = Agents
