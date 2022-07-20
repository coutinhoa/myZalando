export const amountArticles = (articles) => {
  if (articles.length === 0) {
    return 0;
  }

  //console.log(articles);

  let result = parseFloat(articles[0].quantity);

  for (let i = 1; i < articles.length; i++) {
    result += parseFloat(articles[i].quantity);
  }
  return result;
};
