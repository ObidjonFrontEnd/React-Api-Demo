import { useState } from 'react'
import apiClient from '../api/apiClient'

const useDisLike = url => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const token = localStorage.getItem('token')

	const updisData = async id => {
		setLoading(true)
		try {
			const response = await apiClient.put(
				`${url}/${id}`,
				{},
				{
					headers: {
						'x-auth-token': token,
					},
				}
			)
			return response.data
		} catch (err) {
			setError(err.message || 'Something went wrong')
		} finally {
			setLoading(false)
		}
	}

	return { updisData, loading, error }
}

export default useDisLike
