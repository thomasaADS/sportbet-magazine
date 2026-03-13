import { videoHighlights } from "@/lib/schedule-data";

export default function VideoSection() {
  return (
    <div>
      <div className="flex items-center gap-4 mb-5">
        <span className="section-flag">וידאו</span>
        <hr className="rule-thin flex-1" />
        <span className="text-xs font-bold text-red cursor-pointer hover:underline">כל הסרטונים ←</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videoHighlights.map((video) => (
          <div key={video.id} className="group cursor-pointer editorial-card">
            {/* Video thumbnail */}
            <div className="relative h-44 rounded-sm overflow-hidden mb-3">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${video.thumbnail})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-red/90 flex items-center justify-center group-hover:scale-110 group-hover:bg-red transition-all shadow-lg">
                  <svg className="w-6 h-6 text-white mr-[-2px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              {/* Duration badge */}
              <div className="absolute bottom-2 left-2 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm">
                {video.duration}
              </div>
              {/* Category */}
              <div className="absolute top-2 right-2">
                <span className="text-[10px] font-bold text-white/90 bg-black/40 px-2 py-0.5 rounded-sm">
                  {video.category}
                </span>
              </div>
            </div>
            <h3 className="headline-small group-hover:text-red transition-colors mb-1">
              {video.title}
            </h3>
            <span className="text-[10px] text-ink-muted">{video.views} צפיות</span>
          </div>
        ))}
      </div>
    </div>
  );
}
