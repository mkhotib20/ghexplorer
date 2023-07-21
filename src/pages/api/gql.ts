import type { NextApiHandler } from "next";

const BASE_GQL_URL = "https://api.github.com/graphql";

const handler: NextApiHandler = async (req, reply) => {
  const data = await fetch(BASE_GQL_URL, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
    method: "POST",
  }).then((rsp) => rsp.json());

  reply.send(data);
};

export default handler;
