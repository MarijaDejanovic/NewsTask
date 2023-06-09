import { generateId } from "./generateId";

export default async function getNews(categoryName) {
  const lastMonth = new Date();
  lastMonth.setMonth(lastMonth.getMonth() - 1);
  const year = lastMonth.getFullYear();
  const month = (lastMonth.getMonth() + 1).toString().padStart(2, "0");
  const day = lastMonth.getDate().toString().padStart(2, "0");
  const formatedDate = `${year}-${month}-${day}`;
  try {
    const url = `https://newsapi.org/v2/everything?q=${categoryName}&from=${formatedDate}&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`;

    const response = await fetch(url);
    if (response.ok) {
      const json = await response.json();
      const articles = json.articles.map((article) => ({
        ...article,
        categoryName: categoryName,
        id: generateId()
      }));
      console.log(articles);
      return articles;
    } else {
      throw new Error("Try again!");
    }
  } catch (err) {
    console.log(err);
  }
}
