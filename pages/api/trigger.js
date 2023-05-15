// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    if (req.method === "POST") {
        res.status(200).json({
            message: "Successfully called",
        });
        console.log(JSON.stringify(req.body));
    } else {
        res.status(500).json({ message: "Only GET requests allowed" });
    }
}