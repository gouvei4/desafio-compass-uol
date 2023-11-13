# API de Gerenciamento de Tarefas

Bem-vindo à API de Clínica Veterinária! Esta API foi desenvolvida para facilitar o gerenciamento eficiente de uma clínica, permitindo a criação, atualização e exclusão de tutores e pets.

## Instalação

Para começar, clone este repositório e instale as dependências utilizando o seguinte comando:

```bash
git clone https://github.com/gouvei4/desafio-compass-uol.git
npm install
```

## Uso

A API oferece as seguintes rota:

### 1. Encontra um tutor

Endpoint Tutors: `GET /tutors`

### 2. Criar um tutor ou pet

Endpoint: `POST /tutor`
Endpoint: `POST /pet/:tutorId`

Para criar um tutor ou pet, envie uma requisição POST com o seguinte corpo:

### PARA TUTOR
```json
{
  "id": "Numero id", (Number)
  "name": "Nome", (String)
  "phone": "Telefone", (Number)
  "email": "E-mail", (String)
  "date_of_birth: Date": "Data de nascimento", (Date)
  "zip_code": "CEP" (Number)
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
