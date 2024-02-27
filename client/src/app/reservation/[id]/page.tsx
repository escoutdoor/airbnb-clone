import Reservation from '@/components/pages/reservation/Reservation'
import { ApartmentService } from '@/services/apartment/apartment.service'

export default async function ReservationPage({
	params,
}: {
	params: { id: string }
}) {
	const { data: apartment } = await ApartmentService.getById(params.id)

	return <Reservation apartment={apartment} />
}
