import QuestionForm from "@/components/QuestionForm";
export default function AskPage() {
  return (
    <div className="pt-36 px-4">
      <h1 className="text-3xl font-bold mb-6">Ask a Question</h1>
      <p>Form to submit a new question goes here.</p>
      <QuestionForm />
    </div>
  );
}
