import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ContextBody } from './context/ContexApi.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ContextBody>
			<App />
		</ContextBody>
	</StrictMode>
)
