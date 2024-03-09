export default function StatusMessage({ count }) {
  return (
    <p>
      You have read {count} {count < 2 ? "advice" : "advices"}.
    </p>
  );
}
