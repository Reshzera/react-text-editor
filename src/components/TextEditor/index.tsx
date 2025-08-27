import { makeBold, makeItalic, makeTitle } from "./editFunctions";
import styles from "./styles.module.scss";

const TextEditor: React.FC = () => {
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

        {/* Ex.: mudar nível de título */}
        <select
          className={styles.select}
          onChange={(e) => makeTitle(Number(e.target.value))}
          defaultValue="2"
          aria-label="Estilo de título"
        >
          <option value="0">Parágrafo</option>
          <option value="1">Título 1</option>
          <option value="2">Título 2</option>
          <option value="3">Título 3</option>
          <option value="4">Título 4</option>
          <option value="5">Título 5</option>
          <option value="6">Título 6</option>
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
        >
          dasdas
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
