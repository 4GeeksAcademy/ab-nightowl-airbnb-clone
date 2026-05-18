const SUGGESTED_DESTINATIONS = [
  "Paris", "Lyon", "Marseille", "Nice", "Bordeaux", "Toulouse"
]; // City names remain in French as they are proper nouns

type WhereFilterProps = {
  value: string;
  activeLocation: string;
  onChange: (v: string) => void;
  onSelectLocation: (v: string) => void;
};

export default function WhereFilter({ value, activeLocation, onChange, onSelectLocation }: WhereFilterProps) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold mb-2">Where</label>
      <input
        type="text"
        className="w-full border border-gray-200 rounded-lg px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder="Destination, city..."
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          onSelectLocation(e.target.value);
        }}
      />
      <div className="flex flex-wrap gap-2 mt-1">
        {SUGGESTED_DESTINATIONS.map((dest) => (
          <button
            key={dest}
            type="button"
            className={`px-3 py-1 rounded-full text-xs transition-colors ${
              activeLocation.toLowerCase() === dest.toLowerCase()
                ? "bg-primary text-white"
                : "bg-gray-100 hover:bg-primary hover:text-white"
            }`}
            onClick={() => {
              onChange(dest);
              onSelectLocation(dest);
            }}
          >
            {dest}
          </button>
        ))}
      </div>
    </div>
  );
}
