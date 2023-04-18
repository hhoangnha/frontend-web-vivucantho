export default function Button({ title, maunen }) {
  return (
    <button style={{ padding: 10, background: maunen }} type="button">
      {title}
    </button>
  );
}
