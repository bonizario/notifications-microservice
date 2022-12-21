# Notifications Microservice

A simple API for managing notifications built with [NestJS](https://nestjs.com/).

## About

The main purpose of this project is to practice clean architecture principles,
such as DDD (Domain Driven Design) and SOLID.

The `application` layer contains all use cases, entities, and repositories contracts,
decoupled from external elements such as the user interface and database.

The `infrastructure` layer serves up the necessary implementations of controllers and repositories
using [Prisma](https://www.prisma.io/), a Typescript ORM.

## Folder structure

```
.
├── prisma
│   └── migrations
├── src
│   ├── application
│   │   ├── entities
│   │   ├── repositories
│   │   └── use-cases
│   │       └── errors
│   ├── helpers
│   └── infra
│       ├── database
│       │   └── prisma
│       │       ├── mappers
│       │       └── repositories
│       └── http
│           ├── controllers
│           ├── dtos
│           └── view-models
└── test
    ├── factories
    └── repositories
```

## Instalation

```bash
npm install
```

## Running the app

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Running tests

```bash
# unit tests
npm run test

# watch mode
npm run test:watch

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## License

This project is licensed under the MIT license. See [LICENSE](https://github.com/bonizario/notifications-service/blob/master/LICENSE) for more information.

## Get in touch! 👋🏻

I'd be happy to share some thoughts about Node.js and other dev-related stuff!

Linkedin: https://www.linkedin.com/in/gabriel-bonizario/

Made by **Gabriel Bonizário**
