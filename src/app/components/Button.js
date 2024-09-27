export default function Button({ text, link, primary = false }) {
    return (
      <a
        href={link}
        className={`px-6 py-3 rounded-lg font-bold ${
          primary ? 'bg-white text-primary' : 'bg-primary text-white'
        } hover:opacity-90 transition`}
      >
        {text}
      </a>
    );
  }
  