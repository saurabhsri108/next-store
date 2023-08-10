import { fireGtmEvent } from "@/utils/gtm-event"
import type { NextApiRequest, NextApiResponse } from "next"

const GTM_ID = process.env.GTM_ID!
console.log({ GTM_ID })

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  fireGtmEvent("LogoClicked", {
    logoText: "nextStore",
  })
  res.status(200).json({ message: "GTM signal sent successfully" })
}

export default handler
