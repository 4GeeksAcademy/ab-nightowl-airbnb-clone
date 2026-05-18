const GUEST_CATEGORIES = [
  { label: "Adults", sub: "13 years and up", key: "adults" },
  { label: "Children", sub: "2–12 years", key: "children" },
  { label: "Infants", sub: "Under 2", key: "infants" },
  { label: "Pets", sub: "", key: "pets" },
];

export default function WhoFilter({ value, onChange, showPets = true }: { value: Record<string, number>; onChange: (v: Record<string, number>) => void; showPets?: boolean }) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold mb-2">Who</label>
      <div className="space-y-3">
        {GUEST_CATEGORIES.filter(c => showPets || c.key !== "pets").map((cat) => (
          <div key={cat.key} className="flex items-center justify-between">
            <div>
              <div className="font-medium">{cat.label}</div>
              {cat.sub && <div className="text-xs text-gray-400">{cat.sub}</div>}
            </div>
            <div className="flex items-center gap-2">
              <button
                className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-lg disabled:opacity-30"
                onClick={() => onChange({ ...value, [cat.key]: Math.max(0, (value[cat.key] || 0) - 1) })}
                disabled={value[cat.key] === 0 || !value[cat.key]}
                type="button"
              >
                –
              </button>
              <span className="w-5 text-center">{value[cat.key] || 0}</span>
              <button
                className="w-7 h-7 rounded-full border border-primary bg-primary text-white flex items-center justify-center text-lg"
                onClick={() => onChange({ ...value, [cat.key]: (value[cat.key] || 0) + 1 })}
                type="button"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
