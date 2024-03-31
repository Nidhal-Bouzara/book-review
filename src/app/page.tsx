import BookInfo from "../components/book-info/book-info";
import CreateBook from "../components/create-book/create-book";
import { fetchFromGoogleBooks } from "../data/3rd-party-fetchers/fetchFromGoogleBook";
import { fetchFromSupabase } from "../data/3rd-party-fetchers/fetchFromSupabase";
import { books } from "../data/books";
import Navigate from "./navigation";
import styles from './page.module.css';

// dynamic page
export const dynamic = 'force-dynamic'; // always run dynamically

export default async function Home() {
  const getRandomSubArray = (arr: any[], size: number) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, size);
  }
  // get random sub array from array
  const books = await fetchFromGoogleBooks()
  return (
    <main className={styles.main}>
      <CreateBook />
      {
        getRandomSubArray(books, 3).map((book) => (
          <BookInfo key={book.title} initialLoadBook={book} />)
      )}
      <div>
        <Navigate />
      </div>
    </main>
  );
}
