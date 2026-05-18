const RANGE_OPTIONS = ["Exact dates", "±1 day", "±2 days", "±3 days"];

export default function WhenFilter({
  value,
  onChange,
  withRange = true,
}: {
  value: { start?: string; end?: string; margin?: string };
  onChange: (v: { start?: string; end?: string; margin?: string }) => void;
  withRange?: boolean;
}) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold mb-2">When</label>
      <div className="flex gap-2">
        <input
          type="date"
          className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          value={value.start || ""}
          onChange={e => onChange({ ...value, start: e.target.value })}
        />
        <span className="self-center">→</span>
        <input
          type="date"
          className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          value={value.end || ""}
          onChange={e => onChange({ ...value, end: e.target.value })}
          disabled={!withRange}
        />
      </div>
      {withRange && (
        <div className="mt-3 space-y-3">
          <div className="flex flex-wrap gap-2">
            {RANGE_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                className={`px-3 py-1 rounded-full border text-xs ${value.margin === option ? "bg-primary text-white border-primary" : "bg-gray-50 text-gray-600 border-gray-200"}`}
                onClick={() => onChange({ ...value, margin: option })}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="text-xs text-gray-500 underline"
            onClick={() => onChange({})}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
