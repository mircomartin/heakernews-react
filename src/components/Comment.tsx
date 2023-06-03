import useSWR from 'swr'
import { getItemInfo } from '../services/getItemInfo'
import { CommentLoader } from './CommentLoader'
import { ListOfComments } from './ListOfComments'

export const Comment = ({ id }: { id: number }) => {
  const { data, isLoading } = useSWR(`/comment/${id}`, () => getItemInfo(id))

  if (isLoading) {
    return <CommentLoader />
  }

  const { by, text, time, kids } = data

  return (
    <>
      <details open>
        <summary>
          <small>
            <span>{by}</span>
            <span>.</span>
            <span>4 hours ago</span>
          </small>
        </summary>

        <p>{text}</p>
      </details>
      {
        kids?.length > 0 && kids.map((kid: number) => <ListOfComments key={kid} ids={kids.slice(0, 10)} />)
      }
    </>
  )
}
