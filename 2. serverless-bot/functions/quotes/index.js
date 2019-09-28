module.exports = () => {
  const dembowQuotes = [
    "El chiva me sabe a te cuando yo toy loquísimo",
    "Llegaron lo que tienen to, ya tu chaveeee!",
    "Nadie goza como yo!!",
    "Pero si tú no me quiere me quiere la otra",
    "Pepe, pepe por ahí viene pepe"
  ];

  const quoteIndex = Math.floor(Math.random() * 6) + 1;

  return dembowQuotes[quoteIndex];
};
