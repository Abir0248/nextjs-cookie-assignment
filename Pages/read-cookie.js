export default function ReadCookiePage({ theme }) {
  return (
    <div className="p-4">
      <h1 className="text-xl">Your selected theme is: {theme}</h1>
    </div>
  );
}

ReadCookiePage.getInitialProps = async (ctx) => {
  const { req } = ctx;
  const { theme } = req.cookies;
  return { theme: theme || "Not set" };
};
