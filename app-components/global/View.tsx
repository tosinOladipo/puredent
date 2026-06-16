import { Eye } from 'lucide-react'
import React from 'react'

const View = ({views}: {views?: number}) => {
  return (
    <article className="flex gap-1 justify-items-center">
            <Eye />
            {views}
          </article>
  )
}

export default View
