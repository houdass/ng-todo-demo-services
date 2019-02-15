# Projet Angular réalisé avec les services

https://github.com/ngrx/platform/tree/master/docs/schematics

npm install @ngrx/schematics --save-dev
npm install @ngrx/{store,effects,entity,store-devtools} --save

ng config cli.defaultCollection @ngrx/schematics

ng generate feature user/User -m quote/quote.module.ts --group
ng generate feature quote/shared/store/QuoteSearch -m quote/quote.module.ts --group
