import styles from './apartment-location.module.scss'
import { FC, useCallback, useMemo, useRef } from 'react'
import { IApartmentLocation } from '@/shared/interfaces/apartment.interface'
import ParagraphHeading from '@/components/ui/headings/paragraph-heading/ParagraphHeading'
import { GoogleMap, Marker } from '@react-google-maps/api'

type LatLngLiteral = google.maps.LatLngLiteral
type MapOptions = google.maps.MapOptions

const ApartmentLocation: FC<{ location: IApartmentLocation }> = ({
	location,
}) => {
	const mapRef = useRef<GoogleMap>()
	const center = useMemo<LatLngLiteral>(
		() => ({
			lat: location.latitude,
			lng: location.longitude,
		}),
		[],
	)
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
			<ParagraphHeading>Where you’ll be</ParagraphHeading>
			<div className={styles.map}>
				<GoogleMap
					zoom={10}
					center={center}
					options={options}
					onLoad={onLoad}
					mapContainerClassName={styles.map__container}
				>
					<Marker
						key={location.id}
						position={{
							lat: location.latitude,
							lng: location.longitude,
						}}
						icon={{
							url: '/icons/marker.svg',
							size: new google.maps.Size(100, 100),
						}}
					/>
				</GoogleMap>
			</div>
		</div>
	)
}

export default ApartmentLocation
