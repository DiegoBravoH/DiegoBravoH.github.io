export default function CopilotIcon({ size = 18, className }) {
  return (
    <img
      src="/icons/copilot.png"
      alt="GitHub Copilot"
      width={size}
      height={size}
      className={className}
      style={{ display: 'block' }}
    />
  );
}
