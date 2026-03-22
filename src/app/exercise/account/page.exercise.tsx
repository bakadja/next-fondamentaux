import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <h1>Page Account</h1>
      <div className="absolute top-[2000px] w-full p-5 text-center">
        {/* 
        🐶 Regarde la documentation de `Link` pour trouver le `prop` qui gère le scroll 
        et applique le pour que le scroll ne soit pas pris en compte
        
        📑 Le lien vers la doc https://nextjs.org/docs/pages/api-reference/components/link
        */}
        <Link href="/exercise/account/details" scroll={false}>Page de detail du compte</Link>
      </div>
    </div>
  )
}
