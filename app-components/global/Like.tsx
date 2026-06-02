import { Heart } from 'lucide-react'
import React from 'react'

const Like = ({likes}: {likes: number}) => {
  return (
    <article className="flex gap-1 justify-items-center">
            <Heart />
            {likes}
          </article>
  )
}

export default Like
