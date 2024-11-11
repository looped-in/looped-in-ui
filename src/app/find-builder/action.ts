"use server"

export const findBuilder = async (searchKey: string) => {
  const req = await fetch(
    "https://dummyjson.com/users/search?" +
      new URLSearchParams({ q: searchKey })
  )

  return req.json()
}
