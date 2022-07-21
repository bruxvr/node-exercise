import fetch from 'node-fetch';
import chalk from 'chalk'


function geraUsuarios(numUsuarios) {
    fetch(`https://randomuser.me/api/?results=${numUsuarios}`)
    .then(res => res.json())
    .then((dados) => { 
        dados.results.forEach(usuario => {
        console.log(chalk.green(`${usuario.name.first} ${usuario.name.last}`))
    })})}

////depois ver catch

geraUsuarios(2)

