import { useEffect } from "react";
import { makeBold, makeItalic, makeTitle } from "./editFunctions";
import styles from "./styles.module.scss";

const TextEditor: React.FC = () => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key.toLowerCase() === "b") {
        e.preventDefault();
        makeBold();
      }

      if (e.ctrlKey && e.key.toLowerCase() === "i") {
        e.preventDefault();
        makeItalic();
      }
      if (e.ctrlKey && ["1", "2", "3"].includes(e.key)) {
        e.preventDefault();
        makeTitle(Number(e.key));
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <div className={styles.group}>
          <button className={styles.toolButton} onClick={() => makeBold()}>
            B
          </button>
          <button className={styles.toolButton} onClick={() => makeItalic()}>
            I
          </button>
        </div>

        <div className={styles.spacer} />

        <select
          className={styles.select}
          onChange={(e) => makeTitle(Number(e.target.value))}
          defaultValue="2"
          aria-label="Estilo de título"
        >
          <option value="1">Título 1</option>
          <option value="2">Título 2</option>
          <option value="3">Título 3</option>
        </select>
      </div>

      <div className={styles.workbench}>
        <div
          contentEditable
          className={styles.page}
          spellCheck
          role="textbox"
          aria-multiline="true"
          data-placeholder="Comece a digitar…"
        />
      </div>
    </div>
  );
};

export default TextEditor;
