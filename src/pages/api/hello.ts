import type { NextApiRequest, NextApiResponse } from "next";

interface ResponseData {
  name: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ name: "Hello World" });
}
