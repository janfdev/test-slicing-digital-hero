import ImageNews from "../assets/images/image-news.png";
import { Eye } from "lucide-react";
import { useMemo } from "react";

type NewsItem = {
  id?: string;
  label: "Education" | "News & Update" | "Profile & Case Study" | string;
  image: string;
  title: string;
  description: string;
  view: string;
  read: string;
};

type Props = {
  /** Jika diisi → component otomatis filter berdasarkan label === title */
  title?: string;

  /** Mode untuk UNTITLED (Must Read) saja: "less" = 4 item tanpa pagination, "more" = 8 per halaman + pagination */
  viewModeForUntitled?: "less" | "more";

  /** State halaman (hanya dipakai saat UNTITLED + viewModeForUntitled==="more") */
  page?: number;
  onPageChange?: (p: number) => void;

  /** Optional override data dari luar (kalau mau). Kalau tidak, pakai internal dummy. */
  items?: NewsItem[];
};

const INTERNAL_DATA: NewsItem[] = [
  {
    label: "Education",
    image: ImageNews,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Repellendus provident voluptatum obcaecati nobis, non corporis!",
    view: "1.3k",
    read: "8 mins"
  },
  {
    label: "News & Update",
    image: ImageNews,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus provident voluptatum obcaecati nobis, non corporis!",
    view: "1.3k",
    read: "8 mins"
  },
  {
    label: "News & Update",
    image: ImageNews,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus provident voluptatum obcaecati nobis, non corporis!",
    view: "1.3k",
    read: "8 mins"
  },
  {
    label: "News & Update",
    image: ImageNews,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus provident voluptatum obcaecati nobis, non corporis!",
    view: "1.3k",
    read: "8 mins"
  },
  {
    label: "News & Update",
    image: ImageNews,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus provident voluptatum obcaecati nobis, non corporis!",
    view: "1.3k",
    read: "8 mins"
  },
  {
    label: "Education",
    image: ImageNews,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus provident voluptatum obcaecati nobis, non corporis!",
    view: "1.3k",
    read: "8 mins"
  },
  {
    label: "Education",
    image: ImageNews,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus provident voluptatum obcaecati nobis, non corporis!",
    view: "1.3k",
    read: "8 mins"
  },
  {
    label: "Education",
    image: ImageNews,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus provident voluptatum obcaecati nobis, non corporis!",
    view: "1.3k",
    read: "8 mins"
  },
  {
    label: "Profile & Case Study",
    image: ImageNews,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus provident voluptatum obcaecati nobis, non corporis!",
    view: "1.3k",
    read: "8 mins"
  },
  {
    label: "Profile & Case Study",
    image: ImageNews,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus provident voluptatum obcaecati nobis, non corporis!",
    view: "1.3k",
    read: "8 mins"
  },
  {
    label: "Profile & Case Study",
    image: ImageNews,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus provident voluptatum obcaecati nobis, non corporis!",
    view: "1.3k",
    read: "8 mins"
  },
  {
    label: "Profile & Case Study",
    image: ImageNews,
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus provident voluptatum obcaecati nobis, non corporis!",
    view: "1.3k",
    read: "8 mins"
  }
];

const PER_PAGE_LESS = 4;
const PER_PAGE_MORE = 8;

const NewsData = ({
  title,
  viewModeForUntitled = "less",
  page = 1,
  onPageChange,
  items
}: Props) => {
  const source = items ?? INTERNAL_DATA;

  // Jika ada title → otomatis filter sesuai label (blok kategori)
  const filtered = useMemo(() => {
    if (title) return source.filter((n) => n.label === title);
    return source; // UNTITLED → Must Read
  }, [source, title]);

  const isUntitled = !title;

  // Logic khusus UNTITLED (Must Read)
  const { visible, totalPages } = useMemo(() => {
    if (!isUntitled) {
      return { visible: filtered, totalPages: 1 };
    }
    if (viewModeForUntitled === "less") {
      return { visible: filtered.slice(0, PER_PAGE_LESS), totalPages: 1 };
    }
    // viewMode === "more" → pagination 8 per page
    const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE_MORE));
    const safePage = Math.min(Math.max(1, page), totalPages);
    const start = (safePage - 1) * PER_PAGE_MORE;
    const end = start + PER_PAGE_MORE;
    return { visible: filtered.slice(start, end), totalPages };
  }, [filtered, isUntitled, viewModeForUntitled, page]);

  const showPagination =
    isUntitled && viewModeForUntitled === "more" && totalPages > 1;

  return (
    <div className="py-5">
      {!!title && <h2 className="text-xl mb-5">{title}</h2>}

      {/* News grid */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4">
        {visible.map((data, i) => (
          <div
            key={data.id ?? `${data.title}-${i}`}
            className="flex flex-col gap-2"
          >
            <div className="relative">
              <img
                src={data.image}
                alt={`${data.title} thumbnail`}
                className="rounded-xl"
                loading="lazy"
              />

              <div className="absolute top-3 left-3">
                <div className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/60 to-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,.6)]">
                  <div className="flex items-center gap-3 rounded-2xl px-4 py-2 bg-white/10 backdrop-blur-xl ring-1 ring-white/20">
                    <span className="relative inline-flex h-3 w-3">
                      <span className="absolute inset-0 rounded-full bg-sky-400"></span>
                      <span className="absolute inset-[-6px] rounded-full bg-sky-400/40 blur-md"></span>
                      <span className="absolute inset-0 rounded-full ring-2 ring-white/60"></span>
                    </span>
                    <span className="text-white/90 text-sm font-medium tracking-wide">
                      {data.label}
                    </span>
                  </div>
                  <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-white/25 to-transparent"></span>
                </div>
              </div>
            </div>

            <h3 className="font-medium">{data.title}</h3>
            <p className="text-gray-500">{data.description}</p>

            <div className="flex items-center gap-2">
              <p className="flex text-sm items-center gap-2">
                <Eye className="size-4" />
                {data.view} seen
              </p>
              <span className="text-gray-400">•</span>
              <p className="text-sm text-blue-800">{data.read} read</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination untuk UNTITLED saat "more" */}
      {showPagination && (
        <div className="mt-6 flex items-center justify-center gap-2">
          <button
            onClick={() => onPageChange?.(Math.max(1, page - 1))}
            disabled={page <= 1}
            className="px-3 py-1 rounded border disabled:opacity-40"
          >
            Prev
          </button>
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1;
              const active = p === page;
              return (
                <button
                  key={p}
                  onClick={() => onPageChange?.(p)}
                  className={`px-3 py-1 rounded border ${
                    active
                      ? "bg-blue-600 text-white border-blue-600"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {p}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => onPageChange?.(Math.min(totalPages, page + 1))}
            disabled={page >= totalPages}
            className="px-3 py-1 rounded border disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsData;
