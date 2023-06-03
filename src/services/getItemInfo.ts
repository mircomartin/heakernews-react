export const getItemInfo = async (id: number) => {
  try {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    if (!response.ok) {
      throw new Error('Error fetching item info')
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Error fetching item info')
  }
}
