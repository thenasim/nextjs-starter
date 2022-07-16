import { useState, useEffect, useRef } from "react";

const DEFAULT_EVENTS = [
  "keypress",
  "mousemove",
  "touchmove",
  "click",
  "scroll",
];
const DEFAULT_OPTIONS = {
  events: DEFAULT_EVENTS,
  initialState: false,
};

/**
 * If the user is in idle or not
 * @param timeout timeout for idle (in miliseconds)
 * @param options array of events (click, scroll etc) and initial state
 * @returns
 */

export function useIdle(
  timeout: number,
  options?: Partial<{ events: string[]; initialState: boolean }>
) {
  const { events, initialState } = { ...DEFAULT_OPTIONS, ...options };
  const [idle, setIdle] = useState<boolean>(initialState);
  const timer = useRef<number>();

  useEffect(() => {
    const handleEvents = () => {
      setIdle(false);

      // Clear timeout if timer exists
      if (timer.current) {
        window.clearTimeout(timer.current);
      }

      // Idle will be true after timeout
      timer.current = window.setTimeout(() => {
        setIdle(true);
      }, timeout);
    };

    // Add event listener
    events.forEach((event) => document.addEventListener(event, handleEvents));

    // Clean up
    return () => {
      // Remove all event listener
      events.forEach((event) =>
        document.removeEventListener(event, handleEvents)
      );
    };
  }, [events, timeout]);

  return idle;
}
