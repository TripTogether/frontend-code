// import React, { useEffect } from 'react'

// const Maps = () => {

//     useEffect(() => {
//         var container = document.getElementById('map');
//         var options = {
//             center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
//             level: 3
//         };
//         var map = new kakao.maps.Map(mapContainer, mapOption);
//     }, [])

/*global kakao*/
import React, { useEffect } from 'react'

const { kakao } = window

const Maps = ({ searchPlace }) => {
    useEffect(() => {
        var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 })
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        }
        const map = new kakao.maps.Map(container, options)

        const ps = new kakao.maps.services.Places()

        ps.keywordSearch(searchPlace, placesSearchCB)

        function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                let bounds = new kakao.maps.LatLngBounds()

                for (let i = 0; i < data.length; i++) {
                    displayMarker(data[i])
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
                }

                map.setBounds(bounds)
            }
        }

        function displayMarker(place) {
            let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x),
            })

            // 마커에 클릭이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'click', function () {
                // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>')
                infowindow.open(map, marker)
            })
        }
    }, [searchPlace])

    return (
        <div>
            <div id="map" style={{ width: "100%", height: "300.29px" }}></div>
        </div>
    )
}

export default Maps;