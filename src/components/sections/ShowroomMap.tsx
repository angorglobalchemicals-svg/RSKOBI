const ADDRESS = '6 Obi Ln, GRA, Onitsha 434106, Anambra, Nigeria';

export function ShowroomMap() {
  const query = encodeURIComponent(ADDRESS);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-grey-50 sm:aspect-auto sm:h-full">
      <iframe
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        title={`Map showing the RSKOBI INTERNATIONAL showroom at ${ADDRESS}`}
        className="h-full w-full grayscale"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
