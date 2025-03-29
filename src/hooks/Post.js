import { useState } from 'react'
import apiClient from '../api/apiClient'

const usePostData = url => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const token = localStorage.getItem('token')

	const postData = async newData => {
		setLoading(true)
		try {
			const response = await apiClient.post(url, newData, {
				headers: {
					'x-auth-token': token,
				},
			})
			return response.data
		} catch (err) {
			setError(err.message || 'Something went wrong')
		} finally {
			setLoading(false)
		}
	}

	return { postData, loading, error }
}

export default usePostData
