import { useRef, useState } from 'react';

import './Map.css';

const mapWidth = 1200;
const mapHeight = 720;
const marginSize = 12;

const minScaleFactor = 1;
const maxScaleFactor = 2.5;

const fullWidth = mapWidth + marginSize * 2;
const fullHeight = mapHeight + marginSize * 2;

const Map = () => {
  const mapRef = useRef(null);

  const [mapActive, setMapActive] = useState(false);

  const [xShift, setXShift] = useState(0);
  const [yShift, setYShift] = useState(0);

  const [xTransformOrigin, setXTransformOrigin] = useState(0);
  const [yTransformOrigin, setYTransformOrigin] = useState(0);

  const [xAnchor, setXAnchor] = useState(0);
  const [yAnchor, setYAnchor] = useState(0);

  const [scaleFactor, setScaleFactor] = useState(1);

  const onMapLoad = () => {
    const rect = mapRef.current.firstChild.getBoundingClientRect();

    setXShift(Math.floor(rect.x));
    setYShift(Math.floor(rect.y));
  };

  const onMouseDown = e => {
    if (e.button !== 0) {
      return;
    }

    setMapActive(true);
  };

  const onMouseMove = e => {
    if (mapActive) {
      const minX = xTransformOrigin * (scaleFactor - 1);
      const minY = yTransformOrigin * (scaleFactor - 1);

      setXAnchor(Math.min(minX, Math.max(mapWidth * (minScaleFactor - scaleFactor) + minX, xAnchor + e.movementX)));
      setYAnchor(Math.min(minY, Math.max(mapHeight * (minScaleFactor - scaleFactor) + minY, yAnchor + e.movementY)));
    }
  };

  const onMouseUp = () => {
    setMapActive(false);
  };

  const onMouseWheel = e => {
    const newScaleFactor = Math.max(minScaleFactor, Math.min(maxScaleFactor, scaleFactor - e.deltaY / 2000));

    if (newScaleFactor < maxScaleFactor) {
      const newXTransformOrigin = scaleFactor < newScaleFactor ? e.clientX - xShift : xTransformOrigin;
      const newYTransformOrigin = scaleFactor < newScaleFactor ? e.clientY - yShift : yTransformOrigin;

      const minX = newXTransformOrigin * (newScaleFactor - 1);
      const minY = newYTransformOrigin * (newScaleFactor - 1);

      setXTransformOrigin(newXTransformOrigin);
      setYTransformOrigin(newYTransformOrigin);

      setXAnchor(Math.min(minX, Math.max(mapWidth * (minScaleFactor - newScaleFactor) + minX, xAnchor)));
      setYAnchor(Math.min(minY, Math.max(mapHeight * (minScaleFactor - newScaleFactor) + minY, yAnchor)));
    }

    setScaleFactor(newScaleFactor);
  };

  return (
    <div className='position-relative overflow-hidden pe-none user-select-none' style={{width: fullWidth, height: fullHeight}}>
      <div className='w-100 h-100' style={{backgroundImage: `url(/images/misc/MapBackground.png)`, border: '16px solid', borderImage: `url(/images/misc/MapBorder.png) 16 round`}}></div>
      <div ref={mapRef} className={`map-container${mapActive ? ' active' : ''} position-relative overflow-hidden pe-auto`} style={{width: mapWidth, height: mapHeight, margin: marginSize, bottom: '100%'}} onLoad={onMapLoad} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseMove={onMouseMove} onWheel={onMouseWheel}>
        <div className='pe-none' style={{width: mapWidth, height: mapHeight, transformOrigin: `${xTransformOrigin}px ${yTransformOrigin}px`, transform: `translate(${xAnchor}px, ${yAnchor}px) scale(${scaleFactor})`}}>
          <div className='w-100 h-100 position-relative'>
            <img src='/images/map/MapSpring.png' alt='map' style={{imageRendering: 'pixelated'}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
