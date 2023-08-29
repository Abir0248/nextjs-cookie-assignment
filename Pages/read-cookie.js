import cookie from "cookie";

export default function ReadCookiePage({ theme }) {
  return (
    <div className="p-4">
      <h1 className="text-xl">Your selected theme is: {theme}</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const parsedCookies = cookie.parse(req.headers.cookie || "");
  const theme = parsedCookies.theme || "Not set";
  return {
    props: {
      theme,
    },
  };
}
