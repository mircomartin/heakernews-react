import useSWR from 'swr'
import { getItemInfo } from '../services/getItemInfo'
import { Link } from 'react-router-dom'
import { StoryLoader } from './StoryLoader'
import { getRelativeTime } from '../utils/getRelativeTime'

export const Story = ({ id, index }: { id: number, index: number }) => {
  const { data, isLoading } = useSWR(`story/${id}`, () => getItemInfo(id))

  if (isLoading) {
    return <StoryLoader />
  }

  const { by, kids, score, title, url, time } = data

  let domain = ''
  try {
    domain = new URL(url).hostname.replace('www.', '')
  } catch (err) {
    console.log(err)
  }

  const relativeTime = getRelativeTime(time)

  return (
    <article>
      <header className='articleHeader'>
        <small>{index + 1} .</small>
        <a className='articleStoryTitle' href={url} target='_blank' rel='noopener noreferrer'>
          {title}
        </a>
        <a className='articleStoryLink' href={url} target='_blank' rel='noopener noreferrer'>
          ({domain})
        </a>
      </header>
      <footer className='articleFooter'>
        <span>{score} points</span>
        <Link className='smallLinks' to={`article/${id}`}>
          by {by}
        </Link>
        <Link className='smallLinks' to={`article/${id}`}>
          {relativeTime}
        </Link>
        <Link className='smallLinks' to={`article/${id}`}>
          {kids?.length ?? 0} comments
        </Link>
      </footer>
    </article>
  )
}
