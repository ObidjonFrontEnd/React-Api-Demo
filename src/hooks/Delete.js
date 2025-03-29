import { useState } from 'react'
import apiClient from '../api/apiClient'

const useDeleteData = url => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const token = localStorage.getItem('token')

	const deleteData = async id => {
		setLoading(true)
		try {
			await apiClient.delete(`${url}/${id}`, {
				headers: {
					'x-auth-token': token,
				},
			})
			return true
		} catch (err) {
			setError(err.message || 'Something went wrong')
			return false
		} finally {
			setLoading(false)
		}
	}

	return { deleteData, loading, error }
}

export default useDeleteData
