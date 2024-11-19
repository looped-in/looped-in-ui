import React from "react"
import { cn } from "@/utils"
import { poppins } from "@/app/font"
import SearchResultItem from "./components/SearchResultItem"
import { IBuilder } from "@/app/models/builder/builder"
import { ArrowLeft } from "lucide-react"
import { ICON_SIZE, PAGE_ROUTE } from "@/utils/constant"
import Link from "next/link"

/* cSpell:disable */
const builders: IBuilder[] = [
  {
    id: "1",
    budget: "$1.5 - $5 Million",
    avatar: undefined,
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo porta eget convallis nibh volutpat. Fusce eget sit semper nisl adipiscing tristique mattis morbi lacus. Commodo erat sed in eu. Commodo erat sed in eu. Lorem ipsum dolor sit amet consectetur. Leo porta eget convallis nibh volutpat. ",
    location: "Baulkham Hills",
    name: "Samual Jones",
    businessName: "FC Buildings",
    profession: "Builder",
  },
  {
    id: "2",
    budget: "$1.5 - $5 Million",
    avatar: undefined,
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo porta eget convallis nibh volutpat. Fusce eget sit semper nisl adipiscing tristique mattis morbi lacus. Commodo erat sed in eu. Commodo erat sed in eu. Lorem ipsum dolor sit amet consectetur. Leo porta eget convallis nibh volutpat. ",
    location: "Baulkham Hills",
    name: "Samual Jones",
    businessName: "FC Buildings",
    profession: "Builder",
  },
  {
    id: "3",
    budget: "$1.5 - $5 Million",
    avatar: undefined,
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo porta eget convallis nibh volutpat. Fusce eget sit semper nisl adipiscing tristique mattis morbi lacus. Commodo erat sed in eu. Commodo erat sed in eu. Lorem ipsum dolor sit amet consectetur. Leo porta eget convallis nibh volutpat. ",
    location: "Baulkham Hills",
    name: "Samual Jones",
    businessName: "FC Buildings",
    profession: "Builder",
  },
  {
    id: "4",
    budget: "$1.5 - $5 Million",
    avatar: undefined,
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo porta eget convallis nibh volutpat. Fusce eget sit semper nisl adipiscing tristique mattis morbi lacus. Commodo erat sed in eu. Commodo erat sed in eu. Lorem ipsum dolor sit amet consectetur. Leo porta eget convallis nibh volutpat. ",
    location: "Baulkham Hills",
    name: "Samual Jones",
    businessName: "FC Buildings",
    profession: "Builder",
  },
  {
    id: "5",
    budget: "$1.5 - $5 Million",
    avatar: undefined,
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo porta eget convallis nibh volutpat. Fusce eget sit semper nisl adipiscing tristique mattis morbi lacus. Commodo erat sed in eu. Commodo erat sed in eu. Lorem ipsum dolor sit amet consectetur. Leo porta eget convallis nibh volutpat. ",
    location: "Baulkham Hills",
    name: "Samual Jones",
    businessName: "FC Buildings",
    profession: "Builder",
  },
  {
    id: "6",
    avatar: undefined,
    description:
      "Lorem ipsum dolor sit amet consectetur. Leo porta eget convallis nibh volutpat. Fusce eget sit semper nisl adipiscing tristique mattis morbi lacus. Commodo erat sed in eu. Commodo erat sed in eu. Lorem ipsum dolor sit amet consectetur. Leo porta eget convallis nibh volutpat. ",
    location: "Baulkham Hills",
    name: "Samual Jones",
    businessName: "FC Buildings",
    profession: "Builder",
  },
]

const ResultsFindBuilder = () => {
  return (
    <div className="p-20 min-h-[50vh]">
      <div className="flex flex-col gap-8">
        {/* Search */}
        <div className="flex gap-2 items-start">
          <Link href={PAGE_ROUTE.FIND_BUILDER}>
            <ArrowLeft size={32} />
          </Link>
          <div className="flex flex-col gap-1">
            <div className={cn(poppins.className, "font-semibold text-2xl")}>
              Builder results
            </div>

            <div>showing {builders.length} results:</div>
          </div>
        </div>

        {/* Results */}
        <div className="grid gap-4 grid-cols-2">
          {builders.map((builder: IBuilder, index) => {
            return <SearchResultItem builder={builder} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}

export default ResultsFindBuilder
