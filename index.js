const express = require('express')
const app = express()
const valorModel = require('./models/valorModel')
const jwt = require('jsonwebtoken')
const body = require('body-parser')
const {urlencoded} = require('body-parser')

app.get('/alunos/todos', (req, res) => {
	let alunos = [
		{'nome': 'Lorena', 'area': 'Sistemas'},
		{'nome': 'Caroline', 'area': 'Sistemas'},
		{'nome': 'Gabriel', 'area': 'Zootecnia'},
	]
	res.json(alunos)
})

app.get('/moeda/:valor_real', valorModel.obterValor)

app.listen(3000, () => {
	console.log('App rodando!')
})