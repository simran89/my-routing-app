import Link from 'next/link';

export default function Home(){
  return (
    <div>
      <h1>Welcome to Routing APP</h1>im
      <nav>
        <Link href ="/about">About</Link>|
        <Link href ="/contact">Contact us</Link>|
        <Link href ="/blog">Blogs</Link>|
        <Link href ="/weather">weather API</Link>|
        <Link href ="/form">Form</Link>|
        <Link href ="/fetchAPI">Get Weather</Link>|
        <Link href ="/postRequest">RadomImage</Link>|
        <Link href ="/fetchImage">FetchImage</Link>
      </nav>
    </div>
  );
}