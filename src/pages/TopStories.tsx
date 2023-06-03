import useSWRInifinite from 'swr/infinite'
import { getTopStories } from '../services/getTopStories'
import { Story } from '../components/Story'

const TopStories = () => {
  /* const { data, error } = useSWR('stories', () => getTopStories(1, 10)) */

  const { data, error, size, setSize } = useSWRInifinite(
    (index) => `stories/${index + 1}`,
    (key) => {
      const [, page] = key.split('/')
      return getTopStories(Number(page), 5)
    }
  )

  const stories = data?.flat()
  return (
    <>
      <ul>
        {(Boolean(error)) && <li>Something went wrong</li>}
        {
          stories?.map((id: number, index: number) => (
            <li key={id}>
              <Story id={id} index={index} />
            </li>
          ))
        }
      </ul>
      <button onClick={() => setSize(size + 1)}>Load More</button>
    </>
  )
}
export default TopStories
