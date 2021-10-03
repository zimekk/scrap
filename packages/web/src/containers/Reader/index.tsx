import React, { useCallback, useEffect, useRef, useState } from "react";
import { createWorker } from "tesseract.js";
import styles from "./styles.module.scss";

function Data({ version = "v1" }) {
  // const { results } = asset.read(version); // As many cache keys as you need
  const [text, setText] = useState("");

  const onChangeText = useCallback(({ target }) => setText(target.value), []);

  const [imageSrc, setImageSrc] = useState(
    require("../../assets/images/eng_bw.png").default
  );

  // https://github.com/jeromewu/tesseract.js-react-app/blob/master/src/App.js
  const worker = createWorker({
    logger: (m) => console.log(m),
  });

  const doOCR = async () => {
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    // const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
    const {
      data: { text },
    } = await worker.recognize(imageSrc);
    setText(text);
  };

  useEffect(() => {
    console.log({ imageSrc });
    doOCR();
  }, [imageSrc]);

  const fileRef = useRef();

  useEffect(() => {
    const readImage = (file) => {
      // Check if the file is an image.
      if (file.type && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.addEventListener(
          "load",
          (e) =>
            // console.log(['load'], e.target)
            setImageSrc(e.target.result)
          // setFrames((frames) => frames.concat(e.target.result))
        );
        reader.readAsDataURL(file);
      }
    };

    fileRef.current.addEventListener("change", (e) => {
      [...e.target.files].forEach(readImage);
      e.target.value = "";
    });
  }, [setImageSrc, fileRef]);

  return (
    <div className={styles.Container}>
      <button onClick={() => fileRef.current.click()}>Select File</button>{" "}
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
      />
      <img src={imageSrc} />
      <textarea
        rows={4}
        className={styles.Text}
        value={text}
        onChange={onChangeText}
      />
    </div>
  );
}

export default function Section() {
  return (
    <div className={styles.Section}>
      <h2>Reader</h2>
      <Data />
    </div>
  );
}
