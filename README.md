# TagChatter

O desafio foi totalmente completado seguindo à risca todas as instruções e requisitos (inclusive os opcionais) determinados na documentação original abaixo. Além disso, o layout da aplicação foi desenvolvido de acordo com as medidas declaradas no layout disponível no Figma.

- **Desenvolvido com ReactJS**

- **Airbnb Style Guide utilizado (para Javascript e React)**

- **Layout responsivo**

- **Rolagem automática para o final do chat quando novas mensagens chegam _(somente se a barra de rolagem já estiver perto do final do chat anteriormente)_**

- **Efeitos minimalistas adicionais implementados aos avatares e ao botão de enviar**

- **Notificação de erro caso qualquer requisição falhe**

![My Preview](myPreview.png)

## Utilizando

Para utilizar o TagChatter, primeiramente é necessário instalá-lo e para poder utilizá-lo:

**NPM**

```bash
npm install
npm start
```

**Yarn**

```bash
yarn install
yarn start
```

## Requisitos Cumpridos

#### Requisitos técnicos

- [x] Deve ser feito um request para `/me` onde serão obtidos os dados necessários para exibir a imagem do usuário e o seu ID, utilizado no envio de mensagem
- [x] A lista de mensagens deve ser atualizada a cada 3 segundos
- [x] Ao clicar no ícone ![papagaio](parrot.gif) deve-se: - Fazer um request para `PUT /messages/:messageId/parrot` - Destacar a mensagem na interface, seguindo o layout - Incrementar o contador
- [x] Ao clicar no botão enviar, ao lado do campo de texto, deve-se fazer um request para `POST /messages` e adicionar a nova mensagem na lista exibida
- [x] O request para enviar mensagens (`POST /messages`) falha _intencionalmente_ com uma probabilidade de 25%, retornando um erro 500. Idealmente a sua implementação deve tratar esses erros aleatórios, exibindo um `alert` (ou outro componente na interface) e permitindo que o usuário tente enviar a mensagem novamente mas você pode desabilitar os erros passando o parâmetro `stable`. Consulte [a documentação da API](https://tagchatter.herokuapp.com/docs/#/message/post_messages) para mais detalhes.

#### Bônus (opcional) :star2:

- [x] Fazer um request para `PUT /messages/:messageId/unparrot`
- [x] Remover o destaque da mensagem na interface
- [x] Decrementar o contador

#### Requisitos adicionais

- [x] Você pode continuar a implementação sem nenhum framework ou utilizar AngularJS, ReactJS ou VueJS
- [x] Você pode utilizar qualquer outra biblioteca adicional que achar necessário (jQuery, por exemplo)
- [x] _As requisições para a API devem ser feitas client-side_. **Não** queremos que você divida a sua aplicação em várias páginas.

# Documentação Original

Olá!

Estamos empolgados que você se interessou em fazer parte da equipe Tagview! Montamos um desafio baseado em alguns problemas semelhantes aos que resolvemos no nosso dia a dia para que possamos conhecer um pouco mais sobre você.

![Preview](preview.png)

## Implementação

TagChatter é uma aplicação web onde os usuários conseguem conversar entre si e destacar mensagens.

Em [src](src) você encontra um esqueleto da aplicação com alguns exemplos, leia o código com atenção e implemente a sua solução à partir dele.

Os dados devem ser obtidos através da [API](#api) e você deve usar o [layout](#layout) como base no desenvolvimento.

### API

Desenvolvemos uma API REST que deve ser usada para obter os dados dos usuários e mensagens.

Você pode acessar as informações detalhadas e testar os endpoints acessando [tagchatter.herokuapp.com/docs](https://tagchatter.herokuapp.com/docs/)

### Layout

Você pode visualizar detalhes do layout [clicando aqui](https://www.figma.com/file/Zhyvatv2GVFm4UcKQlRE4Szs/tagchatter?node-id=0%3A1). Ao criar uma conta no Figma você conseguirá visualizar as medidas e baixar os ícones necessários.

### Requisitos técnicos

1. Deve ser feito um request para `/me` onde serão obtidos os dados necessários para exibir a imagem do usuário e o seu ID, utilizado no envio de mensagem
2. A lista de mensagens deve ser atualizada a cada 3 segundos
3. Ao clicar no ícone ![papagaio](parrot.gif) deve-se:
   - Fazer um request para `PUT /messages/:messageId/parrot`
   - Destacar a mensagem na interface, seguindo o layout
   - Incrementar o contador
4. Ao clicar no botão enviar, ao lado do campo de texto, deve-se fazer um request para `POST /messages` e adicionar a nova mensagem na lista exibida
5. O request para enviar mensagens (`POST /messages`) falha _intencionalmente_ com uma probabilidade de 25%, retornando um erro 500. Idealmente a sua implementação deve tratar esses erros aleatórios, exibindo um `alert` (ou outro componente na interface) e permitindo que o usuário tente enviar a mensagem novamente mas você pode desabilitar os erros passando o parâmetro `stable`. Consulte [a documentação da API](https://tagchatter.herokuapp.com/docs/#/message/post_messages) para mais detalhes.

#### Bônus (opcional) :star2:

Adicionalmente você pode implementar o `unparrot` de mensagens, quando o usuário clicar no ícone ![papagaio](parrot.gif) de uma mensagem já destacada:

1. Fazer um request para `PUT /messages/:messageId/unparrot`
2. Remover o destaque da mensagem na interface
3. Decrementar o contador

### Requisitos adicionais

- Você pode continuar a implementação sem nenhum framework ou utilizar AngularJS, ReactJS ou VueJS
- Você pode utilizar qualquer outra biblioteca adicional que achar necessário (jQuery, por exemplo)
- _As requisições para a API devem ser feitas client-side_. **Não** queremos que você divida a sua aplicação em várias páginas.

## Submissão

Envie o URL de um repositório git público para `team@tagview.com.br`. Usamos bastante o [GitLab](https://gitlab.com) e o [GitHub](https://github.com).

## Boa sorte!

Nossa análise vai além do resultado final então se você tiver um problema implementando algum detalhe nos envie a sua solução mesmo assim.

### Critérios de avaliação

- Capacidade em assimilar um conteúdo novo
- Organização
- Atenção aos requisitos
- Empenho em entregar algo, mesmo que minimamente funcional
- Tratamento de erros

Caso tenha dúvidas, envie um e-mail para `team@tagview.com.br` :man_technologist:
