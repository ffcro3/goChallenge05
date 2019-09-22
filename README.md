 <p  align="center">

<a  href="https://pt-br.reactjs.org/"  target="_blank">
<p align="center">
  <img width="auto" height="200" src="https://i.imgur.com/0kYzeO4.png">
</p>
</a>

</p>

<h2  align="center">Aplicação com ReactJS</h2>

---

> **GoStack 8.0**: Aplicação desenvolvida com base nos estudos adquiridos no Bootcamp GoStack 8.0. Nesse desafio você adicionará novas funcionalidades na aplicação que desenvolvemos ao longo desse módulo.
---
# Desafio 05. Aplicação com ReactJS

## Funcionalidades

### Captando erros

Adicione um `try/catch` por volta do código presente na função `handleSubmit` presente no componente `Main` e caso um repositório não seja encontrado na API do Github adicione uma borda vermelha por volta do input em que o usuário digitou o nome do repositório.

### Repositório duplicado

Antes de fazer a chamada à API na função `handleSubmit` faça uma verificação para ver se o repositório não está duplicado, ou seja, se ele ainda não existe no estado de `repositories`.

Caso exista, dispare um erro, e com isso o código cairá no `catch` do `try/catch` criado na funcionalidade anterior.

```js
throw new Error('Repositório duplicado');
```

### Filtro de estado

Adicione um filtro de estado na listagem de Issues que criamos no detalhe do repositório. O estado representa se a issue está em aberto, fechada ou uma opção para exibir todas.

Exemplos de requisição:

```
https://api.github.com/repos/rocketseat/unform/issues?state=all
https://api.github.com/repos/rocketseat/unform/issues?state=open
https://api.github.com/repos/rocketseat/unform/issues?state=closed
```

Você pode encontrar a documentação [nesse link](https://developer.github.com/v3/issues/#parameters-1);

### Paginação

Adicione paginação nas issues listadas no detalhe do repositório. A API do Github lista no máximo 30 issues por página e você pode controlar o número da página atual por um parâmetro no endereço da requisição:

```
https://api.github.com/repos/rocketseat/unform/issues?page=2
```

Adicione apenas um botão de próxima página e página anteior. O botão de página anterior deve ficar desativado na primeira página.


#### Keep in mind this is a WIP.

- Aplicação em ReactJS

- Link para o desafio do curso referente a essa aplicação: <https://github.com/Rocketseat/bootcamp-gostack-desafio-05>
