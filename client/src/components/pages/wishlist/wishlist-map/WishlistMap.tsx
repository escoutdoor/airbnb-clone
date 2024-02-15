import styles from './wishlist-map.module.scss'
import { FC, useCallback, useMemo, useRef } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'
import { IWishlistApartment } from '@/shared/interfaces/user.interface'
import { BsHouseDoor } from 'react-icons/bs'

type LatLngLiteral = google.maps.LatLngLiteral
type DirectionsResult = google.maps.DirectionsResult
type MapOptions = google.maps.MapOptions

type WishlistMapProps = {
	places: IWishlistApartment[]
}

const WishlistMap: FC<WishlistMapProps> = ({ places }) => {
	const mapRef = useRef<GoogleMap>()
	const center = useMemo<LatLngLiteral>(() => {
		return places.length
			? {
					lat: places[0]?.location.latitude,
					lng: places[0]?.location.longitude,
				}
			: {
					lat: 50.450001,
					lng: 30.523333,
				}
	}, [])
	const options = useMemo<MapOptions>(
		() => ({
			disableDefaultUI: true,
			clickableIcons: false,
		}),
		[],
	)

	const onLoad = useCallback((map: any) => (mapRef.current = map), [])

	return (
		<div className={styles.container}>
			<div className={styles.map}>
				<GoogleMap
					zoom={10}
					center={center}
					options={options}
					onLoad={onLoad}
					mapContainerClassName={styles.map__container}
				>
					{places?.map(place => (
						<Marker
							key={place.id}
							position={{
								lat: place.location.latitude,
								lng: place.location.longitude,
							}}
							// onClick={() => {
							//   fetchDirections(house);
							// }}
						/>
					))}
				</GoogleMap>
			</div>
		</div>
	)
}

export default WishlistMap
