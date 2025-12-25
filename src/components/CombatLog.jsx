import { useEffect, useRef } from "react";

export default function CombatLog({ logs }) {
  const logContainerRef = useRef(null);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="log" ref={logContainerRef}>
      {logs.map((l, i) => <div key={i}>{l}</div>)}
    </div>
  );
}