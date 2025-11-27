const nome = "André";
console.log('string ->', nome, typeof nome);

//number (inteiros/decimal)
const idade = 30;
const preco = 19.99;
console.log('number ->', idade, typeof idade);
console.log('number ->', preco, typeof preco);

//bigint (números inteiros grandes)
const grandes = 9823748239872345464353335344n;
console.log('bigint ->', grandes, typeof grandes);

// boolean
const ativo = true;
console.log('boolean ->', ativo, typeof ativo);

//undefined (declarada, sem valor)
let semValor;
console.log('undefined ->', semValor, typeof semValor);

//null (intencionalmente vazio) - note: typeof null é "object"
const vazio = null
console.log('null ->', vazio, typeof vazio);