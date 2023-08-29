export default function SetCookie() {
  // expires in 30 minutes
  const handleClickWithExpiry = () => {
    const date = new Date();
    date.setTime(date.getTime() + 30 * 60 * 1000); // 30 minutes
    document.cookie = `theme=dark; expires=${date.toUTCString()}; path=/;`;
  };

  // expires when the browser is closed
  const handleClickWithSession = () => {
    document.cookie = "theme=dark; path=/;";
  };

  return (
    <div className="p-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 mr-4"
        onClick={handleClickWithExpiry}
      >
        Set Dark Theme (30 mins)
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2"
        onClick={handleClickWithSession}
      >
        Set Dark Theme (Session)
      </button>
    </div>
  );
}
