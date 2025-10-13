import { ref, watch } from 'vue'

const STORAGE_KEY = 'hospital-support-list'

function loadFromStorage() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY)
		if (!raw) return []
		const parsed = JSON.parse(raw)
		if (!Array.isArray(parsed)) return []
		return parsed
	} catch {
		return []
	}
}

export function useHospitals() {
	const hospitals = ref(loadFromStorage())

	watch(
		() => hospitals.value,
		(val) => {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
		},
		{ deep: true }
	)

	function addHospital(h) {
		hospitals.value = [h, ...hospitals.value]
	}

	return { hospitals, addHospital }
}

