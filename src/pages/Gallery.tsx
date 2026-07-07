import { useState } from 'react';
import { useReveal, SectionLabel, SectionTitle, Divider, PlaceholderImage } from '../components/Shared';
import { Play, Images, Video, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Photo Gallery Data - organized by events
const photoAlbums = [
  {
    id: 'anvesak',
    title: 'ANVESAK Project',
    description: 'Unmanned Surface Vehicle development and field trials',
    date: '2024-2025',
    photos: [
      { id: 1, label: 'ANVESAK Launch Day', height: 'h-48' },
      { id: 2, label: 'SONAR Installation', height: 'h-64' },
      { id: 3, label: 'USV in Water Testing', height: 'h-52' },
      { id: 4, label: 'Team at River Trial', height: 'h-56' },
      { id: 5, label: 'LiDAR Point Cloud Data', height: 'h-44' },
      { id: 6, label: 'Control System Setup', height: 'h-48' },
      { id: 7, label: 'Field Data Collection', height: 'h-52' },
      { id: 8, label: 'Final Integration', height: 'h-56' },
    ],
  },
  {
    id: 'seds',
    title: 'SEDS Nepal Events',
    description: 'Space exploration and CanSat activities',
    date: '2023-2025',
    photos: [
      { id: 1, label: 'CanSat Assembly', height: 'h-40' },
      { id: 2, label: 'CanSat Launch Day', height: 'h-60' },
      { id: 3, label: 'Team Photo', height: 'h-44' },
      { id: 4, label: 'PCB Design Session', height: 'h-48' },
      { id: 5, label: 'Launch Preparation', height: 'h-52' },
    ],
  },
  {
    id: 'planetarium',
    title: 'Planetarium & Outreach',
    description: 'Science communication and educational events',
    date: '2023-2025',
    photos: [
      { id: 1, label: 'Planetarium Setup', height: 'h-48' },
      { id: 2, label: 'Student Session', height: 'h-56' },
      { id: 3, label: 'Stargazing Event', height: 'h-44' },
      { id: 4, label: 'Telescope Demo', height: 'h-52' },
      { id: 5, label: 'Workshop with Students', height: 'h-48' },
      { id: 6, label: 'Astronomy Club Meet', height: 'h-40' },
    ],
  },
  {
    id: 'mechtrix',
    title: 'MechTRIX Exhibition',
    description: 'Annual mechanical engineering exhibition',
    date: '2024',
    photos: [
      { id: 1, label: 'Exhibition Booth', height: 'h-48' },
      { id: 2, label: 'Project Demo', height: 'h-56' },
      { id: 3, label: 'Visitor Interaction', height: 'h-44' },
      { id: 4, label: 'Team at Exhibition', height: 'h-52' },
    ],
  },
  {
    id: 'nast',
    title: 'NAST Research',
    description: 'Biogas and biomass energy research internship',
    date: '2023-2024',
    photos: [
      { id: 1, label: 'Lab Analysis', height: 'h-48' },
      { id: 2, label: 'Field Survey', height: 'h-56' },
      { id: 3, label: 'Biogas Plant Visit', height: 'h-52' },
      { id: 4, label: 'Data Collection', height: 'h-44' },
      { id: 5, label: 'Team at NAST', height: 'h-48' },
    ],
  },
  {
    id: 'fieldwork',
    title: 'Field Work',
    description: 'Various project field trials and surveys',
    date: '2022-2025',
    photos: [
      { id: 1, label: 'River Survey Setup', height: 'h-48' },
      { id: 2, label: 'Equipment Testing', height: 'h-56' },
      { id: 3, label: 'Site Visit', height: 'h-44' },
      { id: 4, label: 'Data Collection', height: 'h-52' },
    ],
  },
];

// Video Gallery Data - YouTube projects
const videoGallery = [
  {
    id: 'h2o-lightcraft',
    title: 'H2O LightCraft — STEAM Educational Tool',
    description: 'Design and demonstration of the H2O LightCraft project submitted to the Ministry of Education, Science and Technology, Nepal. An interactive STEAM learning device covering refraction, Li-Fi, and electrolysis.',
    youtubeId: 'NaATDPdbL_0',
    project: 'H2O LightCraft',
    date: 'Jun 2024',
  },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<{ albumId: string; photoId: number } | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const ref = useReveal();

  const currentAlbum = photoAlbums.find(a => a.id === selectedAlbum);

  const openLightbox = (albumId: string, photoId: number) => {
    setLightbox({ albumId, photoId });
  };

  const closeLightbox = () => setLightbox(null);

  const navigateLightbox = (dir: number) => {
    if (!lightbox) return;
    const album = photoAlbums.find(a => a.id === lightbox.albumId);
    if (!album) return;
    const idx = album.photos.findIndex(p => p.id === lightbox.photoId);
    const next = (idx + dir + album.photos.length) % album.photos.length;
    setLightbox({ albumId: lightbox.albumId, photoId: album.photos[next].id });
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal">
          <SectionLabel>Gallery</SectionLabel>
          <SectionTitle>Photo & Video Gallery</SectionTitle>
          <Divider />
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => { setActiveTab('photos'); setSelectedAlbum(null); }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeTab === 'photos'
                ? 'bg-gradient-to-r from-[#ff6b5b] to-[#14b8a6] text-white'
                : 'glass-card text-[#64748b] hover:text-[#1a1a2e]'
            }`}
          >
            <Images className="w-4 h-4" />
            Photos
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeTab === 'videos'
                ? 'bg-gradient-to-r from-[#ff6b5b] to-[#14b8a6] text-white'
                : 'glass-card text-[#64748b] hover:text-[#1a1a2e]'
            }`}
          >
            <Video className="w-4 h-4" />
            Videos
          </button>
        </div>

        {/* Photo Gallery */}
        {activeTab === 'photos' && (
          <>
            {!selectedAlbum ? (
              /* Album Grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {photoAlbums.map((album) => (
                  <div
                    key={album.id}
                    onClick={() => setSelectedAlbum(album.id)}
                    className="glass-card overflow-hidden cursor-pointer card-lift group"
                  >
                    <div className="relative h-48">
                      <PlaceholderImage label={album.title} className="h-full rounded-none rounded-t-xl" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                        <div className="text-white">
                          <p className="text-xs opacity-80">{album.date}</p>
                          <p className="text-sm font-semibold">{album.photos.length} photos</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-semibold mb-1 group-hover:text-[#ff6b5b] transition-colors text-[#1a1a2e]">
                        {album.title}
                      </h3>
                      <p className="text-sm text-[#64748b]">{album.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Album View */
              <div>
                <button
                  onClick={() => setSelectedAlbum(null)}
                  className="flex items-center gap-2 text-sm text-[#64748b] hover:text-[#ff6b5b] transition-colors mb-6"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back to Albums
                </button>

                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-[#1a1a2e]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {currentAlbum?.title}
                  </h2>
                  <p className="text-sm text-[#64748b] mt-1">{currentAlbum?.description}</p>
                </div>

                <div className="masonry">
                  {currentAlbum?.photos.map((photo) => (
                    <div
                      key={photo.id}
                      className="masonry-item cursor-pointer"
                      onClick={() => openLightbox(currentAlbum.id, photo.id)}
                    >
                      <PlaceholderImage
                        label={photo.label}
                        className={`${photo.height} hover:border-[#ff6b5b] transition-all duration-300 hover:scale-[1.02]`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Video Gallery */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videoGallery.map((video) => (
              <div key={video.id} className="glass-card overflow-hidden">
                <div className="relative aspect-video bg-[#1a1a2e]/5">
                  {playingVideo === video.id ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div
                      className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                      onClick={() => setPlayingVideo(video.id)}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                        alt={video.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          // fallback to hqdefault if maxres not available
                          e.currentTarget.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 text-[#ff6b5b] ml-1" fill="#ff6b5b" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs gradient-text bg-gradient-to-r from-[#ff6b5b]/10 to-[#14b8a6]/10 px-2 py-0.5 rounded font-mono">
                      {video.project}
                    </span>
                    <span className="text-xs text-[#64748b]">{video.date}</span>
                  </div>
                  <h3 className="text-base font-semibold mb-1 text-[#1a1a2e]">{video.title}</h3>
                  <p className="text-sm text-[#64748b]">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Photo Lightbox */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
              className="absolute left-[-3rem] top-1/2 -translate-y-1/2 text-white/70 hover:text-[#ff6b5b] transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
              className="absolute right-[-3rem] top-1/2 -translate-y-1/2 text-white/70 hover:text-[#ff6b5b] transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            <PlaceholderImage
              label={currentAlbum?.photos.find(p => p.id === lightbox.photoId)?.label || ''}
              className="h-[60vh] rounded-xl"
            />
            <p className="text-center text-sm text-white/70 mt-4">
              {currentAlbum?.photos.find(p => p.id === lightbox.photoId)?.label}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
