interface PaginacaoProps {
  currentPage: number;
  totalPages: number;
  changePage: (page: number) => void;
}

export default function Paginacao({ currentPage, totalPages, changePage }: PaginacaoProps) {
  const generatePageNumbers = () => {
    const pages = [];
    const start = Math.max(2, currentPage - 3);
    const end = Math.min(totalPages - 1, currentPage + 3);

    pages.push(1);

    if (start > 2) {
      pages.push("...");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = generatePageNumbers();

  return (
    <div className="flex justify-center mt-8 gap-2">
      <button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
        className="cursor-pointer px-3 py-1 text-silver-40 bg-silver-20 rounded disabled:opacity-50"
      >
        Anterior
      </button>

      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' && changePage(page)}
          disabled={page === "..."}
          className={`cursor-pointer px-3 py-1 rounded ${
            currentPage === page
              ? "bg-primary text-white"
              : typeof page === 'number'
              ? "bg-silver-20 text-silver-40"
              : "cursor-default text-silver-30"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="cursor-pointer px-3 py-1 text-silver-40 bg-silver-20 rounded disabled:opacity-50"
      >
        Próximo
      </button>
    </div>
  );
}
