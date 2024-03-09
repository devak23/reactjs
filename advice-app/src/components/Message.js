import "./message.css"

export default function Message({ count }) {
  return (
    <p className="message">
      You have read {count} {count < 2 ? "advice" : "advices"}.
    </p>
  );
}
