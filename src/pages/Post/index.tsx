import { useCallback, useEffect, useState } from 'react'
import { PostInfo } from './components/PostInfo'
import { api } from '../../lib/axios'
import { InterfacePost } from '../Home'
import { useParams } from 'react-router-dom'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function Post() {
  const [isLoading, setIsLoading] = useState(true)
  const [postData, setPostData] = useState<InterfacePost>({} as InterfacePost)

  const { id } = useParams()

  const getPostInfo = useCallback(async () => {
    try {
      setIsLoading(true)
      const reponse = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`
      )
      setPostData(reponse.data)
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    getPostInfo()
  }, [getPostInfo])

  return (
    <>
      <PostInfo post={postData} isLoading={isLoading} />
    </>
  )
}
