import TopBannerHomepage from "@/components/TopBannerHomepage"
import React from "react"
import FindBuilder from "../FindBuilder"
import Processes from "../Processes"

const Homepage = () => {
  return (
    <div className="bg-white">
      <TopBannerHomepage />
      <FindBuilder />
      <Processes />
    </div>
  )
}

export default Homepage
