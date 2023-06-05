import fs from "fs";
import path from "path";

import { v4 as uuidv4 } from "uuid";

function handler(req, res) {
  if (req.method === "POST") {
    const { email, text } = req.body;

    const newFeedback = {
      id: uuidv4(),
      email,
      text,
    };

    // store in a file
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const data = fs.readFileSync(filePath, "utf8");
    const parsedData = JSON.parse(data);
    parsedData.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(parsedData));

    res.status(201).json({ message: "Success!", feedback: newFeedback });
  } else {
    res.status(200).json({
      message: "This works!",
    });
  }
}

export default handler;
