import { IBuilder } from "@/app/models/builder/builder"
import { COLOR, ICON_SIZE } from "@/utils/constant"
import { Dot, MapPin } from "lucide-react"
import Image from "next/image"
import React from "react"

const SearchResultItem = ({ builder }: { builder: IBuilder }) => {
  const {
    id,
    name,
    budget,
    description,
    location,
    profession,
    avatar,
    businessName,
  } = builder

  return (
    <div id={id} className="flex bg-[#F2F2F2] p-4 rounded-xl cursor-pointer">
      <div className="flex gap-3">
        <div className="min-w-8 w-8">
          <Image
            src={avatar ?? "/avatar.webp"}
            height={200}
            width={200}
            alt={`avatar-${businessName}-${id}`}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between font-bold text-md">
            <div>{businessName}</div>
            <div>{budget}</div>
          </div>
          <div className="text-sm flex items-center">
            {profession}
            <Dot size={ICON_SIZE.SMALL} />
            {name}
          </div>
          <div className="flex flex-wrap ">
            <div className="px-1 bg-white flex-row flex items-center rounded-md gap-1 text-sm">
              <MapPin size={ICON_SIZE.SMALL} color={COLOR.DARK_ORANGE} />
              {location}
            </div>
          </div>
          <div className="text-sm">{description}</div>
        </div>
      </div>
    </div>
  )
}

export default SearchResultItem
