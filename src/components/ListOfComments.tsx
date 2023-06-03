import { Comment } from './Comment'

export const ListOfComments = ({ ids }: { ids: number[] }) => {
  return (
    <ul>
      {
        ids?.map((id) => (
          <Comment key={id} id={id} />
        ))
      }
    </ul>
  )
}
