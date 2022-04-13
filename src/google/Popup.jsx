import { createPortal } from "react-dom";

import useGoogleMapPopup from "./useGoogleMapPopup";

export default function Popup({ position, maps, map, events, children }) {
  const container = useGoogleMapPopup({
    position,
    maps,
    map,
    events
  });

  if (container) {
    return createPortal(children, container);
  }
  return null;
}
