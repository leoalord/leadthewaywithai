type RepoCardProps = {
  name: string;
  url: string;
  description: string;
  image?: string;
};

function GitHubMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

export default function RepoCard({ name, url, description, image }: RepoCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl border border-line bg-surface/60 p-7 transition-all hover:-translate-y-0.5 hover:border-slateblue-500/40 hover:shadow-lg hover:shadow-black/5"
    >
      {image && (
        <div className="mb-6 -mx-2 -mt-2 overflow-hidden rounded-lg border border-line/40">
          <img
            src={image}
            alt={`${name} preview`}
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex items-center justify-between">
        <span className="text-muted transition-colors group-hover:text-fg">
          <GitHubMark />
        </span>
        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className="h-4 w-4 text-muted transition-colors group-hover:text-sage-400"
        >
          <path
            d="M6 14 14 6m0 0H7m7 0v7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3 className="mt-5 font-mono text-base font-semibold text-fg">
        {name}
      </h3>
      <p className="mt-3 flex-1 font-sans text-base leading-relaxed text-fg/75">
        {description}
      </p>
      <span className="mt-6 text-xs font-medium uppercase tracking-wider text-sage-500">
        View on GitHub
      </span>
    </a>
  );
}
