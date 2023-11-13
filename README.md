# API de Gerenciamento de Tarefas

Bem-vindo à API de Clínica Veterinária! Esta API foi desenvolvida para facilitar o gerenciamento eficiente de uma clínica, permitindo a criação, atualização e exclusão de tutores e pets.

## Instalação

Para começar, clone este repositório e instale as dependências utilizando o seguinte comando:

```bash
git clone https://github.com/gouvei4/desafio-compass-uol.git
npm install
```

Após a instalação, crie um arquivo de configuração chamado `.env` na raiz do projeto e configure as variáveis de ambiente necessárias. Um exemplo de arquivo `.env` pode ser encontrado no arquivo `.env.example`.

## Uso

A API oferece as seguintes operações:

### 1. Criar uma Tarefa

Endpoint: `POST /tasks`

Para criar uma nova tarefa, envie uma requisição POST com o seguinte corpo:

```json
{
  "title": "Nome da Tarefa",
  "description": "Descrição da tarefa",
  "dueDate": "2023-12-01",
  "priority": "Alta"
}
```

### 2. Atualizar uma Tarefa

Endpoint: `PUT /tasks/:id`

Para atualizar uma tarefa existente, envie uma requisição PUT com o seguinte corpo:

```json
{
  "title": "Novo Nome da Tarefa",
  "description": "Nova Descrição da Tarefa",
  "dueDate": "2023-12-05",
  "priority": "Média"
}
```

### 3. Excluir uma Tarefa

Endpoint: `DELETE /tasks/:id`

Para excluir uma tarefa, envie uma requisição DELETE para o endpoint correspondente.

### 4. Consultar Tarefas

Endpoint: `GET /tasks`

Para obter a lista de todas as tarefas, faça uma requisição GET para o endpoint acima.

## Contribuições

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).
