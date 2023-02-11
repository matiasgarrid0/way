import React from 'react'

const MapContact = () => {
  return (
    <div>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
           className="map-google"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=-34.54732856384533,%20-58.57467868565344&t=&z=17&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            width='900px'
            height='400px'
          ></iframe>
          <a href="https://fmovies-online.net"></a>
        </div>
      </div>
    </div>
  )
}

export default MapContact