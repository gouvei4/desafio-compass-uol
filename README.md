# API de Gerenciamento de Tarefas

Bem-vindo à API de Clínica Veterinária! Esta API foi desenvolvida para facilitar o gerenciamento eficiente de uma clínica, permitindo a criação, atualização e exclusão de tutores e pets.

## Instalação

Para começar, clone este repositório e instale as dependências utilizando o seguinte comando:

```bash
git clone https://github.com/gouvei4/desafio-compass-uol.git
npm install
```

## Uso

NPM RUN DEV - Para inicial a API

A API oferece as seguintes rota:

### 1. Encontra um tutor

Endpoint Tutors: `GET /tutors` (Tutor)

### 2. Criar um tutor ou pet

Endpoint: `POST /tutor` (Tutor)
Endpoint: `POST /pet/:tutorId` (Pet)

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
### PARA PET
```json
{
  "id": "Numero id", (Number)
  "name": "Nome", (String)
  "species": "Espécie", (String)
  "carry": "Tamanho", (String)
  "weight": "Peso", (Number)
  "date_of_birth": "Nascimento" (Date)
}
```

### 3. Atualizar um tutor ou pet

Endpoint: `/tutor/:id` (Tutor)
Endpoint: `/pet/:petId/tutor/:tutorId` (Pet)

Para excluir um tutor ou pet, envie uma requisição DELETE para o endpoint correspondente.

### 4. Deletar um tutor ou pet

Endpoint: `/tutor/:id` (Tutor)
Endpoint: `/pet/:petId/tutor/:tutorId` (Pet)

Para obter a lista de todas as tarefas, faça uma requisição GET para o endpoint acima.

## Autor

Esta API foi desenvolvido por Afonso Gouveia <a href"https://github.com/gouvei4">Afonso</a>.
