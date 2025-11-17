import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/pantanal-vivo-logo.png";

function Contato() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-4 py-3">
      <div className="flex items-center justify-between max-w-6xl mx-auto">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" width="60" height="60" />
          <span className="font-semibold text-lg">Projeto Pantanal Vivo</span>
        </Link>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Menu Desktop + Mobile */}
        <div
          className={`flex-col md:flex-row md:flex items-center gap-6 md:gap-10
          absolute md:static left-0 right-0 bg-black md:bg-transparent px-6 md:px-0 py-4 md:py-0
          transition-all duration-300
          ${menuOpen ? "top-20" : "top-[-500px]"}`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-5 text-lg">

            <li>
              <Link to="/" className="text-yellow-400 hover:text-white">
                Home
              </Link>
            </li>

            <li>
              <Link to="/sobre" className="text-yellow-400 hover:text-white">
                Sobre
              </Link>
            </li>

            <li>
              <Link to="/contato" className="text-yellow-400 hover:text-white">
                Contato
              </Link>
            </li>

            {/* Dropdown */}
            <li className="relative">
              <button
                className="text-yellow-400 hover:text-white flex items-center gap-1"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Links ▾
              </button>

              {dropdownOpen && (
                <div className="absolute mt-2 bg-gray-900 text-white rounded-lg shadow-lg p-2 w-52 z-50">
                  <a
                    href="https://www.youtube.com/watch?v=SIpQchq50C4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 hover:bg-gray-700 rounded"
                  >
                    Vídeo: Onça predando jacaré
                  </a>

                  <a
                    href="https://sospantanal.org.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 hover:bg-gray-700 rounded"
                  >
                    SOS Pantanal
                  </a>

                  <a
                    href="https://servicos.ibama.gov.br/ctf/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 hover:bg-gray-700 rounded"
                  >
                    Ibama
                  </a>
                </div>
              )}
            </li>
          </ul>

          {/* Botão DOAR */}
          <a
            href="https://sospantanal.org.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 bg-yellow-400 text-black font-bold px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
          >
            DOAR
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Contato;