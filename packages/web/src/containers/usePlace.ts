import { useMemo } from "react";
import pako from "pako";

// https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string
const encode = (text: string) =>
  window.btoa(String.fromCharCode.apply(null, pako.deflate(text)));

export default function usePlace(list) {
  const text = useMemo(() => list.join("\n"), [list]);

  return useMemo(
    () =>
      `https://zimekk.github.io/place/#${encode(
        unescape(encodeURIComponent(text))
      )}`,
    [text]
  );
}
