import { useState } from 'react'
import apiClient from '../api/apiClient'

const useUpdateData = url => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const token = localStorage.getItem('token')

	const updateData = async (id, updatedData) => {
		setLoading(true)
		try {
			const response = await apiClient.put(
				`${url}/${id}`,
				{ updatedData },
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

	return { updateData, loading, error }
}

export default useUpdateData
