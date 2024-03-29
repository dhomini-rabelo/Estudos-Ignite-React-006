import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { RatingStars } from '../RatingStars'
import { Avatar } from '../../(Users)/Avatar'
import { IRatingModel } from '@/code/db/books'
import Link from 'next/link'

export function SimpleRating({
  currentUser = false,
  rating = {
    created_at: '2023-07-04T00:01:33.807Z',
    description: 'Nec tempor nunc in egestas.',
    id: 'aecfc87c-ca03-47af-b524-4ea93dbdc889',
    rate: 4,
    user: {
      image:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
      id: '48e458c0-8b1e-4994-b85a-1e1cfcc9dd60',
      name: 'Jaxson Dias',
      email: 'js@js.js',
    },
  },
}: {
  currentUser?: boolean
  rating?: IRatingModel
}) {
  return (
    <section
      className={`p-6 max-w-[608px] rounded-lg ${currentUser ? 'bg-Gray-600' : 'bg-Gray-700'
        }`}
    >
      <header
        className="flex justify-between gap-x-4"
        style={{ marginBottom: '1.25rem' }}
      >
        <Link href={`/feed/profile?user=${rating.user.email}`} prefetch={false}>
          <Avatar src={rating.user.image} />
        </Link>
        <div className="grow">
          <strong className="leading-relaxed block text-Gray-100">
            {rating.user.name}
          </strong>
          <span className="text-Gray-400 leading-relaxed font-normal text-sm block">
            {formatDistanceToNow(new Date(rating.created_at), {
              locale: ptBR,
              addSuffix: true,
            })}
          </span>
        </div>
        <RatingStars rate={rating.rate} />
      </header>
      <p className="text-Gray-300 leading-6 font-normal text-justify block">
        {rating.description}
      </p>
    </section>
  )
}
