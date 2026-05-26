import {
  createContext,
  useCallback,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

/* ── Context ── */
export type ShowToast = (message: string, success?: boolean) => void;
export const ToastContext = createContext<ShowToast>(() => {});

/* ── Provider ── */
interface ToastState {
  message: string;
  success: boolean;
  visible: boolean;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ToastState>({
    message: '',
    success: true,
    visible: false,
  });
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const showToast = useCallback<ShowToast>((message, success = true) => {
    clearTimeout(timerRef.current);
    setState({ message, success, visible: true });
    timerRef.current = setTimeout(() => {
      setState((s) => ({ ...s, visible: false }));
    }, 3200);
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <Toast state={state} />
    </ToastContext.Provider>
  );
}

/* ── Toast UI ── */
function Toast({ state }: { state: ToastState }) {
  return (
    <div
      className={`toast${state.visible ? ' show' : ''}`}
      role="status"
      aria-live="polite"
    >
      {state.success ? (
        <CheckCircle2 className="w-5 h-5 text-teal" aria-hidden="true" />
      ) : (
        <AlertCircle className="w-5 h-5" style={{ color: '#ff6b6b' }} aria-hidden="true" />
      )}
      <span>{state.message}</span>
    </div>
  );
}
