import { useRotatingWord } from '@/hooks/useRotatingWord';

export function RotatingWord() {
  const { word, phase } = useRotatingWord();

  const cls = [
    'english-band-grad',
    phase === 'fading-out' ? 'fading-out' : '',
    phase === 'entering'   ? 'entering'   : '',
  ]
    .filter(Boolean)
    .join(' ');

  return <span id="rotatingWord" className={cls}>{word}</span>;
}
