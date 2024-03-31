import { fetchFromGoogleBooks } from "../../data/3rd-party-fetchers/fetchFromGoogleBook"
import { fetchFromSupabase } from "../../data/3rd-party-fetchers/fetchFromSupabase"
import prisma from "../../data/prisma"
import { generateRandomNumberInRange } from "../page"

export const GET = async (req: Request) => {
  // const books = await fetchFromGoogleBooks()
  const books = await fetchFromGoogleBooks()
  const book = books[generateRandomNumberInRange(0, books.length - 1)]
  return Response.json(book)
}

interface CREATE_BOOK_BODY {
  title: string
  author: string
  review: string
  image: string
}


export const POST = async (req: Request) => {
  // extract body
  const body = await req.json() as CREATE_BOOK_BODY
  // create book
  const book = await prisma.book.create({
    data: body
  })
  return Response.json(book)
}

interface UPDATE_BOOK_BODY {
  id: number
  title?: string
  author?: string
  review?: string
  image?: string
}

export const PUT = async (req: Request) => {
  const { id, ...book }: UPDATE_BOOK_BODY = await req.json()
  const updatedBook = await prisma.book.update({
    where: { id },
    data: book
  })
  return Response.json(updatedBook)
}

interface DELETE_BOOK_BODY {
  id: number
}

export const DELETE = async (req: Request) => {
  const { id } = await req.json() as DELETE_BOOK_BODY
  const deletedBook = await prisma.book.delete({
    where: { id }
  })
  return Response.json(deletedBook)
}