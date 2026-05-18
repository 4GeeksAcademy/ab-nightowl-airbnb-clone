const SERVICE_TYPES = [
  "Photography", "Massage", "Spa", "Gastronomy", "Local guide", "Transport"
];

export default function WhatServiceFilter({ value, onChange }: { value: string[]; onChange: (v: string[]) => void }) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold mb-2">Service type</label>
      <div className="flex flex-wrap gap-2">
        {SERVICE_TYPES.map((type) => (
          <button
            key={type}
            type="button"
            className={`px-3 py-1 rounded-full border text-xs ${value.includes(type) ? "bg-primary text-white border-primary" : "bg-gray-100 text-gray-700 border-gray-200"}`}
            onClick={() =>
              value.includes(type)
                ? onChange(value.filter((v) => v !== type))
                : onChange([...value, type])
            }
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}
