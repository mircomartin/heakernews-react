export const getTopStories = async (page: number, limit: number) => {
  try {
    const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    if (!response.ok) {
      throw new Error('Error fetching top stories')
    }
    const json = await response.json()
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const ids = json.slice(startIndex, endIndex)
    return ids
  } catch (error) {
    throw new Error('Error fetching top stories')
  }
}
