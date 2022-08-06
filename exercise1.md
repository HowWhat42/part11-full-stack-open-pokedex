First of all, I prefer to develop in JS and TypeScript so my project needs a good linting system with ESLint and Prettier for code formatting. About the testing part I can simply use Jest and Storybook for components and for the end to end testing we can use Cypress.
To build TypeScript files, I use ts-node-dev during development and for production I build everything with TSC.

In terms of alternatives besides Jenkins and Github Actions, there are other tools like Travis that is free for open repositories and handle automated pull request verification but also Codeship that is a tool highly customizable for Docker instances and has an efficient infrastructure that monitor and scales following the requirements.
Otherwise, on the platform GitLab we can use the tool GitLab CI that offers manual deployment and effortless rollback capabilities and custom version tests to check branches individually.

And finally, for this setup it is better to use a cloud-base environment because the team working on the project is only made of 6 people and it is a quite simple project. As described in the material larger projects needs lots of resources and multiple teams are working on it, so it is important to have a self-hosted CI that can handle testing and deployment correctly.
So in this case it is really cheaper and simpler to use cloud-hosted CI.
