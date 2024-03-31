import { Book } from "../books";
import prisma from "../prisma";

export const fetchFromSupabase = async (): Promise<Book[]> => {
  const books = await prisma.book.findMany()
  return books
}