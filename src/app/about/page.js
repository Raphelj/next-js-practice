export default async function AboutPage() {

  /*function getRandomNumber(number) {
    return Math.random()*number;
  }
  const rn=getRandomNumber(2);

  if (rn<1) {
    throw new Error("Failed to load About Page");
  }*/

  return (
    await new Promise((resolve) => setTimeout(resolve, 2000)),
    <div>
      <h1>About Us</h1>
      <p>Welcome to the About page of our application. Here you can find more information about our mission and values.</p>
    </div>
  );
}