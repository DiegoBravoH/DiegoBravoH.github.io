import { useState, useEffect, useRef } from 'react';
import { useTerminal } from '../context/TerminalContext';
import styles from '../styles/FakeTerminal.module.css';

const TERMINAL_LINES = [
  'dbravo@portfolio:~$ python train.py --model transformer --epochs 100',
  '',
  'Initializing...',
  'Loading dataset: imagenet_subset.pkl  [████████████] 100%  2.3GB',
  'Building model architecture... done',
  'Trainable parameters: 124,441,346',
  '',
  'Epoch  1/100  | loss: 2.4831 | val_acc: 23.4% | 42s/epoch',
  'Epoch  5/100  | loss: 1.8203 | val_acc: 41.2% | 38s/epoch',
  'Epoch 10/100  | loss: 1.2041 | val_acc: 58.7% | 35s/epoch',
  'Epoch 25/100  | loss: 0.6832 | val_acc: 74.3% | 33s/epoch',
  '⚠  GPU memory at 96%. Living dangerously.',
  'Epoch 50/100  | loss: 0.3421 | val_acc: 88.9% | 31s/epoch',
  '✓  Checkpoint saved → model_epoch50.pt',
  'Epoch 75/100  | loss: 0.1893 | val_acc: 93.2% | 30s/epoch',
  'Epoch 97/100  | loss: 0.0921 | val_acc: 96.1% | 29s/epoch',
  '✓  New best model! Saving → model_best.pt',
  'Epoch 100/100 | loss: 0.0891 | val_acc: 95.8% | 29s/epoch',
  '',
  'Training complete in 3h 42m 17s',
  'Best checkpoint: epoch 97 | val_acc: 96.1%',
  '',
  'dbravo@portfolio:~$ █',
];

const FakeTerminal = () => {
  const { isOpen, toggleTerminal } = useTerminal();
  const [visibleLines, setVisibleLines] = useState([]);
  const intervalRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setVisibleLines([]);
      let index = 0;
      intervalRef.current = setInterval(() => {
        index += 1;
        setVisibleLines(TERMINAL_LINES.slice(0, index));
        if (index >= TERMINAL_LINES.length) {
          clearInterval(intervalRef.current);
        }
      }, 120);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isOpen]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [visibleLines]);

  return (
    <div className={`${styles.panel} ${isOpen ? styles.open : ''}`}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.tabActive}>TERMINAL</span>
          <span className={styles.shell}>bash</span>
        </div>
        <div className={styles.headerRight}>
          <button
            className={styles.closeBtn}
            onClick={toggleTerminal}
            aria-label="Close terminal"
          >
            ×
          </button>
        </div>
      </div>
      <div className={styles.body} ref={bodyRef}>
        {visibleLines.map((line, i) => (
          <div key={i} className={styles.line}>{line || ' '}</div>
        ))}
      </div>
    </div>
  );
};

export default FakeTerminal;
