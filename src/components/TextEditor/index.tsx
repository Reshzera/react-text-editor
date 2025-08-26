import { makeBold, makeItalic, makeTitle } from "./editFunctions";
import styles from "./styles.module.scss";

const TextEditor: React.FC = () => {
  return (
    <div>
      <button onClick={() => makeBold()}>Bold</button>
      <button onClick={() => makeItalic()}>Italic</button>
      <button onClick={() => makeTitle(2)}>Title</button>
      <div contentEditable className={styles.textEditorContainer}>
        dasdas
      </div>
    </div>
  );
};

export default TextEditor;
