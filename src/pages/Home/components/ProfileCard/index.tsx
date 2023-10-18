import {
  ProfileImage,
  ProfileCardContainer,
  ProfileDetails,
  ProfileInfoList,
} from './styles'
import { ExternalLink } from '../../../../components/ExternalLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'

const username = import.meta.env.VITE_GITHUB_USERNAME

interface ProfileData {
  login: string
  bio: string
  avatar_url: string
  html_url: string
  name: string
  company?: string
  followers: number
}

export function ProfileCard() {
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)
  const [isLoading, setIsLoading] = useState(true)

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/users/${username}`)
      setProfileData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [profileData])

  useEffect(() => {
    getProfileData()
  }, [])

  return (
    <ProfileCardContainer className="container">
      <ProfileImage src={profileData.avatar_url} alt="" />
      <ExternalLink text="github" href={profileData.html_url} target="_blank" />
      <ProfileDetails>
        <h1>{profileData.name}</h1>

        <p>{profileData.bio}</p>
        <ProfileInfoList>
          <li>
            <FontAwesomeIcon icon={faGithub} /> {profileData.login}
          </li>
          {profileData?.company && (
            <li>
              <FontAwesomeIcon icon={faBuilding} /> {profileData.company}
            </li>
          )}
          <li>
            <FontAwesomeIcon icon={faUserGroup} /> {profileData.followers}{' '}
            seguidores
          </li>
        </ProfileInfoList>
      </ProfileDetails>
    </ProfileCardContainer>
  )
}
