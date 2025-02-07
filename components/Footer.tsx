const Footer = () => {
  return (
    <footer className="w-full bg-[#374151] text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">VortekLabs</h3>
            <p className="text-sm text-white">
              Transformando eventos em experiências inesquecíveis através de tecnologia e criatividade.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contato</h3>
            <p className="text-sm text-white">
              Email: contato@vorteklabs.com<br />
              Telefone: (11) 99999-9999
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-white hover:text-[#1C64F2]">
                Instagram
              </a>
              <a href="#" className="text-sm text-white hover:text-[#1C64F2]">
                Facebook
              </a>
              <a href="#" className="text-sm text-white hover:text-[#1C64F2]">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white">
        Copyright {new Date().getFullYear()} © André Pontes.
        <br />
        Made with love by Vortek
        </div>
      </div>
    </footer>
  );
};

export default Footer;