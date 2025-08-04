interface PaginaçãoProps{
  currentPage: number
  totalPages: number
  changePage: (page: number) => void
}

export default function Paginação(props: PaginaçãoProps) {
  const {changePage, currentPage, totalPages} = props
  return (
    <div className="flex justify-center mt-8 gap-2">
      <button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 text-silver-40 bg-silver-20 rounded disabled:opacity-50"
      >
        Anterior
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => changePage(index + 1)}
          className={`px-3 py-1 rounded ${
            currentPage === index + 1
              ? "bg-primary text-white"
              : "bg-silver-20 text-silver-40"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 text-silver-40 bg-silver-20 rounded disabled:opacity-50"
      >
        Próximo
      </button>
    </div>
  );
}
