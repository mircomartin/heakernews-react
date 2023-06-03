import { useParams } from 'react-router-dom'
import { getItemInfo } from '../services/getItemInfo'
import useSWR from 'swr'
import { ListOfComments } from '../components/ListOfComments'

const Detail = () => {
  const { id = '' } = useParams<{ id: string }>()
  const { data, isLoading } = useSWR(`/story/${id}`, () => getItemInfo(Number(id)))

  return (
    <div className=''>
      {
        isLoading
          ? <div>Loading...</div>
          : <ListOfComments ids={data?.kids.slice(0, 10)} />
      }
    </div>
  )
}
export default Detail
