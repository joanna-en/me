/// <reference types="@sanity-codegen/types" />

namespace Sanity.Default.Client {
  type Config = {};
}
namespace Sanity.Default.Schema {
  type Geopoint =
    | {
        alt?: number;
        lat?: number;
        lng?: number;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Product =
    | {
        _id: string;
        _type: "product";
        location?: string;
        name?: string;
        picture?: {
          asset: Sanity.Reference<{
            _type: "sanity.imageAsset";
            assetId: string;
            extension: string;
            metadata: {
              _type: "sanity.imageMetadata";
              dimensions: {
                _type: "sanity.imageDimensions";
                aspectRatio: number;
                height: number;
                width: number;
              };
              hasAlpha: boolean;
              isOpaque: boolean;
              lqip: string;
              palette: {
                _type: "sanity.imagePalette";
                darkMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                darkVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                dominant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                muted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                vibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
              };
            };
            mimeType: string;
            originalFilename: string;
            path: string;
            sha1hash: string;
            size: number;
            uploadId: string;
            url: string;
          }>;
          crop?: {
            _type: "sanity.imageCrop";
            bottom: number;
            left: number;
            right: number;
            top: number;
          };
          hotspot?: {
            _type: "sanity.imageHotspot";
            height: number;
            width: number;
            x: number;
            y: number;
          };
        };
        price?: number;
        size?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityAssetSourceData =
    | {
        id?: string;
        name?: string;
        url?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityFileAsset =
    | {
        _id: string;
        _type: "sanity.fileAsset";
        altText?: string;
        assetId?: string;
        description?: string;
        extension?: string;
        label?: string;
        mimeType?: string;
        originalFilename?: string;
        path?: string;
        sha1hash?: string;
        size?: number;
        source?: Sanity.Ref.Ref_r403BJbUtvwVTW0D;
        title?: string;
        url?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImageAsset =
    | {
        _id: string;
        _type: "sanity.imageAsset";
        altText?: string;
        assetId?: string;
        description?: string;
        extension?: string;
        label?: string;
        metadata?: Sanity.Ref.Ref_S7CPCeMSaq8nFM5y;
        mimeType?: string;
        originalFilename?: string;
        path?: string;
        sha1hash?: string;
        size?: number;
        source?: Sanity.Ref.Ref_r403BJbUtvwVTW0D;
        title?: string;
        uploadId?: string;
        url?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImageCrop =
    | {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImageDimensions =
    | {
        aspectRatio?: number;
        height?: number;
        width?: number;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImageHotspot =
    | {
        height?: number;
        width?: number;
        x?: number;
        y?: number;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImageMetadata =
    | {
        blurHash?: string;
        dimensions?: Sanity.Ref.Ref_701COC0TEXpPSavf;
        hasAlpha?: boolean;
        isOpaque?: boolean;
        location?: {
          _type: "geopoint";
          alt: number;
          lat: number;
          lng: number;
        };
        lqip?: string;
        palette?: Sanity.Ref.Ref_Ty5daq0p7fI69jZl;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImagePalette =
    | {
        darkMuted?: Sanity.Ref.Ref_5ACqS7ca90MxxYEB;
        darkVibrant?: Sanity.Ref.Ref_5ACqS7ca90MxxYEB;
        dominant?: Sanity.Ref.Ref_5ACqS7ca90MxxYEB;
        lightMuted?: Sanity.Ref.Ref_5ACqS7ca90MxxYEB;
        lightVibrant?: Sanity.Ref.Ref_5ACqS7ca90MxxYEB;
        muted?: Sanity.Ref.Ref_5ACqS7ca90MxxYEB;
        vibrant?: Sanity.Ref.Ref_5ACqS7ca90MxxYEB;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImagePaletteSwatch =
    | {
        background?: string;
        foreground?: string;
        population?: number;
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Slug =
    | {
        current?: string;
        source?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Wishlist =
    | {
        _id: string;
        _type: "wishlist";
        products?: Sanity.Reference<Sanity.Ref.Ref_jiRud7PjMwV5MPGw>[];
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_5ACqS7ca90MxxYEB = {
    background?: string;
    foreground?: string;
    population?: number;
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_701COC0TEXpPSavf = {
    aspectRatio?: number;
    height?: number;
    width?: number;
  };
}
namespace Sanity.Ref {
  type Ref_jiRud7PjMwV5MPGw =
    | {
        _id: string;
        _type: "product";
        location?: string;
        name?: string;
        picture?: {
          asset: Sanity.Reference<{
            _type: "sanity.imageAsset";
            assetId: string;
            extension: string;
            metadata: {
              _type: "sanity.imageMetadata";
              dimensions: {
                _type: "sanity.imageDimensions";
                aspectRatio: number;
                height: number;
                width: number;
              };
              hasAlpha: boolean;
              isOpaque: boolean;
              lqip: string;
              palette: {
                _type: "sanity.imagePalette";
                darkMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                darkVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                dominant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                muted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                vibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
              };
            };
            mimeType: string;
            originalFilename: string;
            path: string;
            sha1hash: string;
            size: number;
            uploadId: string;
            url: string;
          }>;
          crop?: {
            _type: "sanity.imageCrop";
            bottom: number;
            left: number;
            right: number;
            top: number;
          };
          hotspot?: {
            _type: "sanity.imageHotspot";
            height: number;
            width: number;
            x: number;
            y: number;
          };
        };
        price?: number;
        size?: string;
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_r403BJbUtvwVTW0D = {
    id?: string;
    name?: string;
    url?: string;
  };
}
namespace Sanity.Ref {
  type Ref_S7CPCeMSaq8nFM5y = {
    blurHash?: string;
    dimensions?: Sanity.Ref.Ref_701COC0TEXpPSavf;
    hasAlpha?: boolean;
    isOpaque?: boolean;
    location?: {
      _type: "geopoint";
      alt: number;
      lat: number;
      lng: number;
    };
    lqip?: string;
    palette?: Sanity.Ref.Ref_Ty5daq0p7fI69jZl;
  };
}
namespace Sanity.Ref {
  type Ref_Ty5daq0p7fI69jZl = {
    darkMuted?: Sanity.Ref.Ref_5ACqS7ca90MxxYEB;
    darkVibrant?: Sanity.Ref.Ref_5ACqS7ca90MxxYEB;
    dominant?: Sanity.Ref.Ref_5ACqS7ca90MxxYEB;
    lightMuted?: Sanity.Ref.Ref_5ACqS7ca90MxxYEB;
    lightVibrant?: Sanity.Ref.Ref_5ACqS7ca90MxxYEB;
    muted?: Sanity.Ref.Ref_5ACqS7ca90MxxYEB;
    vibrant?: Sanity.Ref.Ref_5ACqS7ca90MxxYEB;
  };
}
