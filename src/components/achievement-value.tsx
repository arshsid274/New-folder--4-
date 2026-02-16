import { NumberTicker } from "@/registry/magicui/number-ticker";

type ParsedTicker = {
  prefix: string;
  numericValue: number;
  suffix: string;
  decimalPlaces: number;
};

type AchievementValueProps = {
  value: string;
  className?: string;
  tickerClassName?: string;
  duration?: number;
  delay?: number;
};

function parseTickerValue(value: string): ParsedTicker | null {
  const match = value.match(/-?\d[\d,]*(?:\.\d+)?/);
  if (!match || match.index === undefined) {
    return null;
  }

  const rawNumber = match[0];
  const numericValue = Number(rawNumber.replace(/,/g, ""));
  if (Number.isNaN(numericValue)) {
    return null;
  }

  const decimalMatch = rawNumber.split(".")[1];
  const decimalPlaces = decimalMatch ? decimalMatch.length : 0;
  const prefix = value.slice(0, match.index);
  const suffix = value.slice(match.index + rawNumber.length);

  return { prefix, numericValue, suffix, decimalPlaces };
}

export function AchievementValue({
  value,
  className,
  tickerClassName = "tabular-nums",
  duration,
  delay,
}: AchievementValueProps) {
  const parsed = parseTickerValue(value);

  if (!parsed) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span className={className}>
      {parsed.prefix}
      <NumberTicker
        value={parsed.numericValue}
        decimalPlaces={parsed.decimalPlaces}
        duration={duration}
        delay={delay}
        className={tickerClassName}
      />
      {parsed.suffix}
    </span>
  );
}

