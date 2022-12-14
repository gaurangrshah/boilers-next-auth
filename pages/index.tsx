import { signIn, signOut, useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const session = useSession()
  function handleSignIn(e: React.SyntheticEvent) {
    e.preventDefault()
    // signIn('google')
    signIn()
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        {session.status === "unauthenticated" ? (
          <div style={{display: 'flex', gap: 6}}>
            <button onClick={handleSignIn}>Sign In</button>
            <a className="button" href="/auth/signup">Sign Up</a>
          </div>
        ) : (
          <>
            {JSON.stringify(session)}
            <button onClick={(e: React.SyntheticEvent) => signOut()}>Sign Out</button>
          </>
        )}

      </main>
    </div>
  )
}
