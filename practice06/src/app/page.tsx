import Image from 'next/image'
import HomeImage from '@/layout/assets/images/home.png'
import RocketIcon from '@/layout/assets/images/rocket.svg'
import Link from 'next/link'
import { GoogleLogin } from '@/layout/components/GoogleLogin'
import { authOptions } from './api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getServerSession(authOptions)
  const isAuthenticated = !!(session && session.user)

  if (isAuthenticated) {
    redirect('/feed')
  }

  return (
    <main className="grow flex justify-center bg-Gray-800 py-5 text-white">
      <Image
        src={HomeImage}
        width={598}
        height={912}
        alt="Logo BookWise com fundo colorido e mulher lendo enquanto relaxa"
      />
      <div className="flex items-center justify-center px-56 pb-14">
        <section className="flex flex-col w-96">
          <h2 className="text-2xl">
            <strong>Boas vindas!</strong>
          </h2>
          <span className="text-Gray-200">
            Faça seu Login ou acesse como visitante.
          </span>
          <div className="flex flex-col w-full mt-10 gap-y-4">
            <GoogleLogin />
            <Link href="/feed">
              <button className="w-full bg-Gray-600 rounded-lg flex items-center gap-x-5 text-Gray-200 py-5 px-6">
                <Image
                  src={RocketIcon}
                  width={32}
                  height={32}
                  alt="Ícone de foguete"
                />
                <strong>Acessar como visitante</strong>
              </button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
