export default async function getAdviceFromAPI() {
  const response = await fetch("https://api.adviceslip.com/advice");
  return await response.json();
}
