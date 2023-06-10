import { buildFeedbackPath, extractFeedback } from "./feedback";

function handler(req, res) {
  if (req.method === "DELETE") {
    // delete the selected feedback
  }

  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);

  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );

  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;
