// pages/signin.jsx
import { getProviders, signIn } from "next-auth/react";
export default function SignIn({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() =>
              signIn(provider.id, {
                callbackUrl: `${window.location.origin}/dashboard`,
              })
            }
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}
export async function getServerSideProps(context) {
  return { props: { providers: await getProviders() } };
}
